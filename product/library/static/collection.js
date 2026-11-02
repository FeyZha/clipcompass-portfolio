"use strict";

function collectionVideos(library) {
  const ids = new Set(library.collections?.[0]?.video_ids || []);
  return (library.videos || []).filter(video => ids.has(video.video_id));
}
function collectionTitle(video, overviews) {
  const entry = overviews?.[video.video_id];
  return entry && entry.title === video.title && typeof entry.display_title === "string" && entry.display_title.trim()
    ? entry.display_title : video.title || "未命名视频";
}
function filterVideos(videos, query, overviews) {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return videos.filter(video => words.every(word => `${video.title || ""} ${collectionTitle(video, overviews)} ${video.creator || ""}`.toLocaleLowerCase().includes(word)));
}
function videoDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "时长未知";
  const total = Math.floor(seconds), minutes = Math.floor(total / 60);
  return minutes >= 60 ? `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}` : `${minutes}:${String(total % 60).padStart(2, "0")}`;
}
function safeVideoURL(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && ["youtube.com", "www.youtube.com", "youtu.be"].includes(url.hostname) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

function collectionOverview(video, overviews) {
  const entry = overviews?.[video.video_id];
  return entry && entry.title === video.title && entry.duration === video.duration &&
    entry.chapter_count === (video.chapters || []).length && typeof entry.summary === "string" ? entry.summary : "";
}

if (typeof module !== "undefined") module.exports = {collectionVideos, filterVideos, videoDuration, safeVideoURL, collectionOverview, collectionTitle};
if (typeof document !== "undefined") {
  const $ = selector => document.querySelector(selector);
  let videos = [];
  let overviews = {};
  function render() {
    const matches = filterVideos(videos, $("#videoFilter").value, overviews);
    $("#listStatus").textContent = `显示 ${matches.length} / ${videos.length} 个视频`;
    $("#emptyLibrary").hidden = matches.length > 0;
    $("#emptyLibrary").textContent = videos.length ? "没有匹配的标题或作者。试试原视频标题中的词，或清空筛选查看全部。" : "当前收藏还没有视频。";
    const fragment = document.createDocumentFragment();
    // ponytail: render the small collection in full; paginate if thousands of videos make it slow.
    for (const video of matches) {
      const displayTitle = collectionTitle(video, overviews);
      const row = document.createElement("li"), number = document.createElement("span"), content = document.createElement("div");
      number.className = "video-number";
      number.textContent = String(videos.indexOf(video) + 1).padStart(2, "0");
      const title = document.createElement("h2"), meta = document.createElement("p"), url = safeVideoURL(video.source_url);
      if (url) {
        const source = document.createElement("a"), external = document.createElement("span");
        source.className = "video-source-title";
        source.href = url; source.target = "_blank"; source.rel = "noopener noreferrer";
        source.setAttribute("aria-label", `打开原视频：${displayTitle}（新标签页）`);
        source.append(document.createTextNode(displayTitle));
        external.className = "video-title-external"; external.textContent = "↗"; external.setAttribute("aria-hidden", "true");
        source.append(external); title.append(source);
      } else title.textContent = displayTitle;
      meta.textContent = `${video.creator || "作者未知"} · ${videoDuration(video.duration)} · YouTube`;
      content.append(title, meta);
      const overview = document.createElement("p");
      overview.className = "video-brief-overview";
      overview.textContent = collectionOverview(video, overviews) || "内容概要暂未准备。";
      content.append(overview);
      const reading = document.createElement("a");
      reading.className = "video-reading";
      reading.href = `/?reading=${encodeURIComponent(video.video_id)}`;
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24"); icon.setAttribute("width", "21"); icon.setAttribute("height", "21");
      icon.setAttribute("fill", "none"); icon.setAttribute("stroke", "currentColor"); icon.setAttribute("stroke-width", "1.4");
      icon.setAttribute("stroke-linecap", "round"); icon.setAttribute("stroke-linejoin", "round"); icon.setAttribute("aria-hidden", "true");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M12 5.5C9 3.8 6 3.8 3 5v14c3-1.2 6-1.2 9 .5 3-1.7 6-1.7 9-.5V5c-3-1.2-6-1.2-9 .5Zm0 0v14M6 8h3M6 11h3M15 8h3M15 11h3");
      icon.append(path);
      const label = document.createElement("span"); label.className = "video-reading-label"; label.textContent = "快速阅读";
      label.setAttribute("aria-hidden", "true"); reading.append(icon, label);
      reading.setAttribute("aria-label", `快速阅读：${displayTitle}`);
      row.append(number, content, reading);
      fragment.append(row);
    }
    $("#videoList").replaceChildren(fragment);
  }
  async function load() {
    $("#retryLibrary").hidden = true;
    $("#listStatus").textContent = "正在加载视频列表…";
    try {
      const [response, overviewData] = await Promise.all([
        fetch("/api/library"),
        fetch("/video-overviews.json").then(response => response.ok ? response.json() : {}).catch(() => ({})),
      ]);
      if (!response.ok) throw new Error("无法读取收藏");
      const library = await response.json();
      if (!Array.isArray(library.collections) || !Array.isArray(library.videos)) throw new Error("收藏数据格式异常");
      videos = collectionVideos(library);
      overviews = overviewData?.videos || {};
      $("#libraryTitle").textContent = library.collections[0]?.title || "当前收藏";
      $("#videoTotal").textContent = videos.length;
      const seconds = videos.reduce((sum, video) => sum + (Number.isFinite(video.duration) && video.duration >= 0 ? video.duration : 0), 0);
      $("#libraryDuration").textContent = `已知总时长 ${Math.floor(seconds / 3600)} 小时 ${Math.floor(seconds % 3600 / 60)} 分钟`;
      $("#videoFilter").disabled = $("#clearFilter").disabled = false;
      render();
    } catch {
      $("#libraryTitle").textContent = "暂时无法读取收藏";
      $("#listStatus").textContent = "收藏列表加载失败，请确认本地服务正在运行后重试。";
      $("#retryLibrary").hidden = false;
    }
  }
  $("#videoFilter").addEventListener("input", render);
  $("#clearFilter").addEventListener("click", () => { $("#videoFilter").value = ""; render(); $("#videoFilter").focus(); });
  $("#retryLibrary").addEventListener("click", load);
  load();
}
