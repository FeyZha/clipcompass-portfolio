/*!
 * CPU adaptation of ARKx / Tiago Canzian's Interactive Particles Music Visualizer.
 * MIT, https://github.com/tgcnzn/Interactive-Particles-Music-Visualizer
 * Source afe366de4c10e15f627958d7893ab21da8290ea8, entities/glsl/vertex.glsl.
 * Simplex noise: Ian McEwan / Ashima Arts, MIT. Full notices in third-party/ark-particles.
 */
import {Vector3} from 'three';

const mod289=(x:number)=>x-Math.floor(x/289)*289;
const permute=(x:number)=>mod289((34*x+1)*x);
function contribution(p:number,x:number,y:number){
  let m=Math.max(.5-x*x-y*y,0);m*=m;m*=m;
  const gradient=2*(p/41-Math.floor(p/41))-1;
  const h=Math.abs(gradient)-.5,a=gradient-Math.floor(gradient+.5);
  return m*(1.79284291400159-.85373472095314*(a*a+h*h))*(a*x+h*y);
}
// Scalar port of the shader's complete 2D Ashima simplex implementation.
export function noise2D(x:number,y:number){
  const skew=(x+y)*.366025403784439;
  let ix=Math.floor(x+skew),iy=Math.floor(y+skew);
  const unskew=(ix+iy)*.211324865405187;
  const x0=x-ix+unskew,y0=y-iy+unskew;
  const i1=x0>y0?1:0,j1=1-i1;
  const x1=x0-i1+.211324865405187,y1=y0-j1+.211324865405187;
  const x2=x0-.577350269189626,y2=y0-.577350269189626;
  ix=mod289(ix);iy=mod289(iy);
  return 130*(contribution(permute(permute(iy)+ix),x0,y0)+
    contribution(permute(permute(iy+j1)+ix+i1),x1,y1)+
    contribution(permute(permute(iy+1)+ix+1),x2,y2));
}
function curl(x:number,y:number,z:number,out:Vector3){
  // Central differences, eps=1 as upstream. Correct upstream's repeated
  // x+eps in curl.y to x-eps so that derivative contributes on both sides.
  return out.set(
    (noise2D(x,y+1)-noise2D(x,y-1)-noise2D(x,z+1)+noise2D(x,z-1))*.5,
    (noise2D(y,z+1)-noise2D(y,z-1)-noise2D(x+1,z)+noise2D(x-1,z))*.5,
    (noise2D(x+1,y)-noise2D(x-1,y)-noise2D(y+1,z)+noise2D(y-1,z))*.5
  );
}

export function createReactiveParticleSurface(){
  // Regular rows describe a continuous surface, rather than random dust.
  // Equal-area spacing around each latitude avoids a dark clump at the poles.
  const normals:Vector3[]=[],rows=36;
  for(let row=0;row<rows;row++){
    const latitude=Math.PI*(row+.5)/rows,sin=Math.sin(latitude);
    const count=Math.max(8,Math.round(91*sin));
    for(let column=0;column<count;column++){
      const longitude=(column+.5*(row%2))/count*Math.PI*2;
      normals.push(new Vector3(sin*Math.cos(longitude),Math.cos(latitude),sin*Math.sin(longitude)));
    }
  }
  const normal=new Vector3(),wakeAxis=new Vector3(),flow=new Vector3();
  const sizeFocus=new Vector3();
  let wakeStrength=0;
  const phase=0,frequency=.88,amplitude=1.20;
  // The rest curl field depends only on the fixed unit normals, not time or wake.
  // Cache it once; gesture shear and the travelling size crest stay live.
  const restField=normals.map(normal=>{
    const delta=new Vector3();
      curl(normal.x*frequency+phase,normal.y*frequency+phase*.73,normal.z*frequency-phase*.61,delta);
      // Keep the source's normal offset, curl target and nonlinear d^4 mix.
      delta.multiplyScalar(amplitude).addScaledVector(normal,.1);
      const distance=delta.length()/.95,d=Math.min(1.04,distance);
      delta.multiplyScalar(d*d*d*d);
      const length=delta.length();if(length>1e-8)delta.multiplyScalar(.72*Math.tanh(length/.72)/length);
    return {delta,d};
  });
  return {
    count:normals.length,
    prepare(wake:Vector3,time=0){
      // Keep the surface quiet at rest. Only the existing signed gesture
      // spring reveals stronger folds; no elapsed-time noise animation.
      wakeStrength=wake.length();wakeAxis.copy(wake).multiplyScalar(wakeStrength>1e-8?1/wakeStrength:0);
      // A single broad crest travels around a tilted great circle in 18s.
      // Only dot sizes follow it: the surface's positions stay quiet at rest.
      const angle=time*Math.PI*2/18+1.8;
      sizeFocus.set(Math.cos(angle),.62*Math.sin(angle),.78*Math.sin(angle)).normalize();
    },
    radiusAt(index:number){
      const crest=Math.max(0,(normals[index].dot(sizeFocus)-.25)/.75);
      return .24+1.41*crest*crest;
    },
    sample(index:number,out:Vector3){
      normal.copy(normals[index]);
      const {delta,d}=restField[index];
      out.copy(normal).multiplyScalar(2.72).addScaledVector(delta,.18+.62*Math.min(1,wakeStrength*2.4));
      // Opposite bands slide by different amounts. A real signed drag drives
      // local shear and a crest, not a common rigid rotation of all particles.
      const latitude=normal.dot(wakeAxis);
      flow.crossVectors(wakeAxis,normal).multiplyScalar(Math.sin(Math.PI*latitude)*wakeStrength*2.8);
      out.add(flow).addScaledVector(normal,wakeStrength*.85*Math.sin(latitude*Math.PI*2));
      return d;
    }
  };
}
