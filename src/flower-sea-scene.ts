import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { createFlowerGarden } from './flower-garden';
import { createGardenWalk } from './flower-walk';
import { createFlowerSky } from './flower-sky';
import { flowerParticleMaterial } from './flower-particles';
import { createGardenRendering } from './flower-rendering';
import { finishGardenMaterial } from './flower-materials';
import { flowerGroundHeight, gardenSceneViews, type GardenSceneView, type GardenView } from './flower-terrain';
export { flowerGroundHeight } from './flower-terrain';

export interface FlowerAsset {
  id: string; label: string; path: string; sha256?: string;
  state: 'ready' | 'pending'; height: number; portalHeight?: number;
  generationState?: 'not-submitted' | 'submitted' | 'generating' | 'generated' | 'downloaded' | 'failed' | 'needs-review';
}
export interface FlowerPlacement {
  assetId: string; position: [number, number, number]; rotation?: number; scale?: number;
}
export interface FlowerManifest {
  version: number; assets: FlowerAsset[]; placements: FlowerPlacement[];
  sourceReference: { path: string; title: string };
}
export type FlowerWeather = 'day' | 'dusk' | 'rain' | 'night';
export interface FlowerSceneStats {
  ready: boolean; loaded: string[]; pending: string[]; failed: { id: string; message: string }[];
  draws: number; triangles: number; environmentSource: string; weather: FlowerWeather;
  landmarks:{id:string;position:number[];height:number;width:number;depth:number}[];
  environment:{ready:boolean;failed:string[];skyTexture:boolean;trees:number;butterflies:number;reusedFlowerClumps:number};
}

