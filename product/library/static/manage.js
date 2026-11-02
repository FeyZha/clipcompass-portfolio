(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  let library = null, connected = false, loading = false, busy = false, vaultEdited = false, pollTimer;
  let settingsView = location.hash === "#settings";
  let connectionMessage = "正在连接本机服务…";
  const activeStates = ["queued", "captions", "chapters", "indexing"];
  const retryable = job => job.status === "failed" || (job.status === "ready" && job.needs_window_index === true);
  const collectionId = () => library?.collections?.[0]?.collection_id;
  const canManage = () => connected && library?.imports_enabled === true && typeof library.import_token === "string" && Boolean(library.import_token.trim());
  function notice(message, warning = false) {
    $("#actionNotice").textContent = message;
    $("#actionNotice").hidden = !message;
    $("#actionNotice").classList.toggle("warning", warning);
  }
  function view() {
    if (location.hash === "#settings") settingsView = true;
    else if (location.hash === "#tasks" || !location.hash) settingsView = false;
    const settings = settingsView;
    $("#tasksView").hidden = settings; $("#settingsView").hidden = !settings;
    $("#pageTitle").textContent = settings ? "设置" : "整理状态";
    document.title = `${settings ? "设置" : "整理状态"} · ClipCompass | 视频知识库与学习助手`;
    for (const [selector, selected] of [["#tasksNav", !settings], ["#settingsNav", settings]]) {
      if (selected) $(selector).setAttribute("aria-current", "page");
      else $(selector).removeAttribute("aria-current");
    }
  }
  function videoURL(value) {
    try {
      const url = new URL(value);
      if (url.protocol !== "https:" || url.username || url.password || url.port) throw Error();
      let id;
      if (url.hostname === "youtu.be") id = url.pathname.slice(1);
      else if (["www.youtube.com", "youtube.com"].includes(url.hostname)) {
        id = url.pathname === "/watch" ? url.searchParams.get("v") : /^\/shorts\/([\w-]{11})$/.exec(url.pathname)?.[1];
      }
      if (!/^[\w-]{11}$/.test(id || "")) throw Error();
      return `https://www.youtube.com/watch?v=${id}`;
    } catch { throw Error("请填写有效的 HTTPS YouTube 单条视频链接。"); }
  }
  async function api(path, body) {
    const response = await fetch(path, {method: body ? "POST" : "GET", redirect: "error",
      headers: body ? {"Content-Type": "application/json", "X-ClipCompass-Import": library.import_token} : {},
      body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(body ? 30000 : 8000)});
    const value = await response.json();
    if (!response.ok) throw Object.assign(new Error(value.message || "请求失败，请重试。"), {status: response.status});
    return value;
  }
  function pendingTasks() {
    const ready = new Set(library?.collections?.[0]?.video_ids || []);
    return (library?.imports || []).filter(job => job.needs_window_index === true || (job.status !== "ready" && !ready.has(job.video_id)));
  }
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function render() {
    $("#connectionStatus").textContent = loading ? "正在刷新本机连接…" : connectionMessage;
    $("#refreshConnection").disabled = loading || busy;
    const writable = canManage() && !loading && !busy;
    const toolMissing = library?.caption_tool?.available === false;
    $("#videoURL").disabled = !writable;
    $("#addVideo").disabled = !writable || toolMissing;
    const unavailable = !connected ? "连接本机服务后才能收藏和整理。" : !library?.imports_enabled ? "当前未启用新视频整理，已有收藏仍可浏览和阅读。" : !canManage() ? "收藏连接无效，请刷新连接后重试。" : toolMissing ? library.caption_tool.message || "字幕工具不可用，请按安装说明准备后刷新连接；已有缓存任务仍可重试。" : "";
    $("#importAvailability").textContent = unavailable;
    $("#importAvailability").hidden = !unavailable;
    const tasks = pendingTasks();
    const working = tasks.filter(job => ["captions", "chapters", "indexing"].includes(job.status)).length;
    const needsAction = tasks.filter(retryable).length;
    $("#taskSummary").textContent = library ? `${working} 条处理中 · ${tasks.length - working - needsAction} 条等待 · ${needsAction} 条需处理${connected ? "" : "（离线，进度待更新）"}` : "连接后查看整理进度。";
    const labels = {queued: "排队中", captions: "获取字幕", chapters: "归纳章节", indexing: "建立索引", failed: "整理失败", ready: "待补齐查找"};
    $("#taskList").replaceChildren(...tasks.map(job => {
      const row = element("li", undefined, "task-item"), heading = element("div", undefined, "task-heading");
      heading.append(element("h3", job.title || "YouTube 视频"), element("span", labels[job.status] || "等待整理", `status-pill${job.status === "failed" ? " failed" : ""}`));
      row.append(heading, element("p", job.message || "等待后台更新进度。"));
      if (retryable(job)) {
        const retry = element("button", job.status === "failed" ? "重试整理" : "补齐字幕查找", "button-secondary");
        retry.type = "button"; retry.disabled = !writable;
        retry.addEventListener("click", () => {
          try { return change("/api/imports", {source_url: videoURL(job.source_url), retry: true}, "已提交，后台会继续整理。"); }
          catch (error) { notice(error.message, true); }
        });
        row.append(retry);
      }
      return row;
    }));
    $("#emptyTasks").hidden = tasks.length > 0;
    $("#emptyTasks").textContent = connected ? "暂无待整理任务。" : "连接恢复后查看最新任务，已有收藏和任务仍保留在本机。";
    const obsidian = library?.obsidian;
    if (!vaultEdited && document.activeElement !== $("#vaultPath")) $("#vaultPath").value = obsidian?.vault || "";
    $("#vaultPath").disabled = $("#syncObsidian").disabled = !writable || !obsidian;
    $("#disableObsidian").disabled = !writable || !obsidian?.enabled;
    $("#obsidianStatus").textContent = !obsidian ? "当前连接尚未提供 Obsidian 同步。" : `${obsidian.enabled ? "自动同步已开启" : "自动同步已关闭"} · ${obsidian.synced || 0} 个视频已导出${connected ? "" : "（离线状态）"}。${obsidian.error || ""}${(obsidian.errors || []).map(item => `${item.title || "笔记"}：${item.message}`).join("；")}`;
    $("#clearReport").disabled = loading || busy || typeof collectionId() !== "string" || !collectionId();
  }
  function schedule() {
    window.clearTimeout(pollTimer);
    if (connected && pendingTasks().some(job => activeStates.includes(job.status))) pollTimer = window.setTimeout(refresh, 5000);
  }
  async function refresh() {
    if (loading || busy) return;
    loading = true; window.clearTimeout(pollTimer); render();
    try {
      const value = await api("/api/library");
      if (!Array.isArray(value.collections) || !Array.isArray(value.videos) || (value.imports !== undefined && !Array.isArray(value.imports))) throw Error("收藏数据格式异常。");
      library = value; connected = true;
      connectionMessage = "已连接本机服务。";
    } catch (error) {
      connected = false;
      connectionMessage = `暂时无法连接：${error.message} 请确认启动窗口仍开启，再刷新连接。`;
    } finally { loading = false; render(); schedule(); }
  }
  async function change(path, body, message) {
    if (busy || loading || !canManage()) return;
    busy = true; notice(path === "/api/imports" ? "正在提交后台整理…" : "正在保存同步设置…"); render();
    let succeeded = false;
    try {
      const value = await api(path, body);
      if (path === "/api/imports") {
        if (!value.job || typeof value.job.video_id !== "string") throw Error("服务未返回有效的整理任务，请刷新连接核对。");
        library.imports = (library.imports || []).filter(job => job.video_id !== value.job.video_id).concat(value.job);
        if (!body.retry) $("#videoURL").value = "";
      } else {
        if (!value.obsidian || typeof value.obsidian.enabled !== "boolean") throw Error("服务未返回有效的同步状态，请刷新连接核对。");
        library.obsidian = value.obsidian;
        if (body.enabled) vaultEdited = false;
      }
      succeeded = true; notice(message);
    } catch (error) {
      if (!error.status || error.status === 403) {
        connected = false; connectionMessage = "连接已失效，请刷新连接后重试。";
      }
      notice(error.message, true);
    } finally {
      busy = false; render();
      if (succeeded) await refresh(); else schedule();
    }
  }
  $("#importForm").addEventListener("submit", event => {
    event.preventDefault();
    if (busy || loading || !canManage() || library.caption_tool?.available === false) return;
    try { return change("/api/imports", {source_url: videoURL($("#videoURL").value.trim())}, "已收藏并提交后台整理，完成后可直接搜索。"); }
    catch (error) { notice(error.message, true); }
  });
  $("#vaultPath").addEventListener("input", () => { vaultEdited = true; });
  function configureObsidian(enabled) {
    if (!library?.obsidian || (!enabled && !library.obsidian.enabled)) return;
    const vault = $("#vaultPath").value.trim();
    if (enabled && !vault) { notice("请填写知识库文件夹完整路径。", true); return; }
    return change("/api/obsidian", enabled ? {enabled, vault} : {enabled}, enabled ? "同步设置已保存，请查看导出结果。" : "自动同步已关闭，已导出的笔记保留。");
  }
  $("#obsidianForm").addEventListener("submit", event => { event.preventDefault(); return configureObsidian(true); });
  $("#disableObsidian").addEventListener("click", () => configureObsidian(false));
  $("#clearReport").addEventListener("click", () => {
    if (loading || busy || typeof collectionId() !== "string" || !collectionId()) return;
    try {
      localStorage.removeItem(`clipcompass:web:${collectionId()}`);
      notice("已清除本浏览器当前收藏范围的问题与报告，收藏和整理任务保留。");
    } catch { notice("浏览器记录无法清除，请检查浏览器存储权限后重试。", true); }
  });
  $("#refreshConnection").addEventListener("click", () => { notice(""); return refresh(); });
  window.addEventListener("hashchange", view);
  $("#serviceOrigin").textContent = location.origin;
  view(); refresh();
})();
