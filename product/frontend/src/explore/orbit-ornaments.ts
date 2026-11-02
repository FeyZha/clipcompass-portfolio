import {Vector3} from 'three';

type Tone='ink'|'line'|'soft'|'wash';
export type OrbitOrnament={ring:number;points:Vector3[];fill:boolean;weight:number;tone:Tone};

// Reuse the project's earlier point/ink/arc/sector geometry (archived in
// work/orbit-inner-planes-20261028/before/orbit-engine.ts). Only the composition
// is new: the user's CYCLICAL reference, attached to two existing orbit planes.
// Everything is local 3D geometry, including the small circular ink marks.
export function createOrbitOrnaments(bases:{u:Vector3;normal:Vector3}[],radii:number[]):OrbitOrnament[]{
  const result:OrbitOrnament[]=[];
  for(const ring of [5,7]){
    const {u,normal}=bases[ring],v=new Vector3().crossVectors(normal,u),radius=radii[ring];
    const spokeAngles=ring===5?[.47,2.23,3.70,5.16]:[1.11,4.39];
    const inSpokeWindow=(angle:number)=>spokeAngles.some(a=>Math.abs(angle-a)<.145);
    const point=(r:number,angle:number)=>u.clone().multiplyScalar(Math.cos(angle)*r*radius).addScaledVector(v,Math.sin(angle)*r*radius);
    const ink=(r1:number,a1:number,r2:number,a2:number,weight=.75,tone:Tone='line')=>{
      // Short segments let a foreground orbit cross a spoke at the correct
      // depth, rather than giving the whole spoke one average depth.
      const a=point(r1,a1),b=point(r2,a2),count=Math.max(1,Math.ceil(a.distanceTo(b)/.32));
      for(let i=0;i<count;i++)result.push({ring,points:[a.clone().lerp(b,i/count),a.clone().lerp(b,(i+1)/count)],fill:false,weight,tone});
    };
    const arc=(r:number,from:number,to:number,weight=.75,tone:Tone='line')=>{
      const count=Math.ceil(Math.abs(to-from)/.035);
      for(let n=0;n<count;n++){
        const a=from+(to-from)*n/count,b=from+(to-from)*(n+1)/count;
        if(!inSpokeWindow((a+b)/2))ink(r,a,r,b,weight,tone);
      }
    };
    const sector=(inner:number,outer:number,from:number,to:number,tone:Tone='wash')=>{
      const count=Math.ceil(Math.abs(to-from)/.035);
      for(let n=0;n<count;n++){
        const a=from+(to-from)*n/count,b=from+(to-from)*(n+1)/count;
        if(inSpokeWindow((a+b)/2))continue;
        result.push({ring,points:[point(inner,a),point(inner,b),point(outer,b),point(outer,a)],fill:true,weight:0,tone});
      }
    };
    const dot=(r:number,angle:number,size:number,tone:Tone='ink',outline=false)=>{
      const centre=point(r,angle),count=size<.018?12:28;
      const edge=(n:number)=>centre.clone().addScaledVector(u,Math.cos(n/count*Math.PI*2)*size*radius).addScaledVector(v,Math.sin(n/count*Math.PI*2)*size*radius);
      // Sub-pixel ink dots need one projected polygon, not 28 tiny triangles.
      if(!outline&&size<.018){result.push({ring,points:Array.from({length:count},(_,n)=>edge(n)),fill:true,weight:0,tone});return;}
      for(let n=0;n<count;n++)result.push({ring,points:outline?[edge(n),edge(n+1)]:[centre,edge(n),edge(n+1)],fill:!outline,weight:.7,tone});
    };
    const spoke=(from:number,to:number,angle:number,gaps:[number,number][],weight:number,tone:Tone)=>{
      // Coplanar ink must not compete in the depth sort. Leave physical gaps
      // for circular marks instead of drawing lines through their filled faces.
      let start=from;
      for(const [centre,extent] of gaps.sort((a,b)=>a[0]-b[0])){
        if(centre-extent>start)ink(start,angle,centre-extent,angle,weight,tone);
        start=Math.max(start,centre+extent);
      }
      if(start<to)ink(start,angle,to,angle,weight,tone);
    };
    if(ring===5){
      // Two open annular fields tie the spokes together without making an
      // opaque disc. An offset fine contour and a short dark arc set the rhythm.
      sector(.69,.735,.30,2.22);
      sector(.69,.735,3.19,4.37);
      arc(.745,.26,2.35,.8,'soft');
      arc(.745,3.13,4.52,.8,'soft');
      arc(.57,.72,1.68,.85);
      arc(.57,2.20,2.62,.85);
      arc(.57,3.06,4.56,.85);
      arc(.57,4.91,5.18,.85);
      sector(.566,.578,1.68,2.20,'ink');
      sector(.566,.578,4.56,4.91,'ink');
      // Sparse dots occupy one arc only; no blanket of HUD ticks or labels.
      for(let n=0;n<21;n++){const a=.44+n*.057;if(!inSpokeWindow(a))dot(.79,a,.0028,'line');}
      const spokes=[{a:.47,end:.94,big:.68,small:.31,size:.050},
        {a:2.23,end:.80,big:.47,small:.70,size:.038},
        {a:3.70,end:.90,big:.70,small:.38,size:.062},
        {a:5.16,end:.72,big:.38,small:.57,size:.043}];
      for(const [i,s] of spokes.entries()){
        spoke(.13+i*.026,s.end,s.a,[[s.big,s.size*(i===2?1.4:1.06)],[s.small,.015],[s.end,.015]],i===2?1.05:.85,'ink');
        dot(s.big,s.a,s.size,'soft');
        dot(s.small,s.a,.012,i%2?'line':'ink');
        dot(s.end,s.a,.012,'ink');
        if(i===2)dot(s.big,s.a,s.size*1.34,'line',true);
      }
    }else{
      // The inner, differently tilted plane is a quieter counterpoint.
      arc(.66,.12,1.54,.65,'soft');
      arc(.66,2.44,4.35,.7,'line');
      sector(.65,.67,2.59,3.11,'line');
      sector(.51,.535,4.30,5.52);
      for(const [a,end,big] of [[1.11,.85,.54],[4.39,.93,.72]]){
        spoke(.20,end,a,[[big,.052],[big-.14,.017],[end,.018]],.65,'soft');
        dot(big,a,.049,'soft');
        dot(big-.14,a,.014,'line');
        dot(end,a,.015,'ink');
      }
    }
  }
  return result;
}
