import {Vector3} from 'three';

export type OrnamentLine={start:Vector3;end:Vector3;weight:number;opacity:number};
export type OrnamentSphere={centre:Vector3;radius:number;opacity:number;tone:'graphite'|'silver'};
type Rod={centre:Vector3;direction:Vector3;axis:Vector3;length:number;rate:number;phase:number;radius:number};

// Extract rods, beads and broken arcs from the user's CYCLICAL reference.
// Reuse the existing Vector3 geometry and global depth pass. These independent
// components have no host-ring index or shared circular plane.
export function createOrbitComponents(){
  const rods:Rod[]=[
    {centre:new Vector3(-5,2.8,1),direction:new Vector3(.65,.54,.54),axis:new Vector3(.2,1,-.3),length:10.2,rate:.017,phase:.3,radius:.78},
    {centre:new Vector3(4.6,-.8,-2.2),direction:new Vector3(-.45,.82,.35),axis:new Vector3(1,.1,.4),length:10.5,rate:-.023,phase:2.1,radius:.60},
    {centre:new Vector3(-3.6,-3.7,2),direction:new Vector3(.72,-.22,-.66),axis:new Vector3(-.2,.5,1),length:11.8,rate:.013,phase:4.4,radius:.82},
    {centre:new Vector3(3.4,3.5,-3.6),direction:new Vector3(.15,-.60,.78),axis:new Vector3(.7,-.3,.4),length:8.3,rate:-.019,phase:5.7,radius:.54}
  ];
  rods.forEach(r=>{r.direction.normalize();r.axis.normalize();});
  const arcs=[
    {centre:new Vector3(.8,-.3,1.8),normal:new Vector3(.55,.2,.81).normalize(),radius:5.8,from:.24,to:2.33,rate:.014},
    {centre:new Vector3(-1.1,1.0,-2.6),normal:new Vector3(-.25,.88,.4).normalize(),radius:4.3,from:2.6,to:4.35,rate:-.021}
  ].map(a=>{const u=new Vector3().crossVectors(a.normal,new Vector3(0,1,0)).normalize();return {...a,u,v:new Vector3().crossVectors(a.normal,u)};});
  return (time:number)=>{
    const lines:OrnamentLine[]=[],spheres:OrnamentSphere[]=[];
    const line=(a:Vector3,b:Vector3,weight:number,opacity:number)=>{
      const count=Math.max(1,Math.ceil(a.distanceTo(b)/.30));
      for(let n=0;n<count;n++)lines.push({start:a.clone().lerp(b,n/count),end:a.clone().lerp(b,(n+1)/count),weight,opacity});
    };
    rods.forEach((rod,i)=>{
      const direction=rod.direction.clone().applyAxisAngle(rod.axis,time*rod.rate);
      const start=rod.centre.clone().addScaledVector(direction,-rod.length/2),end=rod.centre.clone().addScaledVector(direction,rod.length/2);
      line(start,end,i===2?1.0:.75,i===3?.35:.60);
      // Disjoint ranges prevent the beads merging. Cosine gives each end of
      // the journey a gentle turnaround. All changes use the reading clock.
      const travel=.60+.25*Math.cos(time*(.16+i*.023)+rod.phase);
      const smallTravel=.14+.07*Math.cos(time*(.21+i*.016)+rod.phase+1.8);
      spheres.push({centre:start.clone().lerp(end,travel),radius:rod.radius*(.86+.20*Math.sin(time*(.43+i*.047)+rod.phase)),opacity:.57+.22*Math.sin(time*(.32+i*.031)+rod.phase+.7),tone:i===0||i===2?'graphite':'silver'});
      spheres.push({centre:start.clone().lerp(end,smallTravel),radius:(.20+i*.023)*(.92+.15*Math.sin(time*.53+rod.phase)),opacity:.44+.17*Math.sin(time*.39+rod.phase+2.1),tone:'graphite'});
    });
    for(const arc of arcs){
      const point=(a:number)=>arc.centre.clone().addScaledVector(arc.u,Math.cos(a+time*arc.rate)*arc.radius).addScaledVector(arc.v,Math.sin(a+time*arc.rate)*arc.radius);
      const count=Math.ceil((arc.to-arc.from)/.035);
      for(let n=0;n<count;n++){
        const phase=n/count;if(phase>.44&&phase<.52)continue;
        line(point(arc.from+(arc.to-arc.from)*phase),point(arc.from+(arc.to-arc.from)*(n+1)/count),phase>.76&&phase<.90?2.1:.70,phase>.76&&phase<.90?.58:.30);
      }
    }
    return {lines,spheres};
  };
}

// Cache matte shading computed from a sphere normal, lit from upper left.
// Each surface's depth is computed separately by the engine, not treated as
// a flat plane or sorted only by the centre of this projected image.
export function createSphereInk(tone:'graphite'|'silver',dark:boolean){
  const size=128,canvas=document.createElement('canvas');canvas.width=canvas.height=size;
  const context=canvas.getContext('2d')!,pixels=context.createImageData(size,size);
  const light=new Vector3(-.45,.55,.80).normalize();
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const nx=(x+.5)/size*2-1,ny=1-(y+.5)/size*2,distance=Math.hypot(nx,ny);if(distance>1)continue;
    const nz=Math.sqrt(Math.max(0,1-distance*distance)),lit=Math.max(0,nx*light.x+ny*light.y+nz*light.z);
    const low=dark?70:tone==='graphite'?43:113,high=dark?222:tone==='graphite'?188:234;
    const shade=low+(high-low)*(.20+.80*lit),index=(y*size+x)*4;
    pixels.data[index]=shade;pixels.data[index+1]=shade+2;pixels.data[index+2]=shade+5;
    pixels.data[index+3]=255*Math.min(1,(1-distance)*size/2);
  }
  context.putImageData(pixels,0,0);return canvas;
}
