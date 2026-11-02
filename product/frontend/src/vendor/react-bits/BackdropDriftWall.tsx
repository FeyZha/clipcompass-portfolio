/*! Adapted from React Bits DriftWall, David Haz 2026, MIT + Commons Clause.
 * Original source/license: frontend/third-party/react-bits. */
import {useEffect,useLayoutEffect,useMemo,useRef,useState,type ReactNode} from 'react';
const columnFactor=(index:number,variance:number)=>{
 const pseudo=((index*.6180339887+.35)%1)*2-1;
 return 1+variance*pseudo;
};
export function BackdropDriftWall({paused,renderTile}:{paused:boolean;renderTile:(index:number)=>ReactNode}){
 const root=useRef<HTMLDivElement>(null),plane=useRef<HTMLDivElement>(null),tracks=useRef<(HTMLDivElement|null)[]>([]);
 const motion=useRef({offsets:[] as number[],velocities:[] as number[],pointer:{x:0,y:0},damped:{x:0,y:0}});
 const [size,setSize]=useState({width:1000,height:650});
 const [reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 const frozen=useRef(paused);frozen.current=paused;
 useEffect(()=>{const mq=window.matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(mq.matches);mq.addEventListener('change',change);return()=>mq.removeEventListener('change',change);},[]);
 useLayoutEffect(()=>{if(!root.current)return;const ro=new ResizeObserver(([entry])=>setSize({width:entry.contentRect.width,height:entry.contentRect.height}));ro.observe(root.current);return()=>ro.disconnect();},[]);
 const layout=useMemo(()=>({columns:Math.ceil((size.width*1.35+size.height*.55)/142),copyHeight:448,copies:Math.max(2,Math.ceil(size.height*1.8/448)+1)}),[size]);
 useEffect(()=>{
  const host=root.current?.closest('.ribbon-left');if(!host)return;
  const move=(event:Event)=>{const e=event as PointerEvent,r=host.getBoundingClientRect();motion.current.pointer={x:(e.clientX-r.left)/r.width-.5,y:(e.clientY-r.top)/r.height-.5};};
  const leave=()=>{motion.current.pointer={x:0,y:0};};
  host.addEventListener('pointermove',move,{passive:true});host.addEventListener('pointerleave',leave);
  return()=>{host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);};
 },[]);
 useEffect(()=>{
  const m=motion.current;
  for(let c=0;c<layout.columns;c++){m.offsets[c]??=layout.copyHeight*((c*.37)%1);m.velocities[c]??=0;}
  let last:number|null=null,raf=0;
  const animate=(ts:number)=>{
   const dt=last===null?0:Math.min(.05,Math.max(0,ts-last)/1000);last=ts;
   const stopped=frozen.current||reduced||document.hidden||getComputedStyle(root.current!).getPropertyValue('--backdrop-running').trim()==='0';
   root.current!.dataset.motion=stopped?'paused':'running';
   if(!stopped){
    const damp=1-Math.exp(-dt/.12);
    m.damped.x+=(m.pointer.x*4-m.damped.x)*damp;
    m.damped.y+=(-m.pointer.y*4-m.damped.y)*damp;
   }
   if(plane.current)plane.current.style.transform=`translate(-50%, -50%) rotateX(${20+m.damped.y}deg) rotateY(${-12+m.damped.x}deg) rotateZ(-18deg) translateZ(-70px)`;
   for(let c=0;c<layout.columns;c++){
    const target=stopped?0:17*columnFactor(c,.55)*(c%2===0?1:-1);
    const ease=1-Math.exp(-dt/.28);
    m.velocities[c]=stopped?0:m.velocities[c]+(target-m.velocities[c])*ease;
    let next=m.offsets[c]+m.velocities[c]*dt;
    next=((next%layout.copyHeight)+layout.copyHeight)%layout.copyHeight;
    m.offsets[c]=next;
    if(tracks.current[c])tracks.current[c]!.style.transform=`translate3d(0, ${-next}px, 0)`;
   }
   raf=requestAnimationFrame(animate);
  };
  raf=requestAnimationFrame(animate);return()=>cancelAnimationFrame(raf);
 },[layout,reduced]);
 return <div className="backdrop-drift-wall" ref={root} data-reduced={reduced}>
  <div className="backdrop-drift-plane" ref={plane} style={{width:layout.columns*142}}>
   {Array.from({length:layout.columns},(_,c)=><div className="backdrop-drift-col" key={c}>
    <div className="backdrop-drift-track" ref={el=>{tracks.current[c]=el;}}>
     {Array.from({length:layout.copies*4},(_,i)=><div className="backdrop-drift-tile" data-tone={(c*3+i%4)%5} key={i}>{renderTile(c*4+i%4)}</div>)}
    </div>
   </div>)}
  </div>
 </div>;
}
