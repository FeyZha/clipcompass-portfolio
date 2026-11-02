// Adapted from this project's ribbon-engine.ts: same CSS3D cards, camera
// interpolation, projected picking, event cleanup and learning callbacks.
// Eight spatial tracks replace the single tour path; no content is regenerated.
import {CatmullRomCurve3, Euler, Matrix4, PerspectiveCamera, Quaternion, Scene, Vector3} from 'three';
import {CSS3DObject, CSS3DRenderer} from 'three/addons/renderers/CSS3DRenderer.js';
import type {RibbonControls,RibbonItem,RibbonMode} from './ribbon-engine';
import {createOrbitCore} from './orbit-core';
import type {OrbitAttractor} from '../vendor/three-examples/orbit-field';

type Events={mode:(mode:RibbonMode)=>void;active:(id:string)=>void;open:(id:string)=>void};
type Hit={index:number;x:number;y:number;width:number;height:number;depth:number;corners:{x:number;y:number}[]};
type Projection={index:number;ring:number;depth:number;cx:number;cy:number;size:number;height:number;boundWidth:number;boundHeight:number};
const TAU=Math.PI*2;
const CARD_WIDTH=400;
const VIEW_DISTANCE=53;
const easeBetween=(from:number,to:number,value:number)=>{const t=Math.max(0,Math.min(1,(value-from)/(to-from)));return t*t*(3-2*t);};
// One plain folded-paper shape; its restored gentle tilt has no size pulse.
const markerShape={width:23,height:14};
const readingAnchors=[[.49,.20],[.29,.46],[.83,.47],[.32,.74],[.75,.78]];
const accents=['#003bff','#003bff','#979ca8','#11141c','#b5ff00','#b5ff00','#003bff','#7b8190'];
export function createOrbits(stage:HTMLElement,items:RibbonItem[],events:Events):RibbonControls {
  const scene=new Scene(),camera=new PerspectiveCamera(30,1,.1,500),renderer=new CSS3DRenderer();
  renderer.domElement.className='ribbon-space';
  const line=document.createElement('canvas');line.className='ribbon-thread orbit-thread';line.setAttribute('aria-hidden','true');
  const ctx=line.getContext('2d');stage.append(line,renderer.domElement);
  const abort=new AbortController(),signal=abort.signal,reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const up=new Vector3(0,1,0);
  // Calibrate the existing circle planes to the reference's vertical blue,
  // oblique green and broad crossing arcs, in the initial camera view.
  // Distinct radial shells keep independently turning circles from sharing
  // one physical path. Keep the blue/green hero radii; separate the quieter
  // rails inside and outside them, including both former equal-radius pairs.
  // Two quiet inner tracks give the frame a nested structure. The six outer
  // tracks keep their reading room and the blue/green silhouette stays intact.
  const radii=[13.1,12.0,8.6,11.2,10.5,13.85,12.55,6.8];
  const directions=[-10,-82,-38,58,42,20,35,-40];
  const ratios=[.60,-.56,.76,-.64,-.60,.42,.90,-.70];
  const referenceView=new PerspectiveCamera();referenceView.position.set(0,.17,1);referenceView.lookAt(0,0,0);
  const initialInverse=new Matrix4().makeRotationY(.32).premultiply(new Matrix4().makeRotationX(.10)).premultiply(new Matrix4().makeRotationZ(-.18)).invert();
  const toLocal=(v:Vector3)=>v.applyQuaternion(referenceView.quaternion).applyMatrix4(initialInverse);
  const bases=directions.map((degrees,i)=>{const angle=degrees*Math.PI/180,slope=Math.sqrt(1-ratios[i]**2);return {u:toLocal(new Vector3(Math.cos(angle),-Math.sin(angle),0)),normal:toLocal(new Vector3(-Math.sin(angle)*slope,-Math.cos(angle)*slope,ratios[i]))};});
  // Axes run through the centre IN space, not toward the camera. Each rigid
  // circular plane now turns forward/back; its depth and projected ellipse
  // change together. The light outer track spins in its own plane as a rim.
  // Mirror the green plane and axis: the fixed diagonal now runs upper-left
  // to lower-right, while its arcs sweep through depth across that axis.
  const spatialAxes=[[.14,1,.18],[.05,1,-.12],[1,.22,.1],[-.3,1,.12],[.743,-.669,0],[1,-.25,-.1],[0,0,1],[.65,.75,-.1]];
  const spinAxes=spatialAxes.map(([x,y,z],i)=>i===6?bases[i].normal.clone():toLocal(new Vector3(x,y,z).normalize()));
  const spinRates=[-.010,.028,-.016,.040,.038,.012,-.007,.033];
  // Orbit travel is separate from the plane's rotation. Rates are turns/sec;
  // visible planets should travel along a ring, not look welded onto it.
  const travelRates=[.0048,-.0068,.0036,-.008,.0056,-.0042,.010,-.006];
  // Integrate a gentle speed wave so pauses resume at exactly the same place
  // and rings never jump, synchronise their easing or suddenly reverse.
  const pacedTime=(time:number,index:number,amount:number,frequency:number)=>{
    const offset=index*1.73;
    return time+amount*(Math.cos(offset)-Math.cos(time*frequency+offset))/frequency;
  };
  const ringFrames=bases.map(()=>new Matrix4());
  const coreAt=createOrbitCore();
  let coreTime=0,coreMotion=0;
  const coreOrientation=new Quaternion(),previousCoreOrientation=new Quaternion(),coreTurn=new Quaternion(),coreTurnVector=new Vector3();
  let coreOrientationReady=false;
  const coreWorldInverse=new Matrix4();
  const fieldWeights=[.10,.14,.05,.08,.18,.07,.08,.035];
  const coreAttractors:OrbitAttractor[]=radii.map((radius,i)=>({position:new Vector3(),axis:new Vector3(),mass:radius**3*fieldWeights[i],spin:(i%2===0?1:-1)*.1/radius}));
  const wrap=(phase:number)=>(phase%1+1)%1;
  const tracks=radii.map((radius,i)=>{
    const {u,normal}=bases[i],v=new Vector3().crossVectors(normal,u);
    const points=Array.from({length:121},(_,n)=>{const t=n/121*TAU;return u.clone().multiplyScalar(Math.cos(t)*radius).addScaledVector(v,Math.sin(t)*radius);});
    const curve=new CatmullRomCurve3(points,true,'centripetal');curve.arcLengthDivisions=360;return curve;
  });
  const threadPoints=tracks.map(path=>Array.from({length:241},(_,i)=>path.getPointAt(i/240)));
  const initialWidth=stage.clientWidth||1100,initialHeight=stage.clientHeight||850;
  const initialCamera=new PerspectiveCamera(30,initialWidth/initialHeight,.1,500),initialDistance=VIEW_DISTANCE/Math.min(1,initialCamera.aspect/1.18);
  initialCamera.position.set(0,initialDistance*.17,initialDistance);initialCamera.lookAt(0,0,0);initialCamera.updateMatrixWorld();
  const initialWorld=initialInverse.clone().invert(),seedSlots=[2,0,3,4,1,-1,-1,-1];
  const phaseSeeds=tracks.map((track,ring)=>{
    const slot=seedSlots[ring];if(slot<0)return ring*.071+.13;
    let best=0,cost=Infinity;
    for(let n=0;n<240;n++){const point=track.getPointAt(n/240).applyMatrix4(initialWorld).project(initialCamera),distance=Math.hypot((point.x*.5+.5)-readingAnchors[slot][0],(-point.y*.5+.5)-readingAnchors[slot][1]);if(distance<cost){cost=distance;best=n/240;}}
    return best;
  });
  const instances=items.map((item,i)=>{
    const ring=i%8,total=Math.ceil((items.length-ring)/8),phase=(Math.floor(i/8)/total+phaseSeeds[ring])%1;
    const button=document.createElement('button');button.type='button';button.className='ribbon-card orbit-card';
    const surface=document.createElement('span');surface.className='orbit-card-surface';surface.setAttribute('aria-hidden','true');
    button.dataset.questionId=item.id;button.dataset.instance=String(i);button.dataset.ring=String(ring);
    button.style.setProperty('--orbit-accent',accents[ring]);button.style.setProperty('--question-accent',ring===4||ring===5?'#b5ff00':'#003bff');button.setAttribute('aria-label','探索问题：'+item.question);
    const meta=document.createElement('span');meta.className='ribbon-card-topic';meta.textContent=item.topic;
    const text=document.createElement('span');text.className='ribbon-card-question';text.textContent=item.question;
    const foot=document.createElement('span');foot.className='ribbon-card-foot';foot.setAttribute('aria-hidden','true');
    // Reuse the arrow path from the user-authorized Kimi AtlasShell icon set.
    // SVG avoids font-dependent bearings crowding the circular affordance.
    foot.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';button.append(surface,meta,text,foot);
    const object=new CSS3DObject(button);object.scale.setScalar(4.6/CARD_WIDTH);scene.add(object);
    return {object,button,surface,item,ring,phase,currentPhase:phase,base:tracks[ring].getPointAt(phase),expansion:0,nativeHeight:142,openedAt:0};
  });
  let width=1,height=1,frame=0,last=0,rotation=.32,targetRotation=.32,pitch=.10,targetPitch=.10;
  let paused=false,hover=-1,keyboardFocus=false,dragging=false,moved=false,turning=false,focusId:string|null=null,lastActive='';
  let zoom=1,targetZoom=1,blend=0,blendTarget=0,mode:RibbonMode='overview';
  let dragStart={x:0,y:0},pointerLast={x:0,y:0},hits:Hit[]=[];
  let foreground=new Set<number>(),lastArrangement=-10,orbitPhase=0,spinTime=0,arranged=false;
  let screenBox={x:0,y:0},headingBox:DOMRect|undefined;
  const cameraView=new Matrix4(),worldRotation=new Matrix4(),pitchRotation=new Matrix4(),sceneTilt=new Matrix4().makeRotationZ(-.18);
  const look=new PerspectiveCamera(),overviewPosition=new Vector3(),target=new Vector3(),destination=new Vector3();
  const focusPosition=new Vector3(),projected=new Vector3(),temp=new Vector3();
  const tangent=new Vector3(),radial=new Vector3(),cameraRight=new Vector3(),cameraUp=new Vector3(),cardEuler=new Euler(),cardTurn=new Quaternion();
  const tooltip=document.createElement('button');tooltip.type='button';tooltip.tabIndex=-1;tooltip.className='orbit-preview';tooltip.hidden=true;stage.append(tooltip);
  const previewTopic=document.createElement('span'),previewQuestion=document.createElement('p'),previewAction=document.createElement('span');
  previewTopic.className='orbit-preview-topic';previewAction.className='orbit-preview-action';previewAction.textContent='探索 →';tooltip.append(previewTopic,previewQuestion,previewAction);
  function setMode(next:RibbonMode){if(mode!==next){mode=next;events.mode(mode);}stage.dataset.mode=mode;}
  function focus(id:string|null){focusId=instances.some(x=>x.item.id===id)?id:null;if(focusId){turning=false;targetRotation=rotation;targetPitch=pitch;}blendTarget=focusId?1:0;lastArrangement=-10;hover=-1;setMode(focusId?'browse':'overview');tooltip.hidden=true;}
  function overview(){focus(null);targetZoom=1;}
  function enter(){targetZoom=targetZoom<1.1?1.16:1;}
  function step(amount:number){if(focusId)return;if(keyboardFocus)stage.focus({preventScroll:true});targetRotation+=amount*.32;hover=-1;tooltip.hidden=true;}
  function pick(clientX:number,clientY:number){const rect=stage.getBoundingClientRect(),x=clientX-rect.x,y=clientY-rect.y;return hits.filter(h=>{
    if(instances[h.index].button.classList.contains('is-marker'))return x>=h.x-7&&x<=h.x+h.width+7&&y>=h.y-7&&y<=h.y+h.height+7;
    if(x<h.x||x>h.x+h.width||y<h.y||y>h.y+h.height)return false;
    const signs=h.corners.map((a,i)=>{const b=h.corners[(i+1)%4];return (b.x-a.x)*(y-a.y)-(b.y-a.y)*(x-a.x);});return signs.every(v=>v>=-.1)||signs.every(v=>v<=.1);
  }).sort((a,b)=>a.depth-b.depth)[0];}
  function preview(index:number){
    if(turning){hover=-1;tooltip.hidden=true;return;}
    hover=index;if(index<0||focusId){tooltip.hidden=true;return;}
    const entry=instances[index],item=entry.item,h=hits.find(x=>x.index===index);if(!h)return;
    if(!entry.button.classList.contains('is-marker')){tooltip.hidden=true;return;}
    previewTopic.textContent=item.topic;previewQuestion.textContent=item.question;tooltip.setAttribute('aria-label','探索问题：'+item.question);tooltip.hidden=false;
    const tw=320,th=tooltip.offsetHeight;tooltip.style.left=`${Math.max(16,Math.min(width-tw-16,h.x+h.width+14))}px`;
    tooltip.style.top=`${Math.max(12,Math.min(height-th-12,h.y+h.height/2-th/2))}px`;
  }
  function resize(){lastArrangement=-10;width=stage.clientWidth||1000;height=stage.clientHeight||650;screenBox=stage.getBoundingClientRect();headingBox=stage.parentElement?.querySelector('.orbit-heading')?.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();const dpr=Math.min(devicePixelRatio||1,2);line.width=width*dpr;line.height=height*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);}
  const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(resize):null;observer?.observe(stage);window.addEventListener('resize',resize,{signal});resize();
  stage.dataset.mode=mode;stage.dataset.trackCount='8';camera.position.copy(initialCamera.position);camera.lookAt(0,0,0);events.mode(mode);
  // Measure each complete question at its native card width, before any card is
  // collapsed into a point. Picking and collision layout use this actual height.
  renderer.render(scene,camera);instances.forEach(entry=>entry.nativeHeight=entry.button.offsetHeight);
  stage.addEventListener('pointermove',e=>{
    if(dragging)return;
    if(!tooltip.hidden){const r=tooltip.getBoundingClientRect();if(e.clientX>=r.left-16&&e.clientX<=r.right+8&&e.clientY>=r.top-8&&e.clientY<=r.bottom+8)return;}
    const hit=pick(e.clientX,e.clientY);preview(hit?.index??-1);stage.style.cursor=hit?'pointer':'grab';
  },{signal});
  stage.addEventListener('pointerleave',()=>{hover=-1;tooltip.hidden=true;stage.style.cursor='grab';},{signal});
  stage.addEventListener('focusin',e=>{if(tooltip.contains(e.target as Node)){keyboardFocus=true;return;}const b=(e.target as Element).closest<HTMLElement>('.orbit-card');keyboardFocus=!!b;if(b)preview(Number(b.dataset.instance));},{signal});
  stage.addEventListener('focusout',e=>{if(e.relatedTarget&&tooltip.contains(e.relatedTarget as Node))return;keyboardFocus=false;hover=-1;tooltip.hidden=true;},{signal});
  stage.addEventListener('click',e=>{
    if(e.detail!==0&&moved)return;
    const keyCard=e.detail===0?(e.target as Element).closest<HTMLElement>('.orbit-card'):null;
    const index=tooltip.contains(e.target as Node)&&hover>=0?hover:keyCard?Number(keyCard.dataset.instance):pick(e.clientX,e.clientY)?.index;if(index===undefined)return;
    focus(instances[index].item.id);events.open(instances[index].item.id);
  },{signal});
  stage.addEventListener('wheel',e=>{if(focusId)return;e.preventDefault();step(Math.max(-1.5,Math.min(1.5,(e.deltaY||e.deltaX)*.003)));},{signal,passive:false});
  stage.addEventListener('pointerdown',e=>{if(e.button!==0||focusId)return;moved=false;if(tooltip.contains(e.target as Node))return;dragging=true;hover=-1;tooltip.hidden=true;dragStart=pointerLast={x:e.clientX,y:e.clientY};},{signal});
  window.addEventListener('pointermove',e=>{if(!dragging)return;if(Math.hypot(e.clientX-dragStart.x,e.clientY-dragStart.y)>6)moved=true;if(moved){if(keyboardFocus)stage.focus({preventScroll:true});targetRotation+=(e.clientX-pointerLast.x)*.004;targetPitch=Math.max(-.55,Math.min(.55,targetPitch+(e.clientY-pointerLast.y)*.002));}pointerLast={x:e.clientX,y:e.clientY};},{signal});
  const cancelDrag=()=>{dragging=false;};window.addEventListener('pointerup',cancelDrag,{signal});window.addEventListener('pointercancel',cancelDrag,{signal});window.addEventListener('blur',cancelDrag,{signal});
  stage.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();step(-1);}},{signal});
  function render(now:number){
    frame=requestAnimationFrame(render);const dt=Math.min(.05,(now-last)/1000||.016);last=now;if(document.hidden)return;
    if(!focusId&&(Math.abs(targetRotation-rotation)>.008||Math.abs(targetPitch-pitch)>.004))turning=true;
    const papersGone=instances.every(e=>e.expansion===0);
    // Fold papers into their track points before a manual turn. Otherwise a
    // fast drag carries readable paragraphs across each other and the hero.
    if(turning){foreground.clear();hover=-1;tooltip.hidden=true;lastArrangement=-10;}
    const autoRunning=!paused&&!turning&&hover<0&&!keyboardFocus&&!dragging&&!focusId&&!reduce.matches;
    if(autoRunning){orbitPhase+=dt*.0013;spinTime+=dt;}
    const ease=reduce.matches?1:1-Math.exp(-dt*5);
    if(!turning||papersGone){rotation+=(targetRotation-rotation)*ease;pitch+=(targetPitch-pitch)*ease;}
    if(turning&&papersGone&&!dragging&&Math.abs(targetRotation-rotation)<.004&&Math.abs(targetPitch-pitch)<.002)turning=false;
    zoom+=(targetZoom-zoom)*ease;blend+=(blendTarget-blend)*(reduce.matches?1:1-Math.exp(-dt*3));
    // Drag changes spatial yaw/pitch, rather than rolling the whole diagram
    // in the screen plane. The same matrices move circles and card anchors.
    pitchRotation.makeRotationX(pitch);
    worldRotation.makeRotationY(rotation).premultiply(pitchRotation).premultiply(sceneTilt);
    coreOrientation.setFromRotationMatrix(worldRotation);
    if(!coreOrientationReady){previousCoreOrientation.copy(coreOrientation);coreOrientationReady=true;}
    // The inverse delta is liquid lag in the CURRENT local frame. Actual
    // rotation is sampled after the paper-fold gate; queued pointer movement
    // cannot kick the core before the visible system starts turning.
    coreTurn.copy(coreOrientation).invert().multiply(previousCoreOrientation).normalize();
    if(coreTurn.w<0)coreTurn.set(-coreTurn.x,-coreTurn.y,-coreTurn.z,-coreTurn.w);
    coreTurnVector.set(coreTurn.x,coreTurn.y,coreTurn.z);
    const sine=coreTurnVector.length();
    if(sine>1e-8)coreTurnVector.multiplyScalar(2*Math.atan2(sine,coreTurn.w)/sine);else coreTurnVector.set(0,0,0);
    previousCoreOrientation.copy(coreOrientation);
    const coreReading=hover>=0||keyboardFocus||!!focusId;
    const coreCanMove=!reduce.matches&&!coreReading&&(autoRunning||coreTurnVector.lengthSq()>1e-10||coreMotion>.0001);
    // Pausing stops idle motion; a deliberate manual turn can still stir the
    // core and let its short wake settle. Reading/reduced motion freeze both.
    if(coreCanMove)coreTime+=dt;else coreTurnVector.set(0,0,0);
    const ringSpins=spinRates.map((rate,ring)=>rate*pacedTime(spinTime,ring,.22,.065+ring*.008));
    const ringTravel=travelRates.map((rate,ring)=>rate*pacedTime(spinTime,ring+3,.15,.09+ring*.006));
    ringFrames.forEach((matrix,ring)=>matrix.makeRotationAxis(spinAxes[ring],ringSpins[ring]).premultiply(worldRotation));
    instances.forEach((x,index)=>{
      // Bounded individual pace differences gently change the spacing without
      // letting points overtake each other and bunch up over a long session.
      const offset=index*2.399,frequency=.12+(index%5)*.017;
      const drift=(.008+(index%3)*.002)*(Math.sin(spinTime*frequency+offset)-Math.sin(offset));
      x.currentPhase=wrap(x.phase+ringTravel[x.ring]+drift);
      tracks[x.ring].getPointAt(x.currentPhase,x.base);x.object.position.copy(x.base).applyMatrix4(ringFrames[x.ring]);x.button.dataset.phase=x.currentPhase.toFixed(6);
    });
    const orbitDistance=VIEW_DISTANCE/Math.min(1,camera.aspect/1.18)/zoom;overviewPosition.set(0,orbitDistance*.17,orbitDistance);
    target.set(0,0,0);destination.copy(overviewPosition);const focused=instances.find(x=>x.item.id===focusId);
    if(focused){focusPosition.copy(focused.object.position);temp.copy(overviewPosition).normalize().multiplyScalar(9.5).add(focusPosition);destination.lerp(temp,blend*.28);target.lerp(focusPosition,blend);}
    camera.position.lerp(destination,reduce.matches?1:1-Math.exp(-dt*7));look.position.copy(camera.position);look.lookAt(target);camera.quaternion.slerp(look.quaternion,reduce.matches?1:1-Math.exp(-dt*7));camera.updateMatrixWorld();cameraView.copy(camera.matrixWorldInverse);
    // One camera-relative depth cue for papers, folded tiles and every arc.
    // Modest size changes follow position only: no idle breathing or flipping.
    const centreDepth=-temp.set(0,0,0).applyMatrix4(cameraView).z;
    const frontAt=(depth:number)=>easeBetween(-13.85,13.85,centreDepth-depth);
    const cardSizeAt=(depth:number)=>338*(.91+.15*frontAt(depth));
    const facing=bases.map((base,ring)=>Math.abs(temp.copy(base.normal).transformDirection(ringFrames[ring]).transformDirection(cameraView).z));
    // Conservative envelope for the restored <=4.6 degree roll. Forecasts
    // reserve the same margin, while actual picking/masks use the real corners.
    const readingBounds=(size:number,h:number)=>({boundWidth:size+h*.08+4,boundHeight:h+size*.08+4});
    const projections:Projection[]=instances.map((entry,index)=>{temp.copy(entry.object.position).applyMatrix4(cameraView);projected.copy(entry.object.position).project(camera);const depth=-temp.z,size=cardSizeAt(depth),h=size*entry.nativeHeight/CARD_WIDTH;return {index,ring:entry.ring,depth,cx:(projected.x*.5+.5)*width,cy:(-projected.y*.5+.5)*height,size,height:h,...readingBounds(size,h)};});
    const shown=projections.filter(p=>foreground.has(p.index));
    const overlaps=(p:Projection,q:Projection,gap=34)=>Math.abs(p.cx-q.cx)<(p.boundWidth+q.boundWidth)/2+gap&&Math.abs(p.cy-q.cy)<(p.boundHeight+q.boundHeight)/2+gap;
    const fits=(p:Projection,margin=28)=>p.cx>p.boundWidth/2+margin&&p.cx<width-p.boundWidth/2-margin&&p.cy>p.boundHeight/2+margin&&p.cy<height-p.boundHeight/2-margin&&(!headingBox||p.cx-p.boundWidth/2+screenBox.x>headingBox.right+14||p.cy-p.boundHeight/2+screenBox.y>headingBox.bottom+28||p.cy+p.boundHeight/2+screenBox.y<headingBox.top-28);
    const collision=shown.some((p,i)=>!fits(p,22)||shown.slice(i+1).some(q=>overlaps(p,q,26)));
    const changing=instances.some(e=>e.expansion>0&&e.expansion<1);
    if(!turning&&!focusId&&blend<.02&&hover<0&&!keyboardFocus&&!changing&&(!foreground.size||spinTime-lastArrangement>2||collision)){
      // Keep readable papers until their actual paths need clearance. Do not
      // replace a whole set merely to squeeze another question onto the globe.
      const retained:Projection[]=[];
      for(const p of shown.slice().sort((a,b)=>instances[b.index].openedAt-instances[a.index].openedAt)){
        if(fits(p,22)&&!retained.some(q=>overlaps(p,q,26)))retained.push(p);
      }
      // Admit a new paper only when its unchanged orbit has reading room for
      // the next 12 seconds. This forecasts the existing motion; it does not
      // slow a ring, detach an anchor, or forcibly hold an overlapping card.
      const forecast=projections.map(p=>[p]);
      const futureFrame=new Matrix4(),futurePoint=new Vector3();
      for(let seconds=2;seconds<=12;seconds+=2){
        const time=spinTime+seconds;
        instances.forEach((entry,index)=>{
          const ring=entry.ring,offset=index*2.399,frequency=.12+(index%5)*.017;
          const drift=(.008+(index%3)*.002)*(Math.sin(time*frequency+offset)-Math.sin(offset));
          const phase=wrap(entry.phase+travelRates[ring]*pacedTime(time,ring+3,.15,.09+ring*.006)+drift);
          futureFrame.makeRotationAxis(spinAxes[ring],spinRates[ring]*pacedTime(time,ring,.22,.065+ring*.008)).premultiply(worldRotation);
          tracks[ring].getPointAt(phase,futurePoint).applyMatrix4(futureFrame);
          const depth=-temp.copy(futurePoint).applyMatrix4(cameraView).z,size=cardSizeAt(depth);
          futurePoint.project(camera);
          const h=size*entry.nativeHeight/CARD_WIDTH;
          forecast[index].push({...projections[index],depth,size,height:h,...readingBounds(size,h),cx:(futurePoint.x*.5+.5)*width,cy:(-futurePoint.y*.5+.5)*height});
        });
      }
      const compatible=(p:Projection,q:Projection)=>p.ring!==q.ring&&forecast[p.index].every((sample,k)=>!overlaps(sample,forecast[q.index][k],34));
      const available=projections.filter(p=>!foreground.has(p.index)&&forecast[p.index].every(sample=>fits(sample))&&retained.every(q=>compatible(p,q)));
      const distance=(p:Projection,slot:number)=>Math.hypot(p.cx/width-readingAnchors[slot][0],p.cy/height-readingAnchors[slot][1]);
      const slots=readingAnchors.map((_,slot)=>slot);
      for(const p of retained){slots.sort((a,b)=>distance(p,a)-distance(p,b));slots.shift();}
      const groups=slots.map(slot=>available.slice().sort((a,b)=>distance(a,slot)-distance(b,slot)).slice(0,12));
      let best:Projection[]=retained.slice(),bestScore=-1,visits=0;
      function arrange(group:number,placed:typeof projections,score:number){
        if(++visits>16000||score+(groups.length-group)*1000<bestScore)return;
        if(group===groups.length){if(score>bestScore){best=placed.slice();bestScore=score;}return;}
        // After first paint, add at most one paper per pass. Existing questions
        // continue reading while a single neighbour opens or closes.
        if(!arranged||placed.length===retained.length)for(const p of groups[group])if(placed.every(q=>compatible(p,q)))arrange(group+1,[...placed,p],score+1000-distance(p,slots[group])*300);
        arrange(group+1,placed,score);
      }
      arrange(0,retained,0);
      for(const p of best)if(!foreground.has(p.index))instances[p.index].openedAt=spinTime;
      foreground=new Set(best.map(p=>p.index));
      if(!arranged){instances.forEach((e,i)=>e.expansion=foreground.has(i)?1:0);arranged=true;}
      lastArrangement=spinTime;
    }
    // Each sheet is the SAME surface from its small folded state to its paper.
    // Retire a conflicting sheet before growing another into its reading area.
    const retiring=projections.filter(p=>!foreground.has(p.index)&&instances[p.index].expansion>0);
    instances.forEach((entry,index)=>{
      const wanted=foreground.has(index)||entry.item.id===focusId;
      const blocked=entry.expansion===0&&retiring.some(p=>overlaps(p,projections[index],18));
      const goal=wanted&&!blocked?1:0;
      if(reduce.matches)entry.expansion=goal;
      else entry.expansion=Math.max(0,Math.min(1,entry.expansion+(goal?dt/.8:-dt/.45)));
    });
    hits=[];
    const paperMasks:{corners:{x:number;y:number}[];radius:number}[]=[];
    for(const [index,entry] of instances.entries()){
      entry.object.quaternion.copy(camera.quaternion);temp.copy(entry.object.position).applyMatrix4(cameraView);const depth=-temp.z;
      const scale=height/(2*Math.tan(camera.fov*Math.PI/360))/Math.max(depth,.01);
      const primary=foreground.has(index)||entry.item.id===focusId;
      const marker=entry.expansion===0;
      const unfold=easeBetween(.12,.78,entry.expansion),reveal=easeBetween(.72,1,entry.expansion);
      const normalSize=projections[index].size;
      const depthScale=normalSize/338;
      const shape={width:markerShape.width*depthScale,height:markerShape.height*depthScale};
      const focusedSize=entry.item.id===focusId?Math.min(400,width*.82):11;
      const size=normalSize+(focusedSize-normalSize)*blend;
      entry.object.scale.setScalar(size/scale/CARD_WIDTH);const readable=entry.expansion===1&&primary;entry.button.classList.toggle('is-marker',marker);
      // The paper grows independently of its type: text never becomes tiny,
      // squeezed or stretched while the little sheet opens horizontally.
      const sheetWidth=shape.width/size*CARD_WIDTH+(CARD_WIDTH-shape.width/size*CARD_WIDTH)*unfold;
      const sheetHeight=shape.height/size*CARD_WIDTH+(entry.nativeHeight-shape.height/size*CARD_WIDTH)*easeBetween(.20,.78,entry.expansion);
      entry.surface.style.setProperty('--sheet-width',`${sheetWidth}px`);
      entry.surface.style.setProperty('--sheet-height',`${sheetHeight}px`);
      entry.surface.style.setProperty('--sheet-radius',`${4+11*unfold}px`);
      // Restore the earlier articulated-paper pose, without its breathing or
      // later full flips. The shared clock stops exactly on hover/focus/pause.
      tracks[entry.ring].getTangentAt(entry.currentPhase,tangent).transformDirection(ringFrames[entry.ring]).add(entry.object.position).project(camera);
      projected.copy(entry.object.position).project(camera);const angle=Math.atan2((tangent.y-projected.y)*height,(tangent.x-projected.x)*width);
      radial.copy(entry.object.position).normalize();cameraRight.set(1,0,0).applyQuaternion(camera.quaternion);cameraUp.set(0,1,0).applyQuaternion(camera.quaternion);
      const turn=unfold*(1-blend),fold=(1-easeBetween(0,.35,entry.expansion))*(1-blend),flutter=spinTime*(.30+(index%4)*.025)+index*2.399;
      cardEuler.set(
        (-radial.dot(cameraUp)*.05+Math.cos(flutter*1.7)*.025)*turn+Math.cos(flutter*.73)*.22*fold,
        (radial.dot(cameraRight)*.06+Math.sin(flutter*1.3)*.035)*turn+Math.sin(flutter)*1.05*fold,
        (Math.sin(angle*2)*.065+Math.sin(flutter*1.9)*.014)*turn+(Math.sin(angle)*.28+Math.sin(flutter*1.2)*.10)*fold
      );cardTurn.setFromEuler(cardEuler);entry.object.quaternion.multiply(cardTurn);
      entry.button.dataset.tilt=[cardEuler.x,cardEuler.y,cardEuler.z].map(v=>v.toFixed(5)).join(',');
      const front=frontAt(depth),far=1-front,paperTint=12+30*far;
      entry.button.style.setProperty('--text-opacity',String(reveal));
      entry.button.dataset.unfold=unfold.toFixed(4);
      entry.surface.style.setProperty('--paper-percent',`${paperTint+(100-paperTint)*easeBetween(.05,.42,entry.expansion)}%`);
      projected.copy(entry.object.position).project(camera);
      const own=projections[index],covered=marker&&projections.some(p=>instances[p.index].expansion>.1&&Math.abs(p.cx-own.cx)<p.size/2+12&&Math.abs(p.cy-own.cy)<p.height/2+16);
      const visible=depth>1&&Math.abs(projected.x)<1.3&&Math.abs(projected.y)<1.35&&!covered&&(!focusId||entry.item.id===focusId||blend<.02);
      entry.button.style.visibility=visible?'visible':'hidden';entry.button.style.pointerEvents='none';
      // Paper masks still remove track ink underneath. A faded rear paper
      // never reveals an unrelated rail through its text. Reading restores
      // contrast only; hovering does not move or enlarge the target.
      const clarity=(.50+.50*front)+(.22-.22*front)*unfold;
      entry.button.style.opacity=String(index===hover||entry.item.id===focusId?1:clarity);
      entry.button.style.filter='none';
      entry.button.dataset.front=front.toFixed(4);entry.button.dataset.depthScale=depthScale.toFixed(4);
      entry.button.style.setProperty('--distance',String(far));entry.button.dataset.depth=depth.toFixed(4);entry.button.dataset.anchor=`${own.cx.toFixed(3)},${own.cy.toFixed(3)}`;entry.button.dataset.display=readable?'card':marker?'point':primary?'entering':'leaving';
      const hh=sheetHeight/2,hw=sheetWidth/2;
      const corners=[[-hw,hh],[hw,hh],[hw,-hh],[-hw,-hh]].map(([x,y])=>{temp.set(x,y,0).multiplyScalar(entry.object.scale.x).applyQuaternion(entry.object.quaternion).add(entry.object.position).project(camera);return {x:(temp.x*.5+.5)*width,y:(-temp.y*.5+.5)*height};});
      const x=Math.min(...corners.map(p=>p.x)),y=Math.min(...corners.map(p=>p.y)),hitWidth=Math.max(...corners.map(p=>p.x))-x,hitHeight=Math.max(...corners.map(p=>p.y))-y;
      if(visible)paperMasks.push({corners,radius:(4+11*unfold)*size/CARD_WIDTH});
      if(visible&&(marker||primary&&reveal>.85)&&(!focusId||entry.item.id===focusId))hits.push({index,x,y,width:hitWidth,height:hitHeight,depth,corners});
      entry.button.classList.toggle('is-focused',entry.item.id===focusId);
      entry.button.classList.toggle('is-hovered',index===hover);
      const whole=x>4&&y>4&&x+hitWidth<width-4&&y+hitHeight<height-4;
      entry.button.tabIndex=visible&&whole&&readable&&(!focusId||entry.item.id===focusId)?0:-1;entry.button.setAttribute('aria-hidden',String(!visible||!whole||!readable||!!focusId&&entry.item.id!==focusId));
    }
    if(hover>=0&&instances[hover].expansion>0)tooltip.hidden=true;
    if(ctx){
      line.style.opacity=String(1-blend*.88);
      ctx.clearRect(0,0,width,height);const dark=document.documentElement.dataset.theme==='dark';
      const project=(v:Vector3,matrix=worldRotation)=>{temp.copy(v).applyMatrix4(matrix).applyMatrix4(cameraView);const depth=-temp.z;projected.copy(v).applyMatrix4(matrix).project(camera);return {x:(projected.x*.5+.5)*width,y:(-projected.y*.5+.5)*height,depth};};
      const a=project(up.clone().multiplyScalar(13)),b=project(up.clone().multiplyScalar(-13));
      stage.dataset.axis=`${a.x.toFixed(3)},${a.y.toFixed(3)},${b.x.toFixed(3)},${b.y.toFixed(3)}`;
      // Sort ALL ring sections together by depth. A near thin arc can cross
      // over a colored band, rather than every band always covering every line.
      const sections=threadPoints.flatMap((points,ring)=>{
        let length=0;
        const onRing=(v:Vector3)=>project(v,ringFrames[ring]);
        const projectedRing=points.map(onRing);
        return points.slice(0,-1).map((p,i)=>{
          const start=projectedRing[i],end=projectedRing[i+1],offset=length;length+=Math.hypot(end.x-start.x,end.y-start.y);
          const band=[0,1,2,4].includes(ring);
          // Give every ring a visible, continuous body. Most width contrast
          // belongs BETWEEN rings; tapering one side to a hairline reads as
          // an open crescent even when its mathematical centreline is closed.
          const half=(depth:number)=>{
            const front=frontAt(depth),taper=ring===0||ring===1?1-front:front;
            const body=ring===1?.20+.10*taper:ring===0?.075+.03*taper:.035+.02*taper;
            // At a genuine side view, a band becomes a narrow rim, not a
            // broad straight slab. Other planes and the outer rim stay visible.
            return body*Math.min(1,.25+facing[ring]*2);
          };
          // Offset perpendicular to the projected circular path, rather than
          // extruding its plane normal (which reads as a straight slash edge-on).
          const dx=end.x-start.x,dy=end.y-start.y,segmentLength=Math.max(.001,Math.hypot(dx,dy));
          const nx=-dy/segmentLength,ny=dx/segmentLength,pixels=height/(2*Math.tan(camera.fov*Math.PI/360));
          // The green circle has one uniform screen-space width all around,
          // without the former panels, depth taper or changing edge-on width.
          const greenHalf=.18*pixels/overviewPosition.length();
          const a=ring===4?greenHalf:half(start.depth)*pixels/start.depth,b=ring===4?greenHalf:half(end.depth)*pixels/end.depth;
          const edge=(p:typeof start,d:number)=>({x:p.x+nx*d,y:p.y+ny*d,depth:p.depth});
          const corners=band?[edge(start,a),edge(end,b),edge(end,-b),edge(start,-a)]:[];
          return {ring,corners,start,end,offset,phase:i/240,bandWidth:a+b+1.25,depth:(start.depth+end.depth)/2};
        });
      });
      // Sample the real moving card anchor on each track, then undo ONLY the
      // viewer's world turn. Core and attractors share local space, so dragging
      // rotates the result rather than creating spurious gravity or double yaw.
      coreWorldInverse.copy(worldRotation).invert();
      coreAttractors.forEach((source,ring)=>{
        const anchor=instances[ring];
        if(anchor)source.position.copy(anchor.object.position).applyMatrix4(coreWorldInverse);
        else source.position.copy(threadPoints[ring][0]).applyMatrix4(ringFrames[ring]).applyMatrix4(coreWorldInverse);
        source.axis.copy(bases[ring].normal).transformDirection(ringFrames[ring]).transformDirection(coreWorldInverse);
      });
      const core=coreAt(coreTime,coreAttractors,coreTurnVector);coreMotion=core.motion;
      const coreLines=core.lines.map(part=>{
        const start=project(part.start),end=project(part.end);
        return {kind:'coreLine' as const,start,end,depth:(start.depth+end.depth)/2,opacity:part.opacity,weight:part.weight};
      });
      const corePoints=core.points.map((part,index)=>{
        const centre=project(part.centre);
        return {kind:'corePoint' as const,centre,depth:centre.depth,opacity:part.opacity,radius:part.radius,surface:part.surface,edgeHint:(index*73)%101<20};
      });
      stage.dataset.corePoints=String(core.points.length);
      stage.dataset.coreSegments=String(core.lines.length);
      stage.dataset.coreLinks=String(core.links);
      stage.dataset.coreRewires=String(core.rewires);
      stage.dataset.coreStrain=core.strain.toFixed(3);
      stage.dataset.coreTime=coreTime.toFixed(4);
      stage.dataset.coreMotion=coreMotion.toFixed(5);
      stage.dataset.coreImpulse=coreTurnVector.length().toFixed(6);
      const layers=[...sections,...coreLines,...corePoints].sort((a,b)=>b.depth-a.depth);
      for(const section of layers){
        if('kind' in section){
          if(section.depth<1)continue;
          // The volumetric core shares the projection, depth queue and paper
          // masks. The far mesh recedes while its near nodes remain legible.
          const depthCue=.40+.60*easeBetween(-4.8,4.8,centreDepth-section.depth);
          if(section.kind==='corePoint'){
            // Thousands of points need no saved path/dash state. Set only the
            // two fill properties, retaining the same depth queue and masks.
            ctx.fillStyle=dark?'#c7d1e1':'#53647f';
            // A few stable, scattered points quietly suggest the far edge.
            // Never lift the whole silhouette into a continuous dotted rim.
            const facing=Math.min(1,Math.abs(centreDepth-section.depth)/2.72);
            const rim=section.surface&&section.edgeHint ? 1-easeBetween(.10,.34,facing) : 0;
            const faceSize=section.surface ? .34+.66*facing : 1;
            const naturalRadius=section.radius*(.86+.24*depthCue)*faceSize;
            const radius=Math.max(naturalRadius,.32*rim);
            ctx.globalAlpha=section.opacity*depthCue;
            if(section.surface&&radius<.65){
              // Subpixel dots retain the cheap equal-area stamp. Larger dots
              // in the travelling size crest have a true circular contour.
              const half=radius*.886227;
              ctx.fillRect(section.centre.x-half,section.centre.y-half,half*2,half*2);
            }else{
              ctx.beginPath();ctx.arc(section.centre.x,section.centre.y,radius,0,TAU);ctx.fill();
            }
            continue;
          }
          ctx.setLineDash([]);ctx.globalAlpha=section.opacity*depthCue;
          ctx.strokeStyle=dark?'#a7b2c7':'#62728b';ctx.lineWidth=section.weight;ctx.lineCap='round';
          ctx.beginPath();ctx.moveTo(section.start.x,section.start.y);ctx.lineTo(section.end.x,section.end.y);ctx.stroke();
          continue;
        }
        const c=section.corners;
        if(section.start.depth<1||section.end.depth<1||c.some(p=>p.depth<1))continue;
        ctx.globalAlpha=1;ctx.filter='none';ctx.lineCap='butt';
        // A small opaque clearance belongs to the nearer section, in the
        // SAME depth-sorted pass. It separates crossing contours (including
        // two blue rings) without a surface texture or arbitrary layer order.
        const front=frontAt(section.depth);
        const thinWidth=section.ring===3?1+1.2*front:section.ring===5?1.15+.45*front:section.ring===6?1:.8;
        const width=c.length?section.bandWidth:thinWidth;
        ctx.setLineDash(section.ring===6?[11,10]:[]);ctx.lineDashOffset=-section.offset;
        if(section.ring<6){ctx.strokeStyle=dark?'#12151d':'#fff';ctx.lineWidth=width+4.5;
          ctx.beginPath();ctx.moveTo(section.start.x,section.start.y);ctx.lineTo(section.end.x,section.end.y);ctx.stroke();}
        if(!c.length){
          const {start,end,ring,offset}=section;
          ctx.setLineDash(ring===6?[11,10]:[]);ctx.lineDashOffset=-offset+2*spinTime;
          ctx.lineWidth=thinWidth;
          ctx.strokeStyle=ring===3||ring===5?(dark?'#c8cbd5':'#252832'):ring===0||ring===6?'#003bff':dark?'#8991a4':'#a4acbc';
          const minimumInk=ring===7?.48:.32;
          ctx.globalAlpha=minimumInk+(1-minimumInk)*front;ctx.beginPath();ctx.moveTo(start.x,start.y);ctx.lineTo(end.x,end.y);ctx.stroke();ctx.setLineDash([]);continue;
        }
        ctx.beginPath();ctx.moveTo(c[0].x,c[0].y);for(let k=1;k<4;k++)ctx.lineTo(c[k].x,c[k].y);ctx.closePath();
        // Rear arcs stay fully present, but cooler/quieter than the front.
        // Opaque colours keep nearer rings from becoming see-through at a crossing.
        const mix=(back:number[],near:number[])=>`rgb(${back.map((v,i)=>Math.round(v+(near[i]-v)*front)).join(',')})`;
        ctx.fillStyle=section.ring===0||section.ring===1?mix(dark?[48,61,103]:[192,203,245],[0,59,255]):section.ring===4?mix(dark?[67,88,42]:[213,229,175],[181,255,0]):mix(dark?[51,60,77]:[211,215,224],dark?[150,161,185]:[100,106,121]);ctx.fill();
        // Cover subpixel seams between adjacent projected quadrilaterals.
        ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=1.25;if(section.ring!==0)ctx.stroke();
        // A continuous centre contour carries the circle through its thinnest
        // part. Ribbon width supplies depth, not gaps in the ring itself.
        if(section.ring===0){
          // The second blue orbit is a pair of fine rails, rather than another
          // solid ribbon. Its interior also occludes farther crossing tracks.
          const railColor=ctx.fillStyle;
          const inner=c.map((v,k)=>{const mid=k===0||k===3?section.start:section.end;return {x:mid.x+(v.x-mid.x)*.52,y:mid.y+(v.y-mid.y)*.52};});
          ctx.fillStyle=dark?'#12151d':'#fff';ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=.55;
          ctx.beginPath();ctx.moveTo(inner[0].x,inner[0].y);for(let k=1;k<4;k++)ctx.lineTo(inner[k].x,inner[k].y);ctx.closePath();ctx.fill();ctx.stroke();
          // Only outline the long sides: outlining each segment's ends turns
          // the rail into an accidental ladder of visible radial seams.
          ctx.strokeStyle=railColor;ctx.lineWidth=.85;
          ctx.beginPath();ctx.moveTo(c[0].x,c[0].y);ctx.lineTo(c[1].x,c[1].y);ctx.stroke();
          ctx.beginPath();ctx.moveTo(c[3].x,c[3].y);ctx.lineTo(c[2].x,c[2].y);ctx.stroke();
        }else{
          ctx.lineWidth=section.ring===2?1:1.35;ctx.beginPath();ctx.moveTo(section.start.x,section.start.y);ctx.lineTo(section.end.x,section.end.y);ctx.stroke();
        }
        // Small moving inlays stay inside the existing bands and in this same
        // depth pass: a nearer crossing still occludes the entire signal.
        if(section.ring===1&&!reduce.matches){
          const phase=wrap(section.phase-spinTime*(section.ring===1?-.018:.023)+section.ring*.17);
          if(phase<.09&&Math.floor(phase/.025)%2===0){
            const intensity=Math.sin(phase/.09*Math.PI)*(.24+.22*front);
            const inner=c.map((v,k)=>{const mid=k===0||k===3?section.start:section.end;return {x:mid.x+(v.x-mid.x)*.28,y:mid.y+(v.y-mid.y)*.28};});
            ctx.globalAlpha=intensity;ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(inner[0].x,inner[0].y);for(let k=1;k<4;k++)ctx.lineTo(inner[k].x,inner[k].y);ctx.closePath();ctx.fill();
          }
        }
      }
      ctx.globalAlpha=1;ctx.filter='none';ctx.setLineDash([]);
      // Trim track ink to the actual projected paper, including its rounded
      // corners. A narrow clean edge lets its contact shadow read distinctly.
      // This is not a new halo: the same opaque surface owns its small gutter.
      ctx.globalCompositeOperation='destination-out';ctx.lineWidth=4;ctx.lineJoin='round';ctx.lineCap='round';
      for(const {corners,radius} of paperMasks){
        const turns=corners.map((p,i)=>{
          const before=corners[(i+3)%4],after=corners[(i+1)%4],a=Math.hypot(p.x-before.x,p.y-before.y),b=Math.hypot(p.x-after.x,p.y-after.y),r=Math.min(radius,a*.24,b*.24);
          return {p,enter:{x:p.x+(before.x-p.x)*r/a,y:p.y+(before.y-p.y)*r/a},leave:{x:p.x+(after.x-p.x)*r/b,y:p.y+(after.y-p.y)*r/b}};
        });
        ctx.beginPath();ctx.moveTo(turns[0].enter.x,turns[0].enter.y);
        for(const {p,enter,leave} of turns){ctx.lineTo(enter.x,enter.y);ctx.quadraticCurveTo(p.x,p.y,leave.x,leave.y);}
        ctx.closePath();ctx.fill();ctx.stroke();
      }
      ctx.globalCompositeOperation='source-over';
    }
    const active=focused?.item.id||(hover>=0?instances[hover]?.item.id:'');if(active&&active!==lastActive){lastActive=active;events.active(active);}
    renderer.render(scene,camera);stage.dataset.ready='true';stage.dataset.transition=String(Math.abs(blend-blendTarget)>.02||Math.abs(targetZoom-zoom)>.01);
    stage.dataset.rotation=rotation.toFixed(4);stage.dataset.orbitPhase=orbitPhase.toFixed(6);
    stage.dataset.turning=String(turning);
    stage.dataset.ringSpins=ringSpins.map(angle=>angle.toFixed(5)).join(',');
    stage.dataset.ringFacing=facing.map(v=>v.toFixed(5)).join(',');
  }
  frame=requestAnimationFrame(render);
  return {enter,overview,step,focus,pause(value){paused=value;},dispose(){cancelAnimationFrame(frame);abort.abort();observer?.disconnect();instances.forEach(x=>x.object.removeFromParent());renderer.domElement.remove();line.remove();tooltip.remove();}};
}
