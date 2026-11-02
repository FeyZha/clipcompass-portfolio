import {WorkspaceIcon} from '../workspace/WorkspaceShell';
import {useEffect,useMemo,useRef,useState,type ReactNode} from 'react';
import type {AtlasConcept,AtlasData,AtlasRelation} from './atlas-data';
import {createRibbon,type RibbonControls,type RibbonMode} from './ribbon-engine';
import {createOrbits} from './orbit-engine';
import {VideoBackdrop} from './VideoBackdrop';
import './ribbon.css';
import './orbits.css';

type Props={orbits?:boolean;data:AtlasData;composer:ReactNode;renderComposer:(footerActions:ReactNode)=>ReactNode;onCollection:()=>void;renderSources:()=>ReactNode;suspended:boolean;renderDetail:(options:{concept:AtlasConcept;relations:AtlasRelation[];select:(index:number)=>void;close:()=>void})=>ReactNode};
const papers=['#dbe8f4','#f0dfb7','#d5e9dc','#e2d8f1','#edd4e2','#efd4bf','#cae5e8'];
function nodeFromUrl(){return new URLSearchParams(location.hash.slice(1)).get('node');}
function themeFromStorage(orbits:boolean){if(orbits)return 'light';try{return localStorage.getItem(orbits?'clipcompass:orbit-theme':'clipcompass:ribbon-theme')||(orbits?'light':'dark');}catch{return orbits?'light':'dark';}}
export function RibbonShell({orbits=false,data,composer,renderComposer,onCollection,renderSources,renderDetail,suspended}:Props){
  const stage=useRef<HTMLDivElement>(null),engine=useRef<RibbonControls|null>(null),dialog=useRef<HTMLDialogElement>(null);
  const [selected,setSelected]=useState<string|null>(nodeFromUrl),[topic,setTopic]=useState(''),[mode,setMode]=useState<RibbonMode>('overview');
  const [active,setActive]=useState(''),[paused,setPaused]=useState(false),[theme,setTheme]=useState(()=>themeFromStorage(orbits));
  const [modal,setModal]=useState<'questions'|'sources'|null>(null),[query,setQuery]=useState(''),[listTopic,setListTopic]=useState('');
  const concept=data.concepts.find(c=>c.id===selected);
  const items=useMemo(()=>{
    const rows=data.concepts.filter(c=>orbits||!topic||c.cluster===topic);
    // Interleave existing topics so a turn through the ribbon offers varied questions.
    const buckets=data.clusters.map(t=>rows.filter(c=>c.cluster===t.id));const ordered:AtlasConcept[]=[];
    for(let n=0;n<Math.max(0,...buckets.map(b=>b.length));n++)buckets.forEach(b=>{if(b[n])ordered.push(b[n]);});
    return ordered.map(c=>{const ci=data.clusters.findIndex(t=>t.id===c.cluster);return {id:c.id,question:c.name,topic:data.clusters[ci]?.name||'更多问题',color:papers[Math.max(ci,0)%papers.length],source:c.summary,number:data.concepts.indexOf(c)+1};});
  },[data,topic,orbits]);
  function select(id:string|null,write=true){
    if(id&&!items.some(i=>i.id===id))setTopic('');
    setSelected(id);setModal(null);
    if(write){const p=new URLSearchParams(location.hash.slice(1));if(id)p.set('node',id);else p.delete('node');history.pushState(null,'','#'+p.toString());}
  }
  const selectRef=useRef(select);selectRef.current=select;
  useEffect(()=>{
    if(!stage.current||!items.length)return;
    const events={mode:setMode,active:setActive,open:(id:string)=>selectRef.current(id)};
    const controls=orbits?createOrbits(stage.current,items,events):createRibbon(stage.current,items,events,!!nodeFromUrl()||!!topic);
    engine.current=controls;return()=>{controls.dispose();engine.current=null;};
  },[items,topic,orbits]);
  useEffect(()=>{engine.current?.focus(selected);},[selected,items]);
  useEffect(()=>{engine.current?.pause(paused||!!modal||suspended||!!selected);},[paused,modal,suspended,selected,items]);
  useEffect(()=>{const restore=()=>selectRef.current(nodeFromUrl(),false);addEventListener('popstate',restore);addEventListener('hashchange',restore);return()=>{removeEventListener('popstate',restore);removeEventListener('hashchange',restore);};},[]);
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem(orbits?'clipcompass:orbit-theme':'clipcompass:ribbon-theme',theme);}catch{}},[theme,orbits]);
  useEffect(()=>{if(modal)dialog.current?.showModal();else dialog.current?.close();},[modal]);
  useEffect(()=>{const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'&&selected&&!modal&&!suspended)selectRef.current(null);};addEventListener('keydown',escape);return()=>removeEventListener('keydown',escape);},[selected,modal,suspended]);
  const activeItem=items.find(i=>i.id===active)||items[0];
  const filterTopic=orbits?listTopic:topic;
  const listed=data.concepts.filter(c=>(!filterTopic||c.cluster===filterTopic)&&(!query||`${c.name} ${c.summary}`.toLowerCase().includes(query.toLowerCase())));
  function showQuestions(){setListTopic('');setQuery('');setModal('questions');}
  return <div className={`g-app ribbon-app ${orbits?'orbit-app':''} ${concept?'has-learning':''}`}>
    {orbits?null:<header className="ribbon-topbar">
      <a className="ribbon-brand" href="#" onClick={e=>{e.preventDefault();select(null);engine.current?.overview();}}><span aria-hidden="true">C↗</span>ClipCompass</a>
      <nav aria-label="主导航"><span>发现问题</span><button onClick={onCollection}>我的收藏 <span>{data.sources.length}</span></button></nav>
      <div className="ribbon-top-actions"><button onClick={()=>setModal('questions')}>全部问题 <span>{data.concepts.length}</span></button><button aria-label={theme==='dark'?'切换浅色主题':'切换深色主题'} onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}>{theme==='dark'?'☼':'☾'}</button></div>
    </header>}
    <main className="ribbon-main" aria-label="问题探索">
      <div className="ribbon-left">
        {orbits?<VideoBackdrop paused={paused||!!modal||suspended||!!selected}/>:null}
        {orbits?<section className="ribbon-heading orbit-heading"><div><h1>从一个<span className="miro-highlight">问题</span>开始</h1></div></section>:<><section className="ribbon-heading"><div><p>{data.concepts.length} 个问题，来自你的收藏</p><h1>{topic?data.clusters.find(t=>t.id===topic)?.name:'从一个问题开始。'}</h1></div><button className="ribbon-source-link" onClick={()=>setModal('sources')}>查看 {data.sources.length} 条视频 ↗</button></section><nav className="ribbon-topics" aria-label="探索主题"><button aria-pressed={!topic} onClick={()=>{select(null);setTopic('');}}>全部</button>{data.clusters.map((t,i)=><button key={t.id} aria-pressed={topic===t.id} onClick={()=>{select(null);setTopic(topic===t.id?'':t.id);}}><i style={{background:papers[i%papers.length]}}/>{t.name}</button>)}</nav></>}
        <div className="ribbon-stage" ref={stage} tabIndex={0} aria-label={orbits?'八条旋转轨道上的问题；拖动或方向键转动，悬停阅读，点击探索':'三维问题卡片；滚轮或方向键浏览，长按查看全景'}/>
        {orbits?<>

          <div className="ribbon-controls"><button onClick={()=>{select(null);engine.current?.overview();}} aria-label="重置到全部轨道">↺</button><button onClick={()=>engine.current?.enter()} disabled={!!concept} aria-label="拉近或拉远轨道">＋</button><span/><button onClick={()=>setPaused(p=>!p)} aria-pressed={paused} disabled={!!concept}>{concept?'阅读中 · 已停转':paused?'继续旋转':'暂停旋转'}</button></div>
        </>:<>
          <div className="ribbon-guide" aria-live="polite">{mode==='overview'?<><button className="ribbon-enter" onClick={()=>engine.current?.enter()}>进入问题 <span>↗</span></button></>:<><span>{concept?'正在阅读这个问题':`${activeItem?.topic||''} · 滚动浏览，悬停停留`}</span><div className="ribbon-navigation"><button aria-label="上一个问题" onClick={()=>engine.current?.step(-1)} disabled={!!concept}>←</button><span>{Math.max(1,items.findIndex(i=>i.id===active)+1)} / {items.length}</span><button aria-label="下一个问题" onClick={()=>engine.current?.step(1)} disabled={!!concept}>→</button></div></>}</div>
          <div className="ribbon-controls"><button aria-pressed={mode==='overview'} onClick={()=>{select(null);engine.current?.overview();}}>全景</button><button aria-pressed={mode==='browse'} onClick={()=>engine.current?.enter()}>浏览</button><span/><button onClick={()=>setPaused(p=>!p)} aria-pressed={paused}>{paused?'继续流动':'暂停流动'}</button></div>
        </>}
        {orbits?renderComposer(<div className="orbit-heading-counts"><button type="button" onClick={showQuestions}><WorkspaceIcon name="discover"/>全部问题 <span>{data.concepts.length}</span></button><button type="button" onClick={()=>setModal('sources')}><WorkspaceIcon name="collection"/>视频来源 <span>{data.sources.length}</span></button></div>):composer}
      </div>
      {concept?renderDetail({concept,relations:data.relations.filter(r=>r.from===concept.id||r.to===concept.id),select:index=>select(data.concepts[index].id),close:()=>select(null)}):null}
    </main>
    <dialog ref={dialog} className="g-dialog ribbon-dialog" aria-label={modal==='sources'?'我的视频收藏':'全部问题'} onCancel={e=>{e.preventDefault();setModal(null);}}><header className="g-dialog-head"><h2>{modal==='sources'?'我的视频收藏':'全部问题'}</h2><button className="g-icon" onClick={()=>setModal(null)} aria-label="关闭问题列表或收藏">×</button></header>{modal==='sources'?renderSources():<div className="ribbon-question-list"><input aria-label="搜索已有问题" placeholder="输入你感兴趣的词…" value={query} onChange={e=>setQuery(e.target.value)}/>{orbits?<nav className="orbit-list-topics" aria-label="按主题筛选问题"><button aria-pressed={!listTopic} onClick={()=>setListTopic('')}>全部</button>{data.clusters.map(t=><button key={t.id} aria-pressed={listTopic===t.id} onClick={()=>setListTopic(t.id)}>{t.name}</button>)}</nav>:null}<div>{listed.map(c=><button key={c.id} onClick={()=>select(c.id)}><small>{data.clusters.find(t=>t.id===c.cluster)?.name}</small><span>{c.name}</span><span aria-hidden="true">↗</span></button>)}{!listed.length?<p>没有找到匹配的问题，可以换个词试试。</p>:null}</div></div>}</dialog>
  </div>;
}

