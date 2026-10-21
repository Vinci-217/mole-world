import * as THREE from 'three';

export function seeded(seed = 217) {
  let a = seed;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

function surface(kind: 'stone' | 'roof' | 'wood' | 'ground' | 'plaster' | 'path', base: string, seed: number) {
  const random = seeded(seed);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  if (kind === 'stone' || kind === 'path' || kind === 'roof') {
    const rows = kind === 'roof' ? 16 : kind === 'path' ? 16 : 9;
    const h = 512 / rows;
    const w = kind === 'roof' ? 46 : kind === 'path' ? 42 : 100;
    ctx.fillStyle = kind === 'roof' ? '#272f32' : '#444641'; ctx.fillRect(0, 0, 512, 512);
    const baseColor = new THREE.Color(base);
    for (let row = -1; row <= rows; row++) for (let col = -2; col < 512 / w + 2; col++) {
      const x = col * w + (row % 2) * w / 2, y = row * h;
      const color = baseColor.clone().multiplyScalar(.7 + random() * .6);
      ctx.fillStyle = `#${color.getHexString()}`;
      const gap = kind === 'path' ? 2.5 : 2;
      ctx.beginPath(); ctx.roundRect(x + gap, y + gap, w - gap * 2, h - gap * 2, 2 + random() * 3); ctx.fill();
      ctx.strokeStyle = '#e0d7b61c'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x + gap + 1, y + h - gap); ctx.lineTo(x + gap + 1, y + gap + 1); ctx.lineTo(x + w - gap, y + gap + 1); ctx.stroke();
      if (random() > .7 && kind !== 'roof') { ctx.strokeStyle = '#36452e55'; ctx.lineWidth = random() * 6; ctx.beginPath(); ctx.moveTo(x + 3, y + h - 4); ctx.lineTo(x + w * random(), y + h - 4); ctx.stroke(); }
    }
  } else if (kind === 'wood') {
    for (let i = 0; i < 1300; i++) { const x = random() * 512; ctx.strokeStyle = random() > .5 ? '#171d1740' : '#a28c611f'; ctx.lineWidth = random() * 2; ctx.beginPath(); ctx.moveTo(x, 0); ctx.bezierCurveTo(x + 9, 170, x - 7, 350, x, 512); ctx.stroke(); }
    for (let x = 0; x < 512; x += 85) { ctx.strokeStyle = '#23251f99'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke(); }
  }
  const image = ctx.getImageData(0, 0, 512, 512);
  for (let i = 0; i < image.data.length; i += 4) {
    const noise = (random() - .5) * (kind === 'ground' ? 38 : 20);
    image.data[i] += noise; image.data[i + 1] += noise; image.data[i + 2] += noise;
  }
  ctx.putImageData(image, 0, 0);
  if (kind === 'ground') for (let i = 0; i < 8000; i++) { ctx.fillStyle = random() > .6 ? '#a2ac6533' : '#60713e33'; ctx.fillRect(random() * 512, random() * 512, random() * 7 + 1, random() * 3 + 1); }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.wrapS = map.wrapT = THREE.RepeatWrapping; map.anisotropy = 8;
  const bumpMap = map.clone(); bumpMap.colorSpace = THREE.NoColorSpace;
  return { map, bumpMap };
}

export function createMaterials() {
  const make = (kind: Parameters<typeof surface>[0], color: string, seed: number, scale = 1) => {
    const tex = surface(kind, color, seed); tex.map.repeat.setScalar(scale); tex.bumpMap.repeat.setScalar(scale);
    return new THREE.MeshStandardMaterial({ ...tex, roughness: .94, bumpScale: kind === 'wood' ? .035 : .085 });
  };
  const stone = make('stone', '#c0ae88', 2);
  const lightStone = make('stone', '#e0d1aa', 3);
  // A neutral albedo can be tinted red, blue or green without multiplying two
  // unrelated pigment colors into a nearly black roof.
  const roof = make('roof', '#c8c0b2', 4); roof.color.set('#a44d3a');
  const wood = make('wood', '#7a593c', 5);
  const darkWood = make('wood', '#4b3929', 6);
  const plaster = make('plaster', '#e5d8b8', 7);
  const ground = make('ground', '#a3ac77', 8, 55);
  const path = make('path', '#aa9d83', 9, 7);
  const bark = make('wood', '#6a593e', 10);
  const foliage = [0x405e38, 0x577644, 0x71894d, 0x839b59, 0x887a46, 0x9b8757].map(color => new THREE.MeshStandardMaterial({ color, roughness: 1 }));
  const iron = new THREE.MeshStandardMaterial({ color: 0x343d36, metalness: .65, roughness: .5 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xcfaa55, metalness: .65, roughness: .42 });
  const window = new THREE.MeshStandardMaterial({ color: 0xe3ad54, emissive: 0xffb655, emissiveIntensity: .8, roughness: .4 });
  const canvas = new THREE.MeshStandardMaterial({ color: 0x757957, roughness: .95, side: THREE.DoubleSide });
  return { stone, lightStone, roof, wood, darkWood, plaster, ground, path, bark, foliage, iron, gold, window, canvas };
}

export type Materials = ReturnType<typeof createMaterials>;

export function radialTexture() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d')!; const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, '#ffffff'); g.addColorStop(.15, '#ffffffd0'); g.addColorStop(.4, '#ffffff35'); g.addColorStop(1, '#ffffff00');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(canvas);
}
