import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Narrative, Question } from './ExploreApp';
import './question-response.css';

const clock=(value:number)=>`${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`;
function Paragraphs({text}:{text:string}){return <>{text.split(/\n\s*\n/).filter(Boolean).map((p,i)=><p key={i}>{p}</p>)}</>;}

/** Prose supplies context and transitions; inline source links carry the explanation. */
export function QuestionResponse({question,videoId,creator}:{question:Question;videoId:string;title:string;creator:string}){
  const [selected,setSelected]=useState<number|null>(null);
  const [revision,setRevision]=useState(0);
  const [rangeStarted,setRangeStarted]=useState(false);
  const [ended,setEnded]=useState(false);
  const [playerError,setPlayerError]=useState(false);
  const player=useRef<HTMLIFrameElement>(null);
  const links=useRef(new Map<number,HTMLButtonElement>());
  const played=useRef(false);
  const anchor=useRef<{element:HTMLButtonElement;top:number;focus:boolean}|null>(null);
  const fallback:Narrative={opening:question.watch_reason,steps:question.ranges.map((_,i)=>({before:i===0?'这部分内容见':'接着看',link_text:question.ranges.length===1?'作者在原片中的讲解':`原片中的第 ${i+1} 处讲解`,range_index:i,after:'。'})),closing:''};
  const narrative=question.narrative||fallback;
  useLayoutEffect(()=>{
    const saved=anchor.current;if(!saved)return;anchor.current=null;
    if(saved.element.isConnected){const delta=saved.element.getBoundingClientRect().top-saved.top;const scroller=saved.element.closest<HTMLElement>('.g-detail-content')||saved.element.closest<HTMLElement>('.ws-body');if(scroller)scroller.scrollTop+=delta;else window.scrollBy({top:delta,behavior:'instant'});if(saved.focus)saved.element.focus({preventScroll:true});}
  },[selected,revision]);
  useEffect(()=>{
    if(selected===null)return;
    const onMessage=(event:MessageEvent)=>{
      if(event.origin!=='https://www.youtube.com'||event.source!==player.current?.contentWindow)return;
      try{
        const data=typeof event.data==='string'?JSON.parse(event.data):event.data;
        if(!data||typeof data!=='object')return;
        const state=data.event==='onStateChange'?data.info:data.event==='infoDelivery'?data.info?.playerState:undefined;
        if(state===1){played.current=true;setRangeStarted(true);setEnded(false);setPlayerError(false);}
        if(state===0&&played.current)setEnded(true);
        if(data.event==='onError')setPlayerError(true);
      }catch{/* Ignore unrelated messages. */}
    };
    addEventListener('message',onMessage);return()=>removeEventListener('message',onMessage);
  },[selected]);
  function play(index:number){
    if(index===selected&&!ended&&!playerError){player.current?.focus({preventScroll:true});return;}
    const element=links.current.get(index);if(element)anchor.current={element,top:element.getBoundingClientRect().top,focus:false};
    played.current=false;setSelected(index);setRevision(n=>n+1);setEnded(false);setPlayerError(false);setRangeStarted(false);
  }
  function close(){
    const element=selected===null?undefined:links.current.get(selected);
    if(element){const top=element.getBoundingClientRect().top;anchor.current={element,top:top<0||top>innerHeight-80?100:top,focus:true};}
    played.current=false;setSelected(null);setEnded(false);setPlayerError(false);setRangeStarted(false);
  }
  function subscribe(){
    const send=(value:unknown)=>player.current?.contentWindow?.postMessage(JSON.stringify(value),'https://www.youtube.com');
    send({event:'listening',id:'narrative-player'});
    for(const event of ['onStateChange','onError'])send({event:'command',func:'addEventListener',args:[event]});
  }
  return <div className="narrative-response">
    <div className="narrative-opening"><Paragraphs text={narrative.opening}/></div>
    {narrative.steps.map((step,i)=>{const range=question.ranges[step.range_index],active=selected===step.range_index,id=`clip-${videoId}-${question.id}-${i}`;return <section className="narrative-step" key={range.id}>
      <p>{step.before}<button ref={element=>{if(element)links.current.set(step.range_index,element);else links.current.delete(step.range_index);}} type="button" className="narrative-video-link" aria-expanded={active} aria-controls={id} aria-label={`播放：${step.link_text}（${clock(range.start)}—${clock(range.end)}）`} onClick={()=>play(step.range_index)}>{step.link_text}<span className="inline-video-icon" aria-hidden="true"> ▷</span></button><span className="inline-time">（{clock(range.start)}—{clock(range.end)}）</span>{step.after}</p>
      {active?<div id={id} className="narrative-player"><div className="narrative-frame"><iframe key={`${range.id}:${revision}`} ref={player} title={`原片讲解 ${clock(range.start)}—${clock(range.end)}`} src={`https://www.youtube.com/embed/${videoId}?start=${Math.floor(range.start)}&end=${Math.ceil(range.end)}&autoplay=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" onLoad={subscribe}/></div><div className="narrative-player-bar"><span>{creator} · {clock(range.start)}—{clock(range.end)}</span><div><a href={`https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(range.start)}s`} target="_blank" rel="noopener noreferrer">原站观看 ↗</a><button onClick={close}>收起视频</button></div></div>
        {playerError?<p className="inline-playback-status" role="status">暂时无法播放，可尝试原站观看。</p>:ended?<p className="inline-playback-status" role="status">这段已结束，可以继续往下读。<button onClick={()=>play(step.range_index)}>重看这一段</button></p>:!rangeStarted?<p className="inline-playback-status">正在载入原片…</p>:null}
      </div>:null}
    </section>})}
    {narrative.closing?<div className="narrative-closing"><Paragraphs text={narrative.closing}/></div>:null}
  </div>;
}
