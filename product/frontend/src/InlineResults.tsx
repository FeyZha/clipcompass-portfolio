import { useEffect, useMemo, useRef, useState } from 'react';
import type { Clip, ReportSection, SearchResponse } from './types';
import { InlineVideo } from './InlineVideo';
import { buildWatchPlan, type WatchPlanItem } from './watch-plan';
import './inline-results.css';

const gapLabels: Record<string, string> = {
  not_found: '未找到充分依据', partial_evidence: '仍缺部分依据',
  technical_failure: '检索或定位未完成，可重试', dependency_missing: '前置内容缺少依据',
};
const clean = (value: string | undefined) => value?.trim() || '';
const unique = <T,>(values: T[]) => [...new Set(values)];

interface Evidence { key: string; source: Clip; item: WatchPlanItem; sections?: string[] }
interface SourceGroup { key: string; item: WatchPlanItem; evidence: Evidence[]; sections?: string[] }
interface AnswerSection { title: string; content: string; sources: Clip[]; groups: SourceGroup[]; actions?: SourceGroup[]; rejected: Clip[] }

function meaningfulCondition(source: Clip): string {
  const value = clean(source.conditions);
  return /^原字幕未明确[。.!！]?$/.test(value) ? '' : value;
}
function sourceItem(source: Clip): WatchPlanItem | undefined {
  // Validate the entire original range, without merging footage or inferring a start.
  return buildWatchPlan({ question: '', results: [source] }).items[0];
}
function evidenceKey(source: Clip, item: WatchPlanItem): string {
  const coverage = (source.coverage || []).map(row => [row.title, row.status])
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  return JSON.stringify([item.href, item.watchEnd, item.keyRanges, source.video_title,
    source.creator, clean(source.quote), meaningfulCondition(source), coverage,
    source.chapter?.start, source.chapter?.end, source.chapter?.title]);
}
function groupsFor(sources: Clip[]): { groups: SourceGroup[]; rejected: Clip[] } {
  const groups = new Map<string, SourceGroup>();
  const rejected: Clip[] = [];
  for (const source of sources) {
    const item = sourceItem(source);
    if (!item) { rejected.push(source); continue; }
    // A shared route is not merged evidence: every distinct quote/condition stays intact.
    const key = JSON.stringify([item.href, item.playbackStart, item.watchEnd]);
    let group = groups.get(key);
    if (!group) { group = { key, item, evidence: [] }; groups.set(key, group); }
    const entry = { key: evidenceKey(source, item), source, item };
    if (!group.evidence.some(old => old.key === entry.key)) group.evidence.push(entry);
  }
  return { groups: [...groups.values()], rejected };
}
function originalSections(response: SearchResponse): ReportSection[] {
  if (response.report?.sections.length) return response.report.sections;
  const groups = response.learning_map?.groups;
  if (groups?.some(group => group.clips.length)) return groups.flatMap(group => group.clips.map(source => ({
    title: source.chapter?.title || group.title, content: clean(source.reason), sources: [source],
  })));
  return response.results.map(source => ({ title: source.chapter?.title || '', content: clean(source.reason), sources: [source] }));
}
function organise(response: SearchResponse) {
  const sections: AnswerSection[] = originalSections(response).map((section, index) => {
    const result = groupsFor(section.sources);
    const part = section.title || `回答部分 ${index + 1}`;
    const groups = result.groups.map(group => ({ ...group, sections: [part],
      evidence: group.evidence.map(evidence => ({ ...evidence, sections: [part] })) }));
    return { ...section, groups, actions: groups, rejected: result.rejected };
  });
  // Move only an exactly shared playback route across consecutive verified parts to
  // the end of that run. The original part/source associations remain untouched.
  for (let index = 1; index < sections.length; index += 1) {
    if (response.report?.format === 'video_story_v1') break;
    const previous = sections[index - 1]; const current = sections[index];
    if (previous.rejected.length || current.rejected.length) continue;
    const shared = new Set(current.groups.map(group => group.key));
    current.actions = current.actions!.map(group => {
      const earlier = previous.actions!.find(old => old.key === group.key);
      if (!earlier) return group;
      const evidence = new Map<string, Evidence>();
      for (const entry of [...earlier.evidence, ...group.evidence]) {
        const old = evidence.get(entry.key);
        evidence.set(entry.key, old ? { ...old, sections: unique([...(old.sections || []), ...(entry.sections || [])]) } : entry);
      }
      return { ...group, sections: unique([...(earlier.sections || []), ...(group.sections || [])]), evidence: [...evidence.values()] };
    });
    previous.actions = previous.actions!.filter(group => !shared.has(group.key));
  }
  const associated = sections.flatMap(section => section.sources);
  const orphaned = response.report?.sections.length ? response.results.filter(source => {
    // results is commonly the base clip, while report.sources contains its validated
    // quote/condition copy. Extra evidence fields do not make that base clip an orphan.
    const matched = associated.filter(other => sameSelectedClip(source, other));
    if (!matched.length) return true;
    return (clean(source.quote) && !matched.some(other => clean(other.quote) === clean(source.quote))) ||
      (meaningfulCondition(source) && !matched.some(other => meaningfulCondition(other) === meaningfulCondition(source)));
  }) : [];
  return { sections, orphaned };
}
function sameSelectedClip(first: Clip, second: Clip): boolean {
  const firstItem = sourceItem(first); const secondItem = sourceItem(second);
  if (firstItem && secondItem ? firstItem.platformVideoId !== secondItem.platformVideoId : first.source_url !== second.source_url) return false;
  if (first.segment_id && second.segment_id && first.segment_id !== second.segment_id) return false;
  if (firstItem && secondItem) return firstItem.playbackStart === secondItem.playbackStart && firstItem.watchEnd === secondItem.watchEnd &&
    JSON.stringify(firstItem.keyRanges) === JSON.stringify(secondItem.keyRanges);
  return first.recommended_watch_start === second.recommended_watch_start && first.recommended_watch_end === second.recommended_watch_end &&
    first.key_start === second.key_start && first.key_end === second.key_end && first.playback_start === second.playback_start;
}
function PreservedText({ section }: { section: AnswerSection }) {
  return <details className="cc-report-preserved">
    <summary>核对这部分的原始记录</summary>
    <div className="cc-report-source-body">
      {section.content ? <p className="cc-report-original">原返回文字（来源关联未完整核实）：{section.content}</p> : null}
      {section.rejected.map((source, index) => <div className="cc-report-excerpt" key={index}>
        <p className="cc-report-source-title">{source.video_title}</p>
        <p className="cc-report-source-meta">{source.creator || '讲师未明确'}；链接或时间未核实，未提供跳转。</p>
      </div>)}
    </div>
  </details>;
}
function gapSummary(response: SearchResponse, rejected: number, visibleAnswer: string): string {
  const assessments = response.evidence_assessment || [];
  const normalize = (value: string) => value.replace(/[。；;\s]+$/u, '');
  const allExplicit = unique([...(response.gaps || []), ...assessments.filter(row => row.evidence_level !== 'explained')
    .map(row => row.gap)].map(clean).filter(Boolean));
  const explicit = allExplicit.filter(gap => !visibleAnswer.includes(normalize(gap)));
  // A concrete gap replaces only its matching generic coverage label, not other needs.
  const generic = (response.coverage || []).flatMap((row, index) => {
    if (row.status === 'supported' || assessments.some(assessment => assessment.requirement_index === index && clean(assessment.gap)) ||
        allExplicit.some(gap => gap.includes(row.title))) return [];
    return [`${row.title}：${gapLabels[row.status] || '缺少充分依据'}`];
  });
  const notes = unique([...explicit, ...generic]);
  if (!notes.length && response.status === 'partial' && !allExplicit.some(gap => visibleAnswer.includes(normalize(gap)))) notes.push('现有讲解尚未覆盖全部问题');
  const failed = response.learning_map?.failed_directions || 0;
  if (failed > 0) notes.push(`另有 ${failed} 个方向检索未完成，可重试`);
  if (rejected) notes.push(`有 ${rejected} 条来源的链接或时间未能核实，相关结论暂不展示`);
  const values = unique(notes.map(normalize).filter(Boolean));
  return values.length ? `${values.join('；')}。` : '';
}
function AnswerText({ content }: { content: string }) {
  // Paragraph breaks change typography only; each section keeps its original sources.
  return <>{content.split(/\n\s*\n/u).map((paragraph, index) =>
    paragraph.trim() ? <p className="cc-report-answer" key={index}>{paragraph.trim()}</p> : null)}</>;
}

