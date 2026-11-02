import {CatmullRomCurve3, Matrix4, PerspectiveCamera, Scene, Vector3} from 'three';
import {CSS3DObject, CSS3DRenderer} from 'three/addons/renderers/CSS3DRenderer.js';

// Independently implemented from visible gallery behaviour. No React Bits Pro
// source is used. Three's MIT CSS3DRenderer keeps the question text real HTML.
export interface RibbonItem {id:string;question:string;topic:string;color:string;source:string;number:number}
export type RibbonMode='overview'|'browse';
export interface RibbonControls {
  enter:()=>void; overview:()=>void; step:(amount:number)=>void;
  focus:(id:string|null)=>void; pause:(value:boolean)=>void; dispose:()=>void;
}
export function createRibbon(stage:HTMLElement,items:RibbonItem[],events:{mode:(mode:RibbonMode)=>void;active:(id:string)=>void;open:(id:string)=>void},initialBrowse=false):RibbonControls {
  const scene=new Scene(),camera=new PerspectiveCamera(50,1,.1,500);
  const renderer=new CSS3DRenderer();renderer.domElement.className='ribbon-space';
  const line=document.createElement('canvas');line.className='ribbon-thread';line.setAttribute('aria-hidden','true');
  const ctx=line.getContext('2d');stage.append(line,renderer.domElement);
  const abort=new AbortController(),signal=abort.signal,reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const points=Array.from({length:180},(_,i)=>{const t=i/180*Math.PI*2;return new Vector3(14*Math.sin(t),2.8*Math.cos(t),8.5*Math.sin(2*t));});
  const path=new CatmullRomCurve3(points,true,'centripetal');path.arcLengthDivisions=800;
  const count=items.length>1?Math.max(42,items.length*2):1;
  const instances: {object:CSS3DObject;button:HTMLButtonElement;item:RibbonItem;phase:number}[]=[];
  let hitAreas:{index:number;x:number;y:number;width:number;height:number;depth:number}[]=[];
  for(let i=0;i<count;i++){
    const item=items[i%items.length],button=document.createElement('button');button.type='button';button.className='ribbon-card';
    button.dataset.questionId=item.id;button.dataset.instance=String(i);button.style.setProperty('--paper',item.color);
    button.setAttribute('aria-label','探索问题：'+item.question);
    const meta=document.createElement('span');meta.className='ribbon-card-topic';meta.textContent=item.topic;
    const text=document.createElement('span');text.className='ribbon-card-question';text.textContent=item.question;
    const foot=document.createElement('span');foot.className='ribbon-card-foot';
    const action=document.createElement('span');action.textContent='看原片里的讲解 →';foot.append(action);button.append(meta,text,foot);
    const object=new CSS3DObject(button);object.scale.setScalar(2.8/360);object.position.copy(path.getPointAt(i/count));scene.add(object);
    instances.push({object,button,item,phase:i/count});
  }
  let width=1,height=1,frame=0,last=0,elapsed=0,mode:RibbonMode=initialBrowse?'browse':'overview';
  let progress=.04,targetProgress=.04,blend=initialBrowse?1:0,blendTarget=blend,focusId:string|null=null,focusPhase:number|null=null;
  let paused=false,hover=false,keyboardFocus=false,dragging=false,moved=false,held=false,manual=false,angle=1.1,angleTarget=1.1,lastActive='';
  let dragStart={x:0,y:0},pointerLast={x:0,y:0},holdTimer:ReturnType<typeof setTimeout>|undefined;
  const position=new Vector3(),target=new Vector3(),tangent=new Vector3(),normal=new Vector3(),look=new PerspectiveCamera(),up=new Vector3(0,1,0);
  const overviewPosition=new Vector3(),overviewTarget=new Vector3(0,0,0),ridePosition=new Vector3(),rideTarget=new Vector3(),projected=new Vector3();
  const threadPoints=Array.from({length:361},(_,i)=>path.getPointAt(i/360));
  const wrap=(value:number)=>(value%1+1)%1;
  function setMode(next:RibbonMode){if(mode!==next){mode=next;events.mode(mode);}blendTarget=mode==='browse'?1:0;stage.dataset.mode=mode;}
  function enter(){manual=true;setMode('browse');}
  function overview(){manual=true;focusId=null;focusPhase=null;setMode('overview');}
  function step(amount:number){manual=true;focusId=null;focusPhase=null;setMode('browse');targetProgress+=amount/count;}
  function focus(id:string|null){
    focusId=id;if(!id){focusPhase=null;return;}manual=true;
    const nearest=instances.filter(x=>x.item.id===id).sort((a,b)=>Math.abs(Math.atan2(Math.sin((a.phase-wrap(progress))*Math.PI*2),Math.cos((a.phase-wrap(progress))*Math.PI*2)))-Math.abs(Math.atan2(Math.sin((b.phase-wrap(progress))*Math.PI*2),Math.cos((b.phase-wrap(progress))*Math.PI*2))))[0];
    if(nearest){focusPhase=nearest.phase;targetProgress=progress+Math.atan2(Math.sin((nearest.phase-wrap(progress))*Math.PI*2),Math.cos((nearest.phase-wrap(progress))*Math.PI*2))/(Math.PI*2);setMode('browse');}
  }
  function pick(clientX:number,clientY:number){const rect=stage.getBoundingClientRect(),x=clientX-rect.x,y=clientY-rect.y;return hitAreas.filter(h=>x>=h.x&&x<=h.x+h.width&&y>=h.y&&y<=h.y+h.height).sort((a,b)=>a.depth-b.depth)[0];}
  function resize(){width=stage.clientWidth||1000;height=stage.clientHeight||650;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();const dpr=Math.min(devicePixelRatio||1,2);line.width=width*dpr;line.height=height*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);}
  const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(resize):null;observer?.observe(stage);window.addEventListener('resize',resize,{signal});resize();
  camera.position.set(22,25,35);camera.lookAt(overviewTarget);stage.dataset.mode=mode;events.mode(mode);
  stage.addEventListener('pointermove',e=>{hover=!!pick(e.clientX,e.clientY);stage.style.cursor=hover?'pointer':'grab';},{signal});
  stage.addEventListener('pointerleave',()=>{hover=false;stage.style.cursor='grab';},{signal});
  stage.addEventListener('focusin',e=>{keyboardFocus=(e.target as Element).matches('.ribbon-card');},{signal});
  stage.addEventListener('focusout',()=>{keyboardFocus=false;},{signal});
  stage.addEventListener('click',e=>{
    if(e.detail!==0&&(moved||held))return;
    const keyCard=e.detail===0?(e.target as Element).closest<HTMLButtonElement>('.ribbon-card'):null;
    const index=keyCard?Number(keyCard.dataset.instance):pick(e.clientX,e.clientY)?.index;if(index===undefined)return;
    const card=instances[index].button;manual=true;
    if(mode==='overview'){targetProgress=instances[index].phase;setMode('browse');return;}
    focus(card.dataset.questionId!);events.open(card.dataset.questionId!);
  },{signal});
  stage.addEventListener('wheel',e=>{if(focusId)return;e.preventDefault();step(Math.max(-3,Math.min(3,(e.deltaY||e.deltaX)*.004)));},{signal,passive:false});
  stage.addEventListener('pointerdown',e=>{
    if(e.button!==0)return;dragging=true;moved=false;held=false;dragStart=pointerLast={x:e.clientX,y:e.clientY};
    holdTimer=setTimeout(()=>{if(!dragging||moved||focusId)return;held=true;blendTarget=0;},500);
  },{signal});
  window.addEventListener('pointermove',e=>{
    if(!dragging)return;
    if(Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y)>6)moved=true;
    if(moved){manual=true;if(held||mode==='overview')angleTarget+=(e.clientX-pointerLast.x)*.005;else step((pointerLast.y-e.clientY+pointerLast.x-e.clientX)*.012);}
    pointerLast={x:e.clientX,y:e.clientY};
  },{signal});
  window.addEventListener('pointerup',()=>{dragging=false;clearTimeout(holdTimer);if(held){blendTarget=mode==='browse'?1:0;setTimeout(()=>{held=false;},0);}},{signal});
  const cancelDrag=()=>{dragging=false;held=false;clearTimeout(holdTimer);blendTarget=mode==='browse'?1:0;};
  window.addEventListener('pointercancel',cancelDrag,{signal});window.addEventListener('blur',cancelDrag,{signal});
  stage.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();step(-1);}},{signal});
  const temp=new Vector3(),cameraView=new Matrix4();
  function render(now:number){
    frame=requestAnimationFrame(render);const dt=Math.min(.05,(now-last)/1000||.016);last=now;if(document.hidden)return;
    elapsed+=dt;
    if(!manual&&!initialBrowse&&!reduce.matches&&elapsed>3.4){manual=true;setMode('browse');}
    if(mode==='browse'&&!paused&&!hover&&!keyboardFocus&&!dragging&&!focusId&&!reduce.matches&&blend>.98)targetProgress+=dt*.24/count;
    if(mode==='overview'&&!paused&&!hover&&!dragging&&!reduce.matches)angleTarget+=dt*.035;
    const ease=reduce.matches?1:1-Math.exp(-dt*4.2);progress+=(targetProgress-progress)*ease;blend+=(blendTarget-blend)*(reduce.matches?1:1-Math.exp(-dt*2.6));angle+=(angleTarget-angle)*ease;
    const orbit=28/Math.min(1,camera.aspect/1.6);overviewPosition.set(Math.sin(angle)*orbit,orbit*.64,Math.cos(angle)*orbit);
    const u=wrap(progress);path.getPointAt(u,position);path.getTangentAt(u,tangent);normal.crossVectors(tangent,up).normalize();
    ridePosition.copy(position).addScaledVector(normal,3.2).addScaledVector(tangent,-5).addScaledVector(up,1.4);
    rideTarget.copy(position);
    if(focusPhase!==null){path.getPointAt(focusPhase,rideTarget);ridePosition.copy(rideTarget).addScaledVector(normal,4.6).addScaledVector(up,1.1);}
    const mix=blend*blend*(3-2*blend);target.copy(overviewTarget).lerp(rideTarget,mix);temp.copy(overviewPosition).lerp(ridePosition,mix);
    camera.position.lerp(temp,reduce.matches?1:1-Math.exp(-dt*7));look.position.copy(camera.position);look.lookAt(target);camera.quaternion.slerp(look.quaternion,reduce.matches?1:1-Math.exp(-dt*7));camera.updateMatrixWorld();cameraView.copy(camera.matrixWorldInverse);
    const nearestIndex=Math.round(wrap(progress)*count)%count,active=instances[nearestIndex]?.item.id;
    if(active&&active!==lastActive){lastActive=active;events.active(active);}
    hitAreas=[];
    for(const [index,entry] of instances.entries()){
      entry.object.quaternion.copy(camera.quaternion);const local=temp.copy(entry.object.position).applyMatrix4(cameraView),distance=-local.z;
      const size=height/(2*Math.tan(camera.fov*Math.PI/360))*2.8/Math.max(distance,.01);
      projected.copy(entry.object.position).project(camera);
      const relative=(entry.phase-wrap(progress)+1.5)%1-.5;
      const passed=blend>.7&&relative<-.5/count&&relative>-.2&&distance<18;
      const visible=distance>.8&&Math.abs(projected.x)<1.45&&Math.abs(projected.y)<1.55&&!passed;
      const opacity=blend<.2?1:Math.max(.08,Math.min(1,1-(distance-9)/45));
      entry.button.style.visibility=visible?'visible':'hidden';entry.button.style.opacity='1';
      // Fade opaque paper toward the scene, rather than making stacked words
      // transparent and readable through one another.
      entry.button.style.filter=`brightness(${focusId&&entry.item.id!==focusId?opacity*.3:opacity})`;
      const wholeCard=Math.abs(projected.x)+size/width<.99&&Math.abs(projected.y)+size*(280/360)/height<.99;
      const readable=visible&&wholeCard&&mode==='browse'&&size>150&&entry.item.id===active&&(!focusId||entry.item.id===focusId);
      // Chromium CSS3D hit tests can disagree with painted planes. Pick using
      // the same camera projection as the scene, with nearest depth first.
      entry.button.style.pointerEvents='none';
      if(visible&&(mode==='overview'||readable))hitAreas.push({index,x:(projected.x*.5+.5)*width-size/2,y:(-projected.y*.5+.5)*height-size*280/720,width:size,height:size*280/360,depth:distance});
      entry.button.tabIndex=readable?0:-1;
      entry.button.setAttribute('aria-hidden',String(!readable));
      entry.button.classList.toggle('is-current',entry.item.id===active);entry.button.classList.toggle('is-focused',entry.item.id===focusId);
    }
    if(ctx){ctx.clearRect(0,0,width,height);ctx.strokeStyle=getComputedStyle(stage).getPropertyValue('--thread-color').trim()||'#7c75984d';ctx.lineWidth=1;ctx.beginPath();let pen=false;for(const point of threadPoints){projected.copy(point).project(camera);const visible=projected.z<1&&projected.z>0&&Math.abs(projected.x)<4&&Math.abs(projected.y)<4;if(visible){const x=(projected.x*.5+.5)*width,y=(-projected.y*.5+.5)*height;if(pen)ctx.lineTo(x,y);else ctx.moveTo(x,y);}pen=visible;}ctx.stroke();}
    renderer.render(scene,camera);stage.dataset.ready='true';stage.dataset.transition=String(Math.abs(blend-blendTarget)>.02);
  }
  frame=requestAnimationFrame(render);
  return {enter,overview,step,focus,pause(value){paused=value;},dispose(){cancelAnimationFrame(frame);clearTimeout(holdTimer);abort.abort();observer?.disconnect();instances.forEach(x=>x.object.removeFromParent());renderer.domElement.remove();line.remove();}};
}
