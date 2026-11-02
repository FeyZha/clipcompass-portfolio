import { useCallback, useEffect, useRef, useState } from 'react';
import type { Library, SearchResponse } from './types';

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const optionalString = (value: unknown) => value === undefined || typeof value === 'string';
const rows = (value: unknown, check: (row: Record<string, unknown>) => boolean = () => true) =>
  value === undefined || (Array.isArray(value) && value.every(row => record(row) && check(row)));
const coverage = (value: unknown) => rows(value, row => optionalString(row.title) && optionalString(row.status));
const clip = (value: unknown): boolean => record(value) && coverage(value.coverage) &&
  optionalString(value.conditions) && optionalString(value.quote) &&
  ['source_url', 'video_title', 'creator', 'reason'].every(key => optionalString(value[key])) &&
  (value.chapter === undefined || (record(value.chapter) && rows(value.chapter.points, point =>
    typeof point.title === 'string' && typeof point.start === 'number' && Number.isFinite(point.start)) &&
    optionalString(value.chapter.summary) && optionalString(value.chapter.title)));

export function validateSearchResponse(value: unknown): SearchResponse {
  if (!record(value) || !Array.isArray(value.results) || !value.results.every(clip) ||
      !optionalString(value.question) || !optionalString(value.warning) || !optionalString(value.status) ||
      (value.gaps !== undefined && (!Array.isArray(value.gaps) || !value.gaps.every(gap => typeof gap === 'string'))) ||
      !rows(value.evidence_assessment, row => Number.isInteger(row.requirement_index) &&
        typeof row.evidence_level === 'string' && typeof row.gap === 'string') ||
      !coverage(value.coverage) ||
      (value.plan !== undefined && (!record(value.plan) || !optionalString(value.plan.goal) || !optionalString(value.plan.task_type) ||
        (value.plan.assumptions !== undefined && (!Array.isArray(value.plan.assumptions) ||
          !value.plan.assumptions.every(item => typeof item === 'string'))))) ||
      (value.report !== undefined && (!record(value.report) || !Array.isArray(value.report.sections) ||
        !value.report.sections.every(section => record(section) && typeof section.title === 'string' &&
          typeof section.content === 'string' && Array.isArray(section.sources) && section.sources.every(clip)))) ||
      (value.learning_map !== undefined && (!record(value.learning_map) ||
        (value.learning_map.failed_directions !== undefined && (typeof value.learning_map.failed_directions !== 'number' ||
          !Number.isFinite(value.learning_map.failed_directions))) ||
        !Array.isArray(value.learning_map.groups) || !value.learning_map.groups.every(group => record(group) &&
          typeof group.title === 'string' && optionalString(group.question) && Array.isArray(group.clips) &&
          group.clips.every(clip) && rows(group.points, point => typeof point.question === 'string' && typeof point.reason === 'string'))))) {
    throw Error('服务返回的报告格式不正确。');
  }
  return value as unknown as SearchResponse;
}

