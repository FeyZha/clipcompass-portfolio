import { useEffect, useRef, useState } from 'react';
import {workspaceHref} from './workspace/WorkspaceShell';
import { InlineVideo } from './InlineVideo';
import { ReadingVisual, hasReviewedVisual } from './ReadingVisual';
import { CoreSummary, type SummaryRange } from './CoreSummary';
import { formatTime } from './Report';
import { Card } from './ui-elements';
import { buildWatchPlan } from './watch-plan';
import type { Clip, Video } from './types';
import './inline-results.css';
import './video-reading.css';
import './workspace/reading-kimi.css';

export interface ReadingChapter {
  chapter_id: string;
  title: string;
  body: string;
  start: number;
  end: number;
  source_url: string;
}
export interface Reading {
  schema_version: 1;
  video_id: string;
  title: string;
  overview: string;
  chapters: ReadingChapter[];
  sections?: { title: string; chapter_ids: string[] }[];
  generated_at: string;
  source_fingerprint: string;
}
export interface ReadingState {
  status: 'not_generated' | 'generating' | 'ready' | 'failed' | 'unavailable';
  video_id: string;
  message: string;
  cached: boolean;
  reading?: Reading;
}

const object = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const nonempty = (value: unknown): value is string => typeof value === 'string' && Boolean(value.trim());

export function validateReadingState(value: unknown, videoId: string): ReadingState {
  if (!object(value) || value.video_id !== videoId || typeof value.message !== 'string' ||
      typeof value.cached !== 'boolean' || !['not_generated', 'generating', 'ready', 'failed', 'unavailable'].includes(String(value.status))) {
    throw Error('服务返回的导读格式不正确。');
  }
  if (value.status === 'ready') {
    const reading = value.reading;
    if (!object(reading) || reading.schema_version !== 1 || reading.video_id !== videoId ||
        !nonempty(reading.title) || !nonempty(reading.overview) || typeof reading.generated_at !== 'string' ||
        typeof reading.source_fingerprint !== 'string' || !Array.isArray(reading.chapters) || !reading.chapters.length ||
        !reading.chapters.every(chapter => object(chapter) && nonempty(chapter.chapter_id) && nonempty(chapter.title) &&
          nonempty(chapter.body) && typeof chapter.source_url === 'string' && typeof chapter.start === 'number' &&
          Number.isFinite(chapter.start) && chapter.start >= 0 && typeof chapter.end === 'number' &&
          Number.isFinite(chapter.end) && chapter.end > chapter.start)) {
      throw Error('服务返回的导读格式不正确。');
    }
    const chapters = reading.chapters as unknown as ReadingChapter[];
    if (new Set(chapters.map(chapter => chapter.chapter_id)).size !== chapters.length ||
        chapters.some((chapter, index) => index > 0 && chapter.start < chapters[index - 1].start)) {
      throw Error('服务返回的章节顺序不正确。');
    }
    if (reading.sections !== undefined) {
      if (!Array.isArray(reading.sections) || !reading.sections.length ||
          !reading.sections.every(section => object(section) && nonempty(section.title) &&
            Array.isArray(section.chapter_ids) && section.chapter_ids.length && section.chapter_ids.every(nonempty)) ||
          JSON.stringify(reading.sections.flatMap(section => (section as { chapter_ids: string[] }).chapter_ids)) !==
            JSON.stringify(chapters.map(chapter => chapter.chapter_id))) {
        throw Error('服务返回的章节层级不完整。');
      }
    }
  }
  return value as unknown as ReadingState;
}

async function requestReading(videoId: string, generate = false): Promise<ReadingState> {
  const response = await fetch(`/api/videos/${encodeURIComponent(videoId)}/reading`, {
    method: generate ? 'POST' : 'GET', redirect: 'error',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(generate ? 600000 : 8000),
    ...(generate ? { body: '{}' } : {}),
  });
  const value: unknown = await response.json();
  if (!response.ok) throw Error(object(value) && typeof value.message === 'string' ? value.message : '暂时无法连接本地服务。');
  return validateReadingState(value, videoId);
}