/** A single report. Existing text and source associations remain authoritative. */
export function InlineResults({ response }: { response: SearchResponse }) {
  const content = useMemo(() => organise(response), [response]);
  const [playing, setPlaying] = useState<{ response: SearchResponse; position: string } | null>(null);
  const player = (group: SourceGroup, position: string) => <InlineVideo key={position} item={group.item}
    active={playing?.response === response && playing.position === position}
    onOpen={() => setPlaying({ response, position })} onClose={() => setPlaying(null)} />;
  const articleRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setPlaying(null);
    articleRef.current?.querySelectorAll('details').forEach(details => { details.open = false; });
  }, [response]);
  const allSources = [...response.results, ...content.sections.flatMap(section => section.sources),
    ...(response.learning_map?.groups.flatMap(group => group.clips) || [])];
  const rejected = new Set(allSources.filter(source => !sourceItem(source)).map(source => JSON.stringify(source))).size;
  const visibleAnswer = content.sections.filter(section => section.groups.length && !section.rejected.length).map(section => section.content).join('\n\n');
  const summary = gapSummary(response, rejected, visibleAnswer);
  const hasUsable = content.sections.some(section => section.groups.length);
  const oldAdaptive = typeof response.version === 'string' && response.version.startsWith('adaptive_') && response.version !== 'adaptive_v2';
  const story = response.report?.format === 'video_story_v1';
  const videoGuide = story || response.report?.format === 'video_guide_v1';
  const structured = videoGuide || response.report?.format === 'coherent_report_v1';
  const assumptions = unique((response.plan?.assumptions || []).map(clean).filter(Boolean));
  const unassociatedPoints = !response.report?.sections.length
    ? response.learning_map?.groups.filter(group => group.points?.length) || [] : [];
  return <article className="cc-inline-results" aria-label="回答报告" ref={articleRef}>
    {oldAdaptive ? <p className="cc-report-note" role="note">这份旧结果尚未按新规则核实；重新提问可获取简短观看导读。</p> : null}
    {!story && !oldAdaptive && response.report?.sections.length ? <p className="cc-report-note" role="note">已保留上次回答；重新提问可获取简短说明与视频交替呈现的报告。</p> : null}
    {response.warning && !summary.includes(response.warning) ? <p className="cc-report-note" role="status">{response.warning}</p> : null}
    {summary ? <p className="cc-report-boundary" role="note" aria-label="当前回答的限制">{summary}</p> : null}
    {assumptions.length ? <p className="cc-report-condition" aria-label="回答前提">适用前提：{assumptions.join('；')}</p> : null}
    {hasUsable ? <>
      {!response.status ? <p className="cc-report-note">已找到相关讲解，是否覆盖全部问题尚未评估。</p> : null}
      {content.sections.map((section, index) => {
        const canShowAnswer = section.groups.length > 0 && section.rejected.length === 0;
        const showTitle = !story && section.title && content.sections.length > 1 && !(structured && index === 0);
        return <section className="cc-report-part" aria-label={section.title || `回答部分 ${index + 1}`} key={index}>
          {showTitle ? <h2>{section.title}</h2> : null}
          {canShowAnswer ? <AnswerText content={section.content} /> :
            <p className="cc-report-note">{section.rejected.length
              ? '这部分的来源关联未完整核实，暂不展示结论。'
              : '这部分没有可核实的来源，暂不作为本次回答依据。'}</p>}
          <div className="cc-report-source-actions">{(section.actions ?? section.groups).map(group =>
            player(group, `section:${index}:${group.key}`))}</div>
          {section.rejected.length || (!section.groups.length && section.content) ? <PreservedText section={section} /> : null}
        </section>;
      })}
    </> : <section className="cc-report-empty">
      <h2>本次未找到可核实的讲解</h2>
      <p>可补充具体问题后重试。未找到不等于收藏中没有相关内容。</p>
      {content.sections.map((section, index) => <PreservedText section={section} key={index} />)}
    </section>}
    {content.orphaned.length || unassociatedPoints.length ? <details className="cc-report-preserved cc-report-unassociated">
      <summary>核对未关联正文的旧记录</summary>
      <div className="cc-report-source-body">
        <p className="cc-report-note">这些旧记录未与正文建立关联，不用于证明上面的回答。</p>
        {content.orphaned.map((source, index) => <div className="cc-report-excerpt" key={index}>
          {source.reason ? <p className="cc-report-original">{source.reason}</p> : null}
          {groupsFor([source]).groups.map(group => player(group, `orphan:${index}:${group.key}`))}
          {!sourceItem(source) ? <PreservedText section={{ title: '', content: '', sources: [source], groups: [], rejected: [source] }} /> : null}
        </div>)}
        {unassociatedPoints.map((group, index) => <div className="cc-report-excerpt" key={index}>
          <p className="cc-report-source-title">{group.title}</p>
          {group.points!.map((point, pointIndex) => <p className="cc-report-original" key={pointIndex}>{point.question}\n{point.reason}</p>)}
        </div>)}
      </div>
    </details> : null}
  </article>;
}