class RequestError extends Error {
  constructor(message: string, readonly code?: string) { super(message); }
}
export async function requestJSON(path: string, body?: { question: string; collection_id: string }): Promise<unknown> {
  const response = await fetch(path, {
    method: body ? 'POST' : 'GET', redirect: 'error', headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(body ? 270000 : 8000), ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const value: unknown = await response.json();
  if (!response.ok) throw new RequestError(record(value) && typeof value.message === 'string' ? value.message : '请求失败，请重试。',
    record(value) && typeof value.error === 'string' ? value.error : undefined);
  return value;
}

export function useLibraryConnection() {
  const [library, setLibrary] = useState<Library | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const generation = useRef(0);
  const retry = useCallback(async () => {
    const token = ++generation.current;
    setLoading(true); setError('');
    try {
      const value = await requestJSON('/api/library');
      if (!record(value) || !Array.isArray(value.collections) || !Array.isArray(value.videos) ||
          !record(value.collections[0]) || typeof value.collections[0].collection_id !== 'string' ||
          !value.collections[0].collection_id || !optionalString(value.collections[0].title) ||
          !Array.isArray(value.collections[0].video_ids) || !value.collections[0].video_ids.every(id => typeof id === 'string') ||
          !rows(value.demo_questions, preset => typeof preset.label === 'string' && typeof preset.question === 'string')) {
        throw Error('无法读取收藏，请确认本地服务正在运行后重试。');
      }
      if (token === generation.current) setLibrary(value as unknown as Library);
    } catch (reason) {
      if (token === generation.current) setError(`收藏连接失败：${reason instanceof Error ? reason.message : '请重试。'}`);
    } finally { if (token === generation.current) setLoading(false); }
  }, []);
  useEffect(() => { void retry(); return () => { generation.current++; }; }, [retry]);
  return { library, error, loading, retry };
}

export function useSearchSession(library: Library | null, experimental = false) {
  const collectionId = library?.collections[0]?.collection_id;
  const storageKey = collectionId ? `${experimental ? 'clipcompass:adaptive-v1' : 'clipcompass:web'}:${collectionId}` : null;
  const [question, updateQuestion] = useState('');
  const [report, updateReport] = useState<SearchResponse | null>(null);
  const [busy, updateBusy] = useState(false);
  const [ready, updateReady] = useState(false);
  const [notice, updateNotice] = useState('');
  const [clarification, updateClarification] = useState('');
  const [storageWarning, updateStorageWarning] = useState('');
  const current = useRef({ question: '', report: null as SearchResponse | null });
  const key = useRef<string | null>(null);
  const hadSaved = useRef(false);
  const busyRef = useRef(false);
  const generation = useRef(0);
  const persist = useCallback((text: string, result: SearchResponse | null) => {
    if (!key.current) return;
    try {
      localStorage.setItem(key.current, JSON.stringify({ question: text, report: result }));
      hadSaved.current = true; updateStorageWarning('');
    } catch { updateStorageWarning('浏览器保存失败，当前报告仍可查看；关闭网页后可能无法恢复。'); }
  }, []);
  const setQuestion = useCallback((text: string) => {
    current.current.question = text; updateQuestion(text); persist(text, current.current.report);
  }, [persist]);
  const clear = useCallback(() => {
    generation.current++; hadSaved.current = false; busyRef.current = false;
    current.current = { question: '', report: null };
    updateQuestion(''); updateReport(null); updateBusy(false); updateClarification('');
    updateNotice('已清除本浏览器的问题与报告，收藏保留。'); updateStorageWarning('');
  }, []);
  useEffect(() => {
    generation.current++; busyRef.current = false; updateBusy(false); updateReady(false);
    key.current = storageKey;
    current.current = { question: '', report: null };
    updateQuestion(''); updateReport(null); updateNotice(''); updateClarification(''); updateStorageWarning('');
    hadSaved.current = false;
    if (!key.current) return;
    try {
      const saved = localStorage.getItem(key.current);
      hadSaved.current = saved !== null;
      const cached: unknown = JSON.parse(saved || 'null');
      if (record(cached) && typeof cached.question === 'string') {
        current.current.question = cached.question; updateQuestion(cached.question);
      }
      if (record(cached) && cached.report != null) {
        const restored = validateSearchResponse(cached.report);
        current.current.report = restored; updateReport(restored);
      }
    } catch { updateStorageWarning('上次报告未能恢复；可重新查找，收藏仍保留。'); }
    updateReady(true);
  }, [storageKey]);
  useEffect(() => {
    const changed = (event: StorageEvent) => {
      if (key.current && event.newValue === null && (event.key === null || event.key === key.current)) clear();
    };
    const restored = (event: PageTransitionEvent) => {
      if (!event.persisted || !key.current || !hadSaved.current) return;
      try { if (localStorage.getItem(key.current) === null) clear(); }
      catch { updateStorageWarning('浏览器保存失败，当前报告仍可查看；关闭网页后可能无法恢复。'); }
    };
    window.addEventListener('storage', changed); window.addEventListener('pageshow', restored);
    return () => { generation.current++; window.removeEventListener('storage', changed); window.removeEventListener('pageshow', restored); };
  }, [clear]);
  const submit = useCallback(async (questionOverride?: string) => {
    if (busyRef.current || !collectionId || key.current !== storageKey) return;
    const text = (questionOverride ?? current.current.question).trim();
    if (!text) return;
    if (questionOverride !== undefined) { current.current.question = questionOverride; updateQuestion(questionOverride); }
    busyRef.current = true; updateBusy(true); updateClarification('');
    updateNotice(current.current.report ? '正在查找新需求，下方仍是上一份报告。' : '');
    persist(current.current.question, current.current.report);
    const token = ++generation.current;
    try {
      const value = validateSearchResponse(await requestJSON(experimental ? '/api/adaptive/search' : '/api/search', { question: text, collection_id: collectionId }));
      if (token !== generation.current) return;
      const result = { ...value, question: value.question || text };
      current.current.report = result; updateReport(result); updateNotice(''); persist(current.current.question, result);
    } catch (reason) {
      if (token !== generation.current) return;
      const message = reason instanceof Error ? reason.message : '请求失败，请重试。';
      if (reason instanceof RequestError && reason.code === 'clarification_required') {
        updateClarification(message); updateNotice(current.current.report ? '请补充需求；下方保留上一份报告。' : '');
      } else updateNotice(`本次请求未能完成：${message} 这不代表收藏里没有答案，请重试。${current.current.report ? ' 下方保留上一份报告。' : ''}`);
    } finally { if (token === generation.current) { busyRef.current = false; updateBusy(false); } }
  }, [collectionId, storageKey, experimental, persist]);
  return { question, setQuestion, report, busy, ready, notice, storageWarning, clarification, submit };
}
