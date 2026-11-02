/* User-authorized source adaptation; original shell and interactions retained. */
import * as He from 'react';
import * as D from 'react/jsx-runtime';
import {createAtlasGraph as GR} from './runtime.js';
const Hx='cn', It=(text)=>text;
function eC(){try{return localStorage.getItem('clipcompass:atlas-theme')==='light'?'light':'dark'}catch{return 'dark'}}
function ZR(o) {
  const n = new Map(o.concepts.map((a) => [a.id, a]));
  return { clusters: o.clusters, nodes: o.concepts.map((a) => [a.name, a.cluster, Math.min(5, 1 + o.relations.filter((s) => s.from === a.id || s.to === a.id).length * 0.4), a.summary]), edges: o.relations.map((a) => [n.get(a.from).name, n.get(a.to).name, a.kind]) };
}
function Pe({ name: o, size: n = 18 }) {
  const a = { star: D.jsx(D.Fragment, { children: D.jsx("path", { d: "m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" }) }), graph: D.jsxs(D.Fragment, { children: [D.jsx("path", { d: "m5 6 13-2-3 14L5 6l-2 13 12-1" }), D.jsx("circle", { cx: "5", cy: "6", r: "2" }), D.jsx("circle", { cx: "18", cy: "4", r: "2" }), D.jsx("circle", { cx: "15", cy: "18", r: "2" })] }), book: D.jsx(D.Fragment, { children: D.jsx("path", { d: "M3 4h7l2 2 2-2h7v15h-7l-2 2-2-2H3Z M12 6v15" }) }), plus: D.jsx("path", { d: "M12 5v14M5 12h14" }), minus: D.jsx("path", { d: "M5 12h14" }), search: D.jsxs(D.Fragment, { children: [D.jsx("circle", { cx: "10", cy: "10", r: "6" }), D.jsx("path", { d: "m15 15 5 5" })] }), sun: D.jsxs(D.Fragment, { children: [D.jsx("circle", { cx: "12", cy: "12", r: "4" }), D.jsx("path", { d: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" })] }), moon: D.jsx("path", { d: "M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z" }), upload: D.jsx(D.Fragment, { children: D.jsx("path", { d: "M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5" }) }), close: D.jsx("path", { d: "m6 6 12 12M6 18 18 6" }), arrow: D.jsx("path", { d: "M5 12h14m-5-5 5 5-5 5" }), external: D.jsx("path", { d: "M13 4h7v7m0-7L10 14M9 4H4v16h16v-5" }), file: D.jsx(D.Fragment, { children: D.jsx("path", { d: "M5 3h9l5 5v13H5Z M14 3v6h5M8 13h8M8 17h5" }) }), reset: D.jsx(D.Fragment, { children: D.jsx("path", { d: "M4 10a8 8 0 1 1 1 7M4 3v7h7" }) }), orbit: D.jsxs(D.Fragment, { children: [D.jsx("circle", { cx: "12", cy: "12", r: "3" }), D.jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "5", transform: "rotate(-35 12 12)" })] }), menu: D.jsx("path", { d: "M4 6h16M4 12h16M4 18h16" }), check: D.jsx("path", { d: "m5 12 4 4L19 6" }), download: D.jsx("path", { d: "M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" }), list: D.jsx("path", { d: "M8 5h13M8 12h13M8 19h13M3 5h1M3 12h1M3 19h1" }), layers: D.jsx(D.Fragment, { children: D.jsx("path", { d: "m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 17l10 5 10-5" }) }) };
  return D.jsx("svg", { width: n, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: a[o] || a.star });
}
function Up({ title: o, onClose: n, children: a, wide: s = false }) {
  const c = He.useRef(null);
  return He.useEffect(() => (c.current?.showModal(), () => c.current?.close()), []), D.jsxs("dialog", { ref: c, className: "g-dialog" + (s ? " g-dialog-wide" : ""), "aria-label": o, onCancel: (f) => {
    f.preventDefault(), n();
  }, onClick: (f) => {
    if (f.target === f.currentTarget) {
      const h = f.currentTarget.getBoundingClientRect();
      (f.clientX < h.left || f.clientX > h.right || f.clientY < h.top || f.clientY > h.bottom) && n();
    }
  }, children: [D.jsxs("header", { className: "g-dialog-head", children: [D.jsx("h2", { children: o }), D.jsx("button", { className: "g-icon", onClick: n, "aria-label": "Close / 关闭", children: D.jsx(Pe, { name: "close" }) })] }), a] });
}
const nC = Array.from({ length: 620 }, (o, n) => {
  const a = (s) => {
    const c = Math.sin(s * 127.1 + 311.7) * 43758.5453;
    return c - Math.floor(c);
  };
  return { x: a(n + 1) * 1400, y: a(n + 901) * 1e3, r: n % 31 === 0 ? 1.4 : 0.35 + a(n + 90) * 0.7, opacity: 0.13 + a(n + 801) * 0.55 };
});
function iC() {
  return D.jsxs("div", { className: "g-cosmos", "aria-hidden": "true", children: [D.jsx("div", { className: "g-nebula" }), D.jsxs("svg", { className: "g-starfield", viewBox: "0 0 1400 1000", preserveAspectRatio: "xMidYMid slice", children: [D.jsxs("defs", { children: [D.jsx("filter", { id: "starglow", children: D.jsx("feGaussianBlur", { stdDeviation: "2" }) }), D.jsxs("filter", { id: "cloudnoise", children: [D.jsx("feTurbulence", { type: "fractalNoise", baseFrequency: ".008 .013", numOctaves: "4", seed: "12" }), D.jsx("feColorMatrix", { type: "saturate", values: "0" })] }), D.jsx("mask", { id: "cloudmask", children: D.jsx("rect", { width: "1400", height: "1000", filter: "url(#cloudnoise)" }) }), D.jsxs("linearGradient", { id: "cloudcolor", x2: "1", y2: ".8", children: [D.jsx("stop", { stopColor: "#3474b7", stopOpacity: "0" }), D.jsx("stop", { offset: ".4", stopColor: "#7672d4" }), D.jsx("stop", { offset: ".65", stopColor: "#366ebd" }), D.jsx("stop", { offset: "1", stopColor: "#272540", stopOpacity: "0" })] })] }), D.jsx("ellipse", { className: "g-cloud", cx: "700", cy: "530", rx: "760", ry: "290", transform: "rotate(-32 700 530)", fill: "url(#cloudcolor)", mask: "url(#cloudmask)" }), nC.map((o, n) => D.jsxs("g", { opacity: o.opacity, children: [D.jsx("circle", { cx: o.x, cy: o.y, r: o.r, fill: "currentColor" }), n % 31 === 0 && D.jsxs(D.Fragment, { children: [D.jsx("circle", { cx: o.x, cy: o.y, r: "4", fill: "currentColor", filter: "url(#starglow)", opacity: ".7" }), D.jsx("path", { d: `M${o.x - 3} ${o.y}h6M${o.x} ${o.y - 3}v6`, stroke: "currentColor", strokeWidth: ".4" })] })] }, n))] })] });
}
export function AtlasShell({data, renderDetail, renderSources, composer, onCollection}) {
  const [o, n] = He.useState(data), [a, s] = He.useState([]), [c, f] = He.useState(eC), [h, d] = He.useState(""), [m, _] = He.useState([]), [g, p] = He.useState(null), [x, M] = He.useState(false), [T, R] = He.useState("atlas"), [S, y] = He.useState({ flow: true, label: true, spin: false }), [P, O] = He.useState(null), [N, et] = He.useState(false), [V, I] = He.useState(""), q = He.useRef(null), U = He.useRef(null), C = He.useRef(null), B = He.useRef({}), at = He.useRef(null);
  He.useEffect(() => {
    p(null), _([]), d(""), R("atlas"), M(false), C.current && (C.current.value = "");
    let initialized = false;
    const savedNode = new URLSearchParams(location.hash.slice(1)).get("node");
    const pt = GR({ els: { stage: q.current, labels: U.current, q: C.current, ...B.current }, data: ZR(o), initialTheme: c, language: Hx, emit: { gate: M, list: () => {
    }, drawer: (A) => {p(A?.i ?? null); if(!initialized)return; const current=new URLSearchParams(location.hash.slice(1)).get("node"); if(A && current!==o.concepts[A.i].id) history.pushState(null,"", "#node="+encodeURIComponent(o.concepts[A.i].id)); else if(!A && current) history.pushState(null,"", "#");}, tools: y, theme: () => {
    } } });
    initialized = true;
    const savedIndex = o.concepts.findIndex(item => item.id === savedNode);
    if(savedIndex >= 0)pt.selectAt(savedIndex);
    const restore=()=>{const key=new URLSearchParams(location.hash.slice(1)).get("node"), index=o.concepts.findIndex(item=>item.id===key);index>=0?pt.selectAt(index):pt.clearSel();};
    addEventListener("popstate",restore);
    return at.current = pt, () => {
      removeEventListener("popstate",restore);pt.dispose(), at.current = null;
    };
  }, [o]), He.useEffect(() => {
    document.documentElement.dataset.theme = c, at.current?.setTheme(c);
    try {
      localStorage.setItem("clipcompass:atlas-theme", c);
    } catch {
      I(It("主题仅在本次页面生效，浏览器禁止保存。"));
    }
  }, [c]), He.useEffect(() => {
    if (!V) return;
    const pt = setTimeout(() => I(""), 4500);
    return () => clearTimeout(pt);
  }, [V]);
  const ot = (pt, A = false) => {
    if(h && !(o.concepts[pt].name+" "+o.concepts[pt].summary).toLowerCase().includes(h.toLowerCase())){d("");at.current?.setQuery("");}
    if(m.includes(o.concepts[pt].cluster)){m.forEach(id=>at.current?.toggleCluster(id));_([]);}
    x ? p(pt) : at.current?.selectAt(pt, A), et(false);
  }, ht = g === null ? null : o.concepts[g], gt = o.sources.find((pt) => pt.id === ht?.sourceId), X = ht ? o.relations.filter((pt) => pt.from === ht.id || pt.to === ht.id) : [], rt = o.concepts.map((pt, A) => ({ ...pt, i: A })).filter((pt) => !m.includes(pt.cluster) && (!h || (pt.name + " " + pt.summary).toLowerCase().includes(h.toLowerCase()))), Z = o.concepts.map((pt, A) => ({ ...pt, i: A, degree: o.relations.filter((k) => k.from === pt.id || k.to === pt.id).length })).sort((pt, A) => A.degree - pt.degree).slice(0, 3), St = (pt) => o.clusters.find((A) => A.id === pt)?.[c] || "currentColor", bt = (pt) => {
    n(pt), et(false);
  };
  function Vt() {
    const pt = new Blob([JSON.stringify({ ...o, sources: o.sources.map(({ text: H, ...W }) => W) }, null, 2)], { type: "application/json" }), A = URL.createObjectURL(pt), k = document.createElement("a");
    k.href = A, k.download = "knowledge-atlas.json", k.click(), setTimeout(() => URL.revokeObjectURL(A), 1e3), I(It("已请求导出图谱，请查看浏览器下载记录。"));
  }
  const ce = D.jsx("div", { className: "g-concept-list", children: rt.length ? rt.map((pt) => D.jsxs("button", { className: g === pt.i ? "is-selected" : "", onClick: (A) => {
    ot(pt.i, A.shiftKey), O(null);
  }, children: [D.jsx("i", { style: { background: St(pt.cluster) } }), D.jsx("span", { children: pt.name }), D.jsx(Pe, { name: "arrow", size: 14 })] }, pt.id)) : D.jsx("p", { className: "g-empty", children: It("没有匹配的问题，试试别的关键词或开启更多分区。") }) });
  return D.jsxs("div", { className: "g-app", children: [D.jsxs("header", { className: "g-topbar", children: [D.jsx("button", { className: "g-icon g-mobile-menu", "aria-label": It("打开资料导航"), onClick: () => et(!N), children: D.jsx(Pe, { name: "menu" }) }), D.jsxs("a", { className: "g-brand", href: "#", "aria-label": It("ClipCompass首页"), children: [D.jsx("span", { className: "g-logo", children: D.jsx(Pe, { name: "graph", size: 23 }) }), D.jsxs("span", { children: [It("ClipCompass"), D.jsx("small", { children: "KNOWLEDGE ATLAS" })] })] }), D.jsxs("div", { className: "g-breadcrumb", children: [It("我的收藏"), D.jsx("span", { children: "/" }), D.jsx("b", { children: o.sample ? It("物理 \xB7 力学") : It("问题星图") })] }), D.jsxs("div", { className: "g-top-actions", children: [D.jsxs("label", { className: "g-search", children: [D.jsx(Pe, { name: "search", size: 17 }), D.jsx("input", { ref: C, value: h, onChange: (pt) => {
    d(pt.target.value), at.current?.setQuery(pt.target.value);
  }, "aria-label": It("搜索问题"), placeholder: It("筛选已有问题…") }), null] }), D.jsx("button", { className: "g-icon g-theme", "aria-label": It(c === "dark" ? "切换亮色主题" : "切换暗色主题"), title: It(c === "dark" ? "亮色模式" : "暗色模式"), onClick: () => f((pt) => pt === "dark" ? "light" : "dark"), children: D.jsx(Pe, { name: c === "dark" ? "sun" : "moon" }) }), D.jsxs("button", { className: "g-primary g-top-import", "aria-label": It("我的收藏"), onClick: () => onCollection(), children: [D.jsx(Pe, { name: "plus" }), D.jsx("span", { children: It("我的收藏") })] })] })] }), D.jsxs("div", { className: "g-workspace", children: [N && D.jsx("button", { className: "g-sidebar-shade", "aria-label": It("关闭导航"), onClick: () => et(false) }), D.jsxs("aside", { className: "g-sidebar" + (N ? " is-open" : ""), children: [D.jsxs("div", { className: "g-space-label", children: [D.jsx("span", { children: It("探索空间") }), D.jsx("span", { children: "01" })] }), D.jsxs("button", { className: "g-nav is-active", onClick: () => {
    m.forEach(id=>at.current?.toggleCluster(id));_([]);d("");at.current?.setQuery("");at.current?.reset(), p(null), et(false);
  }, children: [D.jsx(Pe, { name: "graph" }), It("知识图谱"), D.jsx("i", {})] }), D.jsxs("button", { className: "g-nav", onClick: () => {
    O("sources"), et(false);
  }, children: [D.jsx(Pe, { name: "book" }), It("视频收藏"), D.jsx("b", { children: o.sources.length })] }), D.jsxs("div", { className: "g-side-section", children: [D.jsxs("div", { className: "g-section-title", children: [It("探索方向"), D.jsx("small", { children: o.clusters.length })] }), o.clusters.map((pt) => D.jsxs("button", { className: "g-cluster" + (m.includes(pt.id) ? " is-muted" : ""), title: "只看"+pt.name+"；再次点击显示全部", "aria-pressed": m.length>0 && !m.includes(pt.id), onClick: () => {
    const next=m.length===o.clusters.length-1 && !m.includes(pt.id)?[]:o.clusters.filter(k=>k.id!==pt.id).map(k=>k.id);
    o.clusters.forEach(k=>{if(m.includes(k.id)!==next.includes(k.id))at.current?.toggleCluster(k.id);});_(next);d("");at.current?.setQuery("");at.current?.clearSel();
  }, children: [D.jsx("i", { style: { background: pt[c] } }), D.jsx("span", { children: pt.name }), D.jsx("b", { children: o.concepts.filter((A) => A.cluster === pt.id).length })] }, pt.id))] }), h ? D.jsxs("div", { className: "g-side-section", children: [D.jsxs("div", { className: "g-section-title", children: [It("搜索结果"), D.jsx("small", { children: rt.length })] }), ce] }) : D.jsxs("div", { className: "g-side-section", children: [D.jsx("div", { className: "g-section-title", children: It("我的图谱") }), D.jsxs("button", { className: "g-library-item" + (o.sample ? " is-current" : ""), onClick: () => onCollection(), children: [D.jsx(Pe, { name: "graph" }), D.jsxs("span", { children: ["我的视频收藏", D.jsx("small", { children: `${o.concepts.length} 个问题 · ${o.sources.length} 条视频` })] })] }), a.map((pt) => D.jsxs("button", { className: "g-library-item" + (pt.id === o.id ? " is-current" : ""), onClick: () => bt(pt), children: [D.jsx(Pe, { name: "file" }), D.jsxs("span", { children: [pt.title, D.jsxs("small", { children: [pt.concepts.length, " ", It("个问题 \xB7 本次会话")] })] })] }, pt.id))] }), D.jsxs("div", { className: "g-sidebar-bottom", children: [D.jsxs("div", { className: "g-hub-title", children: [D.jsx("span", { children: It("关键问题") }), D.jsx("small", { children: It("连接数") })] }), Z.map((pt) => D.jsxs("button", { className: "g-hub", onClick: () => ot(pt.i), children: [D.jsx("span", { children: pt.name }), D.jsx("small", { children: pt.degree }), D.jsx(Pe, { name: "arrow", size: 12 })] }, pt.id)), D.jsx("small", { children: It("沿着问题之间的关联，找到想了解的事。") })] })] }), D.jsxs("main", { className: "g-main", "aria-label": It("知识图谱工作区"), children: [D.jsx(iC, {}), D.jsx("div", { className: "g-graph-stage", ref: q, children: D.jsx("div", { className: "g-labels", ref: U }) }), D.jsxs("section", { className: "g-map-heading", children: [D.jsx("h1", { children: m.length === o.clusters.length - 1 ? o.clusters.find(topic => !m.includes(topic.id))?.name : o.title }), D.jsx("p", { children: "每个节点是一个问题，连线连接相关的探索角度。" }), D.jsxs("div", { className: "g-map-meta", children: [D.jsxs("span", { children: [D.jsx("b", { children: rt.length }), " ", It("问题")] }), D.jsx("i", {}), D.jsxs("span", { children: [D.jsx("b", { children: o.relations.filter(edge => rt.some(node => node.id === edge.from) && rt.some(node => node.id === edge.to)).length }), " ", It("关联")] }), D.jsx("i", {}), D.jsxs("button", { onClick: () => O("sources"), children: [o.sources.length, " ", It("条视频"), " ", D.jsx(Pe, { name: "external", size: 12 })] })] })] }), D.jsxs("div", { className: "g-pathbar", ref: (pt) => {
    pt && (B.current.pathbar = pt);
  }, children: [D.jsx("span", { ref: (pt) => {
    pt && (B.current.chain = pt);
  } }), D.jsx("button", { className: "g-icon", "aria-label": It("清除路径"), onClick: () => at.current?.clearPath(), children: D.jsx(Pe, { name: "close" }) })] }), (h || x || m.length === o.clusters.length) && D.jsxs("div", { className: "g-map-message", children: [D.jsx("strong", { children: x ? It("当前设备不支持三维图谱") : rt.length ? It("找到 " + rt.length + " 个问题", rt.length + " concepts found") : It("暂时没有显示的问题") }), D.jsxs("button", { onClick: () => O("concepts"), children: [It("打开问题列表"), D.jsx(Pe, { name: "list" })] }), m.length === o.clusters.length && D.jsx("button", { onClick: () => {
    m.forEach((pt) => at.current?.toggleCluster(pt)), _([]);
  }, children: It("显示全部分区") })] }), !ht && !h && !x && D.jsxs("div", { className: "g-explore-note", children: [D.jsx(Pe, { name: "star", size: 20 }), D.jsxs("div", { children: [D.jsx("strong", { children: It("一个问题，一片新星空") }), D.jsx("p", { children: It("点击星点，探索概念、公式与讲解来源") })] })] }), composer, D.jsxs("div", { className: "g-map-footer", children: [D.jsxs("div", { className: "g-view-controls", "aria-label": It("图谱工具"), children: [[["atlas", "graph", It("星图")], ["shell", "orbit", It("球面")]].map(([pt, A, k]) => D.jsxs("button", { "aria-label": k, "aria-pressed": T === pt, onClick: () => {
    R(pt), at.current?.setView(pt);
  }, children: [D.jsx(Pe, { name: A, size: 17 }), D.jsx("span", { children: k })] }, pt)), D.jsx("i", {}), D.jsx("button", { "aria-label": It("拉远"), onClick: () => at.current?.dolly(1.18), children: D.jsx(Pe, { name: "minus", size: 17 }) }), D.jsx("button", { className: "g-zoom", ref: (pt) => {
    pt && (B.current.zlvl = pt);
  }, "aria-label": It("恢复默认缩放"), onClick: () => at.current?.zoomReset(), children: "100%" }), D.jsx("button", { "aria-label": It("拉近"), onClick: () => at.current?.dolly(1 / 1.18), children: D.jsx(Pe, { name: "plus", size: 17 }) }), D.jsx("i", {}), D.jsx("button", { "aria-label": It("复位视角"), onClick: () => at.current?.reset(), children: D.jsx(Pe, { name: "reset", size: 17 }) })] }), D.jsxs("div", { className: "g-secondary-controls", children: [D.jsxs("button", { "aria-pressed": S.spin, title: It("自动旋转"), onClick: () => at.current?.toggleSpin(), children: [D.jsx(Pe, { name: "orbit", size: 16 }), D.jsx("span", { children: It("自转") })] }), D.jsx("button", { "aria-pressed": S.flow, onClick: () => at.current?.toggleFlow(), children: It("流光") }), D.jsx("button", { "aria-pressed": S.label, onClick: () => at.current?.toggleLabel(), children: It("文字节点") }), D.jsx("button", { "aria-label": It("打开问题列表"), onClick: () => O("concepts"), children: D.jsx(Pe, { name: "list", size: 17 }) }), D.jsx("button", { "aria-label": It("导出图谱"), onClick: Vt, children: D.jsx(Pe, { name: "download", size: 17 }) })] })] }), D.jsxs("div", { className: "g-gesture-hint", children: [It("拖拽旋转 \xB7 滚轮缩放 \xB7 点击问题探索"), D.jsx("span", { children: It("SHIFT + 点击第二个节点，追溯连接路径") })] }), D.jsx("div", { hidden: true, children: ["hudMode", "hudSel", "sNode", "sEdge", "sDeg", "sFps"].map((pt) => D.jsx("span", { ref: (A) => {
    A && (B.current[pt] = A);
  } }, pt)) }), ht && renderDetail({concept: ht, relations: X, select: ot, close: () => {at.current?.clearSel();p(null);}})] })] }), P === "concepts" && D.jsx(Up, { title: It("探索问题"), onClose: () => O(null), children: D.jsxs("div", { className: "g-dialog-content", children: [D.jsx("p", { className: "g-subtitle", children: It("键盘或触摸均可选择；Shift + 选择第二个节点查看路径。") }), ce] }) }), P === "sources" && D.jsx(Up, {title: "我的视频收藏", onClose: () => O(null), children: renderSources()}), V && D.jsxs("div", { className: "g-toast", role: "status", children: [D.jsx(Pe, { name: "check" }), V] })] });
}
