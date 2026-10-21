import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createMaterials, seeded, radialTexture } from './materials';
import { CourtyardLife } from './mole-life';
import { Vegetation } from './vegetation';

export type Weather = 'clear' | 'mist' | 'rain' | 'snow';
export type Collision = { x: number; z: number; w: number; d: number };
export const destinations: {name: string; description: string; position: [number,number,number]; target: [number,number,number]; walk: [number,number]}[] = [
  { name: '城堡前庭', description: '红瓦、金色钟面，还有熟悉的摩尔身影。', position: [17, 13, 38], target: [0, 7, -15], walk: [0, 13] },
  { name: '摩尔城堡', description: '沿着中央步道，走近红色尖塔与王冠大门。', position: [23, 12, -6], target: [0, 9, -29], walk: [0, -13] },
  { name: '花园步道', description: '修剪整齐的绿篱之间，拉姆正轻轻浮动。', position: [28, 9, 17], target: [11, 1.5, 2], walk: [15, 8] },
  { name: '石桥入口', description: '跨过溪水，前庭与城堡在眼前展开。', position: [-16, 8, 39], target: [0, 4, 3], walk: [0, 27] },
];

export function groundHeight(x: number, z: number) {
  // The walkable courtyard stays level; the surrounding terrain rises into hills.
  const outside = Math.max(0, Math.max(Math.abs(x) - 34, Math.abs(z) - 42));
  const distant = Math.max(0, Math.max(Math.abs(x) - 45, Math.abs(z) - 55));
  return -.08 + Math.sin(x * .11) * Math.cos(z * .13) * Math.min(.12, outside * .03) + Math.min(5, outside * .14)
    + Math.sin(x * .065 + 1) * Math.cos(z * .07) * Math.min(9, distant * .23);
}

export class EstateWorld {
  readonly group = new T.Group();
  readonly materials = createMaterials();
  readonly collisions: Collision[] = [];
  readonly lamps: T.PointLight[] = [];
  readonly staticRoot = new T.Group();
  readonly assetRoot = new T.Group();
  readonly fireflies: T.Points;
  readonly rain: T.LineSegments;
  readonly snow: T.Points;
  readonly smoke: T.Points;
  readonly fountainDrops: T.Points;
  readonly water: T.Mesh<T.PlaneGeometry, T.ShaderMaterial>;
  readonly flags: T.Mesh[] = [];
  readonly mills: T.Group[] = [];
  readonly birds: T.Group[] = [];
  readonly externalAssets: string[] = [];
  readonly life = new CourtyardLife();
  readonly vegetation = new Vegetation(217);
  courtyardVisible = true;
  private rand = seeded(217);
  private fireflySeeds: number[] = [];
  private leafParticles: T.Points;
  private shadowed = new Set<T.Material>();
  private foliageMaterial: T.Material;
  private lanternSprites: T.Sprite[] = [];
  private flowerMaterials = [0xd89b88,0xead5ac,0xc28ca1].map(color=>new T.MeshStandardMaterial({color,roughness:.9}));
  private batch = new Map<T.Material, T.BufferGeometry[]>();
  private replacements = new Map<string, T.Group>();

  constructor() {
    this.group.add(this.staticRoot, this.assetRoot, this.vegetation.group);
    this.foliageMaterial = this.materials.foliage[0];
    this.terrain(); this.courtyard(); this.gardens(); this.nature(); this.details(); this.flushBatch();
    this.group.add(this.life.group);
    this.water = this.createWater(); this.group.add(this.water);
    this.fireflies = this.particles(190, new T.PointsMaterial({ map: radialTexture(), color: 0xe1e79a, size: .22, transparent: true, opacity: .8, blending: T.AdditiveBlending, depthWrite: false }), 55, 5, 5);
    for (let i = 0; i < 190; i++) this.fireflySeeds.push(this.rand() * 100);
    this.rain = this.createRain(); this.group.add(this.rain);
    this.snow = this.particles(1800, new T.PointsMaterial({ map: radialTexture(), color: 0xe7eeee, size: .12, transparent: true, opacity: .7, depthWrite: false }), 110, 55, -3);
    this.smoke = this.particles(90, new T.PointsMaterial({ map: radialTexture(), color: 0x969b8b, size: 2.7, transparent: true, opacity: .09, depthWrite: false }), 3, 10, 0);
    this.smoke.visible=false;
    const smokePos = this.smoke.geometry.attributes.position;
    for (let i = 0; i < smokePos.count; i++) { smokePos.setXYZ(i, 18 + this.rand() * 2, 8 + this.rand() * 10, -4 + this.rand() * 2); }
    this.fountainDrops = this.particles(240, new T.PointsMaterial({ color: 0xc8ded7, size: .065, transparent: true, opacity: .75, depthWrite: false }), 1, 1, 0);
    this.leafParticles = this.particles(90, new T.PointsMaterial({ color: 0xc4a75c, size: .09, transparent: true, opacity: .65 }), 80, 20, 0);
    this.fireflies.renderOrder = 3;
  }

