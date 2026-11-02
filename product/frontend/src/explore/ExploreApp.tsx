import {WorkspaceShell, WorkspaceIcon, workspaceHref} from '../workspace/WorkspaceShell';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { QuestionResponse } from './QuestionResponse';
import { KnowledgeAtlas } from './KnowledgeAtlas';
import {PlaylistCollection} from './PlaylistCollection';
import { Discovery, collectionHref, questionHref, topicHref, videoHref, type DiscoveryQuestion, type Topic } from './Discovery';

type Status='ready'|'not_generated'|'generating'|'failed'|'unavailable';
export interface Video {video_id:string;title:string;creator:string;duration:number;description:string;source_url:string;status:Status;question_count:number;source_changed:boolean}
interface Range {id:string;start:number;end:number;start_cue:number;end_cue:number;url:string}
export interface Narrative {opening:string;steps:{before:string;link_text:string;range_index:number;after:string}[];closing:string}
export interface Question {id:string;question:string;answer:string;explanation:string;limitations:string;watch_reason:string;ranges:Range[];narrative?:Narrative}
interface Bundle {attempt_id:string;video_id:string;questions:Question[];generated_at:string}
interface State {ok:boolean;video_id:string;status:Status;message:string;attempt_id:string|null;bundle:Bundle|null;source_changed:boolean}
interface Library {ok:boolean;videos:Video[];token:string;questions:DiscoveryQuestion[];topics:Topic[]}
const time=(value:number)=>`${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`;
const statuses:Status[]=['ready','not_generated','generating','failed','unavailable'];
const isText=(v:unknown):v is string=>typeof v==='string' && v.trim().length>0;
const object=(v:unknown):v is Record<string,unknown>=>!!v && typeof v==='object' && !Array.isArray(v);
export function validateState(v:unknown,id:string):State {
  if(!object(v)||v.ok!==true||v.video_id!==id||!statuses.includes(v.status as Status)||typeof v.message!=='string'||typeof v.source_changed!=='boolean') throw Error('学习内容格式异常，请重新读取。');
  if(v.bundle!==null){
    const b=v.bundle;
    if(!object(b)||b.video_id!==id||!isText(b.attempt_id)||!Array.isArray(b.questions)||!b.questions.length||!b.questions.every(q=>object(q)&&isText(q.id)&&isText(q.question)&&isText(q.answer)&&isText(q.explanation)&&typeof q.limitations==='string'&&isText(q.watch_reason)&&Array.isArray(q.ranges)&&q.ranges.length>0&&q.ranges.every(r=>object(r)&&isText(r.id)&&typeof r.start==='number'&&Number.isFinite(r.start)&&typeof r.end==='number'&&Number.isFinite(r.end)&&r.start>=0&&r.end>r.start))) throw Error('学习内容或原片范围异常，已停止展示。');
    for(const q of b.questions){const n=q.narrative;if(n!==undefined&&(!object(n)||typeof n.opening!=='string'||typeof n.closing!=='string'||!Array.isArray(n.steps)||n.steps.length!==q.ranges.length||!n.steps.every((s:unknown,i:number)=>object(s)&&s.range_index===i&&isText(s.link_text)&&typeof s.before==='string'&&typeof s.after==='string')))throw Error('正文与原片对应异常，已停止展示。');}
  }
  if(v.status==='ready'&&!v.bundle)throw Error('已保存的讲解暂时无法读取。');
  return v as unknown as State;
}
async function api(path:string,init?:RequestInit){
  const response=await fetch(path,init);const value=await response.json();
  if(!response.ok||value.ok===false)throw Error(value.message||'暂时无法连接本机服务。');
  return value;
}
function route(){const p=new URLSearchParams(location.hash.slice(1));const filter=p.get('filter');return {video:p.get('video')||'',question:p.get('question')||'',view:p.get('view')==='collection'?'collection':'discover',topic:p.get('topic')||'',filter:(filter==='readable'||filter==='questions'?filter:'all') as 'readable'|'questions'|'all'};}
const workspaceScroller=()=>document.querySelector<HTMLElement>('.ws-workspace>.ws-body');
function routeKey(where:ReturnType<typeof route>){return `${where.view}/${where.topic}/${where.video}/${where.question}/${where.filter}`;}
function Arrow({back=false}:{back?:boolean}){return <span aria-hidden="true">{back?'←':'↗'}</span>;}

