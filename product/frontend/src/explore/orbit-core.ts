import {EdgesGeometry,Euler,IcosahedronGeometry,Quaternion,Vector3} from 'three';
import {ConvexHull} from 'three/examples/jsm/math/ConvexHull.js';
import {createReactiveParticleSurface} from '../vendor/ark-particles/field';
import {createProximityLinks,createTidalField,type OrbitAttractor} from '../vendor/three-examples/orbit-field';

export type OrbitCoreLine={start:Vector3;end:Vector3;opacity:number;weight:number};
export type OrbitCorePoint={centre:Vector3;radius:number;opacity:number;surface?:boolean};
type CoreFrame={lines:OrbitCoreLine[];points:OrbitCorePoint[];links:number;strain:number;motion:number;rewires:number};

// Keep the topological wire shell; the dense inner surface responds to gestures.
// The outer rings supply moving attractors in this same local 3D space. No
// billboard, text patches, interior discs or extra surrounding rails are added.
export function createOrbitCore(){
  const shellGeometry=new IcosahedronGeometry(3.8,1),edgeGeometry=new EdgesGeometry(shellGeometry);
  const particles=createReactiveParticleSurface();
  const baseVertices:Vector3[]=[],vertexIds=new Map<string,number>();
  const key=(x:number,y:number,z:number)=>`${Math.round(x*1e5)},${Math.round(y*1e5)},${Math.round(z*1e5)}`;
  const edgePositions=edgeGeometry.getAttribute('position');
  const vertexId=(i:number)=>{
    const x=edgePositions.getX(i),y=edgePositions.getY(i),z=edgePositions.getZ(i),hash=key(x,y,z);
    let id=vertexIds.get(hash);
    if(id===undefined){id=baseVertices.length;vertexIds.set(hash,id);baseVertices.push(new Vector3(x,y,z));}
    return id;
  };
  const edges:{from:number;to:number;ink:number}[]=[],shellLinks=new Set<string>();
  for(let i=0;i<edgePositions.count;i+=2){
    const from=vertexId(i),to=vertexId(i+1);
    edges.push({from,to,ink:.19+.025*(.5+.5*Math.sin(i*.855))});
    shellLinks.add(`${Math.min(from,to)}:${Math.max(from,to)}`);
  }
  shellGeometry.dispose();edgeGeometry.dispose();

  const vertices=baseVertices.map(()=>new Vector3()),targets=baseVertices.map(()=>new Vector3());
  const points:OrbitCorePoint[]=[
    ...baseVertices.map((_,i)=>({centre:vertices[i],radius:i%6===0?.95:.68,opacity:.3})),
    ...Array.from({length:particles.count},()=>({centre:new Vector3(),radius:.52,opacity:.42,surface:true}))
  ];
  const frame:CoreFrame={lines:[],points,links:0,strain:0,motion:0,rewires:0};
  // Three's QuickHull on unit directions gives a spherical triangulation:
  // nodes keep their identity while stretched cells can change neighbours.
  // Using directions prevents a shallow inward ripple from deleting a node.
  const hull=new ConvexHull(),directions=baseVertices.map(v=>v.clone().normalize());
  const directionIds=new Map(directions.map((v,i)=>[v,i]));
  const meshEdges=new Map(edges.map(e=>[`${Math.min(e.from,e.to)}:${Math.max(e.from,e.to)}`,{...e,alpha:1,target:1}]));
  let topologyTime=-Infinity;
  const pool:OrbitCoreLine[]=[];
  const addLine=(a:Vector3,b:Vector3,opacity:number,weight:number)=>{
    // Short segments keep core/ring intersections in the existing depth queue.
    const count=Math.ceil(a.distanceTo(b)/.32);
    for(let step=0;step<count;step++){
      const index=frame.lines.length;
      const line=pool[index]??(pool[index]={start:new Vector3(),end:new Vector3(),opacity:0,weight:0});
      line.start.copy(a).lerp(b,step/count);line.end.copy(a).lerp(b,(step+1)/count);
      line.opacity=opacity;line.weight=weight;frame.lines.push(line);
    }
  };
  const field=createTidalField(),linksAt=createProximityLinks(vertices.length,shellLinks);
  const outerAxis=new Vector3(-.32,1,.21).normalize();
  const outerRotation=new Quaternion(),innerRotation=new Quaternion();
  const innerInverse=new Quaternion(),particleWake=new Vector3();
  const initialOuter=new Quaternion().setFromEuler(new Euler(.34,.21,.17)),initialInner=new Quaternion().setFromEuler(new Euler(-.27,.61,.14));
  const rest=new Vector3(),pull=new Vector3(),mean=new Vector3(),normal=new Vector3(),tangent=new Vector3();
  const slosh=new Vector3(),sloshVelocity=new Vector3(),impulse=new Vector3();
  const flowAxis=new Vector3(),flowTurn=new Quaternion(),wake=new Vector3();
  let previousTime:number|undefined;
  const deform=(position:Vector3,sources:OrbitAttractor[],amount:number,time:number)=>{
    field.sample(position,sources,pull);
    normal.copy(position).normalize();
    const radial=pull.dot(normal);
    tangent.copy(pull).addScaledVector(normal,-radial);
    // Keep the spherical body: gravity raises shallow local crests rather
    // than stretching the entire mesh into an ellipsoid. Tangential drift is
    // smaller still, so the mesh can articulate without bunching at its poles.
    const tide=Math.tanh(radial*.65);
    const ripple=.065*Math.sin(time*1.65+normal.x*3.1+normal.y*2.3)*Math.min(1,pull.length());
    // A signed quadrupole crest rises on one side and dips on the other. Its
    // direction and rebound come from the user's real angular displacement.
    const crest=normal.z*(normal.x*slosh.y-normal.y*slosh.x)+normal.x*normal.y*slosh.z;
    position.addScaledVector(normal,amount*(.24*tide+ripple+crest*1.35));
    const length=tangent.length(),limit=.12*amount;
    if(length>0)position.addScaledVector(tangent,limit*Math.tanh(length)/length);
    // Differential surface flow, not a shared angular offset: opposing bands
    // slip past one another and shear each cell. Latitude is preserved, so
    // nodes cannot pile into two poles as they did under whole-shell strain.
    // The equator/poles stay put while each intermediate band moves differently.
    const strength=wake.length();
    if(strength>1e-8){
      flowAxis.copy(wake).multiplyScalar(1/strength);
      const latitude=position.dot(flowAxis)/position.length();
      const angle=.25*Math.tanh(strength/.25)*2.6*amount*Math.sin(Math.PI*latitude);
      flowTurn.setFromAxisAngle(flowAxis,angle);position.applyQuaternion(flowTurn);
    }
  };
  return (time:number,sources:OrbitAttractor[]=[],turn?:Vector3):CoreFrame=>{
    // Idempotent at the reading clock: hovering, focus, reduced motion and
    // manual pause freeze even link fades. Explicit turns advance this clock
    // separately from the orbit/card clock, supplying a bounded signed impulse.
    if(time===previousTime)return frame;
    const delta=previousTime===undefined?0:Math.max(0,Math.min(.05,time-previousTime));
    const follow=previousTime===undefined?1:1-Math.exp(-delta*7);
    previousTime=time;
    if(turn&&delta>0){impulse.copy(turn).clampLength(0,.12);sloshVelocity.addScaledVector(impulse,9);}
    // Damped spring: lag under rotation, opposite rebound, then settle. The
    // bounded state keeps repeated fast gestures from accumulating energy.
    sloshVelocity.addScaledVector(slosh,-22*delta).multiplyScalar(Math.exp(-3.4*delta)).clampLength(0,1.8);
    slosh.addScaledVector(sloshVelocity,delta).clampLength(0,.32);
    if(slosh.lengthSq()+sloshVelocity.lengthSq()<1e-8){slosh.set(0,0,0);sloshVelocity.set(0,0,0);}
    frame.motion=slosh.length()+sloshVelocity.length()*.18;
    wake.copy(slosh);
    outerRotation.setFromAxisAngle(outerAxis,time*.125).multiply(initialOuter);
    innerRotation.copy(initialInner);
    field.prepare(sources);mean.set(0,0,0);
    for(let i=0;i<baseVertices.length;i++){
      targets[i].copy(baseVertices[i]).applyQuaternion(outerRotation);
      deform(targets[i],sources,1,time);mean.add(targets[i]);
    }
    // Recentre, then enforce a narrow spherical envelope. This bound applies
    // in 3D (not just the initial camera view), even if the attractors align.
    mean.multiplyScalar(1/baseVertices.length);frame.strain=0;
    for(let i=0;i<vertices.length;i++){
      targets[i].sub(mean).clampLength(baseVertices[i].length()*.91,baseVertices[i].length()*1.09);
      // Interpolation follows a chord: fast reversals could cut inside the
      // sphere even when both targets are valid. Constrain the displayed mesh.
      vertices[i].lerp(targets[i],follow).clampLength(baseVertices[i].length()*.91,baseVertices[i].length()*1.09);
      rest.copy(baseVertices[i]).applyQuaternion(outerRotation);
      const strain=vertices[i].distanceTo(rest);frame.strain=Math.max(frame.strain,strain);
      points[i].opacity=.27+.07*Math.min(1,strain/.38);
    }
    wake.copy(slosh).addScaledVector(sloshVelocity,-.075);
    // Input arrives in core space. Undo the surface's fixed orientation so
    // the user's gesture keeps its real direction; particles do not self-spin.
    innerInverse.copy(innerRotation).invert();particleWake.copy(wake).applyQuaternion(innerInverse);
    particles.prepare(particleWake,time);
    for(let i=0;i<particles.count;i++){
      const point=points[baseVertices.length+i],distance=particles.sample(i,rest);
      rest.applyQuaternion(innerRotation);point.centre.lerp(rest,follow);
      point.radius=particles.radiusAt(i);
      point.opacity=.34+.30*Math.min(1,distance);
    }
    if(time-topologyTime>=.18){
      const initialized=Number.isFinite(topologyTime);topologyTime=time;
      directions.forEach((p,i)=>p.copy(vertices[i]).normalize());
      hull.setFromPoints(directions);
      for(const edge of meshEdges.values())edge.target=0;
      for(const face of hull.faces){
        let half=face.edge;
        do{
          const a=directionIds.get(half.tail().point)!,b=directionIds.get(half.head().point)!;
          const from=Math.min(a,b),to=Math.max(a,b),id=`${from}:${to}`;
          const existing=meshEdges.get(id);
          if(existing)existing.target=1;
          else{
            meshEdges.set(id,{from,to,ink:.20,alpha:initialized?0:1,target:1});
            if(initialized)frame.rewires++;
          }
          half=half.next;
        }while(half!==face.edge);
      }
    }
    frame.lines.length=0;
    for(const [id,edge] of meshEdges){
      edge.alpha+=(edge.target-edge.alpha)*(1-Math.exp(-delta*6));
      if(edge.alpha>.008)addLine(vertices[edge.from],vertices[edge.to],edge.ink*edge.alpha,.62);
      else if(!edge.target)meshEdges.delete(id);
    }
    frame.links=0;
    for(const link of linksAt(vertices,4.1,2,delta)){
      if(meshEdges.has(`${link.from}:${link.to}`))continue;
      if(link.alpha<.008)continue;
      frame.links++;addLine(vertices[link.from],vertices[link.to],Math.min(.19,link.alpha*.66),.56);
    }
    return frame;
  };
}