  private mesh(geo: T.BufferGeometry, mat: T.Material, p: [number, number, number], rotation?: [number, number, number], parent?: T.Group) {
    const m = new T.Mesh(geo, mat); m.position.set(...p); if (rotation) m.rotation.set(...rotation); m.castShadow = true; m.receiveShadow = true;
    if (parent) parent.add(m); else { m.updateMatrix(); const g = geo.clone().applyMatrix4(m.matrix); if (!this.batch.has(mat)) this.batch.set(mat, []); this.batch.get(mat)!.push(g); geo.dispose(); }
    return m;
  }
  private box(w: number, h: number, d: number, mat: T.Material, p: [number, number, number], parent?: T.Group, rotation?: [number, number, number]) { return this.mesh(new T.BoxGeometry(w, h, d), mat, p, rotation, parent); }
  private cylinder(rt: number, rb: number, h: number, mat: T.Material, p: [number, number, number], sides = 14, parent?: T.Group) { return this.mesh(new T.CylinderGeometry(rt, rb, h, sides), mat, p, undefined, parent); }
  private beam(a: T.Vector3, b: T.Vector3, width: number, mat: T.Material, parent?: T.Group) { const g = new T.BoxGeometry(width, a.distanceTo(b), width); const m = new T.Mesh(g, mat); m.position.copy(a).add(b).multiplyScalar(.5); m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), b.clone().sub(a).normalize()); m.castShadow = m.receiveShadow = true; if (parent) parent.add(m); else {m.updateMatrix(); const geo = g.applyMatrix4(m.matrix); if (!this.batch.has(mat)) this.batch.set(mat, []); this.batch.get(mat)!.push(geo); } return m; }
  private flushBatch() {
    for (const [mat, geometries] of this.batch) {
      if (!geometries.length) continue;
      // All primitives have position, normal and UV attributes.
      const compatible = geometries.map(g => g.index ? g.toNonIndexed() : g);
      const merged = mergeGeometries(compatible, false);
      if (merged) {this.projectSurfaceUVs(merged,mat); const mesh = new T.Mesh(merged, mat); mesh.castShadow = mat !== this.materials.ground; mesh.receiveShadow = true; this.staticRoot.add(mesh);}
      for (const g of geometries) g.dispose();
      for (const g of compatible) g.dispose();
    }
    this.batch.clear();
  }
  private projectSurfaceUVs(geometry: T.BufferGeometry, material: T.Material) {
    if(material!==this.materials.path && material!==this.materials.ground)return;
    const position=geometry.attributes.position;
    const uv=geometry.attributes.uv;
    const scale=material===this.materials.path ? 1/7 : 1/340;
    for(let i=0;i<position.count;i++)uv.setXY(i,position.getX(i)*scale,position.getZ(i)*scale);
    uv.needsUpdate=true;
  }
  private collide(x: number, z: number, w: number, d: number) { this.collisions.push({ x, z, w, d }); }

  private terrain() {
    const geo = new T.PlaneGeometry(340, 340, 110, 110); geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position;
    const colors:number[]=[];const color=new T.Color();
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i); p.setY(i, groundHeight(x, z));
      const patch=(Math.sin(x*.075+Math.sin(z*.1))*Math.cos(z*.06)+1)*.5;
      color.setHex(0x718852).lerp(new T.Color(0xb1ae73),patch*.42);colors.push(color.r,color.g,color.b);
    }
    geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));const terrainMaterial=this.materials.ground.clone();terrainMaterial.vertexColors=true;
    geo.computeVertexNormals(); const ground = new T.Mesh(geo, terrainMaterial); ground.receiveShadow = true; this.staticRoot.add(ground);
    const mountainMat = new T.MeshStandardMaterial({color: 0x425b51, roughness: 1});
    // Smooth overlapping ridgelines replace the conspicuous polygon boulders.
    for (let i = 0; i < 18; i++) {
      const theta = i / 18 * Math.PI * 2; const radius = 174 + this.rand() * 16;
      const h = 12 + this.rand() * 22; const g = new T.SphereGeometry(1,24,16); g.scale(37 + this.rand() * 23,h,35 + this.rand() * 25);
      this.mesh(g, mountainMat, [Math.cos(theta) * radius, -5, Math.sin(theta) * radius]);
    }
  }

  private courtyard() {
    const { path, lightStone, stone, gold } = this.materials;
    this.cylinder(10.8, 10.8, .16, path, [0, 0, 0], 64);
    this.box(6, .1, 75, path, [0, .04, -1]); this.box(51, .1, 4.5, path, [0, .04, -.3]);
    this.box(30, .08, 3, path, [-10, .03, 11], undefined, [0, -.25, 0]);
    const rim = new T.TorusGeometry(9.8, .12, 5, 90); this.mesh(rim, lightStone, [0, .13, 0], [Math.PI / 2, 0, 0]);
    const fountain = new T.Group();
    this.cylinder(3.4, 3.6, .18, lightStone, [0, .17, 0], 40, fountain);
    this.mesh(new T.CylinderGeometry(3,3.25,.42,40,1,true),stone,[0,.4,0],undefined,fountain);
    this.cylinder(3.2,3.2,.1,stone,[0,.24,0],40,fountain);
    this.mesh(new T.TorusGeometry(3.1, .15, 6, 60), lightStone, [0, .65, 0], [Math.PI / 2, 0, 0], fountain);
    this.cylinder(.43, .68, 2.2, stone, [0, 1.5, 0], 14, fountain);
    this.cylinder(1.45, .25, .45, lightStone, [0, 2.6, 0], 30, fountain);
    this.mesh(new T.TorusGeometry(1.45, .1, 6, 40), lightStone, [0, 2.83, 0], [Math.PI / 2, 0, 0], fountain);
    this.cylinder(.16, .27, .75, stone, [0, 3, 0], 12, fountain);
    this.mesh(new T.SphereGeometry(.23, 12, 8), gold, [0, 3.5, 0], undefined, fountain);
    fountain.name = 'fountain'; this.staticRoot.add(fountain); this.replacements.set('fountain', fountain); this.collide(0, 0, 6.7, 6.7);
    const fountainWater=new T.MeshPhysicalMaterial({color:0x397f79,roughness:.13,metalness:.18,transparent:true,opacity:.88,clearcoat:1,clearcoatRoughness:.1});
    const basin = new T.Mesh(new T.CircleGeometry(2.95, 48),fountainWater); basin.rotation.x = -Math.PI / 2; basin.position.y = .59; fountain.add(basin);
    const upperWater=new T.Mesh(new T.CircleGeometry(1.25,32),fountainWater);upperWater.rotation.x=-Math.PI/2;upperWater.position.y=2.84;fountain.add(upperWater);
    const streamMaterial=new T.MeshPhysicalMaterial({color:0x8bc9cb,roughness:.08,transparent:true,opacity:.4,metalness:.08});
    for(let i=0;i<12;i++){
      const angle=i/12*Math.PI*2,points:T.Vector3[]=[];
      for(let j=0;j<=12;j++){const u=j/12,r=.2+u*2.05;points.push(new T.Vector3(Math.cos(angle)*r,2.97+u*1.2-u*u*3.58,Math.sin(angle)*r));}
      this.mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),16,.022,4,false),streamMaterial,[0,0,0],undefined,fountain);
    }
    for (let i = 0; i < 40; i++) {const t = i / 40 * Math.PI * 2; this.box(.28, .12, .35, lightStone, [Math.sin(t) * 10.5, .12, Math.cos(t) * 10.5], undefined, [0, t, 0]);}
    for (const x of [-1, 1]) for (const z of [-1, 1]) {this.flowerBed(x * 8.5, z * 8.5);}
  }

  private archedWindow(x: number, y: number, z: number, parent: T.Group, width = .7, height = 1.4) {
    const {darkWood, lightStone, window, iron} = this.materials;
    this.box(width + .25, height + .25, .18, lightStone, [x, y, z], parent);
    this.box(width, height, .2, darkWood, [x, y, z + .04], parent);
    this.box(width - .12, height - .12, .08, window, [x, y, z + .16], parent);
    this.box(.045, height, .09, iron, [x, y, z + .23], parent);
    this.box(width, .05, .09, iron, [x, y, z + .23], parent);
    this.box(width + .4, .12, .42, lightStone, [x, y - height / 2 - .12, z + .14], parent);
  }

  private castle() {
    const {stone, lightStone, roof, darkWood, gold} = this.materials;
    const castle = new T.Group(); castle.position.set(0, 0, -30); this.staticRoot.add(castle); this.replacements.set('castle', castle);
    this.box(22, 8, 9, stone, [0, 4, 0], castle);
    this.box(22.4, .35, 9.4, lightStone, [0, .3, 0], castle);
    this.box(22.4, .35, 9.4, lightStone, [0, 7.9, 0], castle);
    for (let x = -10; x <= 10; x += 2) {this.box(1.1, 1.2, 1, stone, [x, 8.55, 4.15], castle); this.box(1.1, 1.2, 1, stone, [x, 8.55, -4.15], castle);}
    for (const x of [-10.5, 10.5]) {
      this.cylinder(2.6, 2.9, 12, stone, [x, 6, 1], 20, castle);
      for (const y of [1.5, 8.5, 11.7]) this.cylinder(2.78, 2.78, .3, lightStone, [x, y, 1], 20, castle);
      this.cylinder(.05, 3.4, 6.1, roof, [x, 15, 1], 20, castle);
      this.cylinder(.08, .08, 1.8, gold, [x, 18.8, 1], 8, castle);
      this.flag(x, 18.4, 1, castle);
      this.archedWindow(x, 8.8, 3.55, castle, .65, 1.7); this.archedWindow(x, 5.5, 3.55, castle, .55, 1.3);
    }
    this.box(8.5, 5.5, 7, stone, [0, 10.4, -1.5], castle);
    this.gableRoof(9.6, 8.4, 4.5, 13.1, castle, 0, -1.5);
    this.box(3.8, 5.1, .4, darkWood, [0, 2.55, 4.72], castle);
    for (let i = 0; i < 14; i++) {
      const theta = i / 13 * Math.PI; const x = Math.cos(theta) * 2.2, y = 3.5 + Math.sin(theta) * 2.2;
      this.box(.5, .63, .9, lightStone, [x, y, 4.8], castle, [0, 0, theta - Math.PI / 2]);
    }
    for (const x of [-2.2, 2.2]) this.box(.5, 3.7, .85, lightStone, [x, 1.85, 4.8], castle);
    this.box(.1, 4.5, .2, gold, [0, 2.2, 5], castle);
    for (const x of [-7, -4.8, 4.8, 7]) this.archedWindow(x, 5.2, 4.6, castle, .8, 1.6);
    for (const x of [-2.3, 0, 2.3]) this.archedWindow(x, 10.8, 2.1, castle, .65, 1.8);
    // Courtyard walls and their buttresses frame the manor without closing the walking route.
    for (const x of [-22, 22]) {
      this.box(1.1, 3.2, 22, stone, [x, 1.6, -27]); this.box(1.4, .3, 22.5, lightStone, [x, 3.2, -27]);
      for (let z = -36; z < -15; z += 2) this.box(1.4, .7, .9, stone, [x, 3.7, z]);
      this.collide(x, -27, 1.5, 22);
    }
    this.collide(0, -30, 27, 11);
    for (const x of [-6, 6]) this.lantern(x, 2.8, -24, true);
    for (let i = 0; i < 4; i++) this.box(6.5, .15, 1, lightStone, [0, .06 + i * .08, -23 + i * .8]);
  }

  private gableRoof(w: number, d: number, h: number, y: number, parent: T.Group, x = 0, z = 0) {
    const shape = new T.Shape(); shape.moveTo(-w / 2, 0); shape.lineTo(0, h); shape.lineTo(w / 2, 0); shape.closePath();
    const geometry = new T.ExtrudeGeometry(shape, {depth: d, bevelEnabled: false}); geometry.translate(x, y, z - d / 2);
    this.mesh(geometry, this.materials.roof, [0, 0, 0], undefined, parent);
    const V = T.Vector3;
    for (const rz of [z - d / 2 - .03, z + d / 2 + .03]) {
      this.beam(new V(x - w / 2, y, rz), new V(x, y + h, rz), .18, this.materials.darkWood, parent);
      this.beam(new V(x + w / 2, y, rz), new V(x, y + h, rz), .18, this.materials.darkWood, parent);
    }
    this.box(.25, .23, d + .3, this.materials.darkWood, [x, y + h, z], parent);
  }

  private house(x: number, z: number, w: number, d: number, h: number, rotation: number, id?: string) {
    const {stone, plaster, darkWood, wood, roof, lightStone} = this.materials;
    const g = new T.Group(); g.position.set(x, 0, z); g.rotation.y = rotation; this.staticRoot.add(g); if (id) this.replacements.set(id, g);
    this.box(w, 1.2, d, stone, [0, .6, 0], g); this.box(w, h - 1.2, d, plaster, [0, 1.2 + (h - 1.2) / 2, 0], g);
    this.gableRoof(w + 1.1, d + 1, h * .57, h, g);
    for (const bx of [-w / 2, 0, w / 2]) {this.box(.2, h, d + .1, darkWood, [bx, h / 2, 0], g);}
    for (const by of [1.15, h * .52, h - .1]) this.box(w + .1, .2, d + .12, darkWood, [0, by, 0], g);
    const V = T.Vector3;
    for (const bx of [-w / 2, 0]) this.beam(new V(bx, h * .53, d / 2 + .08), new V(bx + w / 2, h - .15, d / 2 + .08), .13, darkWood, g);
    this.box(1.35, 2.1, .18, wood, [0, 1.05, d / 2 + .06], g);
    this.box(1.65, .14, .4, lightStone, [0, 2.14, d / 2 + .07], g);
    for (const bx of [-w * .3, w * .3]) {this.archedWindow(bx, h * .72, d / 2 + .06, g, .75, 1.1); if (w > 6) this.archedWindow(bx, 1.85, d / 2 + .06, g, .7, 1);}
    this.box(.8, h * .7, .8, stone, [w * .3, h + .4, -.5], g);
    this.box(1, .2, 1, lightStone, [w * .3, h * 1.35 + .5, -.5], g);
    this.collide(x, z, Math.abs(Math.cos(rotation)) * w + Math.abs(Math.sin(rotation)) * d, Math.abs(Math.cos(rotation)) * d + Math.abs(Math.sin(rotation)) * w);
    return g;
  }

  private village() {
    const tavern = this.house(18, -3, 8, 7, 5.7, -.18, 'tavern');
    this.box(9, .15, 2.5, this.materials.roof, [0, 2.8, 4.5], tavern, [-.15, 0, 0]);
    for (const x of [-3.8, 3.8]) this.box(.15, 2.9, .15, this.materials.darkWood, [x, 1.45, 5.2], tavern);
    this.box(1.2, .8, .12, this.materials.wood, [-4.6, 3.7, 3.7], tavern, [0, 0, -.06]);
    this.box(1.3, .09, .12, this.materials.darkWood, [-4.4, 4.3, 3.7], tavern);
    this.lantern(14.2, 2.7, 1.8, true);
    this.house(-18, -5, 7, 7, 5.2, .12, 'cottage');
    this.house(-20, 12, 6.2, 5.8, 4.2, .5);
    this.house(20, 14, 6, 5, 4.5, -.5);
    this.house(-16, -17, 5.6, 6, 4.4, .08);
    this.house(16, -17, 5, 5, 4.6, -.25);
    this.house(29, -10, 5, 5, 3.8, -.4);
    // Orchard market stalls.
    for (const x of [-11, 11]) {
      const z = 6;
      this.box(3.6, .15, 1.7, this.materials.wood, [x, 1.1, z]);
      for (const dx of [-1.5, 1.5]) for (const dz of [-.6, .6]) this.box(.12, 2.7, .12, this.materials.darkWood, [x + dx, 1.35, z + dz]);
      this.box(3.9, .1, 2.3, this.materials.canvas, [x, 2.75, z], undefined, [0, 0, -.07]);
      for (let i = 0; i < 15; i++) this.mesh(new T.SphereGeometry(.13, 7, 5), this.materials.foliage[4 + i % 2], [x - 1.3 + (i % 6) * .42, 1.3 + Math.floor(i / 6) * .1, z + (Math.floor(i / 6) - 1) * .35]);
      this.collide(x, z, 3.8, 2);
    }
    this.windmill(-34, -18);
  }

  private gardens() {
    const {stone,lightStone,gold,darkWood,foliage}=this.materials;
    // A spacious axial courtyard interprets the castle backdrop in 3D. The
    // arrangement is deliberately not presented as a verified old map layout.
    this.box(11,.13,17,this.materials.path,[0,.05,-15]);
    for (const x of [-16,16]) {
      this.box(1.6,.4,24,lightStone,[x,.2,-5]);
      this.box(1.4,1,24,foliage[1],[x,.85,-5]);
      this.collide(x,-5,1.6,24);
      for(const z of [-15,-7,1,7]) {
        this.box(2.1,1.7,1.8,stone,[x,.85,z]);
        this.box(2.35,.16,2.05,lightStone,[x,1.74,z]);
        this.cylinder(.32,.32,.15,gold,[x,1.91,z],16);
      }
    }
    for(const x of [-24,24]) {
      this.box(7,.25,12,lightStone,[x,.12,-1]);
      this.box(6.5,.35,11.5,this.materials.ground,[x,.36,-1]);
      for(let i=0;i<3;i++)this.flowerBed(x,-5+i*5);
    }
    // The red standards echo the castle's palette without inventing a new
    // named landmark. Their crest is a small gold crown.
    for(const x of [-8,8]) {
      const z=-17;
      this.cylinder(.06,.09,5.3,gold,[x,2.65,z],10);
      this.mesh(new T.SphereGeometry(.13,12,8),gold,[x,5.45,z]);
      const banner=new T.Group();banner.position.set(x+1.1,3.7,z);this.staticRoot.add(banner);
      const cloth=new T.MeshStandardMaterial({color:0xad433c,roughness:.88,side:T.DoubleSide});
      this.box(1.8,2.1,.06,cloth,[0,0,0],banner);
      this.box(1.8,.08,.09,gold,[0,-1,0],banner);
      this.box(.8,.16,.1,gold,[0,-.1,.06],banner);
      for(const dx of [-.3,0,.3])this.mesh(new T.ConeGeometry(.15,.38,4),gold,[dx,.16,.09],undefined,banner);
    }
    // Small garden pergolas, open to the walking path.
    for(const x of [-24,24]) {
      const z=12;
      for(const dx of [-2.5,2.5])for(const dz of [-1.5,1.5])this.box(.22,3,.22,darkWood,[x+dx,1.5,z+dz]);
      for(let i=0;i<8;i++)this.box(.18,.18,4,darkWood,[x-2.8+i*.8,3,z]);
      this.box(6,.16,.18,darkWood,[x,2.9,z-1.5]);this.box(6,.16,.18,darkWood,[x,2.9,z+1.5]);
    }
  }

  private flag(x: number, y: number, z: number, parent?: T.Group) {
    const mat = new T.MeshStandardMaterial({color: 0x596754, roughness: 1, side: T.DoubleSide});
    const geo = new T.PlaneGeometry(1.8, .85, 12, 4); geo.translate(.9, -.4, 0);
    const mesh = new T.Mesh(geo, mat); mesh.position.set(x, y, z); mesh.userData.seed = this.rand() * 10; this.flags.push(mesh); (parent ?? this.staticRoot).add(mesh);
  }

  private windmill(x: number, z: number) {
    this.cylinder(1.6, 2.5, 8, this.materials.stone, [x, 4, z], 16);
    this.cylinder(.01, 2.3, 3.5, this.materials.roof, [x, 9.6, z], 16);
    const blades = new T.Group(); blades.position.set(x, 6.7, z + 2); this.staticRoot.add(blades); this.mills.push(blades);
    for (let i = 0; i < 4; i++) {
      const g = new T.Group(); g.rotation.z = i * Math.PI / 2; blades.add(g);
      this.box(.13, 5.2, .16, this.materials.darkWood, [0, 1.7, 0], g); this.box(.8, 3, .08, this.materials.canvas, [.3, 2.7, 0], g);
      for (let j = 0; j < 7; j++) this.box(.9, .05, .11, this.materials.darkWood, [.3, 1.3 + j * .45, .06], g);
    }
    this.collide(x, z, 5, 5);
  }

  private tree(x: number, z: number, size: number, autumn = false) {
    const h = groundHeight(x, z); const {bark, foliage} = this.materials;
    this.cylinder(.12 * size, .23 * size, 2.8 * size, bark, [x, h + 1.4 * size, z], 7);
    const mat = foliage[autumn ? 4 + Math.floor(this.rand() * 2) : Math.floor(this.rand() * 4)];
    for (let i = 0; i < 11; i++) {
      const a = i * 2.4; const radius = .3 + this.rand() * 1.2;
      const dx = Math.cos(a) * size * radius, dz = Math.sin(a) * size * radius;
      const g = new T.IcosahedronGeometry(size * (.65 + this.rand() * .4), 1); g.scale(1, .85, 1);
      this.mesh(g, mat, [x + dx, h + size * (2.8 + this.rand() * 1.9), z + dz]);
    }
    if (Math.abs(x) < 42 && Math.abs(z) < 47) this.collide(x, z, .5 * size, .5 * size);
  }

  private pine(x: number, z: number, size: number) {
    const y = groundHeight(x, z); this.cylinder(.09 * size, .18 * size, size * 5, this.materials.bark, [x, y + 2.5 * size, z], 5);
    for (let i = 0; i < 4; i++) this.mesh(new T.ConeGeometry(size * (1.7 - i * .3), size * 2.6, 9), this.materials.foliage[i % 3], [x, y + size * (2 + i * .9), z]);
  }

  private nature() {
    for (let i = 0; i < 95; i++) {
      const theta = this.rand() * Math.PI * 2; const r = 46 + this.rand() * 88;
      const x = Math.sin(theta) * r, z = Math.cos(theta) * r;
      if (z > 19 && z < 31 && Math.abs(x) < 75) continue;
      this.vegetation.addTree(x, groundHeight(x,z), z, .7 + this.rand()*.55, this.rand()>.8?'pine':'oak');
    }
    for (const [x,z,s] of [[-32,2,1.1],[35,6,1],[-21,18,.75],[23,18,.7],[-29,-29,1.1],[30,-29,1.2],[-34,35,1],[34,37,.8]]) {
      this.vegetation.addTree(x,groundHeight(x,z),z,s,'oak');this.collide(x,z,.7,.7);
    }
    for(let i=0;i<65;i++){
      const x=(this.rand()-.5)*110,z=(this.rand()-.5)*100;
      const forbidden=Math.hypot(x,z)<12 || Math.abs(x)<18&&z<12&&z>-43 || Math.abs(x)<4 || Math.abs(z)<4 || z>18&&z<32;
      if(!forbidden)this.vegetation.addMeadow(x,groundHeight(x,z),z,3+this.rand()*3,65);
    }
    for(const x of [-20,20,-30,30])for(const z of [-11,10,34])this.vegetation.addFlowerPatch(x,groundHeight(x,z),z,2,25);
    this.vegetation.finalize();
    const rockMaterial = new T.MeshStandardMaterial({color:0x73796c,roughness:1,bumpMap:this.materials.bark.bumpMap,bumpScale:.12});
    for (let i = 0; i < 90; i++) { const x = (this.rand() - .5) * 140, z = 24 + (this.rand() - .5) * 10; if (Math.abs(x) < 5) continue; const geo = new T.IcosahedronGeometry(.4 + this.rand() * 1.1, 0); geo.scale(1.5, .7, 1); this.mesh(geo, rockMaterial, [x, -.1, z]); }
    for (let i = 0; i < 7; i++) {
      const bird = new T.Group(); const wingMat = new T.MeshBasicMaterial({color: 0x2e3c32, side: T.DoubleSide});
      for (const side of [-1, 1]) {const geo = new T.PlaneGeometry(.7, .17); geo.translate(side * .35, 0, 0); const wing = new T.Mesh(geo, wingMat); wing.rotation.x = Math.PI / 2; bird.add(wing);}
      bird.userData.seed = this.rand() * Math.PI * 2; this.birds.push(bird); this.group.add(bird);
    }
  }

  private flowerBed(x: number, z: number) {
    this.cylinder(1.7, 1.7, .35, this.materials.stone, [x, .17, z], 12);
    this.cylinder(1.5, 1.5, .12, this.materials.ground, [x, .4, z], 14);
    const colors = this.flowerMaterials;
    for (let i = 0; i < 28; i++) {const t = this.rand() * Math.PI * 2, r = this.rand() * 1.4; const px = x + Math.cos(t) * r, pz = z + Math.sin(t) * r; this.cylinder(.02, .02, .35, this.materials.foliage[0], [px, .6, pz], 4); this.mesh(new T.IcosahedronGeometry(.12, 0), colors[i % 3], [px, .8 + this.rand() * .2, pz]);}
    this.collide(x, z, 3.2, 3.2);
  }

  private lantern(x: number, y: number, z: number, wall = false) {
    const {iron, window, roof} = this.materials;
    if (!wall) {this.cylinder(.055, .1, y, iron, [x, y / 2, z], 8); this.cylinder(.17, .28, .2, iron, [x, .13, z], 8);}
    this.box(.35, .5, .35, window, [x, y + .2, z]); this.cylinder(0, .32, .28, roof, [x, y + .6, z], 4);
    for (const dx of [-.19, .19]) for (const dz of [-.19, .19]) this.box(.03, .56, .03, iron, [x + dx, y + .2, z + dz]);
    const light = new T.PointLight(0xffbd68, 3, 10, 2); light.position.set(x, y + .3, z); this.group.add(light); this.lamps.push(light);
    const glow = new T.Sprite(new T.SpriteMaterial({map: radialTexture(), color: 0xf3b15a, blending: T.AdditiveBlending, transparent: true, opacity: .38, depthWrite: false})); glow.position.copy(light.position); glow.scale.setScalar(1.8); this.group.add(glow); this.lanternSprites.push(glow);
  }

  private details() {
    for (const x of [-5, 5]) for (const z of [-17, 12, 31]) this.lantern(x, 2.8, z);
    // A walkable stone bridge spans the stream.
    this.box(5.8, .4, 11, this.materials.stone, [0, .18, 25]); this.box(5.3, .12, 11, this.materials.path, [0, .43, 25]);
    for (const x of [-3.05, 3.05]) {
      this.box(.5, .8, 11, this.materials.stone, [x, .85, 25]); this.box(.65, .14, 11.4, this.materials.lightStone, [x, 1.33, 25]);
      this.collide(x, 25, .65, 11.5);
      for (const z of [19.5, 25, 30.5]) this.box(.85, 1.5, .9, this.materials.lightStone, [x, .75, z]);
    }
    // Benches and barrels are built from shared geometry and merged into material batches.
    for (const [x, z, r] of [[-6, -7, .6], [6, -7, -.6], [-6, 7, -.6], [6, 7, .6]]) {
      const g = new T.Group(); g.position.set(x, 0, z); g.rotation.y = r; this.staticRoot.add(g);
      this.box(2.4, .12, .65, this.materials.wood, [0, .62, 0], g); this.box(2.4, .55, .1, this.materials.wood, [0, 1, -.3], g);
      for (const dx of [-.9, .9]) this.box(.1, .65, .5, this.materials.iron, [dx, .32, 0], g);
      this.collide(x, z, 2.5, 1);
    }
    for (let i = 0; i < 15; i++) {
      const x = 28, z = 11 + i * 1.1; this.box(.12, 1.1, .12, this.materials.darkWood, [x, .55, z]);
      if (i < 14) for (const y of [.4, .85]) this.box(.1, .08, 1.15, this.materials.wood, [x, y, z + .55]);
    }
  }

  private createWater() {
    const material = new T.ShaderMaterial({
      transparent: true, uniforms: {uTime: {value: 0}, uLight: {value: 1}, uRain: {value: 0}, uColor: {value: new T.Color(0x4a7770)}},
      vertexShader: `varying vec2 vUv; varying vec3 vPos; uniform float uTime; void main(){vUv=uv; vec3 p=position; p.z+=sin(p.x*.5+uTime*.7)*.025+cos(p.y*.8+uTime*.5)*.025;vPos=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      fragmentShader: `varying vec2 vUv;varying vec3 vPos;uniform float uTime;uniform float uLight;uniform float uRain;uniform vec3 uColor; void main(){float waves=sin(vPos.x*2.+vPos.y*3.+uTime*1.2)*sin(vPos.x*.7-vPos.y*2.-uTime*.7);float ripple=pow(abs(sin(vPos.x*6.+vPos.y*8.+uTime*5.)),20.)*uRain; vec3 color=uColor*(.65+.35*uLight)+waves*.035+ripple*.06;float sheen=pow(max(0.,sin(vPos.y*.6+vPos.x*.15+uTime*.3)),18.);color+=vec3(.26,.29,.24)*sheen*.5*uLight;gl_FragColor=vec4(color,.9);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`,
      side: T.DoubleSide,
    });
    const water = new T.Mesh(new T.PlaneGeometry(160, 8, 160, 12), material); water.rotation.x = -Math.PI / 2; water.position.set(0, -.035, 25); return water;
  }

  private particles(count: number, material: T.PointsMaterial, width: number, height: number, z: number) {
    const geo = new T.BufferGeometry(); const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { arr[i * 3] = (this.rand() - .5) * width; arr[i * 3 + 1] = this.rand() * height; arr[i * 3 + 2] = (this.rand() - .5) * width + z; }
    geo.setAttribute('position', new T.BufferAttribute(arr, 3)); const points = new T.Points(geo, material); points.frustumCulled = false; this.group.add(points); return points;
  }
  private createRain() {
    const a = new Float32Array(1700 * 6);
    for (let i = 0; i < 1700; i++) {const x = (this.rand() - .5) * 110, y = this.rand() * 50, z = (this.rand() - .5) * 110; a.set([x, y, z, x - .12, y + .65, z], i * 6);}
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(a, 3));
    const rain = new T.LineSegments(geo, new T.LineBasicMaterial({color: 0xc0d6d0, transparent: true, opacity: .3, depthWrite: false})); rain.frustumCulled = false; return rain;
  }

  async loadAssets(onProgress: (message: string) => void) {
    const loader = new GLTFLoader();
    const embedded = document.getElementById('offline-assets');
    let data: unknown;
    if (embedded) {
      data = JSON.parse(embedded.textContent || '{}');
    } else {
      const response = await fetch(new URL('assets/manifest.json', document.baseURI));
      if (!response.ok) throw new Error(`Asset manifest: HTTP ${response.status}`);
      data = await response.json();
    }
    const manifest = data as {assets: {id: string; path: string; width: number; position: [number, number, number]; rotation?: number; replace?: string; source: string}[]};
    for (const entry of manifest.assets) {
      try {
        onProgress(`正在布置${entry.id === 'castle' ? '北境古堡' : '庄园建筑'}`);
        const url = entry.path.startsWith('data:') ? entry.path : new URL(entry.path.replace(/^\/+/, ''), document.baseURI).href;
        const gltf = await loader.loadAsync(url); const model = gltf.scene;
        const bounds = new T.Box3().setFromObject(model); const size = bounds.getSize(new T.Vector3()); const center = bounds.getCenter(new T.Vector3());
        const scale = entry.width / Math.max(size.x, size.z);
        model.position.set(-center.x, -bounds.min.y, -center.z); const wrapper = new T.Group(); wrapper.add(model); wrapper.scale.setScalar(scale); wrapper.position.set(...entry.position); wrapper.rotation.y = entry.rotation ?? 0;
        model.traverse(o => { if (o instanceof T.Mesh) { o.castShadow = true; o.receiveShadow = true; } });
        this.assetRoot.add(wrapper); this.externalAssets.push(entry.id);
        const worldBounds = new T.Box3().setFromObject(wrapper); const footprint = worldBounds.getSize(new T.Vector3()); const origin = worldBounds.getCenter(new T.Vector3());
        this.collide(origin.x, origin.z, footprint.x, footprint.z);
        if (entry.replace) {const old = this.replacements.get(entry.replace); if (old) old.visible = false;}
      } catch (err) {console.warn(`Asset unavailable: ${entry.id}`, err);}
    }
    if(!this.externalAssets.includes('mole-castle'))throw new Error('The referenced Mole Manor castle model could not be loaded.');
    onProgress('正在栽种树林与草地');
    await this.vegetation.loadAssets();
    this.optimizeStaticGeometry();
  }

  private optimizeStaticGeometry() {
    this.staticRoot.updateMatrixWorld(true);
    const animated=new Set<T.Object3D>([...this.flags,...this.mills]);
    const collected=new Map<T.Material,T.BufferGeometry[]>();const remove:T.Mesh[]=[];
    this.staticRoot.traverse(o=>{
      if(!(o instanceof T.Mesh)||o instanceof T.InstancedMesh||Array.isArray(o.material))return;
      let node:T.Object3D|null=o;
      while(node&&node!==this.staticRoot){if(!node.visible||animated.has(node))return;node=node.parent;}
      const geo=o.geometry.clone().applyMatrix4(o.matrixWorld);const compatible=geo.index?geo.toNonIndexed():geo;
      if(compatible!==geo)geo.dispose();
      if(!collected.has(o.material))collected.set(o.material,[]);collected.get(o.material)!.push(compatible);remove.push(o);
    });
    for(const mesh of remove){mesh.removeFromParent();mesh.geometry.dispose();}
    for(const [material,geometries] of collected){const merged=mergeGeometries(geometries,false);if(merged){this.projectSurfaceUVs(merged,material);const mesh=new T.Mesh(merged,material);mesh.castShadow=material!==this.materials.ground;mesh.receiveShadow=true;this.staticRoot.add(mesh);}for(const geo of geometries)geo.dispose();}
  }

  setCourtyardVisible(visible: boolean) {
    this.courtyardVisible=visible;
    for(const root of [this.staticRoot,this.assetRoot,this.vegetation.group,this.life.group,this.water,this.fountainDrops,...this.birds,...this.lamps,...this.lanternSprites])root.visible=visible;
  }

  update(t: number, dt: number, weather: Weather, daylight: number) {
    this.life.update(t);
    this.vegetation.update(t,weather==='rain'?1.3:.7);
    this.water.material.uniforms.uTime.value = t; this.water.material.uniforms.uLight.value = daylight; this.water.material.uniforms.uRain.value = weather === 'rain' ? 1 : 0;
    this.materials.window.emissiveIntensity = .2 + (1 - daylight) * 1.8;
    for (const light of this.lamps) light.intensity = (.6 + (1 - daylight) * 7) * (1 + Math.sin(t * 3 + light.position.x) * .035);
    for (const sprite of this.lanternSprites) (sprite.material as T.SpriteMaterial).opacity = .1 + (1 - daylight) * .4;
    this.materials.path.roughness = T.MathUtils.damp(this.materials.path.roughness, weather === 'rain' ? .3 : .92, 1, dt); this.materials.path.metalness = weather === 'rain' ? .18 : .02;
    this.rain.visible = weather === 'rain'; this.snow.visible = weather === 'snow';
    const rainPos = this.rain.geometry.attributes.position;
    if (this.rain.visible) for (let i = 0; i < rainPos.count; i += 2) {let y = rainPos.getY(i) - dt * 22; if (y < 0) y += 50; const x = rainPos.getX(i) - dt * 1.4; rainPos.setXYZ(i, x < -55 ? x + 110 : x, y, rainPos.getZ(i)); rainPos.setXYZ(i + 1, x - .12, y + .65, rainPos.getZ(i));}
    if (this.rain.visible) rainPos.needsUpdate = true;
    const snowPos = this.snow.geometry.attributes.position;
    if (this.snow.visible) for (let i = 0; i < snowPos.count; i++) {let y = snowPos.getY(i) - dt * (1 + (i % 5) * .15); if (y < 0) y = 40; snowPos.setY(i, y); snowPos.setX(i, snowPos.getX(i) + Math.sin(t * .6 + i) * dt * .6);}
    if (this.snow.visible) snowPos.needsUpdate = true;
    const flyPos = this.fireflies.geometry.attributes.position;
    for (let i = 0; i < flyPos.count; i++) {const seed = this.fireflySeeds[i]; flyPos.setY(i, 1 + Math.sin(t * .45 + seed) * .8 + seed % 3); flyPos.setX(i, Math.sin(seed * 5) * 28 + Math.sin(t * .3 + seed) * 1.5);}
    flyPos.needsUpdate = true; (this.fireflies.material as T.PointsMaterial).opacity = .18 + (1 - daylight) * .7;
    const sp = this.smoke.geometry.attributes.position;
    for (let i = 0; i < sp.count; i++) {const v = (t * .025 + i / sp.count) % 1; sp.setXYZ(i, 19.6 + v * 5 + Math.sin(i * .7 + t * .2) * v, 8 + v * 12, -4 + Math.cos(i + t * .3) * v);}
    sp.needsUpdate = true;
    const drops = this.fountainDrops.geometry.attributes.position;
    for (let i = 0; i < drops.count; i++) {const u = (t * .8 + i / drops.count) % 1; const a = i * 2.4; const r = Math.sin(u * Math.PI / 2) * 1.9; drops.setXYZ(i, Math.cos(a) * r, 2.95 + u * 1.6 - u * u * 4, Math.sin(a) * r);}
    drops.needsUpdate = true;
    const leaf = this.leafParticles.geometry.attributes.position;
    for (let i = 0; i < leaf.count; i++) {let y = leaf.getY(i) - dt * .25; if (y < 0) y = 15; leaf.setY(i, y); leaf.setX(i, leaf.getX(i) + Math.sin(t + i) * dt * .15);}
    leaf.needsUpdate = true;
    for (const flag of this.flags) {const pos = flag.geometry.attributes.position; for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 3 - t * 2.5 + flag.userData.seed) * .15 * pos.getX(i)); pos.needsUpdate = true; flag.geometry.computeVertexNormals();}
    for (const mill of this.mills) mill.rotation.z = t * .12;
    for (let i = 0; i < this.birds.length; i++) {const b = this.birds[i]; const a = t * .06 + b.userData.seed; b.position.set(Math.cos(a) * 40, 22 + i * .6 + Math.sin(a * 3), Math.sin(a) * 35 - 12); b.rotation.y = -a; b.children.forEach((wing, j) => {wing.rotation.z = Math.sin(t * 3.5 + i) * .3 * (j === 0 ? -1 : 1);});}
  }

  canMove(x: number, z: number) {
    if (Math.abs(x) > 46 || z < -43 || z > 48) return false;
    if (z > 20 && z < 30 && Math.abs(x) > 2.7) return false;
    return !this.collisions.some(c => Math.abs(x - c.x) < c.w / 2 + .32 && Math.abs(z - c.z) < c.d / 2 + .32);
  }
  heightAt(x: number, z: number) { return z > 19.4 && z < 30.6 && Math.abs(x) < 2.8 ? .48 : groundHeight(x, z) + .12; }
}
