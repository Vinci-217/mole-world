import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Broadleaf trees are adapted CC BY 4.0 models, not generated primitives.
 * See public/assets/nature/SOURCE.txt for provenance and modification details.
 */
export const NATURE_ASSETS = {
  oak: 'assets/nature/oak.glb',
  oakDetailed: 'assets/nature/oak-detailed.glb',
  pine: 'assets/nature/pine.glb',
  grass: 'assets/nature/meadow-grass.png',
  fern: 'assets/nature/woodland-fern.png',
} as const;

export type TreeKind = 'oak' | 'birch' | 'pine' | 'oak-detailed';
type ModelKey = 'oak' | 'oakDetailed' | 'pine';
type Placement = { position: T.Vector3; rotation: number; scale: T.Vector3; color: T.Color };
type TemplatePart = { geometry: T.BufferGeometry; material: T.MeshStandardMaterial; foliage: boolean };
type MeadowPlacement = { position: T.Vector3; scale: number; rotation: number; color: T.Color };

const models = new Map<ModelKey, Promise<TemplatePart[]>>();
const textures = new Map<'grass' | 'fern', Promise<T.Texture>>();
let offlineSources: Record<string, string> | undefined;

function source(key: keyof typeof NATURE_ASSETS): string {
  if (!offlineSources) {
    const embedded = document.getElementById('offline-nature');
    offlineSources = embedded ? JSON.parse(embedded.textContent || '{}') : {};
  }
  const path = NATURE_ASSETS[key];
  return offlineSources![key] || offlineSources![path] || offlineSources!['/' + path]
    || new URL(path, document.baseURI).href;
}

function loadModel(key: ModelKey): Promise<TemplatePart[]> {
  let promise = models.get(key);
  if (!promise) {
    promise = new GLTFLoader().loadAsync(source(key)).then(gltf => {
      gltf.scene.updateMatrixWorld(true);
      const result: TemplatePart[] = [];
      gltf.scene.traverse(object => {
        if (!(object instanceof T.Mesh)) return;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (let slot = 0; slot < materials.length; slot++) {
          const material = materials[slot] as T.MeshStandardMaterial;
          let geometry: T.BufferGeometry = object.geometry.clone().applyMatrix4(object.matrixWorld);
          // GLTFLoader normally splits primitives, but retain support for groups.
          if (materials.length > 1) {
            const groups = geometry.groups.filter(g => g.materialIndex === slot);
            const indices: number[] = [];
            for (const group of groups) for (let i = group.start; i < group.start + group.count; i++) {
              indices.push(geometry.index ? geometry.index.getX(i) : i);
            }
            geometry.setIndex(indices);
            geometry.clearGroups();
          }
          const foliage = material.alphaTest > 0 || /foliage|leaf|needle/i.test(material.name);
          result.push({ geometry, material, foliage });
        }
      });
      return result;
    });
    models.set(key, promise);
    promise.catch(() => models.delete(key));
  }
  return promise;
}

function loadTexture(key: 'grass' | 'fern'): Promise<T.Texture> {
  let promise = textures.get(key);
  if (!promise) {
    promise = new T.TextureLoader().loadAsync(source(key)).then(texture => {
      texture.colorSpace = T.SRGBColorSpace;
      texture.anisotropy = 4;
      return texture;
    });
    textures.set(key, promise);
    promise.catch(() => textures.delete(key));
  }
  return promise;
}

function random(seed: number) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/** Instanced model trees and meadow plants. One instance can own an entire
 * region and be disposed without invalidating the shared source models.
 */
export class Vegetation {
  readonly group = new T.Group();
  readonly loadedAssets: string[] = [];
  private readonly rand: () => number;
  private readonly trees = new Map<ModelKey, Placement[]>();
  private readonly grasses: MeadowPlacement[] = [];
  private readonly ferns: MeadowPlacement[] = [];
  private readonly flowers: MeadowPlacement[] = [];
  private readonly wind = { value: 0 };
  private readonly windStrength = { value: .16 };
  private readonly ownedGeometries = new Set<T.BufferGeometry>();
  private readonly ownedMaterials = new Set<T.Material>();
  private readonly treeRoot = new T.Group();
  private readonly meadowRoot = new T.Group();
  private disposed = false;
  private loading?: Promise<void>;
  private detailedTrees = 0;

  constructor(seed = 217) {
    this.rand = random(seed);
    this.group.name = 'Detailed woodland and meadow vegetation';
    this.group.add(this.treeRoot, this.meadowRoot);
  }