// Share an in-flight open across remounts. Only a verified not_generated state may initiate generation.
const openingRequests = new Map<string, Promise<ReadingState>>();
function openReading(videoId: string): Promise<ReadingState> {
  const existing = openingRequests.get(videoId);
  if (existing) return existing;
  const request = requestReading(videoId).then(state => state.status === 'not_generated' ? requestReading(videoId, true) : state)
    .finally(() => openingRequests.delete(videoId));
  openingRequests.set(videoId, request);
  return request;
}

function readingClip(reading: Reading, chapter: ReadingChapter): Clip {
  return {
    video_id: reading.video_id, video_title: reading.title, source_url: chapter.source_url,
    recommended_watch_start: chapter.start, recommended_watch_end: chapter.end,
    key_start: chapter.start, key_end: chapter.end,
  };
}

function ReadingText({ text }: { text: string }) {
  return <div className="cc-video-reading-body">{text.split(/\n\s*\n/).map((paragraph, index) => {
    // Emphasis only: retain the first complete sentence verbatim, without extracting a new claim.
    const lead = index === 0 ? /^([\s\S]*?[。！？])([\s\S]*)$/.exec(paragraph) : null;
    return <p key={index}>{lead ? <><strong className="cc-reading-idea">{lead[1]}</strong>{lead[2]}</> : paragraph}</p>;
  })}</div>;
}

