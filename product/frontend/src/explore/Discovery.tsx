import { useEffect, useState, type RefObject } from 'react';
import type { Video } from './ExploreApp';
import { QuestionSpiral } from './QuestionSpiral';
import './discovery.css';

export interface Topic {id:string;label:string;question_count:number;source_count:number}
export interface DiscoveryQuestion {video_id:string;question_id:string;question:string;topic_id:string;duration_seconds:number}
export const collectionHref='#view=collection';
export function topicHref(topic=''){return topic?`#topic=${encodeURIComponent(topic)}`:'#';}
export function videoHref(video:string){return `#view=collection&video=${encodeURIComponent(video)}`;}
export function questionHref(q:Pick<DiscoveryQuestion,'video_id'|'question_id'>,topic='',collection=false){
  const p=new URLSearchParams();if(collection)p.set('view','collection');else if(topic)p.set('topic',topic);
  p.set('video',q.video_id);p.set('question',q.question_id);return '#'+p.toString();
}
function duration(seconds:number){const n=Math.ceil(seconds);return n<60?`${n}秒`:`${Math.floor(n/60)}分${n%60?`${n%60}秒`:''}`;}
let entered=false;
let discoveryMode:'spiral'|'list'='spiral';

export function Discovery({videos,topics,questions,selected,loading,error,retry,heading}:{
  videos:Video[];topics:Topic[];questions:DiscoveryQuestion[];selected:string;loading:boolean;error:string;
  retry:()=>void;heading:RefObject<HTMLHeadingElement|null>;
}){
  const [firstEntry]=useState(()=>!entered);useEffect(()=>{entered=true;},[]);
  const [mode,setMode]=useState(discoveryMode);
  const chosen=topics.find(t=>t.id===selected);
  const shown=selected?topics.filter(t=>t.id===selected):topics;
  const pending=videos.filter(v=>v.question_count===0).length;
  const working=videos.filter(v=>v.status==='generating').length;
  const visibleQuestions=questions.filter(q=>!selected||q.topic_id===selected).map(q=>({...q,href:questionHref(q,selected)}));
  return <div className={`discovery-surface${mode==='spiral'?' is-spiral':''}${firstEntry?' first-entry':''}`}>
    <section className="discovery-intro">
      <h1 ref={heading} tabIndex={-1}>从一个好奇的问题开始<span>。</span></h1>
      <p>看看收藏里，有没有你想弄懂的事。</p>
    </section>
    {error?<div className="notice" role="alert">{error}<button onClick={retry}>重新连接</button></div>:null}
    {loading?<p className="loading" role="status">正在读取收藏里的问题…</p>:<div className="discovery-layout">
      <aside className="topic-sidebar"><h2>感兴趣的方向 <span className="topic-scroll-hint">可左右滑动</span></h2>
        <nav aria-label="探索主题" className="topic-nav">
          <span className="topic-marker" aria-hidden="true" style={{visibility:selected&&!chosen?'hidden':undefined,transform:`translateY(${Math.max(0,topics.findIndex(t=>t.id===selected)+1)*46}px)`}}/>
          <a href="#" aria-current={!selected?'page':undefined}>随便看看 <span>{questions.length}</span></a>
          {topics.map(t=><a key={t.id} href={topicHref(t.id)} aria-current={selected===t.id?'page':undefined}>{t.label} <span>{t.question_count}</span></a>)}
        </nav>
        <a className="browse-sources" href={collectionHref}>按视频浏览 <span aria-hidden="true">→</span></a>
      </aside>
      <div className="discovery-results">
        <div className="discovery-toolbar"><div className="discovery-summary" aria-live="polite">{chosen?`${chosen.question_count} 个问题 · 来自 ${chosen.source_count} 条收藏`:selected?'这个主题下暂时没有问题':`${topics.length} 个主题 · ${questions.length} 个问题`}</div>
          {visibleQuestions.length>0?<div className="discovery-view-switch" role="group" aria-label="问题浏览方式">{([['spiral','气泡'],['list','列表']] as const).map(([value,label])=><button key={value} type="button" aria-pressed={mode===value} onClick={()=>{discoveryMode=value;setMode(value);}}>{label}</button>)}</div>:null}
        </div>
        {mode==='spiral'&&visibleQuestions.length>0?<QuestionSpiral key={selected} questions={visibleQuestions} videos={videos} topics={topics} topic={selected}/>:null}
        {mode==='list'?shown.map(t=><section className="discovery-group" key={t.id} aria-labelledby={`topic-${t.id}`}>
          <header><h2 id={`topic-${t.id}`}>{t.label}</h2>{!selected&&t.question_count>2?<a className="topic-more" href={topicHref(t.id)}>全部 {t.question_count} 题 <span aria-hidden="true">→</span></a>:null}</header>
          <div className="discovery-questions">
            {questions.filter(q=>q.topic_id===t.id).slice(0,selected?undefined:2).map(q=>{
              const source=videos.find(v=>v.video_id===q.video_id);
              return <a className="discovery-question" key={`${q.video_id}:${q.question_id}`} href={questionHref(q,selected)} data-question-key={`${q.video_id}:${q.question_id}`}>
                <h3>{q.question}</h3><span className="discovery-arrow" aria-hidden="true">→</span>
                <p className="question-origin">{source?.title||'原视频'}<span>原片片段 {duration(q.duration_seconds)}</span>{source?.source_changed?<span>字幕已更新</span>:null}</p>
              </a>;
            })}
          </div>
        </section>):null}
        {!questions.length&&!error?<div className="discovery-empty"><h2>从一条收藏开始</h2><p>整理一条你感兴趣的视频，就能在这里看到它能回答的问题。</p><a href={collectionHref} className="primary">去我的收藏 <span aria-hidden="true">→</span></a></div>:null}
        {selected&&!chosen?<a className="browse-sources" href="#">返回所有主题 →</a>:null}
        {pending>0?<div className="discovery-pending"><p>{working?`${working} 条收藏正在整理，完成后会显示新的问题。`:`还有 ${pending} 条收藏尚未整理成问题。`}</p><a href={collectionHref}>查看收藏 →</a></div>:null}
      </div>
    </div>}
  </div>;
}
