import { test, expect, type Page } from '@playwright/test';

const arrivalRegions = [
  {id:'taotao-street',name:'淘淘乐街',target:[0,5,-9]},
  {id:'love-church',name:'爱心教堂',target:[0,5,-9]},
  {id:'happy-farm',name:'开心农场',target:[0,5,-9]},
  {id:'sunshine-ranch',name:'阳光牧场',target:[0,5,-9]},
  {id:'berry-jungle',name:'浆果丛林',target:[0,5,-9]},
  {id:'moraya-mountain',name:'摩尔拉雅雪山',target:[0,9,-12]},
  {id:'mystery-lake',name:'神秘湖',target:[0,5,-9]},
  {id:'ram-academy',name:'拉姆学院',target:[0,5,-9]},
  {id:'outpost',name:'前哨站',target:[0,5,-9]},
  {id:'black-forest',name:'黑森林',target:[0,7,-10]},
  {id:'amusement-park',name:'游乐场',target:[0,5,-9]},
  {id:'castle',name:'摩尔城堡',target:[0,7,-15]},
] as const;

test.describe.serial('庄园漫游', () => {
  let page: Page;
  const errors: string[] = [];
  const state = () => page.evaluate(() => (window as any).__estate);
  const setHour = (hour:number) => page.locator('#time').evaluate((input:HTMLInputElement,value:number)=>{
    input.value=String(value);
    input.dispatchEvent(new Event('input',{bubbles:true}));
  },hour);
  const waitForArrival = async (id:string) => {
    await page.waitForFunction(regionId => {
      const current=(window as any).__estate;
      return current?.activeRegion===regionId && !current.regionLoading;
    },id,{timeout:90000});
    await expect(page.locator('#region-transition')).toBeHidden();
  };
  const travel = async (id:string) => {
    await page.locator('#nav-world').click();
    const atlas=page.locator('#world-atlas');
    await expect(atlas).toBeVisible();
    await expect(atlas.locator('.atlas-region')).toHaveCount(12);
    const destination=atlas.locator(`.atlas-region[data-region="${id}"]`);
    await destination.scrollIntoViewIfNeeded();
    await destination.click();
    await expect(destination).toHaveAttribute('aria-pressed','true');
    const depart=atlas.locator('.atlas-travel');
    await depart.scrollIntoViewIfNeeded();
    await expect(depart).toBeInViewport();
    await depart.click();
    await expect(atlas).toBeHidden();
    await waitForArrival(id);
  };

  test.beforeAll(async ({browser}) => {
    test.setTimeout(190000);
    page = await browser.newPage({viewport:{width:1440,height:1000},baseURL:'http://127.0.0.1:5173'});
    page.on('pageerror',error => errors.push(error.message));
    page.on('console',message => {if(message.type()==='error') errors.push(message.text());});
    await page.goto('/',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => (window as any).__estate?.ready,undefined,{timeout:180000});
    await expect(page.locator('#loading')).toHaveCount(0);
    await page.locator('#auto-time').click();
  });
  test.afterAll(async()=>{await page?.close();});

  test('renders the actual bundled 3D assets without WebGL or resource errors',async()=>{
    const current = await state();
    expect(current.loadedAssets).toEqual(['mole-castle']);
    expect(current.activeRegion).toBe('castle');
    expect(current.regionLoading).toBe(false);
    expect(current.regionMeshCount).toBe(0);
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
    await setHour(.5);
    await expect(page.locator('#clock')).toHaveText('00:30');
    await expect.poll(async()=>(await state()).daylight).toBeLessThan(.05);
    const hour=(await state()).hour;
    await page.screenshot({path:'artifacts/manor-night.png'});
    await expect(page.locator('#auto-time')).toHaveAttribute('aria-pressed','false');
    expect((await state()).hour).toBe(hour);
    await setHour(16.8);
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

  test('quality control toggles the actual contact-shadow pass',async()=>{
    expect((await state()).highQuality).toBe(true);
    expect((await state()).contactShadows).toBe(true);
    await page.locator('#quality').click();
    await expect.poll(async()=>(await state()).contactShadows).toBe(false);
    expect((await state()).highQuality).toBe(false);
    await expect(page.locator('#quality')).toContainText('流畅画质');
    await page.locator('#quality').click();
    await expect.poll(async()=>(await state()).contactShadows).toBe(true);
    expect((await state()).highQuality).toBe(true);
    await expect(page.locator('#quality')).toContainText('高画质');
    expect(errors).toEqual([]);
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

  test('all twelve atlas destinations load real scenes and retain weather and paused time',async()=>{
    test.setTimeout(300000);
    const previous=await state();
    await page.locator('[data-weather="rain"]').click();
    await setHour(17.25);
    await expect.poll(async()=>(await state()).rainVisible).toBe(true);
    // The separate quality test covers the expensive pass; tour all geometry at the normal low-cost setting.
    await page.locator('#quality').click();
    expect((await state()).contactShadows).toBe(false);
    const visited:string[]=[];
    for(const region of arrivalRegions){
      await test.step(`Enter ${region.name}`,async()=>{
        await travel(region.id);
        const current=await state();
        expect(current.activeRegion).toBe(region.id);
        expect(current.regionLoading).toBe(false);
        expect(current.loadedAssets).toContain('mole-castle');
        if(region.id==='castle'){
          expect(current.regionMeshCount).toBe(0);
        }else{
          expect(current.sceneMeshCount,`${region.id} needs architectural geometry beyond its vegetation`).toBeGreaterThanOrEqual(1);
          expect(current.sceneTriangleCount,`${region.id} needs detailed architectural geometry`).toBeGreaterThan(1000);
          expect(current.regionMeshCount).toBeGreaterThanOrEqual(current.sceneMeshCount);
        }
        region.target.forEach((coordinate,index)=>expect(current.cameraTarget[index]).toBeCloseTo(coordinate,3));
        expect(current.position[1]).toBeGreaterThan(10);
        expect(current.weather).toBe('rain');
        expect(current.rainVisible).toBe(true);
        expect(current.snowVisible).toBe(false);
        expect(current.hour).toBe(17.25);
        expect(current.contactShadows).toBe(false);
        await expect(page.locator('[data-weather="rain"]')).toHaveAttribute('aria-pressed','true');
        await expect(page.locator('#clock')).toHaveText('17:15');
        await expect(page.locator('#location-title')).toHaveText(region.id==='castle'?'城堡前庭':region.name);
        if(region.id==='happy-farm'){
          await page.locator('#enter').click();
          await expect(page.locator('#walk-hud')).toBeVisible();
          const before=(await state()).position;
          await page.keyboard.down('KeyW');
          try{
            await expect.poll(async()=>(await state()).position[2],{message:'Walking must move through the farm scene'}).toBeLessThan(before[2]-.25);
          }finally{await page.keyboard.up('KeyW');}
          expect((await state()).activeRegion).toBe('happy-farm');
          expect((await state()).position[1]).toBeGreaterThan(1.2);
          await page.keyboard.press('Escape');
          await expect(page.locator('#walk-hud')).toBeHidden();
          expect((await state()).walking).toBe(false);
        }
        expect(errors).toEqual([]);
        visited.push(region.id);
      });
    }
    expect(new Set(visited).size).toBe(12);
    await page.locator('#nav-journal').click();
    await page.locator('#journal [data-destination="2"]').click();
    await expect(page.locator('#journal')).toBeHidden();
    await expect(page.locator('#location-title')).toHaveText('花园步道');
    expect((await state()).activeDestination).toBe(2);
    expect((await state()).activeRegion).toBe('castle');
    await page.locator(`[data-weather="${previous.weather}"]`).click();
    await setHour(previous.hour);
    await page.locator('#quality').click();
    expect((await state()).contactShadows).toBe(true);
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
    await page.keyboard.press('Escape');
    await expect(page.locator('#walk-hud')).toBeHidden();
    expect(errors).toEqual([]);
  });

  test('mobile atlas scrolls to the selected travel action without horizontal overflow',async()=>{
    await page.setViewportSize({width:390,height:844});
    await page.locator('#nav-world').click();
    const atlas=page.locator('#world-atlas');
    await expect(atlas).toBeVisible();
    await expect(atlas.locator('.atlas-region')).toHaveCount(12);
    const destination=atlas.locator('.atlas-region[data-region="amusement-park"]');
    await destination.scrollIntoViewIfNeeded();
    await destination.click();
    await expect(destination).toHaveAttribute('aria-pressed','true');
    await expect(atlas.locator('.atlas-place-name')).toHaveText('游乐场');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    expect(await atlas.locator('.atlas-shell').evaluate(element=>element.scrollWidth)).toBeLessThanOrEqual(390);
    const depart=atlas.locator('.atlas-travel');
    await depart.scrollIntoViewIfNeeded();
    await expect(depart).toBeInViewport();
    await expect(depart).toBeEnabled();
    expect(await atlas.locator('.atlas-shell').evaluate(element=>element.scrollTop)).toBeGreaterThan(0);
    await depart.click();
    await expect(atlas).toBeHidden();
    await waitForArrival('amusement-park');
    expect((await state()).sceneMeshCount).toBeGreaterThanOrEqual(1);
    expect((await state()).sceneTriangleCount).toBeGreaterThan(1000);
    await expect(page.locator('#location-title')).toHaveText('游乐场');
    // The original courtyard journal also remains a route home from a different region.
    await page.locator('#nav-journal').click();
    await page.locator('#journal [data-destination="2"]').click();
    await expect(page.locator('#journal')).toBeHidden();
    await waitForArrival('castle');
    await expect(page.locator('#location-title')).toHaveText('花园步道');
    expect((await state()).activeDestination).toBe(2);
    expect(errors).toEqual([]);
  });
});