export function VideoReading({ videoId, video, embedded = false }: { videoId: string; video?: Video; embedded?: boolean }) {
  const collectionFilter = new URLSearchParams(location.search).get('collectionFilter');
  const returnToCollection = workspaceHref('collection') + (collectionFilter === 'readable' || collectionFilter === 'questions' ? `&filter=${collectionFilter}` : '');
  const [state, setState] = useState<ReadingState | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [summaryRange, setSummaryRange] = useState<SummaryRange | null>(null);
  const [statusCheck, setStatusCheck] = useState(0);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());
  const headingRefs = useRef(new Map<string, HTMLButtonElement>());
  const [tab, setTab] = useState<'outline' | 'summary'>('outline');
  const [summaryOpened, setSummaryOpened] = useState(false);
  const located = useRef('');
  useEffect(() => {
    let canceled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    setState(null); setError(''); setLoading(true); setActiveChapter(null); setCollapsed(new Set()); setExpandedChapters(new Set());
    setSummaryRange(null);
    if (!statusCheck) { setTab('outline'); setSummaryOpened(false); }
    const receive = (value: ReadingState) => {
      if (canceled) return;
      setState(value); setLoading(false);
      if (value.status === 'generating') timer = setTimeout(() => {
        void requestReading(videoId).then(receive).catch(fail);
      }, 2000);
    };
    const fail = (reason: unknown) => {
      if (canceled) return;
      setLoading(false); setError(reason instanceof Error ? reason.message : '暂时无法读取导读。');
    };
    if (!videoId.trim()) fail(Error('尚未指定视频，请返回收藏选择一条视频。'));
    else void (statusCheck ? requestReading(videoId) : openReading(videoId)).then(receive).catch(fail);
    return () => { canceled = true; clearTimeout(timer); };
  }, [videoId, statusCheck]);
  const reading = state?.status === 'ready' ? state.reading : undefined;
  useEffect(() => {
    if(!reading||located.current===videoId)return;
    const value=new URLSearchParams(location.search).get('at');
    if(value===null)return;
    const at=Number(value);if(!Number.isFinite(at)||at<0)return;
    const index=reading.chapters.findIndex(chapter=>at>=chapter.start&&at<chapter.end);
    if(index<0)return;
    located.current=videoId;
    const chapter=reading.chapters[index];
    setExpandedChapters(current=>new Set(current).add(chapter.chapter_id));
    const frame=requestAnimationFrame(()=>{
      const target=document.getElementById(`reading-chapter-${index+1}`);
      const scroller=target?.closest<HTMLElement>('.cc-reading-scroll');
      if(target&&scroller){scroller.scrollTop+=target.getBoundingClientRect().top-scroller.getBoundingClientRect().top-20;target.focus({preventScroll:true});}
    });
    return()=>cancelAnimationFrame(frame);
  },[reading,videoId]);
  // Keep the saved hierarchy and every subsection. Legacy flat caches remain readable.
  const chapterIndexes = new Map(reading?.chapters.map((chapter, index) => [chapter.chapter_id, index]));
  const sections = reading ? (reading.sections || [{ title: '视频内容', chapter_ids: reading.chapters.map(c => c.chapter_id) }])
    .map(section => ({ ...section, key: `section:${section.chapter_ids[0]}`, indexes: section.chapter_ids.map(id => chapterIndexes.get(id)!) })) : [];
  const chapterItems = reading?.chapters.map(chapter => buildWatchPlan({ question: '', results: [readingClip(reading, chapter)] }).items[0]) || [];
  const activeItem = summaryRange ? buildWatchPlan({ question: '', results: [{ video_id: videoId,
    video_title: reading?.title || video?.title || '原视频', source_url: summaryRange.source_url,
    recommended_watch_start: summaryRange.start, recommended_watch_end: summaryRange.end,
    key_start: summaryRange.start, key_end: summaryRange.end }] }).items[0] : chapterItems[reading?.chapters.findIndex(chapter => chapter.chapter_id === activeChapter) ?? -1];
  const play = (key: string, sectionKey: string) => {
    setActiveChapter(key);
    setSummaryRange(null);
    setCollapsed(current => { const next = new Set(current); next.delete(sectionKey); return next; });
  };
  const reviewedVisual = reading ? hasReviewedVisual(reading) : false;
  return <main id="mainContent" className="assistant-page cc-video-reading cc-kimi-reading">
    <div className="cc-video-reading-inner">
      <div className="cc-reading-workspace">
        <aside className="cc-reading-source" aria-label="原片与视频信息">
          {!embedded ? <nav className="cc-reading-back" aria-label="阅读导航"><a href={returnToCollection}>← 我的收藏</a><a href={workspaceHref('ask')}>前往提问</a></nav> : <div className="cc-reading-source-header">原片与视频信息</div>}
          <div className="cc-reading-source-scroll">
          <header className="cc-video-reading-heading">
            <h1 id="reading-video-title">{reading?.title || video?.title || '视频导读'}</h1>
            {video?.creator ? <p className="cc-reading-author">{video.creator}</p> : null}
          </header>
          <div id="reading-player" className="cc-reading-player" aria-label="原片播放器">
            {activeItem ? <InlineVideo key={`${summaryRange?.range_id || activeChapter}:${activeItem.playbackStart}`} item={activeItem} active onOpen={() => {}} onClose={() => {
              const previousRange = summaryRange; setSummaryRange(null);
              const previous = activeChapter; setActiveChapter(null);
              if (previousRange) {
                document.getElementById(tab === 'summary' ? previousRange.range_id : 'reading-tab-summary')?.focus({ preventScroll: true });
              } else if (previous) {
                const heading = headingRefs.current.get(previous);
                const target = heading?.closest('[hidden]') ? heading.closest('.cc-reading-section')?.querySelector<HTMLButtonElement>('.cc-reading-section-toggle') : heading;
                target?.focus({ preventScroll: true });
              }
            }} /> : <div className="cc-reading-player-empty"><svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="4" y="9" width="40" height="30" rx="7" stroke="currentColor" strokeWidth="1.5"/><path d="m20 17 12 7-12 7V17Z" fill="currentColor"/></svg><p>点击时间标记，观看对应原片</p></div>}
          </div>
          {reading ? <p className="cc-reading-source-note">{sections.length} 个大章节 · {reading.chapters.length} 个小节<span>依据本视频字幕整理</span></p> : null}
          {reading ? <section className="cc-reading-abstract" aria-labelledby="reading-abstract-title">
            <header><h2 id="reading-abstract-title">整体概要</h2></header>
            {reviewedVisual ? <details className="cc-overview-diagram"><summary>展开概念图解</summary>
              <ReadingVisual key={`${reading.video_id}:${reading.source_fingerprint}`} reading={reading} onPlayChapter={id => {
                const section = sections.find(group => group.chapter_ids.includes(id));
                if (section) play(id, section.key);
              }} />
            </details> : null}
            <details className="cc-original-overview"><summary>查看文字概要</summary><ReadingText text={reading.overview}/></details>
          </section> : null}
          </div>
        </aside>
        <article className="cc-reading-paper" aria-labelledby="reading-video-title">
          {/* Kimi's file-panel header, using the existing accessible reading tabs. */}
          <header className="cc-reading-toolbar">
          <span className="cc-reading-document-label"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 3v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>视频导读</span>
          <div className="cc-reading-tabs" role="tablist" aria-label="视频阅读方式" onKeyDown={event => {
            if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 'outline' : event.key === 'End' ? 'summary' : tab === 'outline' ? 'summary' : 'outline';
            setTab(next); if (next === 'summary') setSummaryOpened(true);
            event.currentTarget.querySelector<HTMLButtonElement>(`#reading-tab-${next}`)?.focus();
          }}>
            <button id="reading-tab-outline" type="button" role="tab" aria-selected={tab === 'outline'} aria-controls="reading-panel-outline" tabIndex={tab === 'outline' ? 0 : -1} onClick={() => setTab('outline')}>目录与导读</button>
            <button id="reading-tab-summary" type="button" role="tab" aria-selected={tab === 'summary'} aria-controls="reading-panel-summary" tabIndex={tab === 'summary' ? 0 : -1} onClick={() => { setTab('summary'); setSummaryOpened(true); }}>核心纪要</button>
          </div>
          </header>
          <div className="cc-reading-scroll" id="reading-panel-outline" role="tabpanel" aria-labelledby="reading-tab-outline" hidden={tab !== 'outline'}>
            {!error && (loading || state?.status === 'generating') ? <Card className="cc-reading-state" role="status"><p>{state?.message || '正在读取并整理这条视频的导读…'}</p><p className="cc-report-note">首次打开需要一些时间，保存后再次打开可直接阅读。</p></Card> : null}
            {error ? <Card className="cc-reading-state" role="status"><p>暂时未能打开导读：{error}</p><p className="cc-report-note">没有自动重新生成。可以查看服务是否已保存本次结果。</p><button type="button" className="cc-text-button" onClick={() => setStatusCheck(value => value + 1)}>查看已保存状态</button></Card> : null}
            {!error && state && ['failed', 'unavailable', 'not_generated'].includes(state.status) ? <Card className="cc-reading-state" role="status"><p>{state.message}</p>{state.status === 'failed' ? <p className="cc-report-note">本次失败已保留，没有自动重新生成。</p> : null}<a href="http://127.0.0.1:14855/#view=collection">返回收藏</a></Card> : null}
            {reading ? <>
              <div className="cc-reading-outline">
                <div className="cc-reading-chapters" aria-label="分章节导读">
                  {sections.map((section, sectionIndex) => <section className="cc-reading-section" key={section.key} id={`reading-section-${sectionIndex + 1}`} tabIndex={-1}
                    aria-labelledby={`reading-section-title-${sectionIndex + 1}`}>
                    <header className="cc-reading-section-heading">
                      <h2 id={`reading-section-title-${sectionIndex + 1}`}>
                        <button type="button" className="cc-reading-section-toggle" aria-label={`${collapsed.has(section.key) ? '展开' : '折叠'}第${sectionIndex + 1}章：${section.title}`} aria-expanded={!collapsed.has(section.key)} aria-controls={`reading-section-body-${sectionIndex + 1}`}
                          onClick={() => setCollapsed(current => { const next = new Set(current); if (next.has(section.key)) next.delete(section.key); else next.add(section.key); return next; })}>
                          <span className="cc-reading-section-chevron" aria-hidden="true">{collapsed.has(section.key) ? '›' : '⌄'}</span>
                          <span className="cc-reading-section-number" aria-hidden="true">{String(sectionIndex + 1).padStart(2, '0')}</span>
                          <span>{section.title}</span>
                        </button>
                      </h2>
                    </header>
                    <div id={`reading-section-body-${sectionIndex + 1}`} hidden={collapsed.has(section.key)}>
                      {section.indexes.map((index, subIndex) => {
                        const chapter = reading.chapters[index]; const item = chapterItems[index]; const number = `${sectionIndex + 1}.${subIndex + 1}`;
                        const range = `${formatTime(chapter.start)}–${formatTime(chapter.end)}`;
                        return <section key={chapter.chapter_id} id={`reading-chapter-${index + 1}`} tabIndex={-1}
                          className="cc-reading-chapter" aria-labelledby={`reading-title-${index + 1}`}>
                          <header className="cc-reading-chapter-heading"><h3 id={`reading-title-${index + 1}`}>
                            <button type="button" className="cc-reading-chapter-toggle" aria-expanded={expandedChapters.has(chapter.chapter_id)} aria-controls={`reading-summary-${index + 1}`}
                              ref={node => { if (node) headingRefs.current.set(chapter.chapter_id, node); else headingRefs.current.delete(chapter.chapter_id); }}
                              onClick={() => setExpandedChapters(current => { const next = new Set(current); if (next.has(chapter.chapter_id)) next.delete(chapter.chapter_id); else next.add(chapter.chapter_id); return next; })}>
                              <span className="cc-reading-chapter-number">{number}</span> <span className="cc-reading-chapter-title">{chapter.title}</span>
                              <span className="cc-reading-summary-chevron" aria-hidden="true">{expandedChapters.has(chapter.chapter_id) ? '⌄' : '›'}</span>
                            </button>
                          </h3>
                            {item ? <a className="cc-reading-chapter-time" href={item.href} target="_blank" rel="noopener noreferrer"
                              aria-label={`原片时间 ${range}`} aria-current={activeChapter === chapter.chapter_id ? 'true' : undefined}
                              onClick={event => {
                                if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                                event.preventDefault(); play(chapter.chapter_id, section.key);
                              }}><span className="cc-reading-time-icon" aria-hidden="true">▶</span>{range}</a> : <span className="cc-reading-chapter-time">{range}</span>}
                          </header>
                          <div id={`reading-summary-${index + 1}`} hidden={!expandedChapters.has(chapter.chapter_id)} className="cc-reading-summary">
                            <ReadingText text={chapter.body}/>{!item ? <p className="cc-report-note">这一章的原片链接暂时无法使用。</p> : null}
                          </div>
                        </section>;
                      })}
                    </div>
                  </section>)}
                </div><footer className="cc-reading-finished">— 全文完 —</footer>
              </div>
            </> : null}
          </div>
          <div className="cc-reading-scroll" id="reading-panel-summary" role="tabpanel" aria-labelledby="reading-tab-summary" hidden={tab !== 'summary'}>
            {summaryOpened ? <CoreSummary key={videoId} videoId={videoId} activeRangeId={summaryRange?.range_id} onPlayRange={range => {
              setActiveChapter(null); setSummaryRange(range);
            }} /> : null}
          </div>
        </article>
      </div>
    </div>
  </main>;
}
