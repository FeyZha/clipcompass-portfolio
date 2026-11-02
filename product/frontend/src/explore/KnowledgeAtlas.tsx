import {lazy,Suspense,useEffect,useMemo,useRef,useState,type ReactNode} from 'react';
import type {DiscoveryQuestion,Topic} from './Discovery';
import {validateState,type Video,type Question} from './ExploreApp';
import {QuestionResponse} from './QuestionResponse';
import {RibbonShell} from './RibbonShell';
import {makeAtlasData,type AtlasConcept,type AtlasRelation,type AtlasData} from './atlas-data';
import './atlas-adapter.css';
import {PromptInputWithActions} from './AtlasPrompt';
const AtlasShell=lazy(()=>import('../vendor/kimi-atlas/AtlasShell.jsx').then(module=>({default:module.AtlasShell})));

const SEARCH_ORIGIN='http://127.0.0.1:14854';
type SearchBridge={type:string;videoIds?:string[];title?:string};
function LearningPanel({concept,relations,data,videos,select,close,readVideo,canRead}:{concept:AtlasConcept;relations:AtlasRelation[];data:AtlasData;videos:Video[];select:(index:number)=>void;close:()=>void;readVideo:(id:string,at?:number)=>void;canRead:boolean}){
 const [question,setQuestion]=useState<Question|null>(null),[error,setError]=useState(''),[reload,setReload]=useState(0);
 const heading=useRef<HTMLHeadingElement>(null);const video=videos.find(v=>v.video_id===concept.sourceId);
 useEffect(()=>{const controller=new AbortController();setQuestion(null);setError('');
 fetch(`/api/explore/videos/${encodeURIComponent(concept.sourceId)}`,{signal:controller.signal}).then(async r=>{if(!r.ok)throw Error('原片讲解暂时无法读取。');return validateState(await r.json(),concept.sourceId);}).then(v=>{if(controller.signal.aborted)return;const q=v.bundle?.questions.find(q=>q.id===concept.questionId);if(!q)throw Error('这个问题的已存讲解暂时不可用。');setQuestion(q);}).catch(e=>{if(!controller.signal.aborted)setError(e.message);});
 heading.current?.focus({preventScroll:true});return()=>controller.abort();
 },[concept.id,concept.sourceId,concept.questionId,reload]);
 return <section className="g-detail atlas-learning" aria-label="问题与原片讲解"><header><span>{data.clusters.find(t=>t.id===concept.cluster)?.name}</span><button className="g-icon" onClick={close} aria-label="收起问题讲解">×</button></header><div className="g-detail-content">
 <h2 ref={heading} tabIndex={-1}>{concept.name}</h2><p className="atlas-source">{video?.title} · {video?.creator}</p>
 {error?<p role="alert">{error}<button className="atlas-text-action" onClick={()=>setReload(n=>n+1)}>重新读取</button></p>:question?<QuestionResponse key={concept.id} question={question} videoId={concept.sourceId} title={video?.title||''} creator={video?.creator||''}/>:<p role="status">正在读取已保存的讲解…</p>}
 <div className="atlas-source-actions">{canRead?<button onClick={()=>readVideo(concept.sourceId,question?.ranges[0]?.start)}>阅读整条视频 →</button>:<span>这条视频暂未接入完整阅读</span>}<a href={`https://www.youtube.com/watch?v=${concept.sourceId}`} target="_blank" rel="noreferrer">打开原片 ↗</a></div>
 <h3>相关问题</h3><div className="g-neighbors">{relations.map(r=>{const other=data.concepts.find(c=>c.id===(r.from===concept.id?r.to:r.from));if(!other)return null;return <button key={`${r.from}:${r.to}`} onClick={()=>select(data.concepts.indexOf(other))}><span>{other.name}<small>{r.label}</small></span><span aria-hidden="true">→</span></button>;})}{!relations.length?<p>这个问题暂时没有整理好的关联。</p>:null}</div>
 </div></section>;
}
export function KnowledgeAtlas({videos,topics,questions,loading,error,retry}:{videos:Video[];topics:Topic[];questions:DiscoveryQuestion[];loading:boolean;error:string;retry:()=>void}){
 const archivedAtlas=new URLSearchParams(location.hash.slice(1)).get('layout')==='atlas';
 const archivedRibbon=new URLSearchParams(location.hash.slice(1)).get('layout')==='ribbon';
 const data=useMemo(()=>makeAtlasData(questions,topics,videos),[questions,topics,videos]);
 const [draft,setDraft]=useState(()=>{try{return sessionStorage.getItem('clipcompass:atlas-draft')||'';}catch{return '';}});
 const [storageWarning,setStorageWarning]=useState('');
 const [bridge,setBridge]=useState<SearchBridge|null>(null),[searchOpen,setSearchOpen]=useState(false),[reading,setReading]=useState(''),[readingAt,setReadingAt]=useState<number|undefined>(),[bridgeError,setBridgeError]=useState('');
 const searchFrame=useRef<HTMLIFrameElement>(null),input=useRef<HTMLTextAreaElement>(null),dialog=useRef<HTMLDialogElement>(null),seq=useRef(0);
 const dialogReturnFocus=useRef<HTMLElement|null>(null);
 const [connectionAttempt,setConnectionAttempt]=useState(0);
 useEffect(()=>{
  const focus=()=>{if(new URLSearchParams(location.hash.slice(1)).get('ask')==='1')input.current?.focus();};
  focus();addEventListener('hashchange',focus);return()=>removeEventListener('hashchange',focus);
 },[loading,questions.length]);
 useEffect(()=>{document.body.classList.add('atlas-active');return()=>{document.body.classList.remove('atlas-active');delete document.documentElement.dataset.theme;};},[]);
 useEffect(()=>{const receive=(e:MessageEvent)=>{if(e.origin!==SEARCH_ORIGIN||e.source!==searchFrame.current?.contentWindow||!e.data||typeof e.data!=='object')return;
 if(e.data.type==='clipcompass:ready'&&Array.isArray(e.data.videoIds)){setBridge(e.data);setBridgeError('');}
 if(e.data.type==='clipcompass:error')setBridgeError('询问服务暂时无法连接，可重新连接后再试。');
 };addEventListener('message',receive);return()=>removeEventListener('message',receive);},[]);
 useEffect(()=>{if(searchOpen||reading)dialog.current?.showModal();else if(dialog.current?.open){dialog.current.close();const target=dialogReturnFocus.current;(target?.isConnected?target:input.current)?.focus({preventScroll:true});}},[searchOpen,reading]);
 useEffect(()=>{const timer=setTimeout(()=>{if(!bridge)setBridgeError('询问服务尚未连接，可继续探索问题或重新连接。');},12000);return()=>clearTimeout(timer);},[bridge,connectionAttempt]);
 function pauseQuestion(){document.querySelectorAll<HTMLIFrameElement>('.narrative-frame iframe').forEach(frame=>frame.contentWindow?.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}),'https://www.youtube.com'));}
 function ask(){if(!draft.trim()||!bridge)return;dialogReturnFocus.current=input.current;pauseQuestion();setReading('');setSearchOpen(true);searchFrame.current?.contentWindow?.postMessage({type:'clipcompass:ask',question:draft.trim(),id:`atlas-${Date.now()}-${++seq.current}`},SEARCH_ORIGIN);}
 function close(){setSearchOpen(false);setReading('');searchFrame.current?.contentWindow?.postMessage({type:'clipcompass:pause'},SEARCH_ORIGIN);}
 function readVideo(id:string,at?:number){dialogReturnFocus.current=document.activeElement instanceof HTMLElement?document.activeElement:null;pauseQuestion();setReadingAt(at);setReading(id);setSearchOpen(false);}
 function retryBridge(){setBridgeError('');setBridge(null);setConnectionAttempt(n=>n+1);if(searchFrame.current)searchFrame.current.src=SEARCH_ORIGIN+'/?embed=atlas';}
 const renderComposer=(footerActions?:ReactNode)=><PromptInputWithActions compact={!archivedAtlas&&!archivedRibbon} value={draft} onValueChange={text=>{setDraft(text);try{sessionStorage.setItem('clipcompass:atlas-draft',text);setStorageWarning('');}catch{setStorageWarning('草稿暂时无法保存，当前仍可提问。');}}} onSubmit={ask} ready={!!bridge} count={bridge?.videoIds?.length||0} error={bridgeError} storageWarning={storageWarning} retry={retryBridge} inputRef={input} footerActions={footerActions}/>;
 const composer=renderComposer();
 const sources=()=> <div className="g-dialog-content atlas-sources">{videos.map(v=><div className="g-source-row" key={v.video_id}><div><strong>{v.title}</strong><small>{v.creator} · {v.question_count} 个问题{bridge?.videoIds?.includes(v.video_id)?' · 可检索':''}</small></div><a href={`#view=collection&video=${v.video_id}`}>查看问题</a>{bridge?.videoIds?.includes(v.video_id)?<button onClick={()=>readVideo(v.video_id)}>完整阅读</button>:null}</div>)}</div>;
 const shellProps={data,videos,composer,renderComposer,onCollection:()=>{location.hash='view=collection';},renderSources:sources,renderDetail:(options:{concept:AtlasConcept;relations:AtlasRelation[];select:(index:number)=>void;close:()=>void})=><LearningPanel key={options.concept.id} {...options} data={data} videos={videos} readVideo={readVideo} canRead={!!bridge?.videoIds?.includes(options.concept.sourceId)}/>};
 return <>{loading||error||!questions.length?<div className="atlas-status"><h1>从一个问题开始。</h1><p role={error?'alert':'status'}>{error|| (loading?'正在读取收藏里的问题…':'收藏里还没有准备好的问题。')}</p>{error?<button onClick={retry}>重新连接</button>:<a href="#view=collection">查看收藏</a>}</div>:archivedAtlas?<Suspense fallback={<p>正在打开已保存的图谱…</p>}><AtlasShell {...shellProps}/></Suspense>:<RibbonShell key={archivedRibbon?'ribbon':'orbits'} {...shellProps} orbits={!archivedRibbon} suspended={searchOpen||!!reading}/>}
 <dialog className="atlas-result-dialog" aria-label={reading?'完整视频阅读':'从收藏里找讲解'} ref={dialog} onCancel={e=>{e.preventDefault();close();}}><header><span>{reading?'完整视频阅读':'从收藏里找讲解'}</span><button onClick={close}>{archivedAtlas?'返回星图':'返回问题'} ×</button></header><iframe ref={searchFrame} title="视频询问与检索结果" src={SEARCH_ORIGIN+'/?embed=atlas'} className={!searchOpen?'atlas-frame-hidden':''} allow="autoplay; encrypted-media; fullscreen; picture-in-picture"/>{reading?<iframe title="单视频导读与核心纪要" src={SEARCH_ORIGIN+`/?embed=atlas&reading=${encodeURIComponent(reading)}${readingAt===undefined?'':'&at='+Math.floor(readingAt)}`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture"/>:null}</dialog>
 </>;
}