  addTree(x: number, y: number, z: number, scale = 1, type: TreeKind = 'oak') {
    const detailed = type === 'oak-detailed' || (type !== 'pine' && scale >= 1 && Math.hypot(x, z) < 45 && this.detailedTrees < 8);
    const key: ModelKey = type === 'pine' ? 'pine' : detailed ? 'oakDetailed' : 'oak';
    if (key === 'oakDetailed') this.detailedTrees++;
    if (!this.trees.has(key)) this.trees.set(key, []);
    const width = type === 'birch' ? .65 : 1;
    this.trees.get(key)!.push({
      position: new T.Vector3(x, y, z),
      rotation: this.rand() * Math.PI * 2,
      scale: new T.Vector3(scale * width * (.9 + this.rand() * .2), scale * (.94 + this.rand() * .12), scale * width),
      color: new T.Color().setHSL(.24 + this.rand() * .035, .13 + this.rand() * .09, .67 + this.rand() * .09),
    });
    return this;
  }

  /** density is the number of grass tufts, not a per-square-metre multiplier. */
  addMeadow(x: number, y: number, z: number, radius = 3, density = 35) {
    for (let i = 0; i < density; i++) {
      const theta = this.rand() * Math.PI * 2, r = Math.sqrt(this.rand()) * radius;
      const p = {
        position: new T.Vector3(x + Math.cos(theta) * r, y, z + Math.sin(theta) * r),
        scale: .45 + this.rand() * .65,
        rotation: this.rand() * Math.PI * 2,
        color: new T.Color().setHSL(.19 + this.rand() * .06, .17, .68 + this.rand() * .14),
      };
      this.grasses.push(p);
      if (i % 14 === 0) this.ferns.push({ ...p, position: p.position.clone(), scale: .55 + this.rand() * .7 });
      if (i % 9 === 0) this.flowers.push({ ...p, position: p.position.clone(), scale: .55 + this.rand() * .6 });
    }
    return this;
  }

  addFlowerPatch(x: number, y: number, z: number, radius = 1.4, count = 32) {
    for (let i = 0; i < count; i++) {
      const theta = this.rand() * Math.PI * 2, r = Math.sqrt(this.rand()) * radius;
      this.flowers.push({
        position: new T.Vector3(x + Math.cos(theta) * r, y, z + Math.sin(theta) * r),
        scale: .65 + this.rand() * .7,
        rotation: this.rand() * Math.PI * 2,
        color: new T.Color().setHSL(i % 3 === 0 ? .075 : i % 3 === 1 ? .87 : .13, .2, .85 + this.rand() * .1),
      });
    }
    return this;
  }

  /** Placement is deterministic. GPU batches are built by loadAssets(). */
  finalize() { return this; }

  async loadAssets(): Promise<void> {
    if (this.disposed) return;
    if (this.loading) return this.loading;
    this.loading = this.build();
    return this.loading;
  }

  private async build() {
    await Promise.all([...this.trees].map(async ([key, placements]) => {
      const parts = await loadModel(key);
      if (this.disposed) return;
      for (const part of parts) {
        const geometry = part.geometry.clone();
        const material = part.material.clone();
        material.roughness = 1;
        material.envMapIntensity = .6;
        if (part.foliage) {
          material.side = T.DoubleSide;
          material.alphaTest = .4;
          material.transparent = false;
          material.alphaToCoverage = true;
          material.emissive.set(0x243514);
          material.emissiveIntensity = .045;
          this.animateMaterial(material, .025);
        }
        this.ownedGeometries.add(geometry);
        this.ownedMaterials.add(material);
        const instances = new T.InstancedMesh(geometry, material, placements.length);
        const dummy = new T.Object3D();
        placements.forEach((placement, i) => {
          dummy.position.copy(placement.position);
          dummy.rotation.set(0, placement.rotation, 0);
          dummy.scale.copy(placement.scale);
          dummy.updateMatrix();
          instances.setMatrixAt(i, dummy.matrix);
          instances.setColorAt(i, part.foliage ? placement.color : new T.Color(0xe6ddca));
        });
        instances.instanceMatrix.needsUpdate = true;
        if (instances.instanceColor) instances.instanceColor.needsUpdate = true;
        instances.name = `${key} ${part.foliage ? 'leaf sprays' : 'branching trunks'}`;
        instances.castShadow = instances.receiveShadow = true;
        if (part.foliage) this.cutoutShadow(instances, material);
        instances.computeBoundingBox(); instances.computeBoundingSphere();
        this.treeRoot.add(instances);
      }
      this.loadedAssets.push(key);
    }));
    if (this.disposed) return;
    const [grassTexture, fernTexture] = await Promise.all([loadTexture('grass'), loadTexture('fern')]);
    if (this.disposed) return;
    this.plantBatch(this.grassGeometry(), grassTexture, this.grasses, 'Meadow grass clumps', .07);
    this.plantBatch(this.fernGeometry(), fernTexture, this.ferns, 'Woodland fern fronds', .035);
    if (this.flowers.length) {
      const geometry = this.flowerGeometry();
      const material = new T.MeshStandardMaterial({ vertexColors: true, roughness: .92, side: T.DoubleSide });
      this.instances(geometry, material, this.flowers, 'Meadow daisies and wildflowers');
    }
    this.partitionLargeBatches();
    this.loadedAssets.push('meadow');
  }

