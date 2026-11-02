import type { WatchPlanItem } from './watch-plan';
import { formatTime } from './Report';

/** Use only the platform ID and interval already validated by watch-plan. */
export function embedUrl(item: WatchPlanItem): string | null {
  if (!/^[A-Za-z0-9_-]{11}$/.test(item.platformVideoId) ||
      !Number.isFinite(item.playbackStart) || !Number.isFinite(item.watchEnd) ||
      item.playbackStart < 0 || item.watchEnd <= item.playbackStart ||
      item.watchEnd > Number.MAX_SAFE_INTEGER) return null;
  const url = new URL(`https://www.youtube.com/embed/${item.platformVideoId}`);
  url.search = new URLSearchParams({ start: String(Math.floor(item.playbackStart)),
    end: String(Math.ceil(item.watchEnd)), autoplay: '1', playsinline: '1', rel: '0', hl: 'zh-CN' }).toString();
  return url.toString();
}

function PlayIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m9 5 10 7-10 7V5Z" fill="currentColor" />
  </svg>;
}

export function InlineVideo({ item, active, onOpen, onClose }: {
  item: WatchPlanItem; active: boolean; onOpen: () => void; onClose: () => void;
}) {
  const url = embedUrl(item);
  if (!url) return <p className="cc-report-note">这段视频的播放范围未能核实，请重新提问。</p>;
  const range = `${formatTime(item.playbackStart)}–${formatTime(item.watchEnd)}`;
  return <figure className={`cc-inline-video${active ? ' is-open' : ''}`}>
    {active ? <>
      <div className="cc-inline-video-screen">
        <iframe src={url} title={`视频讲解 · ${item.videoTitle} · ${range}`}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      </div>
      <figcaption className="cc-inline-video-caption">
        <div className="cc-inline-video-copy">
          <span className="cc-inline-video-title">{item.videoTitle}</span>
          <span className="cc-inline-video-range">{range}</span>
        </div>
        <button type="button" className="cc-inline-video-close" onClick={onClose} aria-label="收起视频">收起</button>
        <a className="cc-inline-video-fallback" href={item.href} target="_blank" rel="noopener noreferrer">在YouTube打开</a>
      </figcaption>
    </> : <button type="button" className="cc-report-play" onClick={onOpen}
      aria-label={`播放这段讲解 · ${item.videoTitle} · ${range}`}>
      <span className="cc-inline-video-icon"><PlayIcon /></span>
      <span className="cc-inline-video-copy">
        <span className="cc-inline-video-kicker">原片讲解</span>
        <span className="cc-inline-video-title">{item.videoTitle}</span>
        <span className="cc-inline-video-range">{range}<span className="cc-inline-video-hint">在此页观看</span></span>
      </span>
    </button>}
  </figure>;
}
