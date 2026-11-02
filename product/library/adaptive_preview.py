"""Opt-in trial routes; the normal chapter search and ingestion manager are retained."""
from __future__ import annotations

import json
import logging
from pathlib import Path
import threading
import webbrowser
import uuid

from library import server
from library.adaptive_json import decode_result
from llm.provider import LLMError


def recording_generator(folder):
    """Preserve raw trial outputs, including malformed JSON, without storing credentials."""
    folder = Path(folder)

    def save(name, value):
        try:
            server.atomic_write_json(folder / name, value)
        except OSError:
            # Optional diagnostics must not discard an otherwise valid search response.
            logging.getLogger(__name__).warning('Trial model-output record could not be saved.')

    def generate(system_prompt, user_prompt, *, schema, temperature=0.0, max_tokens=512):
        from llm.provider import _provider
        name = uuid.uuid4().hex
        system = system_prompt + '\nReturn one JSON object matching this schema exactly:\n' + json.dumps(
            schema, ensure_ascii=False, separators=(',', ':'))
        save(f'{name}-attempt.json', {
            'started_at': server.utc_now(), 'system_prompt': system, 'user_prompt': user_prompt,
            'temperature': temperature, 'max_tokens': max_tokens, 'automatic_retry': False,
        })
        try:
            raw = _provider().generate(system, user_prompt, json_output=True,
                                       temperature=temperature, max_tokens=max_tokens)
            save(f'{name}-raw.json', {
                'completed_at': server.utc_now(), 'model_text': raw.value, 'usage': raw.usage(),
            })
            decoded = decode_result(raw, schema)
            if decoded.parsing_diagnostics:
                save(f'{name}-parse.json', {'completed_at': server.utc_now(),
                     'diagnostics': decoded.parsing_diagnostics, 'additional_model_calls': 0})
            return decoded
        except Exception as exc:
            save(f'{name}-error.json', {
                'failed_at': server.utc_now(), 'type': type(exc).__name__, 'message': str(exc)[:500],
            })
            raise
    return generate


class PreviewHandler(server.RequestHandler):
    def do_GET(self):
        if self.path.split('?', 1)[0] != '/adaptive.html':
            return super().do_GET()
        try:
            self.check_host()
            self.serve_static('/index.html')
        except Exception as exc:
            self.handle_error(exc)

    def do_POST(self):
        if self.path.split('?', 1)[0] != '/api/adaptive/search':
            return super().do_POST()
        try:
            self.check_host()
            body = self.read_json()
            question = str(body.get('question') or '').strip()
            if not question:
                raise server.AppError('请描述你要解决的问题。', code='question_missing')
            library = self.server.pipeline.library(self.server.store.read())
            collection = next((c for c in library['collections']
                               if c['collection_id'] == body.get('collection_id')), None)
            if collection is None:
                raise server.AppError('收藏列表不存在。', code='collection_missing', status=404)
            try:
                response = self.server.experimental().search(question, set(collection['video_ids']))
            except LLMError as exc:
                raise server.AppError(f'本次讲解未能可靠核实：{exc}',
                                      code='llm_provider_error', status=502) from exc
            try:
                server.atomic_write_json(self.server.experimental_store.root / 'responses' / f"{response['request_id']}.json", response)
                self.server.experimental_store.event('query' if response['answerable'] else 'no_answer', {
                    'question': question[:500], 'collection_id': collection['collection_id'],
                    'result_count': len(response['results']), 'request_id': response['request_id'],
                })
            except OSError:
                response = {**response, 'warning': '使用记录未保存，搜索结果仍可查看。'}
            self.json_response(response)
        except Exception as exc:
            self.handle_error(exc)


class PreviewServer(server.AppServer):
    def __init__(self, address, store, static_root, pipeline, factory, experimental_root):
        super().__init__(address, store, static_root, pipeline)
        self.RequestHandlerClass = PreviewHandler
        self.experimental_factory = factory
        self.experimental_store = server.LibraryStore(Path(experimental_root))
        self.experimental_lock = threading.Lock()
        self.experimental_snapshot = None
        self.experimental_pipeline = None

    def experimental(self):
        # Ingestion publishes immutable snapshots. Reuse the same verified local assets.
        with self.experimental_lock:
            snapshot = self.pipeline.snapshot
            if snapshot is not self.experimental_snapshot:
                engine = self.experimental_factory(snapshot)
                self.experimental_pipeline = engine
                self.experimental_snapshot = snapshot
            return self.experimental_pipeline


def run_preview(data_root, pipeline, *, experimental_root, port=0, open_browser=True):
    from library.adaptive_pipeline import AdaptivePipeline, load_legacy_points
    root = Path(__file__).resolve().parents[1]
    experimental_root = Path(experimental_root)
    points, vectors = load_legacy_points(root=root)
    generator = recording_generator(experimental_root / 'model-outputs')
    factory = lambda snapshot: AdaptivePipeline(snapshot, experimental_root / 'traces',
                                                 points=points, point_vectors=vectors, generator=generator)
    app = PreviewServer(('127.0.0.1', port), server.LibraryStore(Path(data_root)),
                        server.STATIC_ROOT, pipeline, factory, experimental_root)
    # Validate the isolated engine before starting workers or advertising readiness.
    try:
        app.experimental()
        pipeline.start()
        url = f'http://127.0.0.1:{app.server_address[1]}'
        print(url, flush=True)
        print(url + '/adaptive.html', flush=True)
        if open_browser:
            threading.Timer(.4, lambda: webbrowser.open(url + '/adaptive.html')).start()
        app.serve_forever(poll_interval=.2)
    except KeyboardInterrupt:
        pass
    finally:
        app.server_close()
        pipeline.close()
    return 0
