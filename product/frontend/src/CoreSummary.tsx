import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DOMSerializer, type Node as MarkdownNode } from 'prosemirror-model';
import { getSummaryParser, summaryMathSchema, renderSummaryMath } from './summary-math';
import './vendor/anarlog/note-typography.css';
import './core-summary.css';
import { formatTime } from './Report';

export interface SummaryRange {
  section_index: number; range_id: string; start: number; end: number; source_url: string;
}
type Timings = { status: 'not_generated' | 'ready' | 'generating' | 'failed' | 'unavailable'; ranges: SummaryRange[]; message?: string; unmatched?: number[] };
function validateTimings(value: Timings): Timings {
  if (!value || !['not_generated','ready','generating','failed','unavailable'].includes(value.status) || !Array.isArray(value.ranges) || value.ranges.some(r =>
    !Number.isInteger(r.section_index) || r.section_index < 0 || !/^core-time-\d+-\d+-\d+$/.test(r.range_id) ||
    !Number.isFinite(r.start) || !Number.isFinite(r.end) || r.start < 0 || r.end <= r.start || typeof r.source_url !== 'string')) throw Error('原片时间格式不正确，纪要仍可阅读。');
  return value;
}

type SummaryState = {
  video_id: string; status: 'not_generated' | 'ready' | 'generating' | 'failed' | 'unavailable';
  message: string; cached: boolean; summary?: { markdown: string; language: 'zh-CN' };
  timings?: Timings;
};
async function request(videoId: string, generate = false): Promise<SummaryState> {
  const response = await fetch(`/api/videos/${encodeURIComponent(videoId)}/core-summary`, {
    method: generate ? 'POST' : 'GET', redirect: 'error',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(generate ? 600000 : 8000),
    ...(generate ? { body: '{}' } : {}),
  });
  const value = await response.json() as SummaryState;
  if (!response.ok) throw Error(value.message || '暂时无法连接本地服务。');
  if (value.video_id !== videoId || typeof value.message !== 'string' || typeof value.cached !== 'boolean' ||
      !['not_generated','ready','generating','failed','unavailable'].includes(value.status) ||
      (value.status === 'ready' && (value.summary?.language !== 'zh-CN' || !value.summary.markdown?.trim()))) {
    throw Error('核心纪要返回格式不正确。');
  }
  if (value.timings) {
    try { value.timings = validateTimings(value.timings); }
    catch { value.timings = { status: 'failed', ranges: [], message: '原片时间格式不正确，纪要仍可阅读。' }; }
  }
  return value;
}
const timingRequests = new Map<string, Promise<Timings>>();
function locateTimes(videoId: string): Promise<Timings> {
  const existing = timingRequests.get(videoId); if (existing) return existing;
  const task = fetch(`/api/videos/${encodeURIComponent(videoId)}/core-summary/timings`, {
    method: 'POST', redirect: 'error', headers: { 'Content-Type': 'application/json' }, body: '{}', signal: AbortSignal.timeout(600000),
  }).then(async response => { const value = await response.json(); if (!response.ok) throw Error(value.message || '原片时间暂未定位。'); return validateTimings(value); })
    .finally(() => timingRequests.delete(videoId));
  timingRequests.set(videoId, task); return task;
}

// Keep Anarlog's parser/schema and typography, with a read-only, text-only
// boundary: media/attachments and link marks never become active DOM elements.
const allowedNodes = new Set(['doc','paragraph','text','heading','blockquote','codeBlock','horizontalRule','hardBreak','bulletList','orderedList','listItem','table','tableRow','tableHeader','tableCell','mathInline','mathBlock']);
function textOnly(node: MarkdownNode): MarkdownNode | null {
  if (!allowedNodes.has(node.type.name)) return null;
  const marks = node.marks.filter(mark => mark.type.name !== 'link');
  if (node.isText) return node.type.schema.text(node.text!, marks);
  const children: MarkdownNode[] = [];
  node.forEach(child => { const safe = textOnly(child); if (safe) children.push(safe); });
  return node.type.create(node.attrs, node.type.name === 'doc' && !children.length ? [node.type.schema.nodes.paragraph.create()] : children, marks);
}

