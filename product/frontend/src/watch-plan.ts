import type { Chapter, Clip, Coverage, SearchResponse } from "./types";

export interface WatchReference {
  /** Preserve each original excerpt and its association, even when footage is merged. */
  source: Clip;
  sectionIndex?: number;
  sectionTitle?: string;
  question?: string;
}

export interface WatchRange { start: number; end: number }

export interface WatchPlanItem {
  id: string;
  videoId: string;
  platformVideoId: string;
  videoTitle: string;
  creator?: string;
  href: string;
  playbackStart: number;
  watchEnd: number;
  keyRanges: WatchRange[];
  /** A short extract of an existing reason/title/summary, never a new explanation. */
  shortGuide: string;
  sectionTitles: string[];
  requirements: string[];
  conditions: string[];
  localGaps: Coverage[];
  chapters: Chapter[];
  watchModes: string[];
  sources: Clip[];
  references: WatchReference[];
}

export interface RejectedWatchSource {
  reference: WatchReference;
  reason: "invalid_url" | "invalid_range" | "inconsistent_range";
}

export interface WatchPlan {
  items: WatchPlanItem[];
  rejected: RejectedWatchSource[];
  sourceKind: "report" | "learning_map" | "results";
  coverage: Coverage[];
  gaps: Coverage[];
  conditions: string[];
  assumptions: string[];
  failedDirections: number;
  partial: boolean;
  warning?: string;
  /** Sum of the returned viewing intervals, not a claim about time saved. */
  totalWatchSeconds: number;
}

const text = (value: unknown): string => typeof value === "string" ? value.trim() : "";
const seconds = (value: unknown): value is number => typeof value === "number" &&
  Number.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
const validRange = (start: unknown, end: unknown): boolean => seconds(start) && seconds(end) && end > start;
const unique = <T,>(values: T[]): T[] => [...new Set(values)];
const firstDefined = (...values: unknown[]) => values.find(value => value !== undefined);

