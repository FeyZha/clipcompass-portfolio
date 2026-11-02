/*!
 * Adapted from Three.js r170 examples (MIT):
 * webgpu_tsl_compute_attractors_particles.html (gravity and cross-axis force)
 * webgl_buffergeometry_drawrange.html (distance/degree-limited connections)
 * Copyright © 2010-2024 three.js authors. Full source and license:
 * frontend/third-party/three-orbit-fields/.
 */
import {Vector3} from 'three';

export type OrbitAttractor={position:Vector3;axis:Vector3;mass:number;spin:number};

// CPU Vector3 port of the example's TSL force loop. Softening bounds close
// encounters; subtracting the force at the origin leaves a centred tidal field.
export function createTidalField(){
  const toAttractor=new Vector3(),direction=new Vector3(),spinningForce=new Vector3(),spinningVelocity=new Vector3(),originForce=new Vector3(),origin=new Vector3();
  const forceAt=(position:Vector3,sources:OrbitAttractor[],out:Vector3)=>{
    out.set(0,0,0);
    for(const source of sources){
      toAttractor.subVectors(source.position,position);
      const distanceSquared=toAttractor.lengthSq()+2.25;
      direction.copy(toAttractor).normalize();
      const gravityStrength=source.mass/distanceSquared;
      out.addScaledVector(direction,gravityStrength);
      spinningForce.copy(source.axis).multiplyScalar(gravityStrength*source.spin);
      spinningVelocity.crossVectors(spinningForce,toAttractor);
      out.add(spinningVelocity);
    }
    return out;
  };
  return {
    prepare(sources:OrbitAttractor[]){forceAt(origin,sources,originForce);},
    sample(position:Vector3,sources:OrbitAttractor[],out:Vector3){return forceAt(position,sources,out).sub(originForce);}
  };
}

export type ProximityLink={from:number;to:number;alpha:number;target:number};

// Preserve the upstream pair-distance, connection count and alpha rules. The
// permanent shell is excluded, and a smooth temporal fade avoids link flicker
// when an edge crosses the distance threshold or the degree budget changes.
export function createProximityLinks(count:number,excluded:Set<string>){
  const links:ProximityLink[]=[];
  for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){
    if(!excluded.has(`${i}:${j}`))links.push({from:i,to:j,alpha:0,target:0});
  }
  const degrees=new Uint8Array(count);
  let initialized=false;
  return (positions:Vector3[],minDistance:number,maxConnections:number,delta:number)=>{
    degrees.fill(0);
    const blend=initialized?1-Math.exp(-delta*2.4):1;
    for(const link of links){
      const a=positions[link.from],b=positions[link.to];
      const dx=a.x-b.x,dy=a.y-b.y,dz=a.z-b.z;
      const dist=Math.sqrt(dx*dx+dy*dy+dz*dz);
      link.target=0;
      if(degrees[link.from]<maxConnections&&degrees[link.to]<maxConnections&&dist<minDistance){
        degrees[link.from]++;degrees[link.to]++;
        link.target=1.0-dist/minDistance;
      }
      link.alpha+=(link.target-link.alpha)*blend;
    }
    initialized=true;
    return links;
  };
}