export function AnarlogNote({ markdown, ranges = [], onPlayRange, activeRangeId }: {
  markdown: string; ranges?: SummaryRange[]; onPlayRange?: (range: SummaryRange) => void; activeRangeId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [targets, setTargets] = useState<HTMLElement[]>([]);
  useEffect(() => {
    try {
      const doc = textOnly(getSummaryParser().parse(markdown))!;
      ref.current?.replaceChildren(DOMSerializer.fromSchema(summaryMathSchema).serializeFragment(doc.content));
      if (ref.current) renderSummaryMath(ref.current);
      const headings = Array.from(ref.current?.querySelectorAll('h1,h2,h3,h4,h5,h6') || []);
      setTargets(headings.map(heading => { const host = document.createElement('span'); host.className = 'cc-core-time-markers'; heading.appendChild(host); return host; }));
      setError('');
    } catch {
      ref.current?.replaceChildren(); setError('纪要暂时无法排版，请保留已保存的结果。');
    }
  }, [markdown]);
  return <>{error ? <p role="status">{error}</p> : null}<div ref={ref} className="note-typography cc-anarlog-note" />
    {targets.map((target, index) => createPortal(ranges.filter(range => range.section_index === index).map(range =>
      <button id={range.range_id} key={range.range_id} type="button" className="cc-reading-chapter-time cc-core-time"
        aria-label={`纪要原片时间 ${formatTime(range.start)}–${formatTime(range.end)}`} aria-pressed={activeRangeId === range.range_id}
        onClick={() => onPlayRange?.(range)}><span className="cc-reading-time-icon" aria-hidden="true">▶</span>{formatTime(range.start)}–{formatTime(range.end)}</button>), target, String(index)))}
  </>;
}

export function CoreSummary({ videoId, onPlayRange, activeRangeId }: { videoId: string; onPlayRange?: (range: SummaryRange) => void; activeRangeId?: string }) {
  const [state, setState] = useState<SummaryState | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [check, setCheck] = useState(0);
  const mounted = useRef(false);
  const pending = useRef(false);
  const timingStarted = useRef(false);
  const [timingBusy, setTimingBusy] = useState(false);
  useEffect(() => {
    mounted.current = true;
    let canceled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const receive = (value: SummaryState) => {
      if (canceled) return;
      setState(value); setError('');
      if (value.status === 'generating' || value.timings?.status === 'generating') timer = setTimeout(() => { void request(videoId).then(receive).catch(fail); }, 2000);
      if (value.status === 'ready' && value.timings?.status === 'not_generated' && !timingStarted.current) {
        timingStarted.current = true; setTimingBusy(true);
        void locateTimes(videoId).then(timings => {
          if (!canceled) { setState({ ...value, timings }); if (timings.status === 'generating') timer = setTimeout(() => { void request(videoId).then(receive).catch(fail); }, 2000); }
        }).catch(() => { if (!canceled) setState({ ...value, timings: { status: 'failed', ranges: [], message: '原片时间暂未定位，纪要仍可阅读；没有自动重试。' } }); })
          .finally(() => { if (!canceled) setTimingBusy(false); });
      }
    };
    const fail = (reason: unknown) => { if (!canceled) setError(reason instanceof Error ? reason.message : '无法读取核心纪要。'); };
    void request(videoId).then(receive).catch(fail);
    return () => { canceled = true; mounted.current = false; clearTimeout(timer); };
  }, [videoId, check]);
  const generate = async () => {
    if (pending.current || state?.status !== 'not_generated') return;
    pending.current = true; setBusy(true); setError('');
    try {
      const value = await request(videoId, true);
      if (mounted.current) { setState(value); if (['generating','ready'].includes(value.status)) setCheck(n => n + 1); }
    } catch (reason) {
      if (mounted.current) setError(reason instanceof Error ? reason.message : '生成未完成，未自动重试。');
    } finally {
      pending.current = false; if (mounted.current) setBusy(false);
    }
  };
  return <section className="cc-core-summary" aria-label="核心纪要">
    {error ? <div role="status"><p>{error}</p><button type="button" className="cc-text-button" onClick={() => setCheck(n => n + 1)}>查看已保存状态</button></div> : null}
    {!state && !error ? <p role="status">正在读取已保存的纪要…</p> : null}
    {busy || state?.status === 'generating' ? <p role="status">正在根据完整字幕整理核心纪要，结果会保存在本机…</p> : null}
    {state?.status === 'not_generated' && !busy && !error ? <div className="cc-core-summary-empty"><p>{state.message}</p><button type="button" className="cc-text-button" onClick={() => { void generate(); }}>生成本视频核心纪要</button></div> : null}
    {state && ['failed','unavailable'].includes(state.status) ? <p role="status">{state.message}</p> : null}
    {state?.status === 'ready' ? <>
      {timingBusy || state.timings?.status === 'generating' ? <p className="cc-report-note" role="status">正在定位原片时间，纪要可以继续阅读…</p> : null}
      {state.timings && ['failed','unavailable'].includes(state.timings.status) ? <p className="cc-report-note" role="status">{state.timings.message}</p> : null}
      <AnarlogNote markdown={state.summary!.markdown} ranges={state.timings?.status === 'ready' ? state.timings.ranges : []} onPlayRange={onPlayRange} activeRangeId={activeRangeId}/>
      <footer>依据完整字幕整理 · 简体中文 · 已保存在本机{state.timings?.unmatched?.length ? ' · 部分主题尚无可核对的原片时间' : ''}</footer></> : null}
  </section>;
}
