import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const original = JSON.parse(readFileSync('public/assets/flower-sea/manifest.json', 'utf8'));
const snapshot = () => (window as any).__flowerSea;

test('four view directions inspect the same real-size distant house',async({page})=>{
  test.setTimeout(180000);
  await page.setViewportSize({width:1280,height:850});
  await page.goto('/flower-sea.html');await page.waitForFunction(()=>(window as any).__flowerSea?.ready);
  const initial=await page.evaluate(snapshot),house=initial.landmarks.find((x:any)=>x.id==='cottage'),arch=initial.landmarks.find((x:any)=>x.id==='vine-arch');
  expect(house.height).toBeCloseTo(10.5,2);expect(house.height).toBeGreaterThan(arch.height);
  expect(arch.position[2]-house.position[2]).toBeGreaterThan(50);
  for(const id of ['front','left','back','top']){
    await page.locator(`[data-garden-view="${id}"]`).click();
    const state=await page.evaluate(snapshot);expect(state.view).toBe(id);expect(state.loaded).toEqual(initial.loaded);
    const [x,y,z]=state.camera,[tx,ty,tz]=state.target;
    if(id==='front')expect(z).toBeGreaterThan(tz);
    if(id==='left')expect(x).toBeLessThan(tx-70);
    if(id==='back')expect(z).toBeLessThan(tz-70);
    if(id==='top'){expect(y-ty).toBeGreaterThan(140);expect(Math.hypot(x-tx,z-tz)).toBeLessThan(1);}
  }
  await page.locator('#garden-walk').click();
  await page.locator('[data-garden-place="cottage-garden"]').click();
  const nearHouse=(await page.evaluate(snapshot)).player;expect(nearHouse[2]).toBeLessThan(-45);
});

test('flower map loads its real published assets and responds to camera and weather controls', async ({ page }) => {
  // Software-rendered cloud Chromium needs time for the complete UI sequence.
  test.setTimeout(210000);
  await page.setViewportSize({width:1280,height:850});
  const errors: string[] = [], modelRequests: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => { if (request.url().includes('/assets/flower-sea/') && request.url().endsWith('.glb')) modelRequests.push(request.url()); });
  await page.goto('/flower-sea.html');
  await page.waitForFunction(() => (window as any).__flowerSea?.ready);
  const expectedReady = original.assets.filter((asset: any) => asset.state === 'ready').map((asset: any) => asset.id);
  const expectedPending = original.assets.length - expectedReady.length;
  await expect(page.locator('#flower-progress')).toContainText(expectedReady.length ? '3D 场景' : '布局预览');
  const initial = await page.evaluate(snapshot);
  expect(new Set(initial.loaded)).toEqual(new Set(expectedReady));
  expect(initial.pending).toHaveLength(expectedPending); expect(initial.failed).toEqual([]);
  expect(initial.environment.ready).toBe(true);expect(initial.environment.failed).toEqual([]);
  expect(initial.environment.skyTexture).toBe(true);expect(initial.environment.trees).toBeGreaterThan(30);expect(initial.environment.butterflies).toBe(8);
  expect(modelRequests).toHaveLength(expectedReady.length);
  await expect.poll(async () => (await page.evaluate(snapshot)).triangles).toBeGreaterThan(10000);
  const canvas = page.locator('#flower-canvas canvas');
  await expect(canvas).toBeVisible();
  await page.mouse.move(650, 500); await page.mouse.down();
  await page.mouse.move(820, 540, { steps: 6 }); await page.mouse.up();
  await expect.poll(async () => (await page.evaluate(snapshot)).camera[0]).not.toBeCloseTo(initial.camera[0], 1);
  await page.selectOption('#flower-weather', 'rain');
  expect((await page.evaluate(snapshot)).weather).toBe('rain');
  await page.locator('#flower-reset').click();
  await expect.poll(async () => (await page.evaluate(snapshot)).camera[0]).toBeCloseTo(initial.camera[0], 3);
  await page.locator('#flower-models-toggle').click();
  await expect(page.locator('#flower-model-list li[data-state="pending"]')).toHaveCount(expectedPending);
  await expect(page.locator('#flower-model-list li[data-state="ready"]')).toHaveCount(expectedReady.length);
  await page.locator('#flower-reference-toggle').click();
  await expect(page.locator('#flower-reference-image')).toBeVisible();
  expect(await page.locator('#flower-reference-image').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(960);
  await page.locator('#flower-inputs-toggle').click();
  await expect(page.locator('#flower-inputs')).toBeVisible();
  await expect(page.locator('#flower-input-grid img')).toHaveCount(5);
  await expect.poll(() => page.locator('#flower-input-grid img').evaluateAll(images => images.every(image => (image as HTMLImageElement).naturalWidth > 100))).toBe(true);
  await page.locator('#flower-inputs-close').click();
  await page.locator('#flower-reference-close').click();
  await page.locator('#flower-models-close').click();
  await page.locator('[data-garden-place="pink-flower"]').click();
  const pink=original.placements.find((p:any)=>p.assetId==='pink-portal');
  const target=(await page.evaluate(snapshot)).target;
  expect(target[0]).toBeCloseTo(pink.position[0]);expect(target[2]).toBeCloseTo(pink.position[2]);
  expect(errors).toEqual([]);
});

