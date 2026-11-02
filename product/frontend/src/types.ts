export interface Coverage { title: string; status: string }
export interface ChapterPoint { title: string; start: number }
export interface Chapter {
  chapter_id?: string; title: string; summary: string; start: number; end: number;
  points?: ChapterPoint[];
}
export interface Clip {
  video_id: string; video_title: string; creator?: string; source_url: string;
  segment_id?: string; reason?: string; quote?: string; conditions?: string;
  recommended_watch_start: number; recommended_watch_end: number; core_start?: number;
  playback_start?: number; key_start?: number; key_end?: number;
  chapter?: Chapter; coverage?: Coverage[]; watch_mode?: string;
  localization?: { start_cue_id?: number; end_cue_id?: number };
}
export interface ReportSection { title: string; content: string; sources: Clip[] }
export interface LearningGroup {
  title: string; question?: string; clips: Clip[];
  points?: { question: string; reason: string }[];
}
export interface SearchResponse {
  question: string; results: Clip[]; status?: string; warning?: string;
  request_id?: string; version?: string; latency_ms?: number; answerable?: boolean;
  plan?: { task_type?: string; goal?: string; assumptions?: string[] };
  coverage?: Coverage[]; report?: { format?: 'coherent_report_v1' | 'video_guide_v1' | 'video_story_v1'; sections: ReportSection[] };
  gaps?: string[];
  evidence_assessment?: { requirement_index: number; evidence_level: string; gap: string }[];
  learning_map?: { groups: LearningGroup[]; failed_directions?: number };
}
export interface Video {
  video_id: string; title?: string; creator?: string; duration?: number;
  source_url?: string; chapters?: Chapter[];
}
export interface Library {
  collections: { collection_id: string; title?: string; video_ids: string[] }[];
  videos: Video[]; demo_questions?: { label: string; question: string }[];
  answer_mode?: 'inline';
}
