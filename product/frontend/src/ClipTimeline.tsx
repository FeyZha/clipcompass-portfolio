import { useId, useState } from "react";
import type { Chapter, Clip } from "./types";
import "./clip-timeline.css";

interface TimeRange { key: string; start: number; end: number }

function formatTime(seconds: number): string {
  const total = Math.floor(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const rest = String(total % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`;
}

function reliableRanges(sources: Clip[]): TimeRange[] {
  const ranges = new Map<string, TimeRange>();
  for (const source of sources) {
    const start = source.key_start ?? source.playback_start ?? source.core_start ?? source.recommended_watch_start;
    const end = source.key_end ?? source.recommended_watch_end;
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end <= start) continue;
    const key = JSON.stringify([start, end]);
    if (!ranges.has(key)) ranges.set(key, { key, start, end });
  }
  return [...ranges.values()].sort((first, second) => first.start - second.start || first.end - second.end);
}

export function ClipTimeline({ sources, chapter }: { sources: Clip[]; chapter?: Chapter }) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const boundsId = useId();
  const ranges = reliableRanges(sources);
  const selected = ranges.find((range) => range.key === selectedKey) ?? ranges[0];
  if (!selected) return null;

  const hasChapterBounds = Boolean(chapter && Number.isFinite(chapter.start) && Number.isFinite(chapter.end) &&
    chapter.start >= 0 && chapter.end > chapter.start &&
    ranges.every((range) => chapter.start <= range.start && range.end <= chapter.end));
  const bounds = hasChapterBounds ? chapter : undefined;
  const position = (seconds: number) => bounds ? (seconds - bounds.start) / (bounds.end - bounds.start) : 0;
  const rangeText = (range: TimeRange) => `${formatTime(range.start)}–${formatTime(range.end)}`;

  return (
    <section className="cc-clip-timeline" aria-label="片段时间位置">
      <p className="cc-timeline-label">{bounds ? "关键片段在章节中的位置" : "关键片段时间范围"}</p>
      {bounds ? <>
        <div className="cc-timeline-rail" role={ranges.length > 1 ? "group" : "img"}
          aria-label={ranges.length > 1 ? "在轨道上选择关键片段" : `关键片段 ${rangeText(selected)} 在章节中的位置`}
          aria-describedby={boundsId}>
          <svg viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <rect className="cc-timeline-baseline" x="0" y="21" width="1000" height="2" />
            {ranges.map((range) => <rect
              className={range.key === selected.key ? "cc-timeline-window is-selected" : "cc-timeline-window"}
              key={range.key} x={position(range.start) * 1000} y={range.key === selected.key ? 18 : 20}
              width={(position(range.end) - position(range.start)) * 1000}
              height={range.key === selected.key ? 8 : 4}
            />)}
          </svg>
          {ranges.length > 1 ? ranges.map((range) => <button
            className="cc-timeline-target" type="button" key={range.key}
            style={{ left: `${(position(range.start) + position(range.end)) * 50}%` }}
            aria-label={`定位关键片段 ${rangeText(range)}`} aria-pressed={range.key === selected.key}
            onClick={() => setSelectedKey(range.key)}
          />) : null}
        </div>
        <p className="cc-timeline-bounds" id={boundsId}>
          <span>章节起点 {formatTime(bounds.start)}</span>
          <span>章节终点 {formatTime(bounds.end)}</span>
        </p>
      </> : null}
      {ranges.length > 1 ? <div className="cc-timeline-ranges" role="group" aria-label="选择关键片段时间范围">
        {ranges.map((range, index) => <button
          type="button" key={range.key} className="cc-timeline-range"
          aria-label={`片段 ${index + 1} ${rangeText(range)}`}
          aria-pressed={range.key === selected.key} onClick={() => setSelectedKey(range.key)}
        >
          <span>片段 {index + 1}</span>
          <span className="cc-timeline-time">{rangeText(range)}</span>
        </button>)}
      </div> : <p className="cc-timeline-single">
        关键片段 <span className="cc-timeline-time">{rangeText(selected)}</span>
      </p>}
      {ranges.length > 1 ? <p className="cc-timeline-selection" aria-live="polite" aria-atomic="true">
        当前关键片段 <span className="cc-timeline-time">{rangeText(selected)}</span>
      </p> : null}
    </section>
  );
}
