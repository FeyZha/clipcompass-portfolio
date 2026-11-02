import { useEffect, useId, useRef, useState } from "react";
import type { Video } from "./types";
import "./library-shelf.css";

interface LibraryShelfProps {
  videos: Video[];
  collectionTitle: string;
  compact?: boolean;
  disabled?: boolean;
  onUseTopic: (question: string) => void;
}

function videoTitle(video: Video): string {
  return video.title?.trim() || "未命名视频";
}

function durationText(duration: number | undefined): string | null {
  if (typeof duration !== "number" || !Number.isFinite(duration) || duration <= 0) return null;
  const total = Math.floor(duration);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = String(total % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${seconds}` : `${minutes}:${seconds}`;
}

function VideoMetadata({ video }: { video: Video }) {
  const duration = durationText(video.duration);
  return <span className="cc-shelf-video-meta">
    {duration ? <span aria-label={`时长 ${duration}`}>{duration}</span> : null}
    {video.chapters?.length ? <span>{video.chapters.length} 个章节</span> : null}
  </span>;
}

export function LibraryShelf({ videos, collectionTitle, compact = false, disabled = false,
  onUseTopic }: LibraryShelfProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const browserRef = useRef<HTMLDetailsElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);
  const focusSelection = useRef(false);
  const selectedVideo = videos.find((video) => video.video_id === selectedId);
  const panelId = useId();
  const title = collectionTitle.trim() || "我的收藏";
  const chapters = selectedVideo?.chapters?.filter((chapter) => chapter.title?.trim()) || [];
  useEffect(() => {
    if (focusSelection.current && expanded && selectedVideo) {
      focusSelection.current = false;
      selectionRef.current?.focus();
    }
  }, [expanded, selectedVideo]);
  const browsePreview = (videoId: string) => {
    focusSelection.current = true;
    setSelectedId(videoId);
    setExpanded(true);
    if (browserRef.current) browserRef.current.open = true;
  };

  return <section className={`cc-library-shelf${compact ? " cc-library-shelf-compact" : ""}`} aria-label={`浏览收藏内容：${title}`}>
    <details ref={browserRef} className="cc-shelf-browser" onToggle={(event) => setExpanded(event.currentTarget.open)}>
      <summary>
        <span className="cc-shelf-summary-action">浏览收藏</span>
        <svg className="cc-shelf-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m4.5 6.25 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="cc-shelf-browser-content">
        {videos.length ? <>
          <ul className="cc-shelf-rail" tabIndex={0} aria-label="视频索引，可横向滚动">
            {videos.map((video) => <li key={video.video_id}>
              <button type="button" className="cc-shelf-video" aria-pressed={selectedId === video.video_id}
                aria-controls={panelId} onClick={() => setSelectedId(video.video_id)}>
                <span className="cc-shelf-video-title">{videoTitle(video)}</span>
                <VideoMetadata video={video} />
              </button>
            </li>)}
          </ul>
          <div id={panelId} ref={selectionRef} tabIndex={-1} className="cc-shelf-selection" aria-live="polite">
            {selectedVideo ? <>
              <h3>{videoTitle(selectedVideo)}</h3>
              {selectedVideo.creator?.trim() ? <p className="cc-shelf-creator">{selectedVideo.creator}</p> : null}
              <VideoMetadata video={selectedVideo} />
              <p className="cc-shelf-reading"><a href={`/?reading=${encodeURIComponent(selectedVideo.video_id)}`}>快速阅读 →</a></p>
              {chapters.length ? <>

                <ul className="cc-shelf-chapters" aria-label="选择章节填入问题">
                  {chapters.map((chapter, index) => <li key={chapter.chapter_id || `${chapter.start}:${index}`}>
                    <button type="button" disabled={disabled}
                      onClick={() => onUseTopic(`请解释「${chapter.title.trim()}」`)}>{chapter.title}</button>
                  </li>)}
                </ul>
              </> : <p className="cc-shelf-topic-hint">暂无章节</p>}
            </> : <p className="cc-shelf-topic-hint">选择视频</p>}
          </div>
        </> : <p className="cc-shelf-empty">收藏中还没有可浏览的视频。<a href="http://127.0.0.1:14855/#view=collection">前往我的收藏</a></p>}
      </div>
    </details>
    {!compact && !expanded && videos.length ? <div className="cc-shelf-sources"><ul className="cc-shelf-rail cc-shelf-preview" tabIndex={0} aria-label="收藏预览，可横向滚动">
      {videos.slice(0, 3).map((video) => <li key={video.video_id}>
        <button type="button" className="cc-shelf-preview-item cc-shelf-preview-video" aria-controls={panelId}
          onClick={() => browsePreview(video.video_id)}>
          <span className="cc-shelf-preview-creator">{video.creator||'收藏视频'}</span>
          <span className="cc-shelf-video-title">{videoTitle(video)}</span>
          <VideoMetadata video={video} />
        </button>
      </li>)}
    </ul></div> : null}
  </section>;
}