export async function createFlowerSeaScene(
  host: HTMLElement,
  manifest: FlowerManifest,
  onProgress: (stats: FlowerSceneStats) => void,
) {
  const stats: FlowerSceneStats = {
    ready: false, loaded: [], pending: manifest.assets.filter(a => a.state !== 'ready').map(a => a.id),
    failed: [], draws: 0, triangles: 0, environmentSource: '多视角布局与完整尺度后方建筑', weather: 'day',landmarks:[],
    environment:{ready:false,failed:[],skyTexture:false,trees:0,butterflies:0,reusedFlowerClumps:0},
  };
  let seed = 362;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; return (seed >>> 0) / 4294967296; };
  const scene = new T.Scene();
  const renderer = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.NeutralToneMapping;
  renderer.toneMappingExposure = .98;
  renderer.info.autoReset=false;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  // The shadow casters are static. Rebuild only after loading or moving the sun.
  renderer.shadowMap.autoUpdate = false;
  host.appendChild(renderer.domElement);
  const camera = new T.PerspectiveCamera(45, 1, .1, 420);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .065;
  controls.minDistance = 8; controls.maxDistance = 220;
  controls.maxPolarAngle = Math.PI * .485;
  controls.minPolarAngle = .005;
  controls.enablePan = true;
  controls.screenSpacePanning = false;
  controls.target.set(0, 1, 0);
  let viewId:GardenSceneView|'custom'='front';
  function applyView(id:GardenSceneView) {
    // Clear a drag's residual damping before restoring the composition.
    const damping = controls.enableDamping; controls.enableDamping = false; controls.update();
    const view=gardenSceneViews[id];camera.position.fromArray(view.eye);controls.target.fromArray(view.target);controls.update();viewId=id;
    controls.enableDamping = damping;
  }
  const resetView=()=>applyView('front');resetView();
  controls.addEventListener('start',()=>{viewId='custom';});

  const hemi = new T.HemisphereLight(0xc7e8ff, 0x66753d, .5); scene.add(hemi);
  const sun = new T.DirectionalLight(0xffedc9, 3.1);
  sun.target.position.set(0,0,-25);sun.position.set(-28,50,1); sun.castShadow = true;
  sun.shadow.mapSize.set(innerWidth<760?2048:4096,innerWidth<760?2048:4096);
  Object.assign(sun.shadow.camera, { left: -55, right: 55, top: 75, bottom: -65, near: 1, far: 220 });
  sun.shadow.bias = -.00012; sun.shadow.normalBias = .035;
  sun.shadow.radius = 5; scene.add(sun); scene.add(sun.target);
  const fill = new T.DirectionalLight(0xb1dbed, .38); fill.position.set(20, 12, 25); scene.add(fill);
  scene.background = new T.Color('#b1dce7'); scene.fog = new T.FogExp2('#b1dce7', .0042);
  let fogDensity=.0042;

  const garden = createFlowerGarden(scene);
  const sky = createFlowerSky(scene);
  const rendering = createGardenRendering(renderer,scene,camera);rendering.weather('day');
  const walk = createGardenWalk(camera, controls, renderer.domElement);

  const particleCount = 150, particlePositions = new Float32Array(particleCount * 3);
  const particleOffsets = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) { particleOffsets[i * 3] = (random() - .5) * 38; particleOffsets[i * 3 + 1] = .5 + random() * 9; particleOffsets[i * 3 + 2] = (random() - .5) * 25; }
  particlePositions.set(particleOffsets);
  const particleGeometry = new T.BufferGeometry(); particleGeometry.setAttribute('position', new T.BufferAttribute(particlePositions, 3));
  const particleMaterial = flowerParticleMaterial({ color: '#fff4c7', size: .075, opacity: .65, blending:T.AdditiveBlending, sizeAttenuation: true });
  const particles = new T.Points(particleGeometry, particleMaterial); scene.add(particles);
  const rainPositions = new Float32Array(320 * 6);
  for (let i = 0; i < 320; i++) { const x = (random() - .5) * 43, y = random() * 17, z = (random() - .5) * 33; rainPositions.set([x, y, z, x - .04, y + .4, z], i * 6); }
  const rainGeometry = new T.BufferGeometry(); rainGeometry.setAttribute('position', new T.BufferAttribute(rainPositions, 3));
  const rain = new T.LineSegments(rainGeometry, new T.LineBasicMaterial({ color: '#b7d4d0', transparent: true, opacity: .34, depthWrite: false })); rain.visible = false; scene.add(rain);

  const gltf = new GLTFLoader();
  const ownedLoadedResources = new Set<T.Object3D>();
  let disposed = false;
  const loadJobs = manifest.assets.filter(a => a.state === 'ready').map(async asset => {
    try {
      const url = localAssetUrl(asset.path);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`模型文件不可用 (${response.status})`);
      const bytes = await response.arrayBuffer();
      if (asset.sha256) {
        if (!globalThis.crypto?.subtle) throw new Error('浏览器无法校验模型，请使用 HTTPS 或本地预览');
        const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), x => x.toString(16).padStart(2, '0')).join('');
        if (hash !== asset.sha256.toLowerCase()) throw new Error('模型完整性校验失败');
      }
      const model = await gltf.parseAsync(bytes, new URL('.', url).href);
      if (disposed) { disposeObject(model.scene); return; }
      const bounds = new T.Box3().setFromObject(model.scene), size = bounds.getSize(new T.Vector3());
      if (!Number.isFinite(size.y) || size.y <= 0) throw new Error('模型没有有效的三维网格');
      const source = model.scene;
      source.traverse(object => { if (object instanceof T.Mesh) {
        object.castShadow = object.receiveShadow = true;
        for(const material of Array.isArray(object.material)?object.material:[object.material])
          finishGardenMaterial(material,asset.id==='cottage'?'house':asset.id==='pink-portal'?'petal':'organic');
      } });
      const root = new T.Group(); root.add(source);
      const height = Math.max(.01, asset.height); root.scale.setScalar(height / size.y);
      const center = bounds.getCenter(new T.Vector3()); source.position.sub(new T.Vector3(center.x, bounds.min.y, center.z));
      ownedLoadedResources.add(source);
      let placed = false;
      for (const placement of manifest.placements.filter(p => p.assetId === asset.id)) {
        const copy = cloneSkeleton(root);
        const [x, y, z] = placement.position;
        copy.position.set(x, flowerGroundHeight(x, z) + y, z);
        copy.rotation.y = placement.rotation ?? 0;
        copy.scale.multiplyScalar(placement.scale ?? 1);
        copy.name = `landmark-${asset.id}`;
        scene.add(copy); placed = true;
        const actualSize=new T.Box3().setFromObject(copy).getSize(new T.Vector3());
        stats.landmarks.push({id:asset.id,position:copy.position.toArray(),height:actualSize.y,width:actualSize.x,depth:actualSize.z});
        if(asset.id==='pink-portal'&&asset.portalHeight!==undefined){
          garden.addPortal(new T.Vector3(x,flowerGroundHeight(x,z)+y+asset.portalHeight*height/size.y,z),.57);
        }
      }
      if (!placed) throw new Error('模型没有场景放置位置');
      renderer.shadowMap.needsUpdate = true;
      stats.loaded.push(asset.id); onProgress(stats);
    } catch (error) {
      stats.failed.push({ id: asset.id, message: error instanceof Error ? error.message : '模型加载失败' });
      onProgress(stats);
    }
  });

  function setWeather(value: FlowerWeather) {
    stats.weather = value;
    sky.setWeather(value);
    rendering.weather(value);
    renderer.shadowMap.needsUpdate = true;
    rain.visible = value === 'rain'; particles.visible = value !== 'rain';
    if (value === 'night') {
      sun.color.set('#b5d1ff'); sun.intensity=.52;sun.position.set(-32,44,-5);fill.intensity=.12;
      hemi.color.set('#6c95c4');hemi.intensity=.38;hemi.groundColor.set('#233d48');
      scene.background=new T.Color('#142d42');scene.fog=new T.FogExp2('#142d42',.006);renderer.toneMappingExposure=1.05;particleMaterial.opacity=.9;
    } else if (value === 'dusk') {
      sun.color.set('#ffbf87'); sun.intensity = 3; sun.position.set(-44,18,-1);fill.intensity=.5;
      hemi.color.set('#bbc9ee'); hemi.intensity = .65; hemi.groundColor.set('#705e48');
      scene.background = new T.Color('#dcc9c1'); scene.fog = new T.FogExp2('#dcc9c1', .0048); renderer.toneMappingExposure = .98;
      particleMaterial.opacity = .7;
    } else if (value === 'rain') {
      sun.color.set('#d5e1ed'); sun.intensity = 1.2; sun.position.set(-28,50,1);fill.intensity=.35;
      hemi.color.set('#ccd9df'); hemi.intensity = .85; hemi.groundColor.set('#536c50');
      scene.background = new T.Color('#afc4ca'); scene.fog = new T.FogExp2('#afc4ca', .01); renderer.toneMappingExposure = .98;
    } else {
      sun.color.set('#ffedc9'); sun.intensity = 3.1; sun.position.set(-28,50,1);fill.intensity=.38;
      hemi.color.set('#c7e8ff'); hemi.intensity = .5; hemi.groundColor.set('#66753d');
      scene.background = new T.Color('#b1dce7'); scene.fog = new T.FogExp2('#b1dce7', .0042); renderer.toneMappingExposure = .98;
      particleMaterial.opacity = .54;
    }
    fogDensity=(scene.fog as T.FogExp2).density;
  }
  const resize = () => { const { width, height } = host.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix(); rendering.resize(width,height); };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  const clock = new T.Clock();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  const subscribers = new Set<() => void>();
  const draw = () => {
    if (disposed) return;
    frame = requestAnimationFrame(draw);
    const dt = clock.getDelta(); const elapsed = clock.elapsedTime;
    walk.update(dt);garden.update(elapsed,stats.weather==='night'?1:stats.weather==='dusk'?.35:0,camera.position);
    if(walk.active){const ground=flowerGroundHeight(camera.position.x,camera.position.z);particles.position.set(camera.position.x,ground,camera.position.z-5);rain.position.copy(particles.position);}
    else{particles.position.set(0,0,0);rain.position.set(0,0,0);}
    if (!reducedMotion) {
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = particleOffsets[i * 3] + Math.sin(elapsed * .16 + i) * .35;
        particlePositions[i * 3 + 1] = particleOffsets[i * 3 + 1] + Math.sin(elapsed * .24 + i * .2) * .4;
      }
      particleGeometry.attributes.position.needsUpdate = true;
      if (rain.visible) {
        for (let i = 0; i < 320; i++) {
          const fall = (elapsed * 6.5 + i * .19) % 17;
          rainPositions[i * 6 + 1] = 17 - fall; rainPositions[i * 6 + 4] = 17.4 - fall;
        }
        rainGeometry.attributes.position.needsUpdate = true;
      }
    }
    if(!walk.active)controls.update();
    // Inspection cameras above the garden should not be submerged in ground haze.
    (scene.fog as T.FogExp2).density=fogDensity*T.MathUtils.clamp(1-(camera.position.y-30)/150,.24,1);
    sky.update(camera,elapsed); rendering.render();
    stats.draws = renderer.info.render.calls; stats.triangles = renderer.info.render.triangles;
    for (const subscriber of subscribers) subscriber();
  };
  draw();
  const loadResults=await Promise.allSettled([...loadJobs,garden.ready,sky.ready,rendering.ready]);
  const environmentResults=loadResults.slice(loadJobs.length);
  stats.environment={ready:environmentResults.every(r=>r.status==='fulfilled'),
    failed:environmentResults.flatMap((r,i)=>r.status==='rejected'?['花园植被与蝴蝶','天空云层','环境照明'][i]:[]),
    skyTexture:sky.stats.skyTexture,trees:garden.stats.trees,butterflies:garden.stats.butterflies,reusedFlowerClumps:garden.stats.reusedFlowerClumps};
  renderer.shadowMap.needsUpdate = true;
  stats.ready = true; onProgress(stats);
  return {
    renderer, scene, camera, controls, stats, walk, rendering:rendering.stats, resetView: () => {walk.stop();resetView();}, setWeather,
    setView(id:GardenSceneView){walk.stop();applyView(id);},get viewId(){return viewId;},
    flowerCount: garden.flowerTotal,
    onFrame(callback: () => void) { subscribers.add(callback); return () => subscribers.delete(callback); },
    focus(position: [number, number, number],view?:GardenView) {
      const [x,y,z]=position;if(walk.active){
        if(walk.moveTo(x,z)&&view){
          const [tx,ty,tz]=view.target,target=new T.Vector3(tx,flowerGroundHeight(tx,tz)+ty,tz);
          if(Math.hypot(tx-x,tz-z)<2){
            const [ex,ey,ez]=view.eye;
            const direction=target.clone().sub(new T.Vector3(ex,flowerGroundHeight(ex,ez)+ey,ez)).normalize();
            target.copy(walk.position).addScaledVector(direction,8);
          }
          walk.lookAt(target);
        }
        return;
      }
      const damping=controls.enableDamping;controls.enableDamping=false;controls.update();
      viewId='custom';
      const eye=view?.eye??[x+2,y+7,z+12],target=view?.target??[x,y+1,z];
      camera.position.set(eye[0],flowerGroundHeight(eye[0],eye[2])+eye[1],eye[2]);
      controls.target.set(target[0],flowerGroundHeight(target[0],target[2])+target[1],target[2]);controls.update();controls.enableDamping=damping;
    },
    dispose() {
      disposed = true; cancelAnimationFrame(frame);walk.dispose(); observer.disconnect(); subscribers.clear(); controls.dispose();
      // Cloned instances share their mesh resources; dispose each geometry/material only once.
      const geometries = new Set<T.BufferGeometry>(), materials = new Set<T.Material>(), textures = new Set<T.Texture>();
      const gather = (object: T.Object3D) => {
        if (object instanceof T.Mesh || object instanceof T.Points || object instanceof T.LineSegments) {
          if (object.geometry) geometries.add(object.geometry);
          for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
            materials.add(material);
            for (const value of Object.values(material)) if (value instanceof T.Texture) textures.add(value);
            for (const value of Object.values(material.userData)) if(value instanceof T.Texture) textures.add(value);
            if(material instanceof T.ShaderMaterial)for(const uniform of Object.values(material.uniforms))if(uniform.value instanceof T.Texture)textures.add(uniform.value);
          }
        }
      };
      scene.traverse(gather); for (const object of ownedLoadedResources) object.traverse(gather);
      for (const geometry of geometries) geometry.dispose(); for (const material of materials) material.dispose(); for (const texture of textures) texture.dispose();
      rendering.dispose();scene.clear(); renderer.dispose(); renderer.domElement.remove();
    },
  };
}

function disposeObject(object: T.Object3D) {
  object.traverse(item => {
    if (!(item instanceof T.Mesh)) return;
    item.geometry.dispose();
    for (const material of Array.isArray(item.material) ? item.material : [item.material]) { for (const value of Object.values(material)) if (value instanceof T.Texture) value.dispose(); material.dispose(); }
  });
}

/** Models are static site assets; never fetch an arbitrary API URL from the client. */
function localAssetUrl(path: string) {
  if (!path || /^(?:[a-z]+:|\/\/)/i.test(path) || path.split('/').includes('..')) throw new Error('模型路径必须是站内相对路径');
  return new URL(path.replace(/^\.\//, '').replace(/^\//, ''), new URL('./', location.href)).href;
}
