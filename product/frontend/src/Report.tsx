import { useEffect, useRef } from "react";
import type { Clip, Coverage, ReportSection, SearchResponse } from "./types";
import { ClipTimeline } from "./ClipTimeline";
import { buildWatchUrl } from "./watch-plan";

const gapLabels: Record<string, string> = {
  not_found: "未找到充分依据",
  partial_evidence: "有相关片段，仍缺部分依据",
  technical_failure: "检索或定位失败，可重试",
  dependency_missing: "前置内容缺少依据",
};

export function formatTime(seconds: number | undefined): string {
  const value = Number(seconds);
  const total = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const rest = String(total % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`;
}

export function safeWatchUrl(source: Clip, start = source.recommended_watch_start): string | null {
  return buildWatchUrl(source, start);
}

function condition(source: Clip): string {
  const text = source.conditions?.trim() || "";
  return /^原字幕未明确[。.!！]?$/.test(text) ? "" : text;
}

function uniqueGaps(rows: Coverage[] = []): Coverage[] {
  const seen = new Set<string>();
  return rows.filter((row) => {
    const key = JSON.stringify([row.title, row.status]);
    if (row.status === "supported" || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

type DisplaySection = ReportSection & { focus?: string };

function sectionsFor(response: SearchResponse): DisplaySection[] {
  if (response.report?.sections.length) return response.report.sections;
  if (response.learning_map?.groups.length) {
    return response.learning_map.groups.map((group) => ({
      title: group.title,
      focus: group.question !== response.question ? group.question : undefined,
      content: group.points?.length
        ? group.points.map((point) => `${point.question}\n${point.reason}`).join("\n\n")
        : [...new Set(group.clips.map((source) => source.reason).filter(Boolean))].join("\n\n"),
      sources: group.clips,
    }));
  }
  return response.results.map((source, index) => ({
    title: source.chapter?.title || (response.results.length > 1 ? `相关讲解 ${index + 1}` : "相关讲解"),
    content: source.reason || "",
    sources: [source],
  }));
}

interface EvidenceItem { source: Clip; references: Map<number, string> }
interface EvidenceGroup { sources: Clip[]; evidence: Map<string, EvidenceItem> }

function groupEvidence(sections: ReportSection[]): EvidenceGroup[] {
  const groups = new Map<string, EvidenceGroup>();
  sections.forEach((section, index) => section.sources.forEach((source) => {
    const start = source.key_start ?? source.playback_start ?? source.core_start ?? source.recommended_watch_start;
    const end = source.key_end ?? source.recommended_watch_end;
    const chapter = source.chapter;
    const chapterKey = chapter && Number.isFinite(chapter.start) && Number.isFinite(chapter.end) && chapter.end > chapter.start
      ? [chapter.start, chapter.end] : [start, end];
    const id = JSON.stringify([source.video_id || source.source_url, ...chapterKey]);
    let group = groups.get(id);
    if (!group) {
      group = { sources: [], evidence: new Map() };
      groups.set(id, group);
    }
    group.sources.push(source);
    const evidenceId = JSON.stringify([start, end, source.creator, source.video_title, source.source_url, source.quote, source.conditions, source.coverage]);
    let item = group.evidence.get(evidenceId);
    if (!item) {
      item = { source, references: new Map() };
      group.evidence.set(evidenceId, item);
    }
    item.references.set(index, section.title);
  }));
  return [...groups.values()];
}

function EvidenceSource({ group }: { group: EvidenceGroup }) {
  const titles = [...new Set(group.sources.map((source) => source.video_title).filter(Boolean))];
  const creators = [...new Set(group.sources.map((source) => source.creator || "作者未明确"))];
  const links = new Map<string, Set<string>>();
  const summaries = new Set<string>();
  const addLink = (source: Clip, start: number | undefined, label: string) => {
    const href = safeWatchUrl(source, start);
    if (!href) return;
    if (!links.has(href)) links.set(href, new Set());
    links.get(href)!.add(label);
  };
  group.sources.forEach((source) => {
    const start = source.key_start ?? source.playback_start ?? source.core_start ?? source.recommended_watch_start;
    const end = source.key_end ?? source.recommended_watch_end;
    const key = () => addLink(source, start, `关键片段 ${formatTime(start)}–${formatTime(end)}`);
    const full = () => {
      if (source.chapter) addLink(source, source.chapter.start,
        `所在章节 ${formatTime(source.chapter.start)}–${formatTime(source.chapter.end)}`);
    };
    if (source.watch_mode === "chapter") { full(); key(); } else { key(); full(); }
    if (source.chapter?.summary) summaries.add(source.chapter.summary);
    source.chapter?.points?.forEach((point) => addLink(source, point.start, `${formatTime(point.start)} ${point.title}`));
  });
  return (
    <article className="cc-evidence-source">
      <h3>{titles.join(" / ")}</h3>
      <p className="cc-evidence-creator">{creators.join(" / ")}</p>
      <ClipTimeline sources={group.sources} chapter={group.sources[0]?.chapter} />
      {[...group.evidence.values()].map(({ source, references }, index) => (
        <div className="cc-evidence-item" key={index}>
          <p className="cc-evidence-association">对应回答：{[...references].map(([sectionIndex, title], referenceIndex) => (
            <span key={sectionIndex}>{referenceIndex > 0 ? "、" : ""}<a href={`#report-section-${sectionIndex}`}>{title}</a></span>
          ))}</p>
          {source.quote ? <blockquote>{source.quote}</blockquote> : null}
          {condition(source) ? <p>适用条件：{condition(source)}</p> : null}
          {source.coverage?.some((row) => row.status === "supported") ? <p>本来源提供依据：{
            [...new Set(source.coverage.filter((row) => row.status === "supported").map((row) => row.title))].join("；")
          }</p> : null}
          {uniqueGaps(source.coverage).map((row) => <p key={`${row.title}:${row.status}`}>
            本来源未提供依据：{row.title}
          </p>)}
        </div>
      ))}
      {links.size ? <div className="cc-evidence-links">{[...links].map(([href, labels]) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">{[...labels].join("；")} ↗</a>
      ))}</div> : null}
      {[...summaries].map((summary) => <p className="cc-evidence-summary" key={summary}>章节内容：{summary}</p>)}
    </article>
  );
}

