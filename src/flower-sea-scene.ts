import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';

export interface FlowerAsset {
  id: string; label: string; path: string; sha256?: string;
  state: 'ready' | 'pending'; height: number;
}
export interface FlowerPlacement {
  assetId: string; position: [number, number, number]; rotation?: number; scale?: number;
}
export interface FlowerManifest {
  version: number; assets: FlowerAsset[]; placements: FlowerPlacement[];
  sourceReference: { path: string; title: string };
}
export type FlowerWeather = 'day' | 'dusk' | 'rain';
export interface FlowerSceneStats {
  ready: boolean; loaded: string[]; pending: string[]; failed: { id: string; message: string }[];
  draws: number; triangles: number; environmentSource: string; weather: FlowerWeather;
}

/** Positive z is foreground. Ground relief follows the original's two rolling banks. */
export function flowerGroundHeight(x: number, z: number) {
  const leftBank = 1.25 * Math.exp(-((x + 8) ** 2 / 75 + (z + 2) ** 2 / 45));
  const rightBank = 1.55 * Math.exp(-((x - 12) ** 2 / 70 + (z - 1) ** 2 / 55));
  return -.6 + leftBank + rightBank + .22 * Math.sin(x * .19 + z * .28) + .09 * Math.cos(x * .53 - z * .31);
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
  host.appendChild(renderer.domElement);
  const camera = new T.PerspectiveCamera(39, 1, .1, 220);
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
    camera.position.set(1.8, 16.5, 35.2); controls.target.set(0, 1.4, -.9); controls.update();
    controls.enableDamping = damping;
  }
  resetView();

  const hemi = new T.HemisphereLight(0xdcf1e8, 0x5e693a, 1.6); scene.add(hemi);
  const sun = new T.DirectionalLight(0xfff0ce, 2.5);
  sun.position.set(-14, 25, 13); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 75 });
  sun.shadow.bias = -.0003; sun.shadow.normalBias = .055;
  sun.shadow.radius = 3; scene.add(sun); scene.add(sun.target);
  const fill = new T.DirectionalLight(0xbcdcc3, .5); fill.position.set(20, 6, -18); scene.add(fill);
  scene.background = new T.Color(0xc7dfcb); scene.fog = new T.FogExp2(0xc7dfcb, .0095);

  const groundGeometry = new T.PlaneGeometry(67, 51, 150, 114); groundGeometry.rotateX(-Math.PI / 2);
  const vertices = groundGeometry.attributes.position;
  const colors: number[] = [];
  const shadeA = new T.Color('#418a35'), shadeB = new T.Color('#a5c842'), color = new T.Color();
  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i), z = vertices.getZ(i), y = flowerGroundHeight(x, z);
    vertices.setY(i, y);
    const mottling = .45 + .19 * Math.sin(x * .63 + z * .41) + .12 * Math.cos(x * 1.3 - z * .8) + random() * .07;
    color.copy(shadeA).lerp(shadeB, T.MathUtils.clamp(mottling + y * .1, 0, 1));
    colors.push(color.r, color.g, color.b);
  }
  groundGeometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3)); groundGeometry.computeVertexNormals();
  const ground = new T.Mesh(groundGeometry, new T.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
  ground.receiveShadow = true; ground.name = 'original-environment-ground'; scene.add(ground);

  // Low distant ridges give the original teal backdrop a real depth without replacing landmarks.
  for (let layer = 0; layer < 2; layer++) {
    const geometry = new T.PlaneGeometry(130, 34, 100, 16); geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i), z = positions.getZ(i);
      const profile = 3.5 + 2.3 * Math.sin(x * .065 + layer) + 1.1 * Math.cos(x * .18 + layer * 2);
      positions.setY(i, Math.max(-2, Math.sin((z + 17) / 34 * Math.PI) * profile - .7));
    }
    geometry.computeVertexNormals();
    const ridge = new T.Mesh(geometry, new T.MeshStandardMaterial({ color: layer ? '#79a397' : '#578e79', roughness: 1 }));
    ridge.position.z = -35 - layer * 22; scene.add(ridge);
  }

  const dummy = new T.Object3D();
  const path = (z: number) => .7 + Math.sin((z + 1) * .21) * 2.9;
  function onPath(x: number, z: number) { return Math.abs(x - path(z)) < 1.25 && z > -10 && z < 15; }

  const stoneMaterial = new T.MeshStandardMaterial({ color: '#c5c4a2', roughness: .98 });
  const stoneSide = new T.MeshStandardMaterial({ color: '#898f72', roughness: 1 });
  for (let i = 0; i < 19; i++) {
    const z = 13 - i * 1.26;
    const x = path(z) + (i % 2 === 0 ? -.42 : .43);
    const shape = new T.Shape();
    const count = 7;
    for (let j = 0; j < count; j++) {
      const angle = (j / count) * Math.PI * 2;
      const radius = .7 + random() * .16;
      const a = Math.cos(angle) * radius * 1.13, b = Math.sin(angle) * radius * .66;
      if (j === 0) shape.moveTo(a, b); else shape.lineTo(a, b);
    }
    shape.closePath();
    const geometry = new T.ExtrudeGeometry(shape, { depth: .12, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: .055, bevelThickness: .045 });
    geometry.rotateX(-Math.PI / 2);
    const stone = new T.Mesh(geometry, [stoneMaterial, stoneSide]);
    stone.position.set(x, flowerGroundHeight(x, z) + .09, z);
    stone.rotation.y = (random() - .5) * .4;
    stone.receiveShadow = stone.castShadow = true; scene.add(stone);
  }

  // Instanced meadow details are supporting vegetation, never substitutes for hero assets.
  const grassGeometry = new T.BufferGeometry();
  grassGeometry.setAttribute('position', new T.Float32BufferAttribute([-.028,0,0,.028,0,0,-.013,.13,.018,.027,.13,.018,.029,.27,.067],3));
  grassGeometry.setIndex([0,1,2,1,3,2,2,3,4]); grassGeometry.computeVertexNormals();
  const grassMaterial = new T.MeshStandardMaterial({ color: '#86ad4f', roughness: 1, side: T.DoubleSide });
  const grass = new T.InstancedMesh(grassGeometry, grassMaterial, 3200);
  let grassCount = 0;
  for (let i = 0; i < 3900 && grassCount < 3200; i++) {
    const x = (random() - .5) * 48, z = (random() - .5) * 32;
    if (onPath(x, z) || Math.hypot(x - 13, z - 6) < 2.2) continue;
    dummy.position.set(x, flowerGroundHeight(x, z) - .02, z);
    dummy.rotation.set((random() - .5) * .25, random() * Math.PI, (random() - .5) * .45);
    dummy.scale.setScalar(.55 + random() * 1.15); dummy.updateMatrix(); grass.setMatrixAt(grassCount, dummy.matrix);
    color.set('#a0bc56').lerp(new T.Color('#719a42'), random()); grass.setColorAt(grassCount++, color);
  }
  grass.count = grassCount; grass.receiveShadow = true; grass.frustumCulled = false; scene.add(grass);

  const stemMaterial = new T.MeshStandardMaterial({ color: '#4e8750', roughness: 1 });
  const petalMaterial = new T.MeshStandardMaterial({ color: '#ffffff', roughness: .92, side: T.DoubleSide });
  const stemGeometry = new T.CylinderGeometry(.013, .019, .24, 4); stemGeometry.translate(0, .12, 0);
  const petalsGeometry = new T.CircleGeometry(.067, 7);
  const stems = new T.InstancedMesh(stemGeometry, stemMaterial, 520);
  const petals = new T.InstancedMesh(petalsGeometry, petalMaterial, 2600);
  const cores = new T.InstancedMesh(new T.SphereGeometry(.042, 6, 4), new T.MeshStandardMaterial({ color: '#e9c552', roughness: .9 }), 520);
  const palette = ['#f4eecc', '#fff3ae', '#ef9dae', '#d4e8ed', '#e1e8b1'];
  let flowerCount = 0;
  for (let i = 0; i < 700 && flowerCount < 520; i++) {
    const x = (random() - .5) * 37, z = (random() - .5) * 25;
    if (onPath(x, z) || Math.hypot(x - 13, z - 6) < 2.7) continue;
    const y = flowerGroundHeight(x, z), scale = .6 + random() * .8;
    const tint = new T.Color(palette[Math.floor(random() * palette.length)]);
    dummy.rotation.set(0, 0, 0); dummy.position.set(x, y, z); dummy.scale.setScalar(scale); dummy.updateMatrix(); stems.setMatrixAt(flowerCount, dummy.matrix);
    dummy.position.y += .24 * scale; dummy.updateMatrix(); cores.setMatrixAt(flowerCount, dummy.matrix);
    for (let p = 0; p < 5; p++) {
      const angle = p / 5 * Math.PI * 2;
      dummy.position.set(x + Math.cos(angle) * .065 * scale, y + .25 * scale, z + Math.sin(angle) * .065 * scale);
      dummy.rotation.set(-Math.PI / 2, 0, angle); dummy.scale.set(scale * .85, scale * 1.3, scale); dummy.updateMatrix();
      const index = flowerCount * 5 + p; petals.setMatrixAt(index, dummy.matrix); petals.setColorAt(index, tint);
    }
    flowerCount++;
  }
  stems.count = cores.count = flowerCount; petals.count = flowerCount * 5;
  stems.frustumCulled = cores.frustumCulled = petals.frustumCulled = false;
  stems.receiveShadow = petals.receiveShadow = cores.receiveShadow = true; scene.add(stems, petals, cores);

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
        copy.name = `hunyuan-${asset.id}`;
        scene.add(copy); placed = true;
      }
      if (!placed) throw new Error('模型没有场景放置位置');
      stats.loaded.push(asset.id); onProgress(stats);
    } catch (error) {
      stats.failed.push({ id: asset.id, message: error instanceof Error ? error.message : '模型加载失败' });
      onProgress(stats);
    }
  });

  function setWeather(value: FlowerWeather) {
    stats.weather = value;
    rain.visible = value === 'rain'; particles.visible = value !== 'rain';
    if (value === 'dusk') {
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
      hemi.color.set('#dcf1e8'); hemi.intensity = 1.6; hemi.groundColor.set('#5e693a');
      scene.background = new T.Color('#c7dfcb'); scene.fog = new T.FogExp2('#c7dfcb', .0095); renderer.toneMappingExposure = 1.05;
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
    const elapsed = clock.getElapsedTime();
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
    controls.update(); renderer.render(scene, camera);
    stats.draws = renderer.info.render.calls; stats.triangles = renderer.info.render.triangles;
    for (const subscriber of subscribers) subscriber();
  };
  draw();
  await Promise.allSettled(loadJobs);
  stats.ready = true; onProgress(stats);
  return {
    renderer, scene, camera, controls, stats, resetView, setWeather,
    onFrame(callback: () => void) { subscribers.add(callback); return () => subscribers.delete(callback); },
    focus(position: [number, number, number]) { const [x, y, z] = position; controls.target.set(x, flowerGroundHeight(x, z) + y + 1, z); camera.position.set(x + 2, flowerGroundHeight(x, z) + y + 7, z + 12); controls.update(); },
    dispose() {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); subscribers.clear(); controls.dispose();
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
