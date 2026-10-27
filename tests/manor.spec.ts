import {test,expect,type Page} from '@playwright/test';

const snapshot=()=>(window as any).__manor;
async function load(page:Page,path='/'){
  await page.emulateMedia({reducedMotion:'reduce'});
  // Render real frames on demand in software Chromium; no hooks ship in the app.
  await page.addInitScript(()=>{
    const native=requestAnimationFrame.bind(window),queue=new Map<number,FrameRequestCallback>();let id=-1;
    window.requestAnimationFrame=callback=>{const key=id--;queue.set(key,callback);return key;};
    window.cancelAnimationFrame=key=>{queue.delete(key);};
    (window as any).__testFrames={async step(){const callbacks=[...queue.values()];queue.clear();callbacks.forEach(fn=>fn(performance.now()));await new Promise(native);}};
  });
  await page.goto(path);await page.waitForFunction(()=>(window as any).__manor?.ready||!document.getElementById('fatal')!.hidden,undefined,{timeout:180000,polling:100});
  await expect(page.locator('#fatal')).toBeHidden();
}
const frame=(page:Page)=>page.evaluate(()=>(window as any).__testFrames.step());
const click=(page:Page,selector:string)=>page.locator(selector).click({force:true});
async function poi(page:Page,id:string){await click(page,'#map-button');await click(page,`[data-poi="${id}"]`);expect((await page.evaluate(snapshot)).interaction).toBe(id);}

test('three authored scenes share a resident world and never fetch generated model libraries',async({page})=>{
  test.setTimeout(210000);const models:string[]=[],errors:string[]=[];
  page.on('request',r=>{if(r.url().endsWith('.glb'))models.push(r.url());});page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await load(page);await frame(page);const before=await page.evaluate(snapshot);
  expect(before.assetIds).toEqual(expect.arrayContaining(['castle','cottage','pavilion','flowers','trees','hollow','props']));expect(before.rendering.environment).toBe(true);expect(before.connectedWorld).toBe(true);expect(before.triangles).toBeGreaterThan(100000);
  await click(page,'#preview-button');
  for(const id of ['flower','forest','castle']){await click(page,`[data-district="${id}"]`);expect((await page.evaluate(snapshot)).scene).toBe(id);await expect(page.locator(`[data-district="${id}"]`)).toHaveAttribute('aria-current','page');}
  expect(models).toHaveLength(7);expect(models.every(p=>p.includes('/assets/handmade/'))).toBe(true);expect(errors).toEqual([]);
});

test('watering, all three lanterns, the tree heart and bell complete a persistent journey',async({page})=>{
  test.setTimeout(210000);await load(page);await click(page,'#preview-button');
  await click(page,'#map-button');await expect(page.locator('[data-poi="bell"]')).toBeDisabled();await click(page,'#map-panel [data-close]');
  await poi(page,'gate');await page.keyboard.press('KeyE');expect((await page.evaluate(snapshot)).progress.gate).toBe(true);
  await poi(page,'fountain');await click(page,'#interact-button');expect((await page.evaluate(snapshot)).progress.fountain).toBe(false);
  await poi(page,'water');await page.keyboard.press('KeyE');expect((await page.evaluate(snapshot)).progress.watered).toBe(true);
  await poi(page,'heart');await page.keyboard.press('KeyE');expect((await page.evaluate(snapshot)).progress.discovered).not.toContain('heart');
  for(const id of ['west','brook','root']){await poi(page,id);await page.keyboard.press('KeyE');}
  await poi(page,'heart');await page.keyboard.press('KeyE');
  await poi(page,'bell');await page.keyboard.press('KeyE');const done=(await page.evaluate(snapshot)).progress;
  expect(done.lanterns).toHaveLength(3);expect(done.discovered).toContain('heart');expect(done.bell).toBe(true);await expect(page.locator('#journey-count')).toHaveText('3 / 3');
  await frame(page);await page.reload();await page.waitForFunction(()=>(window as any).__manor?.ready,undefined,{timeout:180000,polling:100});
  const restored=(await page.evaluate(snapshot)).progress;expect(restored.watered).toBe(true);expect(restored.discovered).toContain('heart');expect(restored.lanterns).toHaveLength(3);expect(restored.bell).toBe(true);
});