  /** Keep instance bounds local, so looking at one town does not draw every tree in the world. */
  private partitionLargeBatches(){
    const matrix=new T.Matrix4(),color=new T.Color();
    for(const root of [this.treeRoot,this.meadowRoot])for(const object of [...root.children]){
      if(!(object instanceof T.InstancedMesh)||!object.boundingSphere||object.boundingSphere.radius<85)continue;
      const cells=new Map<string,number[]>();
      for(let i=0;i<object.count;i++){object.getMatrixAt(i,matrix);const e=matrix.elements,key=`${Math.floor(e[12]/80)},${Math.floor(e[14]/80)}`;if(!cells.has(key))cells.set(key,[]);cells.get(key)!.push(i);}
      if(cells.size<2)continue;
      for(const [key,indices] of cells){
        const mesh=new T.InstancedMesh(object.geometry,object.material,indices.length);
        mesh.name=`${object.name} · cell ${key}`;mesh.castShadow=object.castShadow;mesh.receiveShadow=object.receiveShadow;
        mesh.customDepthMaterial=object.customDepthMaterial;mesh.customDistanceMaterial=object.customDistanceMaterial;
        indices.forEach((source,i)=>{object.getMatrixAt(source,matrix);mesh.setMatrixAt(i,matrix);if(object.instanceColor){object.getColorAt(source,color);mesh.setColorAt(i,color);}});
        mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;mesh.computeBoundingBox();mesh.computeBoundingSphere();root.add(mesh);
      }
      object.removeFromParent();object.dispose();
    }
  }

