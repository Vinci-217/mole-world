import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createMaterials, seeded } from './materials';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Playable architectural studies. Original map measurements and layouts are unverified. */
export type RegionScene = {
  group: T.Group;
  camera: [number, number, number];
  target: [number, number, number];
  spawn: [number, number];
  bounds: number;
  collisions: { x: number; z: number; w: number; d: number }[];
  name: string;
  description: string;
  update?: (time:number,delta:number,daylight?:number,observerX?:number,observerZ?:number)=>void;
  heightAt: (x: number, z: number) => number;
  canMove?: (x:number,z:number)=>boolean;
  heroTrees?: { x: number; z: number; scale: number }[];
};
type Point = [number, number, number];
type Icon = 'dress' | 'potion' | 'sword' | 'ram' | 'heart' | 'carrot' | 'star';
const owned = new WeakMap<RegionScene, Builder>();

export function regionGroundHeight(x: number, z: number) {
  const outside = Math.max(0, Math.max(Math.abs(x), Math.abs(z)) - 46);
  return -.13 + Math.sin(x * .18) * Math.cos(z * .13) * Math.min(outside, 1.6) + outside * .14;
}

class Builder {
  group = new T.Group();
  m = createMaterials();
  collisions: RegionScene['collisions'] = [];
  heroTrees: NonNullable<RegionScene['heroTrees']> = [];
  private batches = new Map<T.Material, T.BufferGeometry[]>();
  private extraMaterials = new Set<T.Material>();
  private geometryResources = new Set<T.BufferGeometry>();
  private random = seeded(817);
  animations: ((time: number, delta: number) => void)[] = [];
  lamps:T.PointLight[]=[];
  water = new T.MeshPhysicalMaterial({color:0x3e8188,roughness:.18,metalness:.22,clearcoat:1,clearcoatRoughness:.12});
  private waterTime={value:0};
  rock=this.paint(0x748275);
  white = this.paint(0xfff1cc);
  red = this.paint(0xd95948, this.m.roof);
  teal = this.paint(0x478e8a, this.m.roof);
  blue = this.paint(0x4d87bd, this.m.roof);
  pink = this.paint(0xe49ba5);
  leaf = this.paint(0x5d963c);
  yellow = this.paint(0xf0c86b);
  mushroomCap = this.paint(0xb64c3c);
  constructor(public id: string,public sharedTerrain=false) {
    this.rock.bumpMap=this.m.plaster.bumpMap;this.rock.bumpScale=.16;
    this.group.name=`region:${id}`;this.extraMaterials.add(this.water);
    this.water.onBeforeCompile=shader=>{
      shader.uniforms.manorWaterTime=this.waterTime;
      shader.vertexShader='varying vec2 manorWaterXZ;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n manorWaterXZ=(modelMatrix*vec4(transformed,1.)).xz;');
      shader.fragmentShader='uniform float manorWaterTime;varying vec2 manorWaterXZ;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>','#include <normal_fragment_begin>\n normal=normalize(normal+vec3(sin(manorWaterXZ.x*2.3+manorWaterXZ.y*.8+manorWaterTime*1.4)*.065,cos(manorWaterXZ.y*2.7-manorWaterTime)*.04,0.));');
    };
    this.water.customProgramCacheKey=()=>'manor-ripple-water';
    this.animations.push(t=>{this.waterTime.value=t;});
  }

  paint(color: T.ColorRepresentation, source?: T.MeshStandardMaterial, roughness = .86) {
    const mat = source ? source.clone() : new T.MeshStandardMaterial();
    mat.color.set(color); mat.roughness = roughness;
    this.extraMaterials.add(mat); return mat;
  }
  add(g: T.BufferGeometry, mat: T.Material, p: Point, r: Point = [0, 0, 0], s: Point = [1, 1, 1]) {
    const matrix = new T.Matrix4().compose(new T.Vector3(...p), new T.Quaternion().setFromEuler(new T.Euler(...r)), new T.Vector3(...s));
    g.applyMatrix4(matrix);
    if (!this.batches.has(mat)) this.batches.set(mat, []);
    this.batches.get(mat)!.push(g);
  }
  box(w: number, h: number, d: number, mat: T.Material, p: Point, r?: Point) { this.add(w>5&&h>3&&d>3?new RoundedBoxGeometry(w,h,d,2,.085):new T.BoxGeometry(w, h, d), mat, p, r); }
  cyl(rt: number, rb: number, h: number, mat: T.Material, p: Point, n = 16) { this.add(new T.CylinderGeometry(rt, rb, h, n), mat, p); }
  ball(radius: number, mat: T.Material, p: Point, s: Point = [1, 1, 1]) { this.add(new T.SphereGeometry(radius, 12, 8), mat, p, undefined, s); }
  ring(radius: number, thick: number, mat: T.Material, p: Point, r: Point = [Math.PI / 2, 0, 0]) { this.add(new T.TorusGeometry(radius, thick, 6, 40), mat, p, r); }
  beam(a: Point, c: Point, width: number, mat = this.m.wood) {
    const av = new T.Vector3(...a), cv = new T.Vector3(...c), mid = av.clone().add(cv).multiplyScalar(.5);
    const geo = new T.BoxGeometry(width, av.distanceTo(cv), width);
    geo.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), cv.sub(av).normalize()));
    this.add(geo, mat, mid.toArray() as Point);
  }
  block(x: number, z: number, w: number, d: number) { this.collisions.push({ x, z, w, d }); }
  ground(color: number, snow = false) {
    if(this.sharedTerrain)return;
    const geo = new T.PlaneGeometry(240, 240, 96, 96); geo.rotateX(-Math.PI / 2);
    const positions = geo.attributes.position, colors: number[] = [], base = new T.Color(color);
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i), z = positions.getZ(i);
      positions.setY(i, regionGroundHeight(x, z));
      const c = base.clone().multiplyScalar(.91 + this.random() * .16); colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3)); geo.computeVertexNormals();
    const mat = this.m.ground.clone(); mat.vertexColors = true;
    if (snow) { mat.map = null; mat.bumpMap = null; }
    this.extraMaterials.add(mat);
    const mesh = new T.Mesh(geo, mat); mesh.receiveShadow = true; mesh.name = 'walkable terrain'; this.geometryResources.add(geo); this.group.add(mesh);
  }
  path(a: [number, number], c: [number, number], w = 6, material: T.Material = this.m.path) {
    const dx = c[0] - a[0], dz = c[1] - a[1];
    this.box(w, .1, Math.hypot(dx, dz), material, [(a[0] + c[0]) / 2, -.015, (a[1] + c[1]) / 2], [0, Math.atan2(dx, dz), 0]);
  }
  roof(x: number, z: number, w: number, d: number, base: number, rise: number, material: T.Material = this.red) {
    const shape = new T.Shape(); shape.moveTo(-w / 2, 0); shape.lineTo(0, rise); shape.lineTo(w / 2, 0); shape.closePath();
    const g = new T.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false }); g.translate(x, base, z - d / 2);
    this.add(g, material, [0, 0, 0]);
    for (const dz of [-d / 2, d / 2]) {
      this.beam([x - w / 2, base, z + dz], [x, base + rise, z + dz], .2, this.m.lightStone);
      this.beam([x + w / 2, base, z + dz], [x, base + rise, z + dz], .2, this.m.lightStone);
    }
  }
  window(x: number, y: number, z: number, w = 1.5, h = 2) {
    this.box(w + .3, h + .3, .19, this.m.darkWood, [x, y, z]);
    this.box(w, h, .23, this.m.window, [x, y, z + .03]);
    this.box(.1, h, .26, this.white, [x, y, z + .06]); this.box(w, .1, .26, this.white, [x, y, z + .06]);
  }
  door(x: number, z: number, h = 3, w = 1.9, y = 0) {
    this.box(w + .45, h + .25, .3, this.m.lightStone, [x, y + h / 2, z]);
    this.box(w, h, .35, this.m.darkWood, [x, y + h / 2, z + .06]);
    this.ball(.11, this.m.gold, [x + w * .32, y + h * .46, z + .27]);
  }
  sign(text: string, p: Point, w = 7, color = '#315d55', icon?: Icon) {
    if(p[1]<=3.5){
      p=[p[0]===0?-8:p[0],2.25,p[2]];w=Math.min(4,w*.48);
      for(const side of [-1,1]){const x=p[0]+side*w*.35;this.box(.16,2.45,.16,this.m.darkWood,[x,1.1,p[2]-.12]);this.block(x,p[2],.2,.2);}
    }
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#f7edcd'; ctx.fillRect(0, 0, 1024, 256);
    ctx.strokeStyle = color; ctx.lineWidth = 12; ctx.strokeRect(14, 14, 996, 228);
    ctx.lineWidth = 3; ctx.strokeRect(30, 30, 964, 196);
    if (icon) this.drawIcon(ctx, icon, color);
    ctx.fillStyle = color; ctx.font = `bold ${text.length > 5 ? 80 : 90}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, icon ? 600 : 512, 128, icon ? 730 : 920);
    const map = new T.CanvasTexture(canvas); map.colorSpace = T.SRGBColorSpace;
    const mat = new T.MeshStandardMaterial({ map, roughness: .9, side: T.DoubleSide }); this.extraMaterials.add(mat);
    this.box(w + .26, w * .25 + .2, .18, this.m.darkWood, [p[0], p[1], p[2] - .04]);
    this.add(new T.PlaneGeometry(w, w * .25), mat, [p[0], p[1], p[2] + .065]);
  }
  private drawIcon(ctx: CanvasRenderingContext2D, icon: Icon, color: string) {
    ctx.save(); ctx.translate(158, 128); ctx.scale(.65, .65); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 14;
    if (icon === 'dress') { ctx.beginPath(); ctx.moveTo(-35, -87); ctx.lineTo(-73, -32); ctx.lineTo(-47, -8); ctx.lineTo(-25, -29); ctx.lineTo(-66, 86); ctx.lineTo(66, 86); ctx.lineTo(25, -29); ctx.lineTo(47, -8); ctx.lineTo(73, -32); ctx.lineTo(35, -87); ctx.lineTo(18, -65); ctx.lineTo(-18, -65); ctx.closePath(); ctx.fill(); }
    else if (icon === 'potion') { ctx.fillRect(-24, -92, 48, 23); ctx.beginPath(); ctx.moveTo(-20, -70); ctx.lineTo(-20, -20); ctx.bezierCurveTo(-98, 55, -55, 94, 0, 94); ctx.bezierCurveTo(55, 94, 98, 55, 20, -20); ctx.lineTo(20, -70); ctx.closePath(); ctx.stroke(); ctx.fillStyle = '#ba73b1'; ctx.beginPath(); ctx.ellipse(0, 44, 48, 32, 0, 0, Math.PI * 2); ctx.fill(); }
    else if (icon === 'sword') { ctx.beginPath(); ctx.moveTo(-14, 36); ctx.lineTo(-14, -60); ctx.lineTo(0, -98); ctx.lineTo(14, -60); ctx.lineTo(14, 36); ctx.closePath(); ctx.fill(); ctx.fillRect(-57, 30, 114, 16); ctx.fillRect(-10, 46, 20, 55); }
    else if (icon === 'heart') { ctx.beginPath(); ctx.moveTo(0, 78); ctx.bezierCurveTo(-145, -10, -48, -112, 0, -42); ctx.bezierCurveTo(48, -112, 145, -10, 0, 78); ctx.fill(); }
    else if (icon === 'carrot') { ctx.fillStyle = '#e77f3d'; ctx.beginPath(); ctx.moveTo(-45, -42); ctx.lineTo(48, -40); ctx.lineTo(-8, 99); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#529153'; ctx.beginPath(); ctx.moveTo(0, -40); ctx.lineTo(-30, -100); ctx.moveTo(0, -40); ctx.lineTo(18, -110); ctx.moveTo(0, -40); ctx.lineTo(52, -87); ctx.stroke(); }
    else if (icon === 'ram') { ctx.beginPath(); ctx.ellipse(0, 15, 62, 67, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#f7edcd'; ctx.beginPath(); ctx.arc(-20, 0, 8, 0, Math.PI * 2); ctx.arc(20, 0, 8, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#5d963c'; ctx.beginPath(); ctx.moveTo(0, -48); ctx.quadraticCurveTo(-50, -110, -64, -72); ctx.moveTo(0, -48); ctx.quadraticCurveTo(48, -121, 63, -83); ctx.stroke(); }
    else { ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 36 : 86; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); }
    ctx.restore();
  }
  fence(a: [number, number], c: [number, number], h = 1.7, material = this.m.wood) {
    const length = Math.hypot(c[0] - a[0], c[1] - a[1]), n = Math.ceil(length / 3);
    for (let i = 0; i <= n; i++) { const t = i / n; this.box(.25, h, .25, material, [a[0] + (c[0] - a[0]) * t, h / 2, a[1] + (c[1] - a[1]) * t]); }
    for (const y of [h * .37, h * .78]) this.beam([a[0], y, a[1]], [c[0], y, c[1]], .16, material);
  }
  pond(x: number, z: number, rx: number, rz: number) {
    this.add(new T.CircleGeometry(1, 56), this.water, [x, .015, z], [-Math.PI / 2, 0, 0], [rx, rz, 1]);
    this.block(x, z, rx * 1.68, rz * 1.68);
    for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2; this.ball(.6 + i % 3 * .13, this.rock, [x + Math.cos(a) * rx, .08, z + Math.sin(a) * rz], [1.3, .55, .9]); }
  }
  lamp(x: number, z: number) {
    const light=new T.PointLight(0xffb665,0,14,2);light.position.set(x,3.9,z);this.group.add(light);this.lamps.push(light);
    this.cyl(.11, .16, 3.8, this.m.iron, [x, 1.9, z], 8);
    this.box(.7, .9, .7, this.m.window, [x, 4, z]);
    this.cyl(0, .65, .55, this.m.iron, [x, 4.7, z], 4); this.cyl(.48, .48, .15, this.m.iron, [x, 3.5, z], 4);
  }
  crate(x: number, z: number, size = 1.25) {
    this.box(size, size, size, this.m.wood, [x, size / 2, z]);
    for (const y of [.15, size - .15]) this.box(size + .1, .12, size + .1, this.m.darkWood, [x, y, z]);
  }
  ownMesh(mesh: T.Mesh) { this.geometryResources.add(mesh.geometry); this.group.add(mesh); }
  moving(name: string, pivot: Point, build: () => void) {
    const outer = this.group, batches = this.batches;
    this.group = new T.Group(); this.batches = new Map(); build(); this.flush();
    const content = this.group; content.position.set(-pivot[0], -pivot[1], -pivot[2]);
    const motion = new T.Group(); motion.name = name; motion.position.set(...pivot); motion.add(content);
    outer.add(motion); this.group = outer; this.batches = batches; return motion;
  }
  flush() {
    for (const [mat, list] of this.batches) {
      const normalized = list.map(g => g.index ? g.toNonIndexed() : g);
      const merged = mergeGeometries(normalized, false);
      if (merged) {
        if (mat instanceof T.MeshStandardMaterial && mat.map === this.m.path.map) {
          const position = merged.attributes.position, uv = merged.attributes.uv;
          for (let i = 0; i < position.count; i++) uv.setXY(i, position.getX(i) / 7, position.getZ(i) / 7);
        }
        const mesh = new T.Mesh(merged, mat); mesh.castShadow = mat !== this.water; mesh.receiveShadow = true; this.geometryResources.add(merged); this.group.add(mesh);
      }
      new Set([...list, ...normalized]).forEach(g => g.dispose());
    }
    this.batches.clear();
  }
  dispose() {
    const textures = new Set<T.Texture>(), materials = new Set<T.Material>(this.extraMaterials);
    for (const mat of Object.values(this.m)) { if (Array.isArray(mat)) mat.forEach(v => materials.add(v)); else materials.add(mat); }
    this.geometryResources.forEach(geometry => geometry.dispose()); this.geometryResources.clear();
    for (const mat of materials) { for (const value of Object.values(mat)) if (value instanceof T.Texture) textures.add(value); mat.dispose(); }
    textures.forEach(tex => tex.dispose()); this.group.clear();
  }
}

function taotao(b: Builder) {
  b.ground(0x91af71); b.path([0, 38], [0, -32], 9); b.path([-34, 0], [34, 0], 7);
  b.cyl(7.4, 7.4, .1, b.m.path, [0, 0, 0], 40); b.ring(6.5, .14, b.white, [0, .08, 0]);
  // The dress shop is a pink round boutique crowned by an oversized hat.
  b.cyl(5.9, 6.3, 7.4, b.pink, [-18, 3.7, -12], 24); b.block(-18, -12, 12, 12);
  b.cyl(7.4, 7.4, .55, b.red, [-18, 7.5, -12], 32); b.cyl(3.7, 5.5, 4, b.red, [-18, 9.7, -12], 24);
  b.cyl(3.8, 4.2, .45, b.white, [-18, 8.8, -12], 24); b.ball(1.2, b.yellow, [-14.1, 9.3, -8.8]);
  b.door(-18, -5.5); b.window(-21.5, 3.5, -6.4, 1.5, 1.4); b.window(-14.5, 3.5, -6.4, 1.5, 1.4);
  b.sign('丝尔特服装店', [-18, 5.65, -5.3], 9, '#a64a71', 'dress');
  // The pet shop has a fanciful bottle-shaped tower and a Ram sign.
  b.box(11, 7, 10, b.paint(0xa8d3cd), [18, 3.5, -14]); b.block(18, -14, 11, 10);
  b.roof(18, -14, 13, 12, 7, 4.5, b.blue); b.cyl(1.4, 2.2, 3.6, b.teal, [18, 12.1, -14]);
  b.cyl(1.75, 1.75, .7, b.yellow, [18, 14.1, -14]); b.ball(.7, b.pink, [18, 16, -14]);
  b.door(18, -8.8); b.window(14.2, 3.6, -8.8, 1.5, 1.8); b.window(21.8, 3.6, -8.8, 1.5, 1.8);
  b.sign('彩虹姐姐宠物店', [18, 5.65, -8.3], 10, '#416a93', 'ram');
  b.box(11, 6.5, 8, b.m.stone, [-21, 3.25, 14]); b.block(-21, 14, 11, 8);
  b.roof(-21, 14, 13, 10, 6.5, 3.7, b.teal); b.box(1.8, 6, 1.8, b.m.stone, [-25, 9, 13]);
  b.door(-21, 18.2); b.sign('摩尔道具店', [-21, 4.9, 18.6], 8, '#5d6e65', 'sword');
  b.box(10, 5.7, 8, b.paint(0xf4cd7a), [22, 2.85, 15]); b.block(22, 15, 10, 8);
  b.roof(22, 15, 12, 10, 5.7, 3.6, b.red); b.door(22, 19.2);
  b.sign('淘淘乐商店', [22, 4.25, 19.7], 8, '#b56433', 'star');
  for (const x of [-5.7, 5.7]) for (const z of [-21, 10, 29]) b.lamp(x, z);
  for (const [x, z] of [[-11, 5], [11, 5], [-31, -1], [31, -1]]) { b.cyl(1.2, .9, 1.15, b.m.lightStone, [x, .57, z]); for (let i = 0; i < 7; i++) b.ball(.36, i % 2 ? b.pink : b.yellow, [x + Math.cos(i) * .7, 1.5, z + Math.sin(i) * .7]); }
}

function farm(b: Builder) {
  b.ground(0x9cb16f); b.path([0, 38], [0, -26], 6); b.path([-30, 5], [30, 5], 5);
  b.box(15, 8, 11, b.red, [-20, 4, -22]); b.roof(-20, -22, 17, 13, 8, 5, b.red); b.block(-20, -22, 15, 11);
  b.box(6, 5, .3, b.m.darkWood, [-20, 2.5, -16.3]);
  for (const dx of [-2.5, 2.5]) { b.beam([-20 + dx, .4, -16.05], [-20 - dx, 4.7, -16.05], .19, b.white); }
  b.window(-20, 9.2, -15.4, 2, 1.7); b.sign('梅森小屋', [-20, 6.7, -16], 8, '#8a3b29', 'carrot');
  // Working silhouette: tapered windmill tower, gallery, four broad canvas sails.
  b.cyl(3, 4.7, 13, b.m.plaster, [20, 6.5, -23]); b.cyl(0, 4.2, 6, b.red, [20, 16, -23]); b.block(20, -23, 9, 9);
  b.cyl(5, 5, .5, b.m.wood, [20, 7, -23]); b.door(20, -18.6);
  b.sign('农场发明屋', [20, 5.1, -18.2], 7, '#715535', 'potion');
  const center: Point = [20, 11.4, -18.3]; b.cyl(.75, .75, 1, b.m.darkWood, center);
  const sails = b.moving('windmill sails', center, () => {
    for (let i = 0; i < 4; i++) {
      const a = Math.PI / 4 + i * Math.PI / 2;
      b.beam(center, [20 + Math.sin(a) * 9, 11.4 + Math.cos(a) * 9, -18.3], .3, b.m.wood);
      b.box(1.7, 5.5, .17, b.white, [20 + Math.sin(a) * 6.2, 11.4 + Math.cos(a) * 6.2, -18.2], [0, 0, -a]);
    }
  });
  b.animations.push(time => { sails.rotation.z = time * .16; });
  const soil = b.paint(0x785236), cabbage = b.paint(0x79ae4f), pumpkin = b.paint(0xe68e36);
  for (const side of [-1, 1]) for (const z of [13, -5]) {
    const x = side * 20; b.box(20, .1, 12, soil, [x, .01, z]);
    for (let row = 0; row < 4; row++) for (let col = 0; col < 7; col++) {
      const px = x - 8 + col * 2.6, pz = z - 4.2 + row * 2.8;
      b.box(.15, .13, 11.4, b.m.wood, [px - 1.2, .07, z]);
      if (side < 0) { b.ball(.6, cabbage, [px, .47, pz], [1, .7, 1]); b.ball(.35, b.leaf, [px, .85, pz]); }
      else { b.ball(.68, pumpkin, [px, .54, pz], [1, .8, 1]); b.cyl(.07, .1, .35, b.leaf, [px, 1.12, pz], 5); }
    }
  }
  b.fence([-34, -31], [-6, -31]); b.fence([7, -34], [35, -34]); b.fence([-34, 23], [-8, 23]); b.fence([8, 23], [34, 23]);
  for (let i = 0; i < 5; i++) b.crate(-33 + i * 1.5, -11, 1.3);
  b.cyl(1.4, 1.4, 2, b.m.wood, [32, 1, -12]); b.sign('开心农场', [0, 3, 18], 8, '#5a7841', 'carrot');
}

function ranch(b: Builder) {
  b.ground(0xadc77c); b.path([0, 38], [0, -28], 6); b.path([0, -4], [-27, -4], 5);
  const barn = b.paint(0xe6b363); b.box(18, 7, 13, barn, [-20, 3.5, -23]); b.roof(-20, -23, 20, 15, 7, 5.5, b.red); b.block(-20, -23, 18, 13);
  b.box(7, 5.2, .25, b.red, [-20, 2.6, -16.2]);
  b.beam([-23, .3, -16], [-17, 4.8, -16], .24, b.white); b.beam([-17, .3, -16], [-23, 4.8, -16], .24, b.white);
  b.sign('阳光牧场', [-20, 7, -15.7], 9, '#a35c2a', 'star');
  b.cyl(3.2, 3.2, 12, b.paint(0xb4bfc0, b.m.stone), [-34, 6, -24]); b.cyl(0, 3.6, 4, b.teal, [-34, 14, -24]); b.block(-34, -24, 6.5, 6.5);
  for (const a of [[8, -31, 36, -31], [36, -31, 36, 4], [8, 4, 26, 4], [-35, 7, -8, 7], [-35, 7, -35, 26], [-35, 26, -8, 26]] as number[][]) b.fence([a[0], a[1]], [a[2], a[3]], 1.8, b.white);
  b.pond(23, 21, 10, 7);
  // Distinct low-poly livestock stay inside the paddock.
  for (const [x, z, sheep] of [[14, -20, 0], [27, -13, 0], [20, -5, 1], [-22, 16, 1], [-14, 21, 1]]) {
    const coat = sheep ? b.white : b.m.plaster;
    b.ball(sheep ? 1.25 : 1.5, coat, [x, 1.8, z], [1.5, 1, .8]);
    b.ball(.72, sheep ? b.m.darkWood : b.white, [x + 1.8, 2.2, z]);
    for (const dx of [-.8, .8]) for (const dz of [-.5, .5]) b.cyl(.14, .12, 1.5, b.m.darkWood, [x + dx, .75, z + dz], 6);
    if (!sheep) { b.ball(.45, b.m.darkWood, [x - .3, 2.65, z + .7], [1, .3, 1]); b.beam([x + 1.7, 2.6, z - .45], [x + 1.6, 3.1, z - .7], .1, b.white); }
  }
  for (const [x, z] of [[-29, -9], [-25, -8], [32, -26]]) { b.cyl(1.6, 1.6, 2, b.yellow, [x, 1, z], 16); b.ring(1.6, .08, b.m.wood, [x, 1, z]); }
  b.box(5, 1, 2, b.m.wood, [12, .5, 8]); b.block(12, 8, 5, 2); b.box(4.5, .12, 1.5, b.water, [12, 1.03, 8]);
}

function giantTree(b: Builder, x: number, z: number, size: number, _dark = false) {
  // Reuse the model's own branching trunk and roots. A second primitive trunk
  // was much wider than its canopy and made the combined tree look cut down.
  b.block(x, z, size * .34, size * .34);
  b.heroTrees.push({ x, z, scale: size * .33 });
}
function mushroom(b: Builder, x: number, z: number, s: number, material = b.mushroomCap) {
  b.cyl(s * .16, s * .22, s, b.white, [x, s * .5, z], 10);
  b.ball(s * .75, material, [x, s * 1.14, z], [1, .48, 1]);
  for (let i = 0; i < 4; i++) { const a = i * 1.6; b.ball(s * .12, b.white, [x + Math.sin(a) * s * .43, s * 1.43, z + Math.cos(a) * s * .43], [1, .25, 1]); }
}
function jungle(b: Builder) {
  b.ground(0x64976c); b.path([0, 38], [0, 7], 5); b.path([0, 7], [-15, -23], 4);
  giantTree(b, -23, -24, 7.5); giantTree(b, 24, -27, 6.5); giantTree(b, -34, 14, 4.7);
  // A sinuous stream with a small timber crossing divides the berry clearings.
  b.path([9, 37], [9, 9], 5.2, b.water); b.path([9, 9], [21, -7], 5.2, b.water); b.path([21, -7], [36, -33], 5.2, b.water);
  b.block(9, 23, 5.1, 28);
  for (let i = 0; i < 8; i++) { const z = 1 - i * 4.6, x = 15 + i * 2.9; b.block(x, z, 7, 7); }
  for (let i = 0; i < 11; i++) b.box(.8, .22, 4.5, b.m.wood, [5 + i * .75, .16, 6]);
  for (const z of [3.6, 8.4]) { b.beam([4.5, 1.5, z], [13.5, 1.5, z], .18); for (const x of [4.5, 9, 13.5]) b.box(.18, 1.8, .18, b.m.wood, [x, .9, z]); }
  const berry = b.paint(0xb84775), blue = b.paint(0x5366b7);
  for (let i = 0; i < 17; i++) {
    const x = i < 9 ? -10 - (i % 3) * 6 : 18 + (i % 3) * 6, z = i < 9 ? 8 + Math.floor(i / 3) * 7 : 12 + Math.floor((i - 9) / 3) * 6;
    b.heroTrees.push({ x, z, scale: .33 });
    for (let j = 0; j < 5; j++) { const a = j * 2.4; b.ball(.33, i % 2 ? berry : blue, [x + Math.sin(a) * 1.25, 1.6 + j % 2 * .45, z + Math.cos(a) * 1.25]); }
  }
  for (const [x, z, s] of [[-6, -10, 2.3], [-9, -7, 1.4], [29, 3, 2.8], [32, 6, 1.7], [-31, 25, 2]]) mushroom(b, x, z, s);
  b.sign('浆果丛林', [-8, 3.5, 20], 8, '#47775d', 'star');
}

function mountain(b: Builder) {
  b.ground(0xe3edf1, true); b.path([0, 38], [0, -11], 7, b.paint(0xc4d8df));
  const snow = b.paint(0xf2f5f5);
  // A continuous alpine ridge replaces separate geometric peak primitives.
  if(!b.sharedTerrain){
  const range = new T.PlaneGeometry(210, 110, 130, 90); range.rotateX(-Math.PI / 2); range.translate(0, 0, -101);
  const vertices = range.attributes.position, uv = range.attributes.uv;
  const smooth = (a: number, c: number, v: number) => { const t = T.MathUtils.clamp((v - a) / (c - a), 0, 1); return t * t * (3 - 2 * t); };
  const gaussian = (x: number, z: number, px: number, pz: number, sx: number, sz: number, h: number) => h * Math.exp(-(((x - px) / sx) ** 2 + ((z - pz) / sz) ** 2));
  const ridgeNoise = (x: number, z: number) => {
    const broad = 1 - Math.abs(Math.sin(x * .113 + Math.sin(z * .067) * 1.9) * Math.cos(z * .097 + Math.sin(x * .042)));
    const medium = 1 - Math.abs(Math.sin(x * .29 + z * .17 + Math.sin(z * .11)));
    const fine = Math.sin(x * .73 + z * .52) * Math.cos(z * .61 - x * .21);
    return broad * 6.5 + medium * 2.7 + fine * .75;
  };
  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i), z = vertices.getZ(i);
    const peaks = Math.max(gaussian(x, z, -43, -88, 26, 31, 47), gaussian(x, z, 1, -109, 31, 32, 59), gaussian(x, z, 51, -90, 28, 29, 48));
    const foothill = smooth(0, 23, -z - 47), edge = (1 - smooth(81, 105, Math.abs(x))) * (1 - smooth(143, 156, -z));
    const height = foothill * edge * Math.max(0, peaks + ridgeNoise(x, z) * Math.min(1, peaks / 18) - 3);
    vertices.setY(i, regionGroundHeight(x, z) + height + .04); uv.setXY(i, x / 18, z / 18);
  }
  range.computeVertexNormals();
  const normals = range.attributes.normal, colors: number[] = [], rockColor = new T.Color(0x66717b), iceColor = new T.Color(0xe9f0f1), footColor = new T.Color(0xd5e2e7);
  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i), y = vertices.getY(i), z = vertices.getZ(i), up = Math.abs(normals.getY(i));
    const speckle = Math.sin(x * 1.13 + z * .91) * Math.sin(z * .83 - x * .43);
    const cover = T.MathUtils.clamp(smooth(20, 39, y) * .93 + (up - .65) * .6 + speckle * .1 - (1 - up) * .4, 0, 1);
    const c = rockColor.clone().lerp(iceColor, cover).multiplyScalar(.94 + speckle * .055);
    c.lerp(footColor, 1 - smooth(0, 10, -z - 47)); colors.push(c.r, c.g, c.b);
  }
  range.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  const alpine = b.paint(0xffffff); alpine.vertexColors = true; alpine.roughness = 1; alpine.bumpMap = b.m.stone.bumpMap; alpine.bumpScale = .14;
  const rangeMesh = new T.Mesh(range, alpine); rangeMesh.name = 'sculpted alpine ridge'; rangeMesh.castShadow = rangeMesh.receiveShadow = true; b.ownMesh(rangeMesh);
  }
  b.box(15, 6, 11, b.m.wood, [-22, 3, 0]); b.roof(-22, 0, 18, 14, 6, 5, b.m.darkWood); b.roof(-22, 0, 18.3, 14.3, 6.25, 5, snow); b.block(-22, 0, 16, 12);
  for (let i = 0; i < 9; i++) for (const z of [-5.65, 5.65]) b.box(15.4, .4, .45, b.m.wood, [-22, .5 + i * .6, z]);
  b.door(-22, 5.8); b.window(-27, 3.7, 5.8); b.window(-17, 3.7, 5.8);
  b.sign('摩尔拉雅山', [-22, 6.1, 7.3], 10, '#486a82', 'star');
  // Ski lift gantries, suspended chairs, and a broad powder run.
  for (const [x, z, y] of [[13, 17, 7], [17, -5, 11], [21, -26, 16]]) {
    b.beam([x - 2, 0, z], [x - 1.5, y, z], .35, b.m.iron); b.beam([x + 2, 0, z], [x + 1.5, y, z], .35, b.m.iron);
    b.box(7, .4, .6, b.red, [x, y, z]); b.block(x, z, 5, 1.2);
  }
  for (const dx of [-2.5, 2.5]) b.beam([13 + dx, 7.5, 17], [21 + dx, 16.5, -26], .085, b.m.iron);
  for (let i = 0; i < 5; i++) {
    const t = (i + .4) / 5, x = 13 + t * 8 + 2.5, z = 17 - t * 43, y = 7.5 + t * 9;
    b.beam([x, y, z], [x, y - 2, z], .1, b.m.iron); b.box(2.5, .22, 1.3, b.red, [x, y - 2, z]); b.box(2.5, 1, .15, b.blue, [x, y - 1.5, z - .5]);
  }
  b.path([2, 17], [2, -25], 9, snow);
  for (let i = 0; i < 7; i++) for (const side of [-1, 1]) { const z = 12 - i * 5.5; b.box(.1, 2.6, .1, b.m.iron, [side * 6, 1.3, z]); b.box(1.5, .8, .08, i % 2 ? b.blue : b.red, [side * 6 + .7, 2, z]); }
  for (const x of [-11, -8]) b.box(.25, .12, 5, b.red, [x, .12, 13], [0, .22, 0]);
  b.sign('滑雪场', [19, 3, 24], 6, '#426681');
}

function lake(b: Builder) {
  b.ground(0x96b5a3); b.path([0, 38], [0, 4], 6); b.path([0, 4], [-26, -14], 5);
  b.pond(17, -15, 27, 22);
  // Pier sits above the lake; collisions leave its entire walkway accessible.
  b.collisions.pop();
  for (let i = 0; i < 27; i++) b.box(5.4, .2, .75, b.m.wood, [5, .8, 9 - i * .75]);
  for (const x of [2.1, 7.9]) for (const z of [9, 2, -5, -12]) { b.cyl(.16, .22, 2, b.m.wood, [x, .65, z], 8); b.ball(.25, b.white, [x, 1.75, z]); }
  b.box(11, .25, 6, b.m.wood, [5, .85, -13]);
  // A short sloped approach connects the shore to the elevated pier.
  b.box(5.4,.18,5.3,b.m.wood,[5,.38,11.5],[Math.atan(.9/5),0,0]);
  // Lighthouse has tapered striped masonry and a golden lantern room.
  b.cyl(2.6, 4.1, 17, b.white, [-26, 8.5, -25], 24); b.cyl(3, 3.3, 3, b.red, [-26, 11, -25], 24); b.block(-26, -25, 8.5, 8.5);
  b.cyl(4, 4, .6, b.m.stone, [-26, 17.2, -25], 24); b.cyl(2.7, 2.7, 3, b.m.window, [-26, 18.8, -25], 16);
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; b.box(.14, 3.2, .14, b.m.iron, [-26 + Math.sin(a) * 2.7, 18.8, -25 + Math.cos(a) * 2.7]); }
  b.cyl(.2, 3.7, 3.2, b.red, [-26, 21.8, -25], 16); b.door(-26, -20.8, 3.5);
  b.box(13, 5.7, 9, b.paint(0xa7c9c4), [-24, 2.85, 3]); b.roof(-24, 3, 15, 11, 5.7, 4, b.blue); b.block(-24, 3, 13, 9);
  b.door(-24, 7.8, 3, 4); b.sign('神秘湖船屋', [-24, 4.35, 8.3], 9, '#446f87');
  // Moored rowboat: hull, open interior, gunwales, benches and oars.
  b.ball(2.3, b.red, [10.5, .4, -10], [.7, .37, 1.9]); b.ball(1.9, b.m.darkWood, [10.5, .7, -10], [.67, .15, 1.9]);
  for (const z of [-12, -10, -8]) b.box(2.5, .15, .55, b.m.wood, [10.5, .9, z]);
  b.beam([8.5, 1, -11], [13, 1, -8], .1); b.box(.5, .12, 1.2, b.m.wood, [13, 1, -8], [0, -.8, 0]);
  b.sign('神秘湖', [-5, 3, 20], 7, '#3e7387');
}

function academy(b: Builder) {
  b.ground(0x9fbf7b); b.path([0, 38], [0, -17], 7); b.cyl(12, 12, .1, b.m.path, [0, 0, 0], 48);
  const wall = b.paint(0xf2dfb0), foliage = b.paint(0x70a146);
  b.box(23, 8, 12, wall, [0, 4, -24]); b.block(0, -24, 23, 12); b.roof(0, -24, 27, 15, 8, 7, foliage);
  // Two curled leaf roofs and a central sprout make the academy silhouette.
  for (const x of [-17, 17]) {
    b.cyl(4.5, 5, 6.5, wall, [x, 3.25, -20], 18); b.block(x, -20, 10, 10);
    b.add(new T.SphereGeometry(6, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), foliage, [x, 6.5, -20], undefined, [1.1, 1, 1]);
    b.ball(2.4, b.leaf, [x + (x < 0 ? -2 : 2), 12.1, -20], [1.7, .32, .7]);
  }
  b.beam([0, 14, -24], [0, 19, -24], .35, b.leaf); b.ball(2.1, foliage, [-2, 18, -24], [1.5, .35, .7]); b.ball(2.1, b.leaf, [2, 19, -24], [1.5, .35, .7]);
  b.door(0, -17.7, 4, 3); for (const x of [-8, -4.5, 4.5, 8]) b.window(x, 3.6, -17.7, 1.8, 2.6);
  b.sign('拉姆学院', [0, 6.6, -17.4], 10, '#5b813d', 'ram');
  b.cyl(2.8, 3.2, .5, b.m.lightStone, [0, .25, 0]); b.ball(1.7, b.pink, [0, 2.1, 0], [1, 1.2, 1]);
  for (const x of [-.65, .65]) b.ball(.19, b.m.darkWood, [x, 2.5, 1.45]);
  b.beam([0, 3.7, 0], [0, 4.8, 0], .18, b.leaf); b.ball(.8, b.leaf, [-.6, 4.8, 0], [1.5, .3, .7]); b.block(0, 0, 6.3, 6.3);
  for (const x of [-23, 23]) { b.box(6, .25, 1.4, b.m.wood, [x, 1.1, 6]); for (const dx of [-2, 2]) b.box(.3, 1, .8, b.m.darkWood, [x + dx, .5, 6]); }
  for (const x of [-24, -15]) { b.beam([x, 0, 19], [x + .6, 5, 19], .2, b.teal); }
  b.beam([-23.4, 5, 19], [-14.4, 5, 19], .2, b.teal);
  for (const x of [-21, -17]) { for (const dx of [-.8, .8]) b.beam([x + dx, 4.9, 19], [x + dx, 1.3, 19], .06, b.m.iron); b.box(2, .15, 1, b.red, [x, 1.3, 19]); }
  for (const [x, z] of [[18, 16], [24, 21], [29, 13]]) { b.cyl(1.7, 1.7, .35, b.yellow, [x, .17, z], 20); b.ring(1.3, .12, b.white, [x, .38, z]); }
}

function fountain(b: Builder, x: number, z: number) {
  b.cyl(4.8, 5.2, .65, b.m.lightStone, [x, .32, z], 40); b.cyl(4.3, 4.3, .12, b.water, [x, .7, z], 40);
  b.cyl(.7, 1, 3, b.m.stone, [x, 1.8, z]); b.cyl(2.2, .8, .5, b.m.lightStone, [x, 3.5, z], 28); b.ball(.6, b.m.gold, [x, 4.3, z]); b.block(x, z, 10.2, 10.2);
}
function church(b: Builder) {
  b.ground(0xa5bd86); b.path([0, 38], [0, -26], 7); b.path([-28, 4], [29, 4], 6); fountain(b, 0, 5);
  const cream = b.paint(0xf2dfbb); b.box(16, 10, 17, cream, [-17, 5, -24]); b.roof(-17, -24, 18, 20, 10, 7, b.red); b.block(-17, -24, 16, 17);
  b.box(6, 20, 6, cream, [-17, 10, -12]); b.roof(-17, -12, 7.5, 7.5, 20, 6, b.red); b.block(-17, -12, 6, 6);
  b.box(.28, 4, .28, b.m.gold, [-17, 27, -12]); b.box(2.4, .3, .3, b.m.gold, [-17, 27.6, -12]);
  b.door(-17, -8.8, 4, 2.8); b.window(-17, 16, -8.8, 2, 2.5);
  b.ring(1.5, .21, b.m.lightStone, [-17, 9.5, -8.7], [0, 0, 0]); b.cyl(.7, .9, .9, b.m.gold, [-17, 16, -12], 12);
  b.sign('爱心教堂', [-17, 6.3, -8.5], 9, '#a96264', 'heart');
  b.box(17, 7, 12, b.paint(0xf0d8d1), [22, 3.5, -18]); b.roof(22, -18, 19, 14, 7, 4.5, b.red); b.block(22, -18, 17, 12);
  b.box(3.1, 4, .25, b.white, [22, 8.6, -10.9]); b.box(.55, 2.8, .35, b.red, [22, 8.6, -10.7]); b.box(2.2, .55, .35, b.red, [22, 8.6, -10.7]);
  b.door(22, -11.7); b.window(16, 4, -11.7); b.window(28, 4, -11.7); b.sign('爱心医院', [22, 5.8, -11.3], 8, '#aa5550');
  b.box(11, 5, 8, b.paint(0xd9c8ac), [24, 2.5, 17]); b.roof(24, 17, 13, 10, 5, 3.8, b.teal); b.block(24, 17, 11, 8); b.door(24, 21.2); b.sign('爱心福利社', [24, 5, 21.5], 8, '#4f7f76');
  for (const [x, z] of [[-25, 9], [-25, 19], [-14, 19], [10, 22]]) { b.box(4, .6, 3, b.m.lightStone, [x, .3, z]); for (let i = 0; i < 12; i++) b.ball(.3, i % 2 ? b.red : b.pink, [x - 1.4 + i % 4 * .9, .9, z - .7 + Math.floor(i / 4) * .7]); }
  for (const x of [-7, 7]) b.lamp(x, 22);
}

function outpost(b: Builder) {
  b.ground(0x9ca477); b.path([0, 38], [0, -35], 8); b.path([-32, -5], [32, -5], 5);
  const timber = b.paint(0xa37a4c, b.m.wood), cloth = b.paint(0x5e8790);
  for (const x of [-14, 14]) {
    for (const dx of [-3, 3]) for (const dz of [-3, 3]) b.beam([x + dx * 1.2, 0, -20 + dz * 1.2], [x + dx, 12, -20 + dz], .65, timber);
    b.box(8.5, .7, 8.5, b.m.darkWood, [x, 10, -20]); b.box(8, 2.7, 8, timber, [x, 11.6, -20]); b.roof(x, -20, 10, 10, 13, 4, b.red);
    for (const z of [-23, -17]) for (let dx = -2; dx <= 2; dx += 2) b.box(.9, 1.5, .8, b.m.darkWood, [x + dx, 12.5, z]);
    b.block(x, -20, 8.5, 8.5); b.beam([x - 2.5, .1, -15.7], [x - 2.5, 10, -15.7], .2); b.beam([x - 1, .1, -15.7], [x - 1, 10, -15.7], .2);
    for (let y = .5; y < 10; y += .8) b.beam([x - 2.5, y, -15.7], [x - 1, y, -15.7], .12);
  }
  b.box(20, 2.5, 3, timber, [0, 10, -20]); b.roof(0, -20, 22, 5, 11.3, 3, b.red); b.sign('前哨站', [0, 10.2, -17.9], 9, '#675735', 'sword');
  for (const side of [-1, 1]) for (let x = 21; x <= 44; x += 1.2) { b.cyl(.42, .53, 5.5, timber, [side * x, 2.75, -20], 6); b.cyl(0, .42, 1.2, timber, [side * x, 6.1, -20], 6); }
  b.block(-32, -20, 25, 1.4); b.block(32, -20, 25, 1.4);
  for (const x of [-24, 24]) {
    const shape = new T.Shape(); shape.moveTo(-5, 0); shape.lineTo(0, 5); shape.lineTo(5, 0); shape.closePath();
    b.add(new T.ExtrudeGeometry(shape, { depth: 9, bevelEnabled: false }), cloth, [x, 0, 4]); b.block(x, 8, 10, 9);
    b.box(.2, 5.8, .2, b.m.wood, [x, 2.9, 4]);
  }
  b.cyl(2.3, 2.5, .4, b.m.stone, [0, .2, -5]);
  for (let i = 0; i < 7; i++) b.ball(.35, b.m.stone, [Math.sin(i) * 2.1, .4, -5 + Math.cos(i) * 2.1]);
  for (let i = 0; i < 4; i++) b.beam([-1.1, .6, -6 + i * .5], [1.1, .6, -4 + i * .2], .28, b.m.wood);
  for (const [x, z] of [[-32, 21], [-30, 22], [29, -7], [31, -5]]) b.crate(x, z, 1.8);
}

function forest(b: Builder) {
  b.ground(0x4d655b); b.path([0, 38], [0, 5], 5, b.paint(0x8b8a76, b.m.path)); b.path([0, 5], [0, -18], 4, b.m.stone);
  giantTree(b, 0, -29, 10.2, true); giantTree(b, -34, -5, 6.5, true); giantTree(b, 35, -18, 6.5, true);
  // An ancient hollow doorway and stone arch are the region's primary landmarks.
  b.box(4.8, 6.3, .35, b.m.darkWood, [0, 3.15, -22.2]); b.ring(2.55, .45, b.m.bark, [0, 5.3, -22], [0, 0, 0]);
  const moss = b.paint(0x526b50, b.m.stone), rune = b.paint(0x80b8ae);
  for (const x of [-8.5, 8.5]) {
    b.box(2.8, 8, 3.3, moss, [x, 4, -8]); b.box(3.5, .7, 3.8, b.m.stone, [x, 8, -8]); b.block(x, -8, 3.5, 4);
    for (let y = 2; y < 7; y += 1.6) b.box(.7, .35, .05, rune, [x, y, -6.3], [0, 0, y * .7]);
  }
  for (let i = 0; i <= 12; i++) { const a = i / 12 * Math.PI; b.box(1.5, 2, 3, moss, [Math.cos(a) * 8.5, 7 + Math.sin(a) * 5, -8], [0, 0, a - Math.PI / 2]); }
  for (let i = 0; i < 15; i++) {
    const a = i * 2.399, x = Math.sin(a) * (17 + i % 3 * 5), z = 10 + Math.cos(a) * 12;
    b.box(1.6, 1.8 + i % 3, 1.3, moss, [x, .7, z], [.15, a, .2]);
    if (i % 3 === 0) mushroom(b, x + 2, z + 1, 1.7, rune);
  }
  b.sign('黑森林入口', [-13, 3, 23], 9, '#42665d');
  for (const x of [-5, 5]) { b.cyl(.35, .6, 3, moss, [x, 1.5, -1]); b.ball(.6, rune, [x, 3.3, -1]); }
}

function amusement(b: Builder) {
  b.ground(0xadc18a); b.path([0, 38], [0, -30], 8); b.path([-32, 4], [32, 4], 7);
  const purple = b.paint(0x9981b5), ruby = b.paint(0xd7606b), cream = b.paint(0xffe5b5);
  // Large ferris wheel: two steel rims, spokes and eight suspended colorful gondolas.
  const cx = -21, cy = 14, cz = -18, radius = 11.5;
  for (const dx of [-5, 5]) { b.beam([cx + dx, 0, cz - 3], [cx, cy, cz], .65, b.teal); b.beam([cx + dx, 0, cz + 3], [cx, cy, cz], .65, b.teal); }
  const cabins: T.Group[] = [];
  const wheel = b.moving('ferris wheel', [cx, cy, cz], () => {
  for (const z of [cz - .65, cz + .65]) {
    b.ring(radius, .23, b.white, [cx, cy, z], [0, 0, 0]);
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; b.beam([cx, cy, z], [cx + Math.sin(a) * radius, cy + Math.cos(a) * radius, z], .13, b.yellow); }
  }
  b.ball(1.2, ruby, [cx, cy, cz], [1, 1, .6]);
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, x = cx + Math.sin(a) * radius, y = cy + Math.cos(a) * radius - 1.6;
    cabins.push(b.moving(`gondola ${i + 1}`, [x, y + 1.6, cz], () => {
      b.box(2.6, 1.7, 2.6, [ruby, b.blue, b.yellow, purple][i % 4], [x, y, cz]); b.cyl(0, 2, 1.3, cream, [x, y + 2.3, cz], 8);
      for (const dx of [-1, 1]) b.box(.1, 1.7, .1, b.m.gold, [x + dx, y + 1.4, cz]);
    }));
  }
  });
  b.animations.push(time => { wheel.rotation.z = -time * .065; cabins.forEach(cabin => { cabin.rotation.z = time * .065; }); });
  b.block(cx, cz, 12, 8);
  // Carousel: striped tent canopy and little horses, set apart from the wheel.
  const carousel = b.moving('carousel', [21, 0, -13], () => {
  b.cyl(8.2, 8.7, .7, purple, [21, .35, -13], 32); b.cyl(.5, .65, 8, b.m.gold, [21, 4.5, -13]); b.block(21, -13, 17, 17);
  const canopy = new T.ConeGeometry(9.5, 5, 16, 1); const pos = canopy.attributes.position, color: number[] = [];
  for (let i = 0; i < pos.count; i++) { const a = Math.atan2(pos.getZ(i), pos.getX(i)); const c = new T.Color(Math.floor((a + Math.PI) / Math.PI * 8) % 2 ? 0xd7606b : 0xffe5b5); color.push(c.r, c.g, c.b); }
  canopy.setAttribute('color', new T.Float32BufferAttribute(color, 3)); const stripe = b.paint(0xffffff); stripe.vertexColors = true;
  // Vertex-colored canopy remains a separate mesh so primitive batching keeps attributes compatible.
  const mesh = new T.Mesh(canopy, stripe); mesh.position.set(21, 10, -13); mesh.castShadow = true; b.ownMesh(mesh);
  b.cyl(.1, .1, 2.5, b.m.gold, [21, 13.7, -13]); b.ball(.55, b.yellow, [21, 15, -13]);
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3, x = 21 + Math.cos(a) * 5.8, z = -13 + Math.sin(a) * 5.8;
    b.cyl(.08, .08, 7.5, b.m.gold, [x, 4.3, z], 6); b.ball(1, i % 2 ? cream : b.pink, [x, 2.6, z], [1.5, .65, .65]);
    b.ball(.5, cream, [x + 1.15, 3.5, z]); b.beam([x + .8, 2.6, z], [x + 1.1, 3.5, z], .4, b.white);
    for (const dx of [-.8, .8]) b.beam([x + dx, 2.4, z], [x + dx - .3, 1.3, z], .18, b.white);
  }
  });
  b.animations.push(time => { carousel.rotation.y = time * .12; });
  b.box(8, 4, 7, cream, [-24, 2, 14]); b.roof(-24, 14, 10, 9, 4, 3, ruby); b.block(-24, 14, 8, 7); b.window(-24, 2.1, 17.7, 5, 2); b.sign('西部游乐场', [-24, 4.5, 18.8], 9, '#9e536a', 'star');
  for (const x of [-7, 7]) { b.cyl(.25, .35, 7, ruby, [x, 3.5, 24]); b.ball(1.3, b.yellow, [x, 7.3, 24]); }
  b.box(15, 1.6, 1.1, ruby, [0, 6.1, 24]); b.sign('快乐出发', [0, 6.5, 24.7], 8, '#a55268');
}

function architecturalDetails(b:Builder){
  const buildings:Record<string,number[][]>={
    'taotao-street':[[18,-14,11,10,7],[-21,14,11,8,6.5],[22,15,10,8,5.7]],
    'love-church':[[-17,-24,16,17,10],[22,-18,17,12,7],[24,17,11,8,5]],
    'happy-farm':[[-20,-22,15,11,8]],'sunshine-ranch':[[-20,-19,17,12,8]],
    'ram-academy':[[0,-24,23,12,8]],'mystery-lake':[[-24,3,13,9,5.7]],
    'amusement-park':[[-24,14,8,7,4]],
  };
  for(const [x,z,w,d,h] of buildings[b.id]??[]){
    b.box(w+.3,.45,d+.3,b.m.stone,[x,.18,z]);
    b.box(w+.6,.25,d+.6,b.m.lightStone,[x,h-.2,z]);
    for(const side of [-1,1]){
      for(let y=.8;y<h-.4;y+=.85){
        b.box(.55,.36,.4,b.m.lightStone,[x+side*(w/2-.14),y,z+d/2+.04]);
        b.box(.4,.36,.85,b.m.lightStone,[x+side*(w/2+.025),y,z+d/2-.25]);
      }
      b.box(.15,h-.6,.2,b.m.darkWood,[x+side*(w/2-1),h/2,z+d/2+.12]);
      // Side windows, with inset dark frames and projecting stone sills.
      for(const dz of [-d*.23,d*.23]){
        b.box(.16,2.3,1.65,b.m.darkWood,[x+side*(w/2+.04),3,z+dz]);
        b.box(.19,1.95,1.3,b.m.window,[x+side*(w/2+.08),3,z+dz]);
        b.box(.22,.09,1.4,b.white,[x+side*(w/2+.12),3,z+dz]);
        b.box(.35,.16,1.9,b.m.lightStone,[x+side*(w/2+.1),1.87,z+dz]);
      }
    }
    b.box(w-.4,.18,.28,b.m.wood,[x,1.15,z+d/2+.18]);
    b.box(w+.3,.15,.4,b.m.darkWood,[x,h-.65,z+d/2+.12]);
    for(const dx of [-w*.34,w*.34]){
      b.box(2,.5,.8,b.m.wood,[x+dx,1.35,z+d/2+.5]);
      for(let i=0;i<5;i++){b.ball(.3,b.leaf,[x+dx-.8+i*.4,1.7,z+d/2+.5],[1,1.1,.8]);b.ball(.16,i%2?b.pink:b.yellow,[x+dx-.8+i*.4,1.97,z+d/2+.5]);}
    }
    // Brick chimney, terracotta cap and gutters make roofs read at walking scale.
    b.box(1.1,3.3,1.1,b.m.stone,[x-w*.28,h+2,z-d*.22]);
    b.box(1.35,.22,1.35,b.red,[x-w*.28,h+3.7,z-d*.22]);
  }
  if(b.id==='taotao-street'){
    for(const x of [-27,29])for(const z of [-4,29]){
      b.box(4,.22,1.15,b.m.wood,[x,1.05,z]);b.box(4,1.1,.18,b.m.darkWood,[x,1.65,z-.48]);
      for(const dx of [-1.5,1.5])b.box(.2,1,.7,b.m.iron,[x+dx,.5,z]);
    }
    for(let i=0;i<10;i++){const x=-30+i*6.6,y=7.7-Math.sin(i/9*Math.PI)*1.6;b.beam([x,y,-1],[x+6.6,7.7-Math.sin(Math.min(9,i+1)/9*Math.PI)*1.6,-1],.035,b.m.iron);if(i<9)b.add(new T.ConeGeometry(.4,.8,3),[b.red,b.blue,b.yellow,b.teal][i%4],[x+1.3,y-.45,-1],[0,0,Math.PI]);}
  }
}

const regions: Record<string, { name: string; description: string; build: (b: Builder) => void; camera?: Point; target?: Point }> = {
  'taotao-street': { name: '淘淘乐街', description: '地图原型 · 服装店、宠物店与道具店围绕彩石广场。', build: taotao, camera: [38, 22, 48] },
  'happy-farm': { name: '开心农场', description: '地图原型 · 风车、红谷仓与分区菜田。', build: farm },
  'sunshine-ranch': { name: '阳光牧场', description: '地图原型 · 牧场围栏、谷仓与饮水池。', build: ranch },
  'berry-jungle': { name: '浆果丛林', description: '地图原型 · 巨树、浆果灌木与溪流木桥。', build: jungle, camera: [40, 28, 47] },
  'moraya-mountain': { name: '摩尔拉雅山', description: '地图原型 · 雪山、缆车与滑雪木屋。', build: mountain, camera: [44, 34, 53], target: [0, 9, -12] },
  'mystery-lake': { name: '神秘湖', description: '地图原型 · 湖面码头、灯塔与停泊的小船。', build: lake },
  'ram-academy': { name: '拉姆学院', description: '地图原型 · 叶顶学堂、拉姆雕像与游乐庭院。', build: academy },
  'love-church': { name: '爱心教堂', description: '地图原型 · 红顶教堂、喷泉与爱心医院。', build: church },
  outpost: { name: '前哨站', description: '地图原型 · 木制关门、瞭望塔与骑士营地。', build: outpost },
  'black-forest': { name: '黑森林', description: '地图原型 · 古树树洞、遗迹拱门与幽暗林地。', build: forest, camera: [41, 31, 49], target: [0, 7, -10] },
  'amusement-park': { name: '西部游乐场', description: '地图原型 · 摩天轮、旋转木马与彩色售票亭。', build: amusement, camera: [43, 33, 53] },
};

function lakeDeckHeight(x:number,z:number):number|null{
  if(x>=-.5&&x<=10.5&&z>=-16&&z<=-10)return .975;
  if(x>=2.3&&x<=7.7&&z>=-10&&z<=9)return .9;
  if(x>=2.3&&x<=7.7&&z>9&&z<14)return .9*(14-z)/5;
  return null;
}

export function createRegionScene(id: string,sharedTerrain=false): RegionScene | null {
  const entry = regions[id]; if (!entry) return null;
  const b = new Builder(id,sharedTerrain); entry.build(b); architecturalDetails(b); b.flush();
  b.animations.push(time => { b.water.roughness = .25 + Math.sin(time * .7) * .035; });
  const heightAt=id==='mystery-lake' ? (x:number,z:number)=>lakeDeckHeight(x,z)??regionGroundHeight(x,z) : regionGroundHeight;
  const canMove=id==='mystery-lake' ? (x:number,z:number)=>lakeDeckHeight(x,z)!==null || ((x-17)/27)**2+((z+15)/22)**2>=1 : undefined;
  const scene: RegionScene = { group: b.group, camera: entry.camera ?? [40, 29, 49], target: entry.target ?? [0, 5, -9], spawn: [0, 30], bounds: 46, heightAt,canMove, heroTrees: b.heroTrees, collisions: b.collisions, name: entry.name, description: entry.description, update: (time,delta,daylight=1,observerX=0,observerZ=0) => {b.m.window.emissiveIntensity=.12+(1-daylight)*2;for(const lamp of b.lamps){lamp.visible=daylight<.9&&Math.hypot(lamp.position.x-observerX,lamp.position.z-observerZ)<32;lamp.intensity=(1-daylight)*8;} for (const animate of b.animations) animate(time, delta); } };
  owned.set(scene, b); return scene;
}

/** Disposes only resources created by this factory; safe to call more than once. */
export function disposeRegionScene(scene: RegionScene) { const b = owned.get(scene); if (b) { b.dispose(); owned.delete(scene); } }
