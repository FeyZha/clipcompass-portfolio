import {useEffect,useState,type CSSProperties} from 'react';
import {QuietMarquee} from '../vendor/QuietMarquee';
import './video-backdrop.css';
const prototypes=[
 <span className="prototype-player"><span className="prototype-screen"><i/></span><span className="prototype-progress"><i/></span><span className="prototype-controls"><i/><i/><i/></span></span>,
 <span className="prototype-list">{Array.from({length:4},(_,i)=><span className="prototype-row" key={i}><i/><span><b/><b/></span><em/></span>)}</span>,
 <span className="prototype-chat"><span><i/><b/></span><span><i/><b/></span><span><i/><b/></span><em/></span>,
 <span className="prototype-board">{Array.from({length:3},(_,i)=><span key={i}><b/><i/><i/>{i!==1?<i/>:null}</span>)}</span>,
 <span className="prototype-editor"><span className="prototype-tools"><i/><i/><i/><b/></span><span className="prototype-workspace"><span><i/><i/><i/></span><span><b/><i/><i/><i/><em/></span></span></span>,
 <span className="prototype-library"><span className="prototype-search"><i/><b/></span><span>{Array.from({length:4},(_,i)=><span key={i}><i/><b/></span>)}</span></span>
];
const splitPlans:Record<string,string>[]=[
 {a:'rows',c:'columns',d:'three',g:'rows',h:'columns',k:'columns'},
 {c:'columns',d:'rows',e:'columns',g:'three',i:'rows',j:'columns',k:'columns'},
 {a:'rows',c:'columns',d:'three',f:'columns',g:'rows',k:'columns',l:'rows'}
];
const panels=Array.from({length:3},(_,panel)=><div className="backdrop-mosaic" key={panel}>
 {Array.from('abcdefghijkl', (area,i)=>{
 const split=splitPlans[panel][area];
 return <span className="backdrop-slot" data-split={split} data-balance={(i+panel)%2} key={area} style={{gridArea:area}}>
 {Array.from({length:split==='three'?3:split?2:1},(_,part)=><span className="backdrop-frame" key={part} data-tone={(panel+i+part)%3} style={{'--tile-delay':`${-(panel*3+i*2+part*5)}s`} as CSSProperties}>
 <span className="backdrop-thumbnail" data-prototype={(panel*3+i+part*2)%prototypes.length}>{prototypes[(panel*3+i+part*2)%prototypes.length]}</span>
 <span className="backdrop-video-meta"><i/><span><b/><b/></span></span>
 </span>)}
</span>;})}
</div>);
export function VideoBackdrop({paused}:{paused:boolean}){
 const [hidden,setHidden]=useState(()=>document.hidden);
 useEffect(()=>{const change=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',change);return()=>document.removeEventListener('visibilitychange',change);},[]);
 return <div className="video-backdrop" aria-hidden="true" data-paused={paused||hidden}>
  <QuietMarquee>{panels}</QuietMarquee>
 </div>;
}
