import {Vector3} from 'three';

type Tone='edge'|'body'|'face'|'accent';
export type OrbitStructurePart={ring:number;points:Vector3[];fill:boolean;weight:number;tone:Tone};

// Adapt the existing orbit-ornaments.ts segmented arc/sector construction.
// Here the pieces are short sleeves and bridges attached to the frame itself:
// no radial discs, floating ornaments, labels, or extra question tracks.
export function createOrbitStructure(bases:{u:Vector3;normal:Vector3}[],radii:number[]):OrbitStructurePart[]{
  const parts:OrbitStructurePart[]=[];
  for(const ring of [2,5,7]){
    const {u,normal}=bases[ring],v=new Vector3().crossVectors(normal,u),radius=radii[ring];
    const point=(r:number,a:number,lift=0)=>u.clone().multiplyScalar(Math.cos(a)*r*radius).addScaledVector(v,Math.sin(a)*r*radius).addScaledVector(normal,lift);
    const segment=(a:Vector3,b:Vector3,weight:number,tone:Tone)=>{
      const n=Math.max(1,Math.ceil(a.distanceTo(b)/.24));
      for(let i=0;i<n;i++)parts.push({ring,points:[a.clone().lerp(b,i/n),a.clone().lerp(b,(i+1)/n)],fill:false,weight,tone});
    };
    const arc=(r:number,from:number,to:number,weight:number,tone:Tone,lift=0)=>{
      const n=Math.ceil((to-from)/.026);
      for(let i=0;i<n;i++)segment(point(r,from+(to-from)*i/n,lift),point(r,from+(to-from)*(i+1)/n,lift),weight,tone);
    };
    const sleeve=(inner:number,outer:number,from:number,to:number,tone:Tone)=>{
      const n=Math.ceil((to-from)/.026),lift=.055;
      for(let i=0;i<n;i++){
        // Slight overlap covers antialias seams; do not outline radial joins.
        const a=Math.max(from,from+(to-from)*i/n-.004),b=Math.min(to,from+(to-from)*(i+1)/n+.004);
        // A narrow face in the ring's actual plane: it rotates edge-on and
        // crosses other orbits, without facets becoming tiny dark seams.
        parts.push({ring,points:[point(inner,a,lift),point(inner,b,lift),point(outer,b,lift),point(outer,a,lift)],fill:true,weight:0,tone});
      }
      arc(outer,from,to,.7,'edge',lift);
      arc(inner,from,to,.7,'face',lift);
    };
    const bridge=(inner:number,outer:number,a:number)=>{
      const half=.018,steps=Math.ceil((outer-inner)*radius/.22);
      for(let i=0;i<steps;i++){
        const r1=Math.max(inner,inner+(outer-inner)*i/steps-.004),r2=Math.min(outer,inner+(outer-inner)*(i+1)/steps+.004);
        parts.push({ring,points:[point(r1,a-half,.055),point(r2,a-half,.055),point(r2,a+half,.055),point(r1,a+half,.055)],fill:true,weight:0,tone:'body'});
      }
      segment(point(inner,a,.058),point(outer,a,.058),.65,'face');
    };
    if(ring===5){
      // Sparse paired outer frame, not an all-round instrument dial.
      arc(.965,-.28,1.25,1.1,'edge');
      arc(.965,2.85,3.42,1.1,'edge');
      for(const a of [-.28,.52,1.25,2.85,3.42])bridge(.963,1.007,a);
      for(let i=0;i<12;i++){
        const a=1.55+i*.039;
        segment(point(i%4===0?.972:.985,a),point(1,a),i%4===0?1:.65,'body');
      }
    }else if(ring===2){
      sleeve(.86,.90,.3,2.2,'body');
      sleeve(.86,.90,3.28,4.14,'body');
      for(const a of [.3,2.2,3.28,4.14])bridge(.89,1.012,a);
    }else{
      sleeve(.88,.95,.65,1.75,'accent');
      sleeve(.88,.95,3.65,4.30,'body');
      for(const a of [.65,1.75,3.65,4.30])bridge(.94,1.012,a);
    }
  }
  return parts;
}