test('walking explores one garden and the original music actually plays',async({page})=>{
  test.setTimeout(150000);
  await page.setViewportSize({width:1280,height:850});
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/flower-sea.html');
  await page.waitForFunction(()=>(window as any).__flowerSea?.ready);
  await page.locator('#garden-walk').click();
  await expect.poll(async () => (await page.evaluate(snapshot)).walking).toBe(true);
  const beforeWalk=(await page.evaluate(snapshot)).player;
  await page.keyboard.down('KeyW');
  await expect.poll(async () => (await page.evaluate(snapshot)).player[2], {timeout:15000}).toBeLessThan(beforeWalk[2]-.4);
  await page.keyboard.up('KeyW');
  await page.locator('[data-garden-place="brook-bridge"]').click();
  const bridge=(await page.evaluate(snapshot)).player;
  expect(bridge[0]).toBeCloseTo(-17.6,1);expect(bridge[2]).toBeCloseTo(1,1);
  await page.keyboard.press('Escape');
  await expect.poll(async () => (await page.evaluate(snapshot)).walking).toBe(false);
  await page.selectOption('#flower-weather','night');
  expect((await page.evaluate(snapshot)).weather).toBe('night');
  await page.locator('#flower-sound').click();
  await expect.poll(async () => (await page.evaluate(snapshot)).music.playing).toBe(true);
  await expect.poll(async () => (await page.evaluate(snapshot)).music.currentTime,{timeout:15000}).toBeGreaterThan(.1);
  expect((await page.evaluate(snapshot)).music.track).toBe('BGM_131');
  expect((await page.evaluate(snapshot)).flowerCount).toBeGreaterThan(1000);
  expect(errors).toEqual([]);
});

test('ready status requires parsing a real matching GLB', async ({ page }) => {
  // A known local tree is a loader fixture only; never installed as a flower asset.
  const bytes = readFileSync('public/assets/nature/oak.glb');
  const manifest = structuredClone(original);
  manifest.assets.forEach((asset: any) => { asset.state = 'pending'; });
  manifest.assets[0].state = 'ready';
  manifest.assets[0].path = './assets/nature/oak.glb';
  manifest.assets[0].sha256 = createHash('sha256').update(bytes).digest('hex');
  await page.route('**/assets/flower-sea/manifest.json', route => route.fulfill({ json: manifest }));
  await page.goto('/flower-sea.html');
  await page.waitForFunction(() => (window as any).__flowerSea?.ready);
  expect((await page.evaluate(snapshot)).loaded).toEqual(['pink-portal']);
  expect((await page.evaluate(snapshot)).failed).toEqual([]);
  await expect(page.locator('#flower-progress')).toContainText(`1/${original.assets.length}`);
});

test('a corrupted ready asset remains a failure rather than becoming a substitute model', async ({ page }) => {
  const manifest = structuredClone(original);
  manifest.assets.forEach((asset: any) => { asset.state = 'pending'; });
  manifest.assets[0].state = 'ready';
  manifest.assets[0].path = './assets/nature/oak.glb';
  manifest.assets[0].sha256 = '0'.repeat(64);
  await page.route('**/assets/flower-sea/manifest.json', route => route.fulfill({ json: manifest }));
  await page.goto('/flower-sea.html');
  await page.waitForFunction(() => (window as any).__flowerSea?.ready);
  const state = await page.evaluate(snapshot);
  expect(state.loaded).toEqual([]);
  expect(state.failed).toEqual([{ id: 'pink-portal', message: '模型完整性校验失败' }]);
  await expect(page.locator('#flower-progress')).toContainText('1 项加载失败');
});

test('flower controls remain accessible on a phone viewport', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('/flower-sea.html');
  await page.waitForFunction(() => (window as any).__flowerSea?.ready);
  await expect(page.locator('#flower-weather')).toBeInViewport();
  await expect(page.locator('#flower-reset')).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(393);
  await page.selectOption('#flower-weather', 'dusk');
  expect((await page.evaluate(snapshot)).weather).toBe('dusk');
  await page.screenshot({ path: 'artifacts/flower-review/mobile.png' });
});

test('pending landmarks do not request or claim missing GLB files', async ({ page }) => {
  const manifest = structuredClone(original), modelRequests: string[] = [];
  manifest.assets.forEach((asset: any) => { asset.state = 'pending'; });
  page.on('request', request => { if (request.url().includes('/assets/flower-sea/') && request.url().endsWith('.glb')) modelRequests.push(request.url()); });
  await page.route('**/assets/flower-sea/manifest.json', route => route.fulfill({ json: manifest }));
  await page.goto('/flower-sea.html');
  await page.waitForFunction(() => (window as any).__flowerSea?.ready);
  await expect(page.locator('#flower-progress')).toContainText('0/5');
  expect((await page.evaluate(snapshot)).loaded).toEqual([]);
  expect(modelRequests).toEqual([]);
});