export function ExploreApp(){
  const [where,setWhere]=useState(route);
  const [library,setLibrary]=useState<Library|null>(null);
  const [libraryError,setLibraryError]=useState('');
  const [state,setState]=useState<State|null>(null);
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);
  const [query,setQuery]=useState('');
  const [reload,setReload]=useState(0);
  const heading=useRef<HTMLHeadingElement>(null);
  const main=useRef<HTMLElement>(null);
  const focusedRoute=useRef<string|null>(null);
  const scrollPositions=useRef(new Map<string,number>());
  const videoRef=useRef(where.video);videoRef.current=where.video;
  useEffect(()=>{
    let previous=routeKey(route());const restoration=history.scrollRestoration;history.scrollRestoration='manual';
    const onHash=()=>{scrollPositions.current.set(previous,workspaceScroller()?.scrollTop??window.scrollY);const next=route();previous=routeKey(next);setWhere(next);};
    const onLink=(event:MouseEvent)=>{
      if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const link=event.target instanceof Element?event.target.closest('a'):null;
      const href=link?.getAttribute('href');
      if(!href?.startsWith('#')||href==='#main'||link?.target)return;
      event.preventDefault();if(location.hash===href||(href==='#'&&!location.hash))return;
      scrollPositions.current.set(previous,workspaceScroller()?.scrollTop??window.scrollY);history.pushState(null,'',href);
      const next=route();previous=routeKey(next);setWhere(next);
    };
    addEventListener('hashchange',onHash);document.addEventListener('click',onLink);
    return()=>{removeEventListener('hashchange',onHash);document.removeEventListener('click',onLink);history.scrollRestoration=restoration;};
  },[]);
  useEffect(()=>{
    const controller=new AbortController();let timer:ReturnType<typeof setTimeout>;setLibraryError('');
    async function readLibrary(){try{const v=await api('/api/explore/library',{signal:controller.signal});
      if(controller.signal.aborted)return;
      if(!Array.isArray(v.videos)||!isText(v.token)||!v.videos.every((x:Video)=>/^[A-Za-z0-9_-]{11}$/.test(x.video_id)&&isText(x.title)&&typeof x.duration==='number'&&Number.isFinite(x.duration)))throw Error('收藏内容格式异常。');
      if(!Array.isArray(v.topics)||!v.topics.every((t:Topic)=>isText(t.id)&&isText(t.label)&&Number.isInteger(t.question_count)&&t.question_count>0)||!Array.isArray(v.questions)||!v.questions.every((q:DiscoveryQuestion)=>isText(q.question_id)&&isText(q.question)&&v.videos.some((x:Video)=>x.video_id===q.video_id)&&v.topics.some((t:Topic)=>t.id===q.topic_id)&&Number.isFinite(q.duration_seconds)&&q.duration_seconds>0))throw Error('问题列表格式异常，请重新读取。');
      setLibrary(v);setLibraryError('');
      if(!where.video&&v.videos.some((x:Video)=>x.status==='generating'))timer=setTimeout(readLibrary,1800);
    }catch(e){if(!controller.signal.aborted)setLibraryError(e instanceof Error?e.message:'暂时无法读取收藏。');}}
    void readLibrary();return()=>{controller.abort();clearTimeout(timer);};
  },[reload,where.video]);
  useEffect(()=>{
    setState(null);setError('');setBusy(false);
    if(!where.video)return;
    const controller=new AbortController();let timer:ReturnType<typeof setTimeout>;
    async function read(){try{
      const value=validateState(await api(`/api/explore/videos/${encodeURIComponent(where.video)}`,{signal:controller.signal}),where.video);
      if(controller.signal.aborted)return;setState(value);setError('');
      setLibrary(current=>current?{...current,videos:current.videos.map(v=>v.video_id===value.video_id?{...v,status:value.status,question_count:value.bundle?.questions.length||0,source_changed:value.source_changed}:v)}:current);
      if(value.status==='generating')timer=setTimeout(read,1800);
    }catch(e){if(!controller.signal.aborted)setError(e instanceof Error?e.message:'暂时无法读取。');}}
    void read();return()=>{controller.abort();clearTimeout(timer);};
  },[where.video,reload]);
  useLayoutEffect(()=>{
    if(!library||(where.video&&state?.video_id!==where.video))return;
    const top=scrollPositions.current.get(routeKey(where))||0;const scroller=workspaceScroller();
    if(scroller)scroller.scrollTop=top;else window.scrollTo({top,behavior:'instant'});
  },[where.video,where.question,where.view,where.topic,state?.video_id,!!library]);
  const video=library?.videos.find(v=>v.video_id===where.video);
  const questions=state?.video_id===where.video?state.bundle?.questions||[]:[];
  const question=questions.find(q=>q.id===where.question);
  const discoveryQuestion=library?.questions.find(q=>q.video_id===where.video&&q.question_id===where.question);
  const currentTopic=library?.topics.find(t=>t.id===discoveryQuestion?.topic_id);
  const related=library?.questions.filter(q=>q.topic_id===currentTopic?.id&&!(q.video_id===where.video&&q.question_id===where.question)).slice(0,4)||[];
  const collectionMode=where.view==='collection'||(!!where.video&&!where.question);
  const returnHref=collectionMode?videoHref(where.video):topicHref(where.topic);
  const returnLabel=collectionMode?'这条视频的问题':library?.topics.find(t=>t.id===where.topic)?.label||'发现问题';
  useEffect(()=>{
    const key=routeKey(where);
    if(where.video&&state?.video_id!==where.video)return;
    if(focusedRoute.current!==key&&heading.current){heading.current.focus({preventScroll:true});focusedRoute.current=key;}
  },[where.video,where.question,where.view,where.topic,state,library]);
  async function prepare(){
    if(!library||busy)return;
    const id=where.video;setBusy(true);setError('');
    try{
      const value=validateState(await api(`/api/explore/videos/${id}`,{method:'POST',headers:{'Content-Type':'application/json','X-ClipCompass-Explore':library.token},body:JSON.stringify({action:state?.status==='failed'?'retry':'prepare',expected_attempt:state?.attempt_id})}),id);
      if(videoRef.current!==id)return;setState(value);setReload(n=>n+1);
    }catch(e){if(videoRef.current===id)setError(e instanceof Error?e.message:'整理未完成。');}
    finally{if(videoRef.current===id)setBusy(false);}
  }
  const selectedStatus=state?.status;
  if(!where.video&&where.view!=='collection')return <WorkspaceShell active="discover" count={library?.videos.length} immersive><KnowledgeAtlas videos={library?.videos||[]} topics={library?.topics||[]} questions={library?.questions||[]} loading={!library&&!libraryError} error={libraryError} retry={()=>setReload(n=>n+1)}/></WorkspaceShell>;
  return <WorkspaceShell active="collection" title={where.video?(question?'问题讲解':'视频详情'):'我的收藏'} count={library?.videos.length}><div className="explore-app">
    <a className="skip" href="#main" onClick={e=>{e.preventDefault();main.current?.focus();}}>跳到正文</a>

    <main id="main" ref={main} tabIndex={-1} className={where.video?`inside${question?' response-page':''}`:'shelf'}>
    {!where.video&&where.view!=='collection'?<Discovery videos={library?.videos||[]} topics={library?.topics||[]} questions={library?.questions||[]} selected={where.topic} loading={!library&&!libraryError} error={libraryError} retry={()=>setReload(n=>n+1)} heading={heading}/>:!where.video?<>
      <PlaylistCollection videos={library?.videos||[]} query={query} onQuery={setQuery} heading={heading} error={libraryError} loading={!library&&!libraryError} retry={()=>setReload(n=>n+1)}/>
    </>:<>
      <nav className="breadcrumbs"><a href={question?returnHref:collectionHref}><Arrow back/> {question?returnLabel:'我的收藏'}</a>{question&&currentTopic&&!collectionMode&&where.topic!==currentTopic.id?<><span>/</span><a href={topicHref(currentTopic.id)}>{currentTopic.label}</a></>:!question&&video?<><span>/</span><span>{video.title}</span></>:null}</nav>
      <div className="learning-layout">
        {question&&!collectionMode?<aside className="video-context reading-context">
          {related.length?<><h2 className="related-heading">相关问题</h2><nav className="related-questions" aria-label="同主题的问题">{related.map(q=><a href={questionHref(q,where.topic)} key={`${q.video_id}:${q.question_id}`}>{q.question}</a>)}</nav></>:null}
          <div className="reading-source"><p>讲解来源</p><a href={videoHref(where.video)}>{video?.title||'正在读取视频'}</a><p className="context-author">{video?.creator}</p><p className="context-duration">完整原片 {video?time(video.duration):'—'}</p>{video?<a className="quiet-link" href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noopener noreferrer">打开完整原片 <Arrow/></a>:null}</div>
        </aside>:<aside className="video-context"><p className="eyebrow">视频来源</p><h2>{video?.title||'正在读取视频'}</h2><p className="context-author">{video?.creator}</p><p className="context-duration">原视频 {video?time(video.duration):'—'}</p>
          {video?<a className="quiet-link" href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noopener noreferrer">打开完整原片 <Arrow/></a>:null}
          {question?<nav className="question-nav" aria-label="这条视频的问题"><p className="eyebrow">还可以探索</p>{questions.map((q,i)=><a href={questionHref({video_id:where.video,question_id:q.id},'',true)} key={q.id} aria-current={q.id===question.id?'page':undefined}><span>{String(i+1).padStart(2,'0')}</span>{q.question}</a>)}</nav>:<a className="context-note" href={workspaceHref('ask')}>向收藏提问 <WorkspaceIcon name="arrow"/></a>}
        </aside>}
        <article className="learning-main">
          {!state&&!error?<div className="loading" role="status">正在读取这条视频…</div>:null}
          {(error||libraryError)?<div className="notice" role="alert">{error||libraryError}<button onClick={()=>setReload(n=>n+1)}>重新读取</button></div>:null}
          {state?.source_changed?<p className="notice">字幕已更新，下方保留上次整理的内容与原片范围。</p>:null}
          {selectedStatus&&selectedStatus!=='ready'?<section className={`prepare-state ${selectedStatus==='generating'?'working':''}`} aria-live="polite">

            <h1 ref={!question?heading:undefined} tabIndex={-1}>{selectedStatus==='generating'?'正在整理问题…':selectedStatus==='failed'?'这次整理还没有完成。':selectedStatus==='unavailable'?'暂时无法整理这条视频。':'尚未整理问题'}</h1>
              {state?.message?<p>{state.message}</p>:null}

            {selectedStatus==='generating'?<><div className="progress-track" aria-hidden="true"><span/></div></>:null}
            {['not_generated','failed'].includes(selectedStatus)?<button className="primary" disabled={busy||!library} onClick={()=>void prepare()}>{busy?'正在开始…':selectedStatus==='failed'?'重新整理这条视频':'整理这条视频'} <Arrow/></button>:null}
          </section>:null}
          {questions.length&&!question?<section className="question-discovery">
            <p className="eyebrow">{questions.length} 个问题</p><h1 ref={heading} tabIndex={-1}>从感兴趣的问题开始</h1>
            <div className="question-list">{questions.map((q,i)=><a key={q.id} href={questionHref({video_id:where.video,question_id:q.id},'',true)}><span className="question-number">{String(i+1).padStart(2,'0')}</span><h2>{q.question}</h2><span className="question-arrow" aria-hidden="true">→</span></a>)}</div>
          </section>:null}
          {question?<section className="question-reading" key={`${state?.bundle?.attempt_id}:${question.id}`}>
            <h1 ref={heading} tabIndex={-1}>{question.question}</h1>
            <QuestionResponse key={`${where.video}:${state?.bundle?.attempt_id}:${question.id}`} question={question} videoId={where.video} title={video?.title||'原视频'} creator={video?.creator||'讲者'}/>
            <footer className="reading-end"><a href={returnHref}>{collectionMode?'其他问题':'继续探索'} <span aria-hidden="true">→</span></a></footer>
          </section>:null}
        </article>
      </div>
    </>}
    </main>
  </div></WorkspaceShell>;
}
