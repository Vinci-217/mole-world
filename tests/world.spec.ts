import { test, expect, type Page } from '@playwright/test';

test.describe.serial('庄园漫游', () => {
  let page: Page;
  const errors: string[] = [];
  const state = () => page.evaluate(() => (window as any).__estate);

  test.beforeAll(async ({browser}) => {
    page = await browser.newPage({viewport:{width:1440,height:1000},baseURL:'http://127.0.0.1:5173'});
    page.on('pageerror',error => errors.push(error.message));
    page.on('console',message => {if(message.type()==='error') errors.push(message.text());});
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__estate?.ready, {timeout:85000});
    await expect(page.locator('#loading')).toHaveCount(0);
    await page.locator('#auto-time').click();
  });
  test.afterAll(async()=>{await page?.close();});

  test('renders the actual bundled 3D assets without WebGL or resource errors',async()=>{
    const current = await state();
    expect(current.loadedAssets).toEqual(['mole-castle']);
    await expect(page.locator('h1')).toContainText('摩尔庄园');
    await page.screenshot({path:'artifacts/manor-desktop.png'});
    expect(errors).toEqual([]);
  });

  test('weather controls activate mutually exclusive rain and snow',async()=>{
    await page.locator('[data-weather="rain"]').click();
    await expect.poll(async()=>(await state()).rainVisible).toBe(true);
    expect((await state()).snowVisible).toBe(false);
    await expect(page.locator('#weather-description')).toContainText('雨敲着旧屋顶');
    await page.locator('[data-weather="snow"]').click();
    await expect.poll(async()=>(await state()).snowVisible).toBe(true);
    expect((await state()).rainVisible).toBe(false);
    await page.locator('[data-weather="clear"]').click();
    await expect.poll(async()=>(await state()).snowVisible).toBe(false);
    expect((await state()).rainVisible).toBe(false);
  });

  test('time controls produce real night lighting and pause the day cycle',async()=>{
    await page.locator('#time').evaluate((input:HTMLInputElement)=>{input.value='0.5';input.dispatchEvent(new Event('input',{bubbles:true}));});
    await expect(page.locator('#clock')).toHaveText('00:30');
    await expect.poll(async()=>(await state()).daylight).toBeLessThan(.05);
    await page.screenshot({path:'artifacts/manor-night.png'});
    const hour=(await state()).hour;
    await page.waitForTimeout(500);
    expect((await state()).hour).toBe(hour);
    await page.locator('#time').evaluate((input:HTMLInputElement)=>{input.value='16.8';input.dispatchEvent(new Event('input',{bubbles:true}));});
    await page.locator('[data-weather="mist"]').click();
  });

  test('music starts on a user gesture and can be muted',async()=>{
    await page.locator('#audio-toggle').click();
    await expect.poll(async()=>(await state()).audio).toBe(true);
    expect((await state()).audioState).toBe('running');
    await expect(page.locator('#sound-status')).toContainText('正在播放');
    await page.locator('#audio-toggle').click();
    expect((await state()).audio).toBe(false);
  });

  test('journal destinations move the camera and dismiss the journal',async()=>{
    await page.locator('#nav-journal').click();
    await expect(page.locator('#journal')).toBeVisible();
    await page.locator('#journal [data-destination="2"]').click();
    await expect(page.locator('#journal')).not.toBeVisible();
    await expect(page.locator('#location-title')).toHaveText('花园步道');
    expect((await state()).activeDestination).toBe(2);
  });

  test('first person controls move the player and Escape exits',async()=>{
    await page.locator('#enter').click();
    await expect(page.locator('#walk-hud')).toBeVisible();
    const before=(await state()).position;
    await page.keyboard.down('KeyW');
    await expect.poll(async()=>(await state()).position[2],{message:'Held W must move the player forward'}).toBeLessThan(before[2]-.25);
    await page.keyboard.up('KeyW');
    const after=(await state()).position;
    expect(after[2]).toBeLessThan(before[2]-.25);
    expect(after[1]).toBeGreaterThan(1.2);
    await page.keyboard.press('Escape');
    expect((await state()).walking).toBe(false);
    await expect(page.locator('#walk-hud')).toBeHidden();
  });

  test('mobile layout stays within the screen and retains essential controls',async()=>{
    await page.setViewportSize({width:390,height:844});
    await expect(page.locator('#enter')).toBeVisible();
    await expect(page.locator('.environment-panel')).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    await expect(page.locator('#toast')).not.toHaveClass(/visible/);
    await page.screenshot({path:'artifacts/manor-mobile.png'});
    await page.locator('#enter').click();
    await expect(page.locator('.touch-pad')).toBeVisible();
    const before=(await state()).position;
    const button = await page.locator('[data-move="KeyD"]').boundingBox();
    await page.mouse.move(button!.x + button!.width / 2,button!.y + button!.height / 2);
    await page.mouse.down();
    await expect.poll(async()=>(await state()).position[0],{message:'Held mobile direction pad must move the player'}).toBeGreaterThan(before[0]+.2);
    await page.mouse.up();
    expect((await state()).position[0]).toBeGreaterThan(before[0]+.2);
    expect(errors).toEqual([]);
  });
});
