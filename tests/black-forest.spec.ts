import {test,expect} from '@playwright/test';
const snapshot=()=>(window as any).__blackForest;

test('forest loads reused foliage and procedural landmarks, supports walking, ambience and scene switching',async({page})=>{
  test.setTimeout(210000);
  await page.setViewportSize({width:1100,height:760});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto('/black-forest.html');await page.waitForFunction(()=>(window as any).__blackForest?.ready,{},{timeout:90000});
  const initial=await page.evaluate(snapshot);
  expect(initial.failed).toEqual([]);expect(initial.rendering.environmentMap).toBe(true);
  expect(initial.trees).toBeGreaterThan(170);expect(initial.mushrooms).toBeGreaterThan(250);expect(initial.ferns).toBe(1800);
  expect(initial.fireflies).toBe(420);expect(initial.triangles).toBeGreaterThan(10000);
  expect(await page.locator('#forest-error').isVisible()).toBe(false);
  await page.locator('[data-forest-place="hollow"]').click({force:true});
  expect((await page.evaluate(snapshot)).target[2]).toBe(-63);
  await page.locator('#forest-walk').click({force:true});
  expect((await page.evaluate(snapshot)).walking).toBe(true);
  const before=(await page.evaluate(snapshot)).player;
  await page.keyboard.down('KeyW');await expect.poll(async()=>(await page.evaluate(snapshot)).player[2],{timeout:20000}).toBeLessThan(before[2]-.4);await page.keyboard.up('KeyW');
  await page.locator('[data-forest-place="mushrooms"]').click({force:true});
  expect((await page.evaluate(snapshot)).player[0]).toBe(23);
  await page.keyboard.press('Escape');expect((await page.evaluate(snapshot)).walking).toBe(false);
  for(const mode of ['mist','rain','moon']){await page.selectOption('#forest-atmosphere',mode);expect((await page.evaluate(snapshot)).atmosphere).toBe(mode);}
  await page.locator('#forest-audio').click({force:true});await expect.poll(async()=>(await page.evaluate(snapshot)).audio).toBe(true);
  await page.locator('#forest-audio').click({force:true});await expect.poll(async()=>(await page.evaluate(snapshot)).audio).toBe(false);
  expect(errors).toEqual([]);
  await page.locator('.world-switch a[href="./flower-sea.html"]').click({force:true});
  await expect(page).toHaveURL(/flower-sea.html$/);
  await page.waitForFunction(()=>(window as any).__flowerSea?.ready,{},{timeout:90000});
  expect((await page.evaluate(()=>(window as any).__flowerSea)).environment.failed).toEqual([]);
  expect(await page.locator('.garden-world-switch a[href="./black-forest.html"]').getAttribute('href')).toBe('./black-forest.html');
  expect(errors).toEqual([]);
});

test('forest navigation and movement buttons fit a phone screen',async({page})=>{
  test.setTimeout(120000);await page.setViewportSize({width:393,height:852});
  await page.goto('/black-forest.html');await page.waitForFunction(()=>(window as any).__blackForest?.ready,{},{timeout:90000});
  await expect(page.locator('#forest-walk')).toBeInViewport();await expect(page.locator('#forest-atmosphere')).toBeInViewport();
  await expect(page.locator('.world-switch a[href="./flower-sea.html"]')).toBeInViewport();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(393);
  await page.locator('#forest-walk').click({force:true});await expect(page.locator('[data-garden-move="KeyW"]')).toBeInViewport();
  const before=(await page.evaluate(snapshot)).player;
  const button=page.locator('[data-garden-move="KeyW"]'),box=await button.boundingBox();
  await page.mouse.move(box!.x+box!.width/2,box!.y+box!.height/2);await page.mouse.down();
  await expect.poll(async()=>(await page.evaluate(snapshot)).player[2]).toBeLessThan(before[2]-.2);
  await page.mouse.up();
  await page.keyboard.press('Escape');await page.screenshot({path:'artifacts/forest-review/mobile.png'});
});
