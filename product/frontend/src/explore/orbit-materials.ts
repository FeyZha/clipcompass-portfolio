// Material/lighting pipeline adapted from Three.js r170's MIT transmission
// example. Actual maps: ambientCG Metal010 + Poly Haven Studio Small 09 (CC0).
// Track geometry and camera are supplied by the existing local orbit engine.
import {
  ACESFilmicToneMapping, Color, CylinderGeometry, DirectionalLight, DoubleSide,
  EquirectangularReflectionMapping, Fog, Group, HemisphereLight, Mesh,
  MeshPhysicalMaterial, MeshStandardMaterial, RepeatWrapping, Scene, SphereGeometry,
  TextureLoader, TorusGeometry, Vector3, WebGLRenderer,
  type BufferGeometry, type Material, type Matrix4, type PerspectiveCamera, type Texture,
} from 'three';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';

const ASSETS='/assets/orbits/';
export function createOrbitMaterials(stage:HTMLElement,radii:number[],normals:Vector3[]){
  let renderer:WebGLRenderer;
  try{renderer=new WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});}
  catch{stage.dataset.materials='fallback';return null;}
  const canvas=renderer.domElement;canvas.className='orbit-materials';canvas.setAttribute('aria-hidden','true');stage.prepend(canvas);
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
  renderer.toneMapping=ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;
  const scene=new Scene(),root=new Group(),up=new Vector3(0,1,0);
  const geometries=new Set<BufferGeometry>(),materials=new Set<Material>(),textures=new Set<Texture>();
  scene.add(root);root.matrixAutoUpdate=false;
  let disposed=false,lost=false,theme='',loaded=0,assetFailed=false;
  const track=<T extends BufferGeometry>(g:T)=>{geometries.add(g);return g;};
  const remember=<T extends Material>(m:T)=>{materials.add(m);return m;};
  const edge=remember(new MeshStandardMaterial({color:0xc6ceca,metalness:.8,roughness:.4,envMapIntensity:1.3}));
  const face=remember(new MeshPhysicalMaterial({color:0xcdd5d1,metalness:.82,roughness:.38,transmission:.1,thickness:.22,ior:1.45,clearcoat:.45,clearcoatRoughness:.24,side:DoubleSide,envMapIntensity:1.4}));
  const bands=radii.map((radius,i)=>{
    const ring=new Group();ring.quaternion.setFromUnitVectors(up,normals[i]);root.add(ring);
    const material=remember(face.clone());
    ring.add(new Mesh(track(new CylinderGeometry(radius,radius,.94,192,1,true)),material));
    for(const y of [-.47,.47]){
      const rim=new Mesh(track(new TorusGeometry(radius,.038,6,192)),edge);rim.rotation.x=Math.PI/2;rim.position.y=y;ring.add(rim);
    }
    return material;
  });
  const axle=new Mesh(track(new CylinderGeometry(.018,.018,26.1,12)),edge);root.add(axle);
  const capGeometry=track(new SphereGeometry(.095,16,12));
  for(const y of [-13.05,13.05]){const cap=new Mesh(capGeometry,edge);cap.position.y=y;root.add(cap);}
  scene.add(new HemisphereLight(0xf6faf8,0x737976,1.1));
  const softbox=new DirectionalLight(0xffffff,2);softbox.position.set(-12,18,20);scene.add(softbox);
  const fill=new DirectionalLight(0xe0e8ee,1.4);fill.position.set(15,-5,-10);scene.add(fill);

  stage.dataset.materials='loading';
  function completed(){loaded++;if(!disposed&&!lost)stage.dataset.materials=assetFailed?'partial':loaded===3?'ready':'loading';}
  function failed(){assetFailed=true;if(!disposed&&!lost)stage.dataset.materials='partial';}
  const loader=new TextureLoader();
  for(const [file,slot] of [['Metal010_1K-JPG_Roughness.jpg','roughnessMap'],['Metal010_1K-JPG_NormalGL.jpg','normalMap']] as const){
    loader.load(ASSETS+file,texture=>{
      if(disposed){texture.dispose();return;}textures.add(texture);
      texture.wrapS=texture.wrapT=RepeatWrapping;texture.repeat.set(24,1);texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      for(const material of [edge,face,...bands]){material[slot]=texture;material.normalScale.set(.12,.12);material.needsUpdate=true;}
      completed();
    },undefined,failed);
  }
  new RGBELoader().load(ASSETS+'studio_small_09_1k.hdr',texture=>{
    if(disposed){texture.dispose();return;}textures.add(texture);texture.mapping=EquirectangularReflectionMapping;scene.environment=texture;scene.environmentRotation.set(0,.55,0);completed();
  },undefined,failed);
  function contextLost(){lost=true;canvas.hidden=true;stage.dataset.materials='fallback';}
  canvas.addEventListener('webglcontextlost',contextLost);
  return {
    resize(width:number,height:number){renderer.setSize(width,height);},
    render(camera:PerspectiveCamera,rotation:Matrix4,highlight:number){
      if(lost||disposed)return false;
      const next=document.documentElement.dataset.theme==='dark'?'dark':'light';
      if(next!==theme){theme=next;const dark=theme==='dark';scene.background=new Color(dark?0x121619:0xf2f1ec);scene.fog=new Fog(scene.background,25,52);renderer.toneMappingExposure=dark?.9:1.12;}
      const fog=scene.fog as Fog;fog.near=Math.max(1,camera.position.length()-9);fog.far=camera.position.length()+16;
      root.matrix.copy(rotation);
      bands.forEach((material,i)=>{material.emissive.setHex(i===highlight?0x34503d:0);material.emissiveIntensity=i===highlight?.14:0;});
      renderer.render(scene,camera);return true;
    },
    dispose(){disposed=true;canvas.removeEventListener('webglcontextlost',contextLost);scene.environment=null;textures.forEach(t=>t.dispose());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.forceContextLoss();canvas.remove();},
  };
}
