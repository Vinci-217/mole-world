import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { createFlowerGarden } from './flower-garden';
import { createGardenWalk } from './flower-walk';
import { createFlowerSky } from './flower-sky';
import { flowerGroundHeight } from './flower-terrain';
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
}

export async function createFlowerSeaScene(
  host: HTMLElement,
  manifest: FlowerManifest,
  onProgress: (stats: FlowerSceneStats) => void,
) {
  const stats: FlowerSceneStats = {
    ready: false, loaded: [], pending: manifest.assets.filter(a => a.state !== 'ready').map(a => a.id),
    failed: [], draws: 0, triangles: 0, environmentSource: '原创环境底座；地标由独立GLB加载', weather: 'day',
  };
  let seed = 362;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; return (seed >>> 0) / 4294967296; };
  const scene = new T.Scene();
  const renderer = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  // The shadow casters are static. Rebuild only after loading or moving the sun.
  renderer.shadowMap.autoUpdate = false;
  host.appendChild(renderer.domElement);
  const camera = new T.PerspectiveCamera(45, 1, .1, 220);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .065;
  controls.minDistance = 8; controls.maxDistance = 65;
  controls.maxPolarAngle = Math.PI * .485;
  controls.minPolarAngle = .22;
  controls.enablePan = true;
  controls.screenSpacePanning = false;
  controls.target.set(0, 1, 0);
  function resetView() {
    // Clear a drag's residual damping before restoring the composition.
    const damping = controls.enableDamping; controls.enableDamping = false; controls.update();
    camera.position.set(1.8, 11.8, 32.5); controls.target.set(0, 3.2, -3); controls.update();
    controls.enableDamping = damping;
  }
  resetView();

  const hemi = new T.HemisphereLight(0xdcf1e8, 0x5e693a, .95); scene.add(hemi);
  const sun = new T.DirectionalLight(0xfff0ce, 2.5);
  sun.position.set(-14, 25, 13); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 75 });
  sun.shadow.bias = -.0003; sun.shadow.normalBias = .055;
  sun.shadow.radius = 3; scene.add(sun); scene.add(sun.target);
  const fill = new T.DirectionalLight(0xbcdcc3, .5); fill.position.set(20, 6, -18); scene.add(fill);
  scene.background = new T.Color(0xb9d8d5); scene.fog = new T.FogExp2(0xb9d8d5, .006);

  const garden = createFlowerGarden(scene);
  const sky = createFlowerSky(scene);
  const walk = createGardenWalk(camera, controls, renderer.domElement);

  const particleCount = 150, particlePositions = new Float32Array(particleCount * 3);
  const particleOffsets = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) { particleOffsets[i * 3] = (random() - .5) * 38; particleOffsets[i * 3 + 1] = .5 + random() * 9; particleOffsets[i * 3 + 2] = (random() - .5) * 25; }
  particlePositions.set(particleOffsets);
  const particleGeometry = new T.BufferGeometry(); particleGeometry.setAttribute('position', new T.BufferAttribute(particlePositions, 3));
  const particleMaterial = new T.PointsMaterial({ color: '#fff2bb', size: .045, transparent: true, opacity: .54, depthWrite: false, sizeAttenuation: true });
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
      source.traverse(object => { if (object instanceof T.Mesh) { object.castShadow = object.receiveShadow = true; } });
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
    renderer.shadowMap.needsUpdate = true;
    rain.visible = value === 'rain'; particles.visible = value !== 'rain';
    if (value === 'night') {
      sun.color.set('#a6c6ed'); sun.intensity=.48;sun.position.set(-16,22,10);
      hemi.color.set('#5d7fa4');hemi.intensity=.48;hemi.groundColor.set('#243e39');
      scene.background=new T.Color('#142d42');scene.fog=new T.FogExp2('#142d42',.011);renderer.toneMappingExposure=1.1;particleMaterial.opacity=.9;
    } else if (value === 'dusk') {
      sun.color.set('#ffd1a3'); sun.intensity = 2.3; sun.position.set(-22, 9, 12);
      hemi.color.set('#b5c8d3'); hemi.intensity = 1.35; hemi.groundColor.set('#665340');
      scene.background = new T.Color('#c8b8b0'); scene.fog = new T.FogExp2('#c8b8b0', .012); renderer.toneMappingExposure = 1.06;
      particleMaterial.opacity = .7;
    } else if (value === 'rain') {
      sun.color.set('#d5e1dd'); sun.intensity = 1.2; sun.position.set(-14, 25, 13);
      hemi.color.set('#ccd9df'); hemi.intensity = 1.65; hemi.groundColor.set('#536c50');
      scene.background = new T.Color('#afc4bc'); scene.fog = new T.FogExp2('#afc4bc', .018); renderer.toneMappingExposure = 1.03;
    } else {
      sun.color.set('#fff0ce'); sun.intensity = 2.5; sun.position.set(-14, 25, 13);
      hemi.color.set('#dcf1e8'); hemi.intensity = .95; hemi.groundColor.set('#5e693a');
      scene.background = new T.Color('#b9d8d5'); scene.fog = new T.FogExp2('#b9d8d5', .006); renderer.toneMappingExposure = 1.05;
      particleMaterial.opacity = .54;
    }
  }
  const resize = () => { const { width, height } = host.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix(); };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  const clock = new T.Clock();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  const subscribers = new Set<() => void>();
  const draw = () => {
    if (disposed) return;
    frame = requestAnimationFrame(draw);
    const dt = clock.getDelta(); const elapsed = clock.elapsedTime;
    walk.update(dt);garden.update(elapsed,stats.weather==='night'?1:stats.weather==='dusk'?.35:0);
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
    if(!walk.active)controls.update(); sky.update(camera,elapsed); renderer.render(scene, camera);
    stats.draws = renderer.info.render.calls; stats.triangles = renderer.info.render.triangles;
    for (const subscriber of subscribers) subscriber();
  };
  draw();
  await Promise.allSettled([...loadJobs,garden.ready]);
  renderer.shadowMap.needsUpdate = true;
  stats.ready = true; onProgress(stats);
  return {
    renderer, scene, camera, controls, stats, walk, resetView: () => {walk.stop();resetView();}, setWeather,
    flowerCount: garden.flowerTotal,
    onFrame(callback: () => void) { subscribers.add(callback); return () => subscribers.delete(callback); },
    focus(position: [number, number, number]) { const [x, y, z] = position; if(walk.active){walk.moveTo(x,z);return;} controls.target.set(x, flowerGroundHeight(x, z) + y + 1, z); camera.position.set(x + 2, flowerGroundHeight(x, z) + y + 7, z + 12); controls.update(); },
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
          }
        }
      };
      scene.traverse(gather); for (const object of ownedLoadedResources) object.traverse(gather);
      for (const geometry of geometries) geometry.dispose(); for (const material of materials) material.dispose(); for (const texture of textures) texture.dispose();
      scene.clear(); renderer.dispose(); renderer.domElement.remove();
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