  private instances(geometry: T.BufferGeometry, material: T.MeshStandardMaterial, placements: MeadowPlacement[], name: string) {
    this.ownedGeometries.add(geometry); this.ownedMaterials.add(material);
    const mesh = new T.InstancedMesh(geometry, material, placements.length);
    const dummy = new T.Object3D();
    placements.forEach((placement, i) => {
      dummy.position.copy(placement.position);
      dummy.rotation.set(0, placement.rotation, 0);
      dummy.scale.setScalar(placement.scale);
      dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix); mesh.setColorAt(i, placement.color);
    });
    mesh.name = name;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.computeBoundingBox(); mesh.computeBoundingSphere();
    this.meadowRoot.add(mesh);
    return mesh;
  }

  private plantBatch(geometry: T.BufferGeometry, texture: T.Texture, placements: MeadowPlacement[], name: string, wind: number) {
    if (!placements.length) { geometry.dispose(); return; }
    const material = new T.MeshStandardMaterial({
      map: texture, alphaTest: .45, alphaToCoverage: true, side: T.DoubleSide,
      roughness: 1, emissive: 0x182009, emissiveIntensity: .04,
    });
    this.animateMaterial(material, wind);
    const mesh = this.instances(geometry, material, placements, name);
    this.cutoutShadow(mesh, material);
  }

  private cutoutShadow(mesh: T.InstancedMesh, material: T.MeshStandardMaterial) {
    const depth = new T.MeshDepthMaterial({ map: material.map, alphaTest: material.alphaTest,
      depthPacking: T.RGBADepthPacking, side: T.DoubleSide });
    const distance = new T.MeshDistanceMaterial({ map: material.map, alphaTest: material.alphaTest, side: T.DoubleSide });
    mesh.customDepthMaterial = depth; mesh.customDistanceMaterial = distance;
    this.ownedMaterials.add(depth); this.ownedMaterials.add(distance);
  }

  private animateMaterial(material: T.MeshStandardMaterial, strength: number) {
    material.onBeforeCompile = shader => {
      shader.uniforms.woodlandTime = this.wind;
      shader.uniforms.woodlandStrength = this.windStrength;
      shader.vertexShader = 'uniform float woodlandTime; uniform float woodlandStrength;\n' + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          float phase = instanceMatrix[3].x * .31 + instanceMatrix[3].z * .23;
        #else
          float phase = 0.;
        #endif
        float sway = sin(woodlandTime * 1.3 + phase + position.y * .8);
        transformed.x += sway * ${strength.toFixed(3)} * woodlandStrength * max(0., position.y);
        transformed.z += cos(woodlandTime * .9 + phase) * ${(.45 * strength).toFixed(3)} * woodlandStrength * max(0., position.y);
      `);
    };
    material.customProgramCacheKey = () => `woodland-wind-${strength}`;
  }

  private grassGeometry() {
    const parts: T.BufferGeometry[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new T.PlaneGeometry(.85, .78, 1, 2);
      g.translate(0, .39, 0);
      const p = g.attributes.position;
      for (let j = 0; j < p.count; j++) p.setZ(j, p.getZ(j) + p.getY(j) ** 2 * .13);
      g.rotateY(i * Math.PI / 3); g.computeVertexNormals(); parts.push(g);
    }
    const result = mergeGeometries(parts)!;
    parts.forEach(g => g.dispose());
    return result;
  }

  private fernGeometry() {
    const parts: T.BufferGeometry[] = [];
    for (let i = 0; i < 6; i++) {
      const g = new T.PlaneGeometry(.46, 1, 1, 3);
      g.translate(0, .5, 0);
      const p = g.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const height = p.getY(j);
        p.setZ(j, height ** 1.3 * .8);
        p.setY(j, Math.sin(height * 1.7) * .68);
      }
      g.rotateY(i * Math.PI / 3); g.computeVertexNormals(); parts.push(g);
    }
    const result = mergeGeometries(parts)!;
    parts.forEach(g => g.dispose()); return result;
  }

  private flowerGeometry() {
    const parts: T.BufferGeometry[] = [];
    const colored = (geometry: T.BufferGeometry, color: number) => {
      const c = new T.Color(color), values = new Float32Array(geometry.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
      geometry.setAttribute('color', new T.BufferAttribute(values, 3));
      parts.push(geometry);
    };
    const stem = new T.CylinderGeometry(.012, .016, .62, 3, 1);
    stem.translate(0, .31, 0); colored(stem, 0x54702c);
    for (let i = 0; i < 5; i++) {
      const petal = new T.CircleGeometry(.105, 5);
      petal.scale(.6, 1, 1); petal.rotateX(-Math.PI / 2 + .18);
      petal.translate(0, .64, .09); petal.rotateY(i * Math.PI * 2 / 5);
      colored(petal, 0xfffae7);
    }
    const center = new T.ConeGeometry(.052, .045, 6);
    center.translate(0, .658, 0); colored(center, 0xd4a53c);
    for (const side of [-1, 1]) {
      const leaf = new T.CircleGeometry(.14, 4);
      leaf.scale(.38, 1, 1); leaf.rotateX(-Math.PI / 3); leaf.rotateZ(side * .8);
      leaf.translate(side * .075, .3 + side * .06, 0); colored(leaf, 0x527d2b);
    }
    // Both indexed and nonindexed inputs occur among Three primitives.
    const nonindexed = parts.map(g => g.index ? g.toNonIndexed() : g);
    const result = mergeGeometries(nonindexed)!;
    parts.forEach(g => g.dispose()); nonindexed.forEach(g => g.dispose());
    return result;
  }

  update(time: number, wind = .7) {
    this.wind.value = time;
    this.windStrength.value = wind;
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.group.removeFromParent();
    this.group.traverse(object => { if (object instanceof T.InstancedMesh) object.dispose(); });
    this.treeRoot.clear(); this.meadowRoot.clear();
    this.group.clear();
    this.ownedGeometries.forEach(geometry => geometry.dispose());
    this.ownedMaterials.forEach(material => material.dispose());
    this.ownedGeometries.clear(); this.ownedMaterials.clear();
  }
}

export function createVegetation(seed = 217) { return new Vegetation(seed); }