function platformId(source: Clip): string | null {
  try {
    if (typeof source.source_url !== "string") return null;
    const url = new URL(source.source_url);
    if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
    if (!["youtube.com", "www.youtube.com", "m.youtube.com"].includes(url.hostname) ||
        url.pathname !== "/watch" || url.searchParams.getAll("v").length !== 1) return null;
    const id = url.searchParams.get("v") || "";
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function videoLink(id: string, start: number): string {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(id)}&t=${Math.floor(start)}s`;
}

/** Only direct, recognized original-video URLs become links. Unknown parameters are not forwarded. */
export function buildWatchUrl(source: Clip, start: number): string | null {
  const id = platformId(source);
  return id && seconds(start) ? videoLink(id, start) : null;
}

function meaningfulCondition(source: Clip): string {
  const value = text(source.conditions);
  return /^原字幕未明确[。.!！]?$/.test(value) ? "" : value;
}

function uniqueCoverage(rows: Coverage[]): Coverage[] {
  const seen = new Set<string>();
  return rows.filter(row => {
    const key = JSON.stringify([row.title, row.status]);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function usableChapter(chapter: Chapter | undefined): Chapter | undefined {
  return chapter && validRange(chapter.start, chapter.end) ? chapter : undefined;
}

function shortExtract(value: string): string {
  const characters = Array.from(value.replace(/\s+/g, " ").trim());
  return characters.length > 120 ? `${characters.slice(0, 120).join("")}…` : characters.join("");
}

function sameSelectedClip(source: Clip, item: Clip): boolean {
  if (source === item) return true;
  const firstId = platformId(source);
  const secondId = platformId(item);
  if (firstId && secondId ? firstId !== secondId : source.source_url !== item.source_url) return false;
  if (text(source.segment_id) && text(item.segment_id)) return source.segment_id === item.segment_id;
  return item.recommended_watch_start === source.recommended_watch_start &&
    item.recommended_watch_end === source.recommended_watch_end &&
    item.key_start === source.key_start && item.key_end === source.key_end;
}

function referencesFor(response: SearchResponse): { references: WatchReference[]; sourceKind: WatchPlan["sourceKind"] } {
  const reportReferences = response.report?.sections.flatMap((section, sectionIndex) =>
    section.sources.map(source => ({ source, sectionIndex, sectionTitle: section.title }))) || [];
  if (reportReferences.length) {
    // New responses require every selected clip to be cited. Older caches may not: keep a
    // selected complementary clip without fabricating an association with a report point.
    const unreferenced = response.results.filter(source => !reportReferences.some(reference => sameSelectedClip(source, reference.source)))
      .map(source => ({ source }));
    return { references: [...reportReferences, ...unreferenced], sourceKind: "report" };
  }
  const groupReferences = response.learning_map?.groups.flatMap((group, sectionIndex) =>
    group.clips.map(source => ({ source, sectionIndex, sectionTitle: group.title, question: group.question }))) || [];
  if (groupReferences.length) return { references: groupReferences, sourceKind: "learning_map" };
  return { references: response.results.map(source => ({ source })), sourceKind: "results" };
}

function sourceRank(source: Clip, selected: Clip[]): number {
  const rank = selected.findIndex(item => sameSelectedClip(source, item));
  return rank < 0 ? selected.length : rank;
}

function normalise(reference: WatchReference): WatchPlanItem | RejectedWatchSource["reason"] {
  const source = reference.source;
  const id = platformId(source);
  if (!id) return "invalid_url";
  const recommendedStart = source.recommended_watch_start;
  const recommendedEnd = source.recommended_watch_end;
  if (!validRange(recommendedStart, recommendedEnd)) return "invalid_range";

  // core_end is present in older MVP caches although it was not required by the frontend type.
  const coreEnd = (source as Clip & { core_end?: number }).core_end;
  const keyStart = firstDefined(source.key_start, source.core_start, recommendedStart);
  const keyEnd = firstDefined(source.key_end, coreEnd, recommendedEnd);
  if (!validRange(keyStart, keyEnd)) return "invalid_range";
  const actualKeyStart = keyStart as number;
  const actualKeyEnd = keyEnd as number;
  const chapter = usableChapter(source.chapter);
  let playbackStart = recommendedStart;
  let watchEnd = recommendedEnd;

  // An explicit chapter recommendation keeps the whole explanation. Other modes keep the
  // backend's chosen context; the frontend cannot infer a new prerequisite from a keyword hit.
  if (source.watch_mode === "chapter" && chapter) {
    playbackStart = Math.min(playbackStart, chapter.start);
    watchEnd = Math.max(watchEnd, chapter.end);
  }
  if (source.playback_start !== undefined) {
    if (!seconds(source.playback_start)) return "invalid_range";
    if (source.playback_start > actualKeyStart || source.playback_start >= watchEnd) return "inconsistent_range";
    playbackStart = Math.min(playbackStart, source.playback_start);
  }
  if (actualKeyStart < playbackStart || actualKeyEnd > watchEnd) return "inconsistent_range";
  if (chapter && (actualKeyStart < chapter.start || actualKeyEnd > chapter.end)) return "inconsistent_range";

  const condition = meaningfulCondition(source);
  const sectionTitle = text(reference.sectionTitle);
  const guide = text(source.reason) || sectionTitle || text(chapter?.summary);
  return {
    id: JSON.stringify([id, playbackStart, watchEnd]),
    videoId: text(source.video_id) || id,
    platformVideoId: id,
    videoTitle: text(source.video_title) || "视频标题未明确",
    creator: text(source.creator) || undefined,
    href: videoLink(id, playbackStart),
    playbackStart, watchEnd,
    keyRanges: [{ start: actualKeyStart, end: actualKeyEnd }],
    shortGuide: shortExtract(guide),
    sectionTitles: sectionTitle ? [sectionTitle] : [],
    requirements: unique((source.coverage || []).filter(row => row.status === "supported").map(row => row.title)),
    conditions: condition ? [condition] : [],
    localGaps: uniqueCoverage((source.coverage || []).filter(row => row.status !== "supported")),
    chapters: chapter ? [chapter] : [],
    watchModes: text(source.watch_mode) ? [source.watch_mode!] : [],
    sources: [source],
    references: [reference],
  };
}

function merge(first: WatchPlanItem, second: WatchPlanItem): WatchPlanItem {
  const playbackStart = Math.min(first.playbackStart, second.playbackStart);
  const watchEnd = Math.max(first.watchEnd, second.watchEnd);
  const ranges = new Map<string, WatchRange>();
  [...first.keyRanges, ...second.keyRanges].forEach(range => ranges.set(JSON.stringify([range.start, range.end]), range));
  const chapters = new Map<string, Chapter>();
  [...first.chapters, ...second.chapters].forEach(chapter => chapters.set(JSON.stringify(chapter), chapter));
  return {
    ...first,
    id: JSON.stringify([first.platformVideoId, playbackStart, watchEnd]),
    href: videoLink(first.platformVideoId, playbackStart),
    playbackStart, watchEnd,
    keyRanges: [...ranges.values()].sort((a, b) => a.start - b.start || a.end - b.end),
    shortGuide: first.shortGuide || second.shortGuide,
    sectionTitles: unique([...first.sectionTitles, ...second.sectionTitles]),
    requirements: unique([...first.requirements, ...second.requirements]),
    conditions: unique([...first.conditions, ...second.conditions]),
    localGaps: uniqueCoverage([...first.localGaps, ...second.localGaps]),
    chapters: [...chapters.values()],
    watchModes: unique([...first.watchModes, ...second.watchModes]),
    sources: [...first.sources, ...second.sources],
    references: [...first.references, ...second.references],
  };
}

/** Organise already selected footage. No new retrieval, set-cover claim, or teaching judgement. */
export function buildWatchPlan(response: SearchResponse): WatchPlan {
  const { references, sourceKind } = referencesFor(response);
  const ordered = references.map((reference, order) => ({ reference, order, rank: sourceRank(reference.source, response.results) }))
    .sort((a, b) => a.rank - b.rank || a.order - b.order);
  const route: { item: WatchPlanItem; order: number }[] = [];
  const rejected: RejectedWatchSource[] = [];
  const referenceOrder = new Map(ordered.map(({ reference }, index) => [reference, index]));
  for (const [order, { reference }] of ordered.entries()) {
    const result = normalise(reference);
    if (typeof result === "string") {
      rejected.push({ reference, reason: result });
      continue;
    }
    let entry = { item: result, order };
    let position = route.length;
    // Repeat after expansion so a bridge interval also merges an earlier, now-overlapping item.
    while (true) {
      const index = route.findIndex(({ item: old }) => old.platformVideoId === entry.item.platformVideoId &&
        old.playbackStart < entry.item.watchEnd && entry.item.playbackStart < old.watchEnd);
      if (index < 0) break;
      const old = route[index];
      const [first, second] = old.order < entry.order ? [old, entry] : [entry, old];
      entry = { item: merge(first.item, second.item), order: first.order };
      position = Math.min(position, index);
      route.splice(index, 1);
    }
    route.splice(position, 0, entry);
  }
  const items = route.map(({ item }) => {
    const references = [...item.references].sort((a, b) => referenceOrder.get(a)! - referenceOrder.get(b)!);
    return { ...item, references, sources: references.map(reference => reference.source),
      sectionTitles: unique(references.map(reference => text(reference.sectionTitle)).filter(Boolean)) };
  });
  const coverage = uniqueCoverage(response.coverage || []);
  const gaps = coverage.filter(row => row.status !== "supported");
  const failed = response.learning_map?.failed_directions;
  const failedDirections = typeof failed === "number" && Number.isFinite(failed) && failed > 0 ? Math.floor(failed) : 0;
  return {
    items, rejected, sourceKind, coverage, gaps,
    conditions: unique(references.map(reference => meaningfulCondition(reference.source)).filter(Boolean)),
    assumptions: unique((response.plan?.assumptions || []).filter(value => text(value))),
    failedDirections,
    partial: response.status === "partial" || gaps.length > 0 || failedDirections > 0 || rejected.length > 0,
    warning: text(response.warning) || undefined,
    totalWatchSeconds: items.reduce((sum, item) => sum + item.watchEnd - item.playbackStart, 0),
  };
}
