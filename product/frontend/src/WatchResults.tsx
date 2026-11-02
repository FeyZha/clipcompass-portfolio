import { useEffect, useMemo, useRef } from 'react';
import type { SearchResponse } from './types';
import { Report, formatTime } from './Report';
import { ClipTimeline } from './ClipTimeline';
import { buildWatchPlan, buildWatchUrl, type WatchPlanItem } from './watch-plan';
import './watch-results.css';

const gapLabels: Record<string, string> = {
  not_found: '未找到充分依据', partial_evidence: '仍缺部分依据',
  technical_failure: '检索或定位未完成，可重试', dependency_missing: '前置内容缺少依据',
};
const rangeText = (start: number, end: number) => `${formatTime(start)}–${formatTime(end)}`;

function WatchItem({ item, primary = false }: { item: WatchPlanItem; primary?: boolean }) {
  const title = item.chapters[0]?.title || item.sectionTitles[0] || item.videoTitle;
  const contexts = item.chapters.filter(chapter => chapter.start < item.playbackStart || chapter.end > item.watchEnd)
    .flatMap(chapter => { const href = buildWatchUrl(item.sources[0], chapter.start); return href ? [{ chapter, href }] : []; });
  const hasDifferentKey = item.keyRanges.length !== 1 || item.keyRanges[0].start !== item.playbackStart || item.keyRanges[0].end !== item.watchEnd;
  const needs = item.sectionTitles;
  return <section className={`cc-watch-item${primary ? ' cc-watch-primary' : ''}`} aria-label={primary ? '推荐先看' : '补充讲解'}>
    <h2>{title}</h2>
    <div className="cc-watch-actions">
      <a className="cc-watch-play" href={item.href} target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m6 3.8 8 5.2-8 5.2V3.8Z" fill="currentColor" /></svg>
        观看这段讲解
      </a>
      <span className="cc-watch-time">建议观看 {rangeText(item.playbackStart, item.watchEnd)}</span>
    </div>
    {primary ? <p className="cc-watch-site-note">在原站从标注起点播放；建议终点供参考，不会自动停止。</p> : null}
    {item.shortGuide ? <p className="cc-watch-guide">{item.shortGuide}</p> : null}
    {needs.length ? <p className="cc-watch-needs">对应问题：{needs.join('；')}</p> : null}
    <p className="cc-watch-source"><strong>{item.videoTitle}</strong><span>{item.creator || '讲师未明确'}</span></p>
    {hasDifferentKey ? <p className="cc-watch-key">关键内容 {item.keyRanges.map(range => rangeText(range.start, range.end)).join('、')}</p> : null}
    {contexts.length ? <div className="cc-watch-context">{contexts.map(({ chapter, href }) =>
      <a key={`${chapter.start}:${chapter.end}`} href={href} target="_blank" rel="noopener noreferrer">
        补看章节上下文 <span>{rangeText(chapter.start, chapter.end)}</span>
      </a>)}
    </div> : null}
    <details className="cc-watch-position">
      <summary>查看关键位置与章节范围</summary>
      {item.requirements.length ? <p className="cc-watch-needs">对应问题：{item.requirements.join('；')}</p> : null}
      <ClipTimeline sources={item.sources} chapter={item.chapters.length === 1 ? item.chapters[0] : undefined} />
    </details>
  </section>;
}

export function WatchResults({ response }: { response: SearchResponse }) {
  const plan = useMemo(() => buildWatchPlan(response), [response]);
  const auxiliaryRef = useRef<HTMLDetailsElement>(null);
  const moreRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (auxiliaryRef.current) auxiliaryRef.current.open = false;
    if (moreRef.current) moreRef.current.open = false;
  }, [response]);
  const hasAuxiliary = Boolean(response.report?.sections.length || response.results.length || response.learning_map?.groups.length);
  return <article className="cc-watch-results" aria-label="推荐讲解">
    {plan.warning ? <p className="cc-watch-notice" role="status">{plan.warning}</p> : null}
    {plan.partial ? <section className="cc-watch-limits" aria-label="当前讲解的限制">
      <h2>当前找到的讲解仍有缺口</h2>
      {plan.gaps.length ? <ul>{plan.gaps.map(row => <li key={`${row.title}:${row.status}`}>{row.title}：{gapLabels[row.status] || '缺少充分依据'}</li>)}</ul>
        : response.status === 'partial' ? <p>当前片段尚未覆盖全部问题，可继续补充需求。</p> : null}
      {plan.failedDirections ? <p>另有 {plan.failedDirections} 个方向检索未完成，可重试。</p> : null}
      {plan.rejected.length ? <p>有 {plan.rejected.length} 条来源的链接或时间未能核实，未提供观看入口。</p> : null}
    </section> : null}
    {plan.conditions.length || plan.assumptions.length ? <section className="cc-watch-conditions" aria-label="观看前的必要条件">
      <h2>观看前留意</h2>
      <ul>{[...new Set([...plan.conditions, ...plan.assumptions])].map(condition => <li key={condition}>{condition}</li>)}</ul>
    </section> : null}
    {plan.items.length ? <>
      {!response.status ? <p className="cc-watch-notice">已找到相关讲解，是否覆盖全部问题尚未评估。</p> : null}
      <div className="cc-watch-list">{plan.items.slice(0, 3).map((item, index) => <WatchItem key={item.id} item={item} primary={index === 0} />)}</div>
      {plan.items.length > 3 ? <details className="cc-watch-more" ref={moreRef}>
        <summary>更多互补讲解（{plan.items.length - 3} 段）</summary>
        <div className="cc-watch-list">{plan.items.slice(3).map(item => <WatchItem key={item.id} item={item} />)}</div>
      </details> : null}
    </> : <section className="cc-watch-empty">
      <h2>本次未找到可直接观看的讲解</h2>
      <p>可补充具体问题后重试。未找到不等于收藏中没有相关内容。</p>
    </section>}
    {hasAuxiliary ? <details className="cc-watch-auxiliary" ref={auxiliaryRef}>
      <summary>文字导读与原文依据</summary>
      <p className="cc-watch-auxiliary-hint">保留本次结果中的文字、原字幕与对应关系，可按需核对。</p>
      <Report response={response} />
    </details> : null}
  </article>;
}
