import {useEffect,useMemo,useRef,useState,type RefObject} from 'react';
import type {Video} from './ExploreApp';
import {videoHref} from './Discovery';
import {WorkspaceIcon} from '../workspace/WorkspaceShell';
import {videoSources} from './video-sources';
import {localThumbnails} from './local-thumbnails';
import './playlist-collection.css';
import InfiniteSpiral from '../vendor/react-bits/InfiniteSpiral';

const SEARCH_ORIGIN='http://127.0.0.1:14854';
const duration=(seconds:number)=>`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`;
export function VideoThumbnail({video,priority=false}:{video:Video;priority?:boolean}){
 const [failure,setFailure]=useState(0);
 const source=videoSources[video.video_id];
 const remote=source?.thumbnail_url||(/^[A-Za-z0-9_-]{11}$/.test(video.video_id)?`https://i.ytimg.com/vi/${video.video_id}/hqdefault.jpg`:undefined);
 const thumbnail=failure===0?(localThumbnails[video.video_id]||remote):remote;
 return <span className="playlist-thumbnail">
  <span className="playlist-image-fallback" aria-hidden="true"><WorkspaceIcon name="video"/></span>
  {failure<2&&thumbnail?<img src={thumbnail} draggable={false} alt="" loading={priority?'eager':'lazy'} decoding="async" fetchPriority={priority?'high':'auto'} onError={()=>setFailure(n=>n===0&&localThumbnails[video.video_id]?1:2)}/>:null}
  <span className="playlist-duration">{duration(video.duration)}</span>
 </span>;
}
export function PlaylistCollection({videos,query,onQuery,heading,error,loading,retry}:{videos:Video[];query:string;onQuery:(text:string)=>void;heading:RefObject<HTMLHeadingElement|null>;error:string;loading:boolean;retry:()=>void}){
 const [readable,setReadable]=useState<string[]|null>(null),[connectionError,setConnectionError]=useState(''),[attempt,setAttempt]=useState(0);
 const [readingStates,setReadingStates]=useState<Record<string,string>|null>(null);
 const [active,setActive]=useState(0),[navigation,setNavigation]=useState({index:0,revision:0});
 const copyReel=useRef<HTMLOListElement>(null);
 const bridge=useRef<HTMLIFrameElement>(null);
 useEffect(()=>{
  setConnectionError('');setReadable(null);setReadingStates(null);
  const timer=setTimeout(()=>setConnectionError('阅读服务暂未连接'),12000);
  const receive=(event:MessageEvent)=>{
   if(event.origin!==SEARCH_ORIGIN||event.source!==bridge.current?.contentWindow)return;
   if(event.data?.type==='clipcompass:ready'&&Array.isArray(event.data.videoIds)&&event.data.videoIds.every((id:unknown)=>typeof id==='string')){clearTimeout(timer);setReadable(event.data.videoIds);setConnectionError('');}
   if(event.data?.type==='clipcompass:error'){clearTimeout(timer);setConnectionError('阅读服务暂未连接');}
   if(event.data?.type==='clipcompass:readings'&&event.data.states&&typeof event.data.states==='object'&&!Array.isArray(event.data.states)&&Object.values(event.data.states).every(status=>typeof status==='string'&&['ready','not_generated','generating','failed','unavailable','unknown'].includes(status))){
    setReadingStates(event.data.states);
    if(Object.values(event.data.states).includes('unknown'))setConnectionError('部分导读状态暂时无法读取');
   }
  };
  addEventListener('message',receive);return()=>{clearTimeout(timer);removeEventListener('message',receive);};
 },[attempt]);
 const word=query.trim().toLocaleLowerCase();
 const rows=useMemo(()=>videos.filter(v=>{
  const source=videoSources[v.video_id];
  return `${v.title} ${v.creator} ${v.description} ${source?.title||''} ${source?.author_name||''}`.toLocaleLowerCase().includes(word);
 }),[videos,word]);
 const selected=Math.min(active,Math.max(0,rows.length-1));
 const galleryItems=useMemo(()=>rows.map(v=>({id:v.video_id,href:videoHref(v.video_id),label:videoSources[v.video_id]?.title||v.title})),[rows]);
 useEffect(()=>{setActive(0);setNavigation(n=>({index:0,revision:n.revision+1}));},[query]);
 // Share the cover's continuous position; no second animation clock or remount.
 const moveCopy=(progress:number,reducedMotion:boolean)=>{
  const count=rows.length;
  if(!count)return;
  const position=reducedMotion?Math.round(progress):progress;
  Array.from(copyReel.current?.children||[]).forEach((node,index)=>{
   const element=node as HTMLElement;
   const offset=((index-position+count/2)%count+count)%count-count/2;
   const fade=Math.min(1,Math.abs(offset)/.65);
   const visible=fade<1;
   if(!visible){if(element.style.visibility!=='hidden')element.style.visibility='hidden';return;}
   element.style.visibility='visible';
   element.style.opacity=String(1-fade*fade*(3-2*fade));
   element.style.transform=`translate3d(0,${offset*22}px,0)`;
  });
 };
 const questionTotal=videos.reduce((sum,v)=>sum+v.question_count,0);
 return <div className="playlist-layout playlist-depth">
  <header className="playlist-overview">
   <div><WorkspaceIcon name="collection"/><h1 ref={heading} tabIndex={-1}>我的收藏</h1><p className="playlist-totals">{videos.length} 个视频 <span>·</span> {questionTotal} 个探索问题</p></div>
  </header>
  <section className="playlist-content" aria-label="收藏视频">
   <div className="playlist-toolbar">
    <label className="playlist-search"><WorkspaceIcon name="search"/><input type="search" aria-label="筛选收藏" placeholder="搜索收藏" value={query} onChange={event=>onQuery(event.target.value)}/></label>
   </div>
   {error?<div className="notice" role="alert">{error}<button onClick={retry}>重新连接</button></div>:loading?<p role="status" className="playlist-state">正在读取收藏…</p>:null}
   {connectionError?<p role="status" className="playlist-connection">{connectionError}<button onClick={()=>setAttempt(n=>n+1)}>重新连接</button></p>:null}
   {!loading&&!error&&query?<p role="status" className="playlist-result-count">{rows.length} 个视频</p>:null}
   <div className="collection-depth-stage">
   {rows.length>0?<div className="collection-gallery" aria-label="收藏封面画廊">
    <InfiniteSpiral items={galleryItems} layout="arc" animationMode="scroll" listenToPageScroll={false} radius={200} cardWidth={380} cardHeight={245} verticalSpacing={80} cardsPerTurn={18} centerScale={1.12} perspective={1000} edgeFade={.18} edgeBlur={0} visibleItems={11} cardRadius={22} navigation={navigation} onIndexChange={setActive} onProgressChange={moveCopy} renderItem={(_,index)=><VideoThumbnail video={rows[index]} priority={index===selected}/>}/>
   </div>:null}
   <ol ref={copyReel} className="playlist-videos collection-copy-reel">{rows.map((video,index)=>{
    const leaving=index!==selected;
    const source=videoSources[video.video_id];
    return <li className="playlist-row" key={video.video_id} aria-hidden={leaving||undefined} inert={leaving||undefined}>
     <span className="playlist-index" aria-hidden="true">{index+1}</span>
     <a className="playlist-image-link" href={videoHref(video.video_id)} tabIndex={-1} aria-hidden="true"><VideoThumbnail video={video} priority={index<5}/><span className="playlist-image-open" aria-hidden="true"><WorkspaceIcon name="arrow"/></span></a>
     <div className="playlist-info"><h2><a href={videoHref(video.video_id)}>{source?.title||video.title}</a></h2>
      <div className="playlist-description">{source&&source.title!==video.title?<p className="playlist-local-title">{video.title}</p>:null}
      <div className="playlist-row-actions">
       <a className="playlist-question-link" href={videoHref(video.video_id)}><WorkspaceIcon name="discover"/>{video.status==='generating'?'正在整理…':video.status==='failed'?'整理未完成':video.question_count?`${video.question_count} 个探索问题`:'查看视频'}</a>
       {readable?.includes(video.video_id)?<a className="playlist-reading-link" href={`${SEARCH_ORIGIN}/?reading=${encodeURIComponent(video.video_id)}`}><WorkspaceIcon name="panel"/>{readingStates?.[video.video_id]==='ready'?'快速阅读':readingStates?.[video.video_id]==='not_generated'?'生成导读':readingStates?.[video.video_id]==='generating'?'正在生成导读':'查看导读状态'}</a>:null}
      </div></div>
      <p className="playlist-channel"><WorkspaceIcon name="video"/>{source?.author_name||video.creator}<span>·</span><a className="playlist-source-link" href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer" aria-label={`在 YouTube 打开：${source?.title||video.title}`} title="在 YouTube 打开原视频">YouTube</a></p>
     </div>
    </li>;
   })}</ol>
   {rows.length>0?<div className="collection-position" aria-live="polite">{String(selected+1).padStart(2,'0')} / {rows.length}</div>:null}
   </div>
   {!loading&&!error&&!rows.length?<div className="playlist-empty"><WorkspaceIcon name="search"/><h2>{word?'没有找到相关视频':'这里还没有视频'}</h2>{word?<button onClick={()=>onQuery('')}>清空搜索</button>:<a href="#view=collection">查看全部收藏</a>}</div>:null}
  </section>
  <iframe key={attempt} ref={bridge} className="playlist-bridge" src={`${SEARCH_ORIGIN}/?embed=atlas&library=1`} title="收藏阅读服务连接" aria-hidden="true" tabIndex={-1}/>
 </div>;
}