test('walking, jumping, camera preview and sitting use the same physical world',async({page})=>{
  test.setTimeout(210000);await load(page);await click(page,'#start-button');const before=(await page.evaluate(snapshot)).position;
  await page.keyboard.down('KeyW');await frame(page);await page.keyboard.up('KeyW');const after=(await page.evaluate(snapshot)).position;expect(Math.hypot(after[0]-before[0],after[2]-before[2])).toBeGreaterThan(.1);
  await page.keyboard.press('Space');await frame(page);expect((await page.evaluate(snapshot)).position[1]).toBeGreaterThan(after[1]+.1);
  await page.keyboard.press('Escape');expect((await page.evaluate(snapshot)).mode).toBe('orbit');
  await poi(page,'bench');await page.keyboard.press('KeyE');await frame(page);const seated=(await page.evaluate(snapshot)).position;
  await page.keyboard.down('KeyW');await frame(page);await page.keyboard.up('KeyW');expect((await page.evaluate(snapshot)).position[1]).toBeGreaterThan(seated[1]+.3);
});

test('weather, day cycle, original BGM and photo downloads are usable',async({page})=>{
  test.setTimeout(210000);await load(page);await click(page,'#start-button');await expect.poll(async()=>(await page.evaluate(snapshot)).music.playing).toBe(true);
  await expect.poll(async()=>(await page.evaluate(snapshot)).music.time).toBeGreaterThan(.1);
  await click(page,'#settings-button');await click(page,'[data-hour="22"]');expect((await page.evaluate(snapshot)).hour).toBe(22);
  await click(page,'[data-weather="rain"]');expect((await page.evaluate(snapshot)).weather).toBe('rain');await page.locator('#cycle-toggle').check({force:true});expect((await page.evaluate(snapshot)).cycle).toBe(true);
  await page.selectOption('#quality-select','balanced');expect((await page.evaluate(snapshot)).rendering.quality).toBe('balanced');await click(page,'#settings-panel [data-close]');
  await frame(page);await click(page,'#photo-button');await expect(page.locator('#photo-panel')).toBeVisible();
  const downloadPromise=page.waitForEvent('download');await click(page,'#shutter-button');const download=await downloadPromise;expect(download.suggestedFilename()).toMatch(/摩尔庄园.*\.png$/);
  expect((await page.evaluate(snapshot)).progress.album).toContain('castle');await page.keyboard.press('KeyP');await expect(page.locator('#photo-panel')).toBeHidden();
});

test('phone navigation, touch walking and interaction controls stay inside the viewport',async({page})=>{
  test.setTimeout(180000);await page.setViewportSize({width:393,height:852});await load(page,'/black-forest.html');await click(page,'#start-button');
  await expect(page.locator('#map-button')).toBeInViewport();await expect(page.locator('#walk-button')).toBeInViewport();await expect(page.locator('[data-move="KeyW"]')).toBeInViewport();expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(393);
  const before=(await page.evaluate(snapshot)).position;const b=(await page.locator('[data-move="KeyW"]').boundingBox())!;
  await page.mouse.move(b.x+b.width/2,b.y+b.height/2);await page.mouse.down();await frame(page);await page.mouse.up();const after=(await page.evaluate(snapshot)).position;expect(Math.hypot(after[0]-before[0],after[2]-before[2])).toBeGreaterThan(.1);
  await page.screenshot({path:'artifacts/handmade/review/mobile.png'});
});

test('corrupt authored models produce a visible load failure instead of a substitute scene',async({page})=>{
  test.setTimeout(120000);await page.route('**/assets/handmade/manifest.json',async route=>{const response=await route.fetch(),doc=await response.json();doc.assets[0].sha256='0'.repeat(64);await route.fulfill({json:doc});});
  await page.goto('/');await expect(page.locator('#fatal')).toBeVisible({timeout:90000});await expect(page.locator('#fatal-message')).toContainText('模型校验未通过');expect(await page.evaluate(()=>(window as any).__manor?.ready||false)).toBe(false);
});
