(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const dom = {form: $("#searchForm"), question: $("#question"), button: $("#searchButton"), collectionTitle: $("#collectionTitle"), scopeCount: $("#scopeCount"), presetList: $("#presetList"), loading: $("#loadingCard"), loadingTitle: $("#loadingTitle"), loadingSteps: $("#loadingSteps"), workspace: $("#workspace"), answer: $("#answerCard"), noAnswer: $("#noAnswer"), videoTitle: $("#videoTitle"), reason: $("#reason"), watchRange: $("#watchRange"), coreStart: $("#coreStart"), watchButton: $("#watchButton"), watchButtonText: $("#watchButtonText"), toast: $("#toast")};
  let collectionId = "demo-mcp";
  let loadingTimer;
  let currentReport = null, collectionLoaded = false, storageWarning = "", hadSavedPage = false;
  const browserSaveWarning = "浏览器保存失败，当前报告仍可查看；关闭网页后可能无法恢复。";
  function notice(message = "") {
    $("#searchNotice").textContent = [message, storageWarning].filter(Boolean).join(" ");
    $("#searchNotice").hidden = !$("#searchNotice").textContent;
  }
  function savePage() {
    if (!collectionLoaded) return;
    try {
      localStorage.setItem(`clipcompass:web:${collectionId}`, JSON.stringify({question: dom.question.value, report: currentReport}));
      hadSavedPage = true;
      storageWarning = "";
    } catch { storageWarning = browserSaveWarning; }
  }
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"})[character]);
  async function api(path, options = {}) {
    const response = await fetch(path, {headers: {"Content-Type": "application/json"}, signal: AbortSignal.timeout(options.body ? 270000 : 8000), redirect: "error", ...options, body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body});
    const value = await response.json();
    if (!response.ok) throw Object.assign(new Error(value.message || "请求失败"), {code: value.error});
    return value;
  }
  function formatTime(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(total / 3600), minutes = Math.floor((total % 3600) / 60), rest = total % 60;
    return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}` : `${minutes}:${String(rest).padStart(2, "0")}`;
  }
  function toast(message) { dom.toast.textContent = message; dom.toast.hidden = false; window.setTimeout(() => { dom.toast.hidden = true; }, 2600); }
  function startLoading() {
    $("#clarification").hidden = true;
    const labels = ["正在理解需求", "正在搜索收藏内容", "正在核实相关原内容与覆盖范围"];
    let step = 0;
    dom.workspace.hidden = !currentReport; dom.loading.hidden = false; dom.loadingTitle.textContent = labels[step];
    [...dom.loadingSteps.children].forEach((item, index) => item.classList.toggle("active", index === step));
    loadingTimer = window.setInterval(() => { step = Math.min(step + 1, labels.length - 1); dom.loadingTitle.textContent = labels[step]; [...dom.loadingSteps.children].forEach((item, index) => item.classList.toggle("active", index <= step)); }, 900);
  }
  function stopLoading() { window.clearInterval(loadingTimer); dom.loading.hidden = true; }
  function render(response) {
    const rows = value => value === undefined || (Array.isArray(value) && value.every(row => row && typeof row === "object"));
    const clip = value => value && typeof value === "object" && rows(value.coverage) &&
      (!value.chapter || (typeof value.chapter === "object" && rows(value.chapter.points))) &&
      (value.conditions === undefined || typeof value.conditions === "string");
    const sections = response?.report?.sections;
    const rawGroups = response?.learning_map?.groups;
    if (!Array.isArray(response?.results) || !response.results.every(clip) || !rows(response.coverage) ||
      (response.plan?.assumptions !== undefined && !Array.isArray(response.plan.assumptions)) ||
      (sections !== undefined && (!Array.isArray(sections) || !sections.every(section => section &&
        Array.isArray(section.sources) && section.sources.every(clip)))) ||
      (rawGroups !== undefined && (!Array.isArray(rawGroups) || !rawGroups.every(group => group &&
        Array.isArray(group.clips) && group.clips.every(clip) && rows(group.points))))) {
      throw new Error("服务返回的报告格式不正确。");
    }
    currentReport = response;
    stopLoading(); dom.workspace.hidden = false; dom.answer.hidden = true; dom.noAnswer.hidden = true;
    $("#learningMap").hidden = true;
    $("#learningMap").classList.toggle("demand-report", false);
    $("#reportGaps").hidden = true;
    $("#reportEvidence").hidden = true;
    $("#reportEvidence").open = false;
    for(const selector of ["#reportOutline", "#reportSections", "#reportGaps", "#reportEvidenceSources"]) $(selector).innerHTML = "";
    for(const selector of ["#learningMap .eyebrow", "#reportSummary", "#mapNotice", "#reportOutline"]) $(selector).hidden = false;
    const hasReport = Array.isArray(sections) && sections.length > 0;
    const topic = response.plan?.task_type === "topic";
    const labels = {supported: topic ? "找到相关内容" : "完整回答", partial: topic ? "找到部分相关内容" : "部分回答", no_evidence: "未找到充分依据"};
    const label = labels[response.status] || (response.results?.length ? "已找到相关片段，完整性未评估" : "未找到充分依据");
    const covered = (response.coverage || []).filter(row => row.status === "supported");
    const missing = (response.coverage || []).filter(row => row.status !== "supported");
    const statusText = {not_found: "未找到充分依据", partial_evidence: "有相关片段，仍缺部分依据", technical_failure: "检索或定位失败，可重试", dependency_missing: "前置内容缺少依据"};
    const gaps = missing.map(row => `${row.title}（${statusText[row.status] || "缺少充分依据"}）`).join("；");
    const direct = ["topic", "specific", "compare", "procedure"].includes(response.plan?.task_type);
    const scope = response.status === "supported" ? (topic ? "本次已找到匹配原需求的内容，具体范围见各片段。" : response.plan?.task_type === "learn" ? "已覆盖本次检索计划，不代表完整课程。" : direct ? "本次返回片段已覆盖所列需求，单段范围见下方。" : "已找到支持本次问题的片段。") : "";
    $("#intentNote").textContent = hasReport ? `${label}。` : `${label}。${scope}${response.plan?.goal ? ` ${topic ? "原始需求" : "本次理解"}：${response.plan.goal}。` : ""}${!topic && response.plan?.assumptions?.length ? ` 本次默认：${response.plan.assumptions.join("；")}。` : ""}${covered.length ? ` 已覆盖：${covered.map(row => row.title).join("；")}。` : ""}`;
    if(response.warning) $("#intentNote").textContent += ` ${response.warning}`;
    $("#intentNote").hidden = false;
    if(hasReport) {
      $("#intentNote").textContent = response.warning || "";
      $("#intentNote").hidden = !response.warning;
      renderDemandReport(sections, response.question);
      renderGaps(missing, response.status, statusText, true, true);
      dom.workspace.scrollIntoView({behavior: "smooth", block: "start"}); return;
    }
    const groups = response.learning_map?.groups?.length ? response.learning_map.groups :
      response.results?.length && (response.results.length > 1 || response.results.some(item => item.chapter || Array.isArray(item.coverage))) ?
        response.results.map(item => ({title:item.chapter?.title || item.video_title,question:response.question,clips:[item]})) : null;
    if (groups) {
      renderMap({...response.learning_map,groups}, response.question, direct);
      renderGaps(missing, response.status, statusText, direct);
      dom.workspace.scrollIntoView({behavior: "smooth", block: "start"}); return;
    }
    if(gaps) $("#intentNote").textContent += ` 尚未覆盖：${gaps}。`;
    else if(response.status === "partial") $("#intentNote").textContent += " 仍有未覆盖内容；请结合片段的讲解范围查看。";
    if (!response.results?.length) {
      dom.noAnswer.querySelector("h2").textContent = "本次未找到充分依据。";
      dom.noAnswer.querySelector("div > p:last-child").textContent = "可补充你关心的具体问题，或查看收藏列表；未找到不等于内容不存在。";
      dom.noAnswer.hidden = false; dom.workspace.scrollIntoView({behavior: "smooth", block: "start"}); return;
    }
    const item = response.results[0];
    dom.answer.querySelector(".answer-stamp small").textContent = label;
    dom.videoTitle.textContent = item.video_title; dom.reason.textContent = item.reason;
    dom.watchRange.textContent = `${formatTime(item.recommended_watch_start)}–${formatTime(item.recommended_watch_end)}`;
    const playbackStart = item.playback_start ?? item.core_start;
    dom.coreStart.textContent = formatTime(playbackStart); dom.watchButtonText.textContent = `从 ${formatTime(playbackStart)} 开始观看`;
    dom.watchRange.previousElementSibling.textContent = item.localization ? "答案片段" : "建议观看";
    $(".watch-note").textContent = topic ? "按原字幕查看相关内容，具体范围见本段标注。" : response.status === "partial" ? "只展示原字幕已支持的部分；尚未覆盖的要求请查看上方说明。" : item.localization ? "按原始字幕定位回答问题的片段；播放从片段起点开始，范围不再包含无关的相邻知识点。" : "推荐起点用于快速进入主题；建议观看范围包含理解完整解释所需的相邻上下文。";
    dom.watchButton.href = watchLink(item, playbackStart).replaceAll("&amp;", "&"); dom.answer.hidden = false;
    dom.workspace.scrollIntoView({behavior: "smooth", block: "start"});
  }
  function watchLink(item, start = item.recommended_watch_start) {
    try {
      const url = new URL(item.source_url);
      if (url.protocol !== "https:" || !["www.youtube.com", "youtube.com"].includes(url.hostname) || url.username || url.password) return "#";
      url.searchParams.set("t", `${Math.floor(start)}s`);
      return escapeHTML(url.href);
    } catch { return "#"; }
  }
  function renderGaps(missing, status, statusText, direct, answer = false) {
    missing = missing.filter((row, index, all) => all.findIndex(other => other.title === row.title && other.status === row.status) === index);
    $("#reportGaps").hidden = !missing.length && status !== "partial";
    $("#reportGaps").innerHTML = missing.length ? `<h3>${answer ? "当前回答的限制" : `尚未覆盖的${direct ? "要求" : "方向"}`}</h3><ul>${missing.map(row => `<li>${escapeHTML(row.title)}：${escapeHTML(statusText[row.status] || "缺少充分依据")}</li>`).join("")}</ul>` : status === "partial" ? (answer ? "当前依据仍不充分，以上回答尚未覆盖全部问题。" : "仍有未覆盖内容；请结合下列片段的讲解范围查看。") : "";
  }
  function renderDemandReport(sections, question) {
    $("#learningMap").hidden = false;
    $("#learningMap").classList.toggle("demand-report", true);
    $("#mapTitle").textContent = "回答";
    $("#reportQuestion").textContent = question;
    for(const selector of ["#learningMap .eyebrow", "#reportSummary", "#mapNotice", "#reportOutline"]) {
      $(selector).hidden = true;
      $(selector).textContent = "";
    }
    $("#reportSections").innerHTML = sections.map((section, index) => `<section class="report-section report-point" id="report-section-${index}" aria-labelledby="report-heading-${index}">
      <h3 id="report-heading-${index}">${escapeHTML(section.title)}</h3><p class="report-explanation">${escapeHTML(section.content)}</p>
      ${reportConditions(section.sources, section.content)}</section>`).join("");
    renderReportEvidence(sections);
  }
  function reportCondition(source) {
    const value = source.conditions?.trim() || "";
    return /^原字幕未明确[。.!！]?$/.test(value) ? "" : value;
  }
  function reportConditions(sources, content = "") {
    return [...new Set(sources.map(reportCondition).filter(Boolean))].filter(value => !String(content).includes(value)).map(value => `<p class="report-condition">适用条件：${escapeHTML(value)}</p>`).join("");
  }
  function reportLimitations(sources) {
    const missing = sources.flatMap(source => source.coverage || []).filter(row => row.status !== "supported");
    return [...new Set(missing.map(row => row.title).filter(Boolean))].map(value => `<p class="report-source-coverage">本来源未提供依据：${escapeHTML(value)}</p>`).join("");
  }
  function renderReportEvidence(sections) {
    const groups = new Map();
    sections.forEach((section, sectionIndex) => section.sources.forEach(source => {
      const start = source.key_start ?? source.playback_start ?? source.recommended_watch_start;
      const end = source.key_end ?? source.recommended_watch_end;
      const identity = JSON.stringify([source.video_id || source.source_url, start, end, source.chapter?.start, source.chapter?.end]);
      if(!groups.has(identity)) groups.set(identity, {sources: [], evidence: new Map()});
      const group = groups.get(identity);
      group.sources.push(source);
      const evidenceKey = JSON.stringify([source.creator, source.video_title, source.source_url, source.quote, source.conditions, source.coverage]);
      if(!group.evidence.has(evidenceKey)) group.evidence.set(evidenceKey, {source, sections: new Map()});
      group.evidence.get(evidenceKey).sections.set(sectionIndex, section.title);
    }));
    $("#reportEvidenceSources").innerHTML = [...groups.values()].map(group => {
      const titles = [...new Set(group.sources.map(source => source.video_title).filter(Boolean))];
      const creators = [...new Set(group.sources.map(source => source.creator || "作者未明确"))];
      const links = new Map(), summaries = new Set();
      const addLink = (source, start, label) => {
        const href = watchLink(source, start);
        if(href === "#") return;
        if(!links.has(href)) links.set(href, new Set());
        links.get(href).add(label);
      };
      group.sources.forEach(source => {
        const start = source.key_start ?? source.playback_start ?? source.recommended_watch_start;
        const end = source.key_end ?? source.recommended_watch_end;
        const key = () => addLink(source, start, `关键片段 ${formatTime(start)}–${formatTime(end)}`);
        const chapter = () => {
          if(source.chapter) addLink(source, source.chapter.start, `所在章节 ${formatTime(source.chapter.start)}–${formatTime(source.chapter.end)}`);
        };
        if(source.watch_mode === "chapter") { chapter(); key(); } else { key(); chapter(); }
        if(source.chapter?.summary) summaries.add(source.chapter.summary);
        (source.chapter?.points || []).forEach(point => addLink(source, point.start, `${formatTime(point.start)} ${point.title}`));
      });
      return `<article class="report-evidence-source"><h3>${escapeHTML(titles.join(" / "))}</h3><p class="report-evidence-creator">${escapeHTML(creators.join(" / "))}</p>
        ${[...group.evidence.values()].map(({source, sections: references}) => `<div class="report-evidence-item"><p class="report-evidence-association">对应回答：${[...references].map(([index, title]) => `<a href="#report-section-${index}">${escapeHTML(title)}</a>`).join("、")}</p>
          ${source.quote ? `<blockquote class="report-quote">${escapeHTML(source.quote)}</blockquote>` : ""}
          ${reportCondition(source) ? `<p class="report-evidence-condition">适用条件：${escapeHTML(reportCondition(source))}</p>` : ""}${reportLimitations([source])}</div>`).join("")}
        <div class="report-evidence-links">${[...links].map(([href, labels]) => `<a href="${href}" target="_blank" rel="noopener">${escapeHTML([...labels].join("；"))} ↗</a>`).join("")}</div>
        ${[...summaries].map(summary => `<p class="report-evidence-summary">章节内容：${escapeHTML(summary)}</p>`).join("")}</article>`;
    }).join("");
    $("#reportEvidence").hidden = !groups.size;
  }
  function chapterDetails(item, quote = "") {
    const c = item.chapter;
    if(!c && !quote) return "";
    return `<details class="chapter-details"><summary>${quote ? (c ? "原字幕依据与章节内容" : "原字幕依据") : "本单元内容与内部导航"}</summary>
      ${quote ? `<blockquote class="report-quote">${escapeHTML(quote)}</blockquote>` : ""}
      ${c ? `<p>${escapeHTML(c.summary)}</p><ul>${(c.points || []).map(point => `<li><a href="${watchLink(item, point.start)}" target="_blank" rel="noopener">${formatTime(point.start)} ${escapeHTML(point.title)} ↗</a></li>`).join("")}</ul>` : ""}</details>`;
  }
  function renderMap(map, question, direct = false) {
    $("#learningMap").hidden = false;
    const route = direct ? map.groups.flatMap(group => group.clips) : buildLearningRoute(map.groups);
    const seconds = route.reduce((total, item) => total + item.recommended_watch_end - item.recommended_watch_start, 0);
    $("#reportQuestion").textContent = question;
    const chapters = map.groups.some(group => group.clips.some(item => item.chapter));
    $("#learningMap .eyebrow").textContent = direct ? "RELATED VIDEO CLIPS" : "YOUR LEARNING BRIEF";
    $("#mapTitle").textContent = direct ? "与本次需求相关的视频片段。" : "围绕问题，整理成一份报告。";
    $("#reportSummary").textContent = direct ? `${route.length} 个相关片段 · ${new Set(route.map(item => item.video_id)).size} 个来源视频` : `${map.groups.length} 个${chapters ? "内容单元" : "知识点"} · ${new Set(route.map(item => item.video_id)).size} 个来源视频 · 建议观看去重后约 ${formatTime(seconds)}`;
    $("#mapNotice").textContent = (direct ? "以下按相关性排列，内容仅来自当前收藏的字幕。本段未覆盖仅指该片段，不代表原视频或收藏中没有。" : "以下按建议学习顺序整理，内容仅来自当前收藏的字幕，不代表完整课程。") + (map.failed_directions ? `另有 ${map.failed_directions} 个方向检索失败，本报告暂未纳入，可重试。` : "");
    $("#reportOutline").innerHTML = map.groups.map((group, index) => `<a href="#report-section-${index}">${String(index + 1).padStart(2, "0")} ${escapeHTML(group.title)}</a>`).join("");
    $("#reportSections").innerHTML = map.groups.map((group, index) => `<section class="report-section" id="report-section-${index}" aria-labelledby="report-heading-${index}">
      <span class="report-number">${String(index + 1).padStart(2, "0")}</span><div><h3 id="report-heading-${index}">${escapeHTML(group.title)}</h3>
      <p class="report-focus">关联问题：${escapeHTML(group.question)}</p>${group.points ? group.points.map(point => `<p class="report-explanation">${escapeHTML(point.question)}<br>${escapeHTML(point.reason)}</p>`).join("") : ""}${group.clips.map(item => `${group.points ? "" : `<p class="report-explanation">${escapeHTML(item.reason)}</p>`}${clipCoverage(item)}${item.chapter ? chapterSource(item,direct) : `<div class="report-source"><span>视频依据</span><a href="${watchLink(item)}" target="_blank" rel="noopener">观看 ${formatTime(item.recommended_watch_start)}–${formatTime(item.recommended_watch_end)} ↗</a><small>${escapeHTML(item.video_title)}</small></div>`}`).join("")}</div></section>`).join("");
  }
  function clipCoverage(item) {
    if(!Array.isArray(item.coverage)) return "";
    const supported = item.coverage.filter(row => row.status === "supported").map(row => row.title);
    const missing = item.coverage.filter(row => row.status !== "supported").map(row => row.title);
    return `<p class="report-focus">本段已覆盖：${escapeHTML(supported.join("；") || (item.coverage.length ? "无" : "未标注"))}。</p><p class="report-focus">本段未覆盖：${escapeHTML(missing.join("；") || (item.coverage.length ? "无" : "未标注"))}。</p>`;
  }
  function chapterSource(item, direct = false) {
    const c = item.chapter;
    const full = `<a href="${watchLink(item, c.start)}" target="_blank" rel="noopener">${direct ? "观看所在章节" : "观看完整内容单元"} ${formatTime(c.start)}–${formatTime(c.end)} · ${formatTime(c.end-c.start)} ↗</a>`;
    const key = `<a href="${watchLink(item, item.key_start)}" target="_blank" rel="noopener">直达关键点 ${formatTime(item.key_start)}–${formatTime(item.key_end)} ↗</a>`;
    return `<div class="report-source chapter-source"><span>${direct ? (item.watch_mode === "chapter" ? "查看相关原章节" : "相关片段 · 直达关键点") : item.watch_mode === "chapter" ? "建议先看完整讲解" : "具体问题 · 优先直达关键点"}</span>${item.watch_mode === "chapter" ? full+key : key+full}<small>${escapeHTML(item.video_title)}</small></div>${chapterDetails(item)}`;
  }
  async function loadCollection() {
    const library = await api("/api/library"), collection = library.collections?.[0];
    if (!collection?.collection_id || !Array.isArray(library.videos)) throw new Error("无法读取收藏，请确认本地服务正在运行后刷新网页。");
    collectionId = collection?.collection_id || "demo-mcp"; dom.collectionTitle.textContent = collection?.title || "收藏范围";
    dom.scopeCount.textContent = `· ${collection?.video_ids?.length || 0} 个视频已纳入检索`;
    $(".boundary span").textContent = `${collection?.video_ids?.length || 0} 个视频已纳入检索`;
    dom.question.placeholder = library.demo_questions?.[0]?.question || "描述你想从收藏视频中找到的知识";
    if (library.videos?.some(video => video.chapters?.length)) {
      $(".promise").textContent = "直接读懂收藏中的答案，需要核对时再查看依据与原片。";
    }
    dom.presetList.innerHTML = (library.demo_questions || []).map((item) => `<button type="button" data-question="${escapeHTML(item.question)}"><small>${escapeHTML(item.label)}</small>${escapeHTML(item.question)}</button>`).join("");
    $(".presets").hidden = !library.demo_questions?.length;
    collectionLoaded = true;
    try {
      const cached = JSON.parse(localStorage.getItem(`clipcompass:web:${collectionId}`) || "null");
      hadSavedPage = cached !== null;
      if (typeof cached?.question === "string") dom.question.value = cached.question;
      if (Array.isArray(cached?.report?.results)) render(cached.report);
    } catch { currentReport = null; storageWarning = "上次报告未能恢复；可重新查找，收藏仍保留。"; }
    dom.button.disabled = false;
    notice();
  }
  dom.presetList.addEventListener("click", (event) => { const button = event.target.closest("[data-question]"); if (!button) return; dom.question.value = button.dataset.question; savePage(); notice(); dom.question.focus(); });
  dom.question.addEventListener("input", () => { savePage(); notice(); });
  function clearSavedPage() {
    currentReport = null; hadSavedPage = false; dom.question.value = "";
    dom.workspace.hidden = true; $("#clarification").hidden = true;
    $("#reportEvidence").hidden = true; $("#reportEvidence").open = false;
    $("#reportEvidenceSources").innerHTML = "";
    notice("已清除本浏览器的问题与报告，收藏保留。");
  }
  window.addEventListener("storage", event => {
    if (collectionLoaded && event.newValue === null && (event.key === null || event.key === `clipcompass:web:${collectionId}`)) clearSavedPage();
  });
  window.addEventListener("pageshow", event => {
    if (!event.persisted || !collectionLoaded || !hadSavedPage) return;
    try { if (localStorage.getItem(`clipcompass:web:${collectionId}`) === null) clearSavedPage(); }
    catch { storageWarning = browserSaveWarning; notice(); }
  });
  $("#editQuestion").addEventListener("click", () => { dom.question.focus(); dom.question.scrollIntoView({behavior: "smooth", block: "center"}); });
  dom.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (dom.button.disabled || !collectionLoaded) return;
    dom.button.disabled = true; dom.button.querySelector("span").textContent = "正在查找"; savePage();
    notice(currentReport ? "正在查找新需求，下方仍是上一份报告。" : ""); startLoading();
    try {
      const result = await api("/api/search", {method: "POST", body: {question: dom.question.value, collection_id: collectionId}});
      if (!Array.isArray(result.results)) throw new Error("服务返回的报告格式不正确。");
      render(result); savePage(); notice();
    }
    catch (error) {
      stopLoading();
      if (error.code === "clarification_required") {
        $("#clarificationText").textContent = error.message; $("#clarification").hidden = false;
        notice(currentReport ? "请补充需求；下方保留上一份报告。" : "");
        $("#editQuestion").focus();
      } else {
        notice(`本次请求未能完成：${error.message} 这不代表收藏里没有答案，请重试。${currentReport ? " 下方保留上一份报告。" : ""}`);
      }
    }
    finally { dom.button.disabled = false; dom.button.querySelector("span").textContent = "从收藏中查找"; }
  });
  dom.button.disabled = true;
  loadCollection().catch((error) => notice(`收藏连接失败：${error.message} 请启动本地服务后刷新网页。`));
})();