export function Report({ response }: { response: SearchResponse }) {
  const evidenceRef = useRef<HTMLDetailsElement>(null);
  const outlineRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (evidenceRef.current) evidenceRef.current.open = false;
    if (outlineRef.current) outlineRef.current.open = false;
  }, [response]);
  const sections = sectionsFor(response);
  const gaps = uniqueGaps(response.coverage);
  const groups = groupEvidence(sections);
  const isCurrentReport = Boolean(response.report?.sections.length);
  const legacyGoal = !isCurrentReport && response.plan?.goal !== response.question ? response.plan?.goal : "";
  const legacyAssumptions = !isCurrentReport && response.plan?.task_type !== "topic" ? response.plan?.assumptions || [] : [];

  return (
    <article className="cc-report" aria-label="回答">
      {sections.length >= 3 ? <details className="cc-answer-outline" ref={outlineRef}>
        <summary>阅读提纲 <span>{sections.length} 个部分</span></summary>
        <nav aria-label="答案阅读提纲">
          {sections.map((section, index) => <a key={index} href={`#report-section-${index}`} onClick={() => {
            if (outlineRef.current) outlineRef.current.open = false;
            document.getElementById(`report-section-${index}`)?.focus({ preventScroll: true });
          }}>{section.title}</a>)}
        </nav>
      </details> : null}
      {response.warning ? <p className="cc-report-notice" role="status">{response.warning}</p> : null}
      {legacyGoal ? <p className="cc-report-notice">回答范围：{legacyGoal}</p> : null}
      {legacyAssumptions.length ? <p className="cc-answer-condition">适用前提：{legacyAssumptions.join("；")}</p> : null}
      {!sections.length ? <div className="cc-no-evidence">
        <h2>本次未找到充分依据。</h2>
        <p>可补充你关心的具体问题，或查看收藏列表；未找到不等于内容不存在。</p>
      </div> : <>
        {!isCurrentReport && !response.status ? <p className="cc-report-notice">已找到相关内容，完整性未评估。</p> : null}
        {!isCurrentReport && response.plan?.task_type === "learn" ? <p className="cc-report-notice">这些内容围绕当前问题整理，不代表完整课程。</p> : null}
        {sections.map((section, index) => {
          const conditions = [...new Set(section.sources.map(condition).filter(Boolean))]
            .filter((text) => !section.content.includes(text));
          return <section className="cc-answer-section" id={`report-section-${index}`} key={index} tabIndex={-1} aria-labelledby={`report-heading-${index}`}>
            <h3 id={`report-heading-${index}`}>{section.title}</h3>
            {section.focus ? <p className="cc-answer-focus">{section.focus}</p> : null}
            {section.content ? <p className="cc-answer-text">{section.content}</p> : null}
            {conditions.map((text) => <p className="cc-answer-condition" key={text}>适用条件：{text}</p>)}
          </section>;
        })}
      </>}
      {gaps.length || response.status === "partial" ? <section className="cc-answer-gaps" aria-label="当前回答的限制">
        <h3>当前回答的限制</h3>
        {gaps.length ? <ul>{gaps.map((row) => <li key={`${row.title}:${row.status}`}>{row.title}：{gapLabels[row.status] || "缺少充分依据"}</li>)}</ul>
          : <p>当前依据仍不充分，以上回答尚未覆盖全部问题。</p>}
      </section> : null}
      {response.learning_map?.failed_directions ? <p className="cc-report-notice">
        另有 {response.learning_map.failed_directions} 个方向检索失败，当前回答尚未纳入，可重试。
      </p> : null}
      {groups.length ? <details className="cc-report-evidence" ref={evidenceRef}>
        <summary>核对依据与原片</summary>
        <div>{groups.map((group, index) => <EvidenceSource key={index} group={group} />)}</div>
      </details> : null}
    </article>
  );
}
