"""Attach verified adaptive search to the existing collection/ingestion manager.

Construction is explicit: importing this module never replaces the normal route.
"""
from __future__ import annotations

from pathlib import Path
import threading


class AdaptiveRuntime:
    def __init__(self, manager, *, factory):
        self.manager = manager
        self.factory = factory
        self._lock = threading.Lock()
        self._snapshot = None
        self._engine = None

    def __getattr__(self, name):
        # Retain one queue, configuration, worker and publisher for saved videos.
        return getattr(self.manager, name)

    def engine(self):
        with self._lock:
            snapshot = self.manager.snapshot
            if snapshot is not self._snapshot:
                engine = self.factory(snapshot)
                self._engine, self._snapshot = engine, snapshot
            return self._engine

    def library(self, stored):
        return {**self.manager.library(stored), 'answer_mode': 'inline'}

    def search(self, question, allowed):
        return self.engine().search(question, allowed)


def attach_adaptive(manager, runtime_root):
    from library.adaptive_pipeline import AdaptivePipeline, load_legacy_points
    from library.adaptive_preview import recording_generator
    root = Path(__file__).resolve().parents[1]
    runtime_root = Path(runtime_root)
    points, vectors = load_legacy_points(root=root)
    generate = recording_generator(runtime_root / 'model-outputs')
    runtime = AdaptiveRuntime(manager, factory=lambda snapshot: AdaptivePipeline(
        snapshot, runtime_root / 'traces', points=points, point_vectors=vectors,
        generator=generate))
    runtime.engine()  # Fail before advertising a ready library or starting workers.
    return runtime
