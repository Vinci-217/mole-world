import { test, expect, type Page } from '@playwright/test';

const regions=[
  ['castle',0,0],['taotao-street',-180,0],['love-church',180,0],['happy-farm',-180,180],
  ['sunshine-ranch',0,180],['berry-jungle',180,180],['moraya-mountain',0,-180],
  ['mystery-lake',360,180],['ram-academy',180,-180],['outpost',-180,-180],
  ['black-forest',-360,-180],['amusement-park',-360,0],
] as const;

test.describe.serial('连续的摩尔庄园世界',()=>{
  let page:Page;const errors:string[]=[];
  const state=()=>page.evaluate(()=>(window as any).__estate);
  const select=async(id:string,mode:'walk'|'fast')=>{
    // Programmatic click avoids spending GPU frames on native-dialog scroll animations.
    // Mobile pointer/scroll operation is covered separately below.
    await page.evaluate(({id,mode})=>{
      document.getElementById('nav-world')!.click();
      (document.querySelector(`.atlas-region[data-region="${id}"]`) as HTMLButtonElement).click();
      (document.querySelector(mode==='walk'?'.atlas-travel':'.atlas-fast') as HTMLButtonElement).click();
    },{id,mode});
  };
  test.beforeAll(async({browser})=>{
    test.setTimeout(240000);
    page=await browser.newPage({viewport:{width:1000,height:700},deviceScaleFactor:.5,baseURL:'http://127.0.0.1:5173'});
    page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await page.addInitScript(()=>localStorage.setItem('mole-world-v3',JSON.stringify({highQuality:false,weather:'clear',hour:16})));
    await page.goto('/',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>(window as any).__estate?.ready,undefined,{timeout:210000});
    await expect(page.locator('#loading')).toHaveCount(0,{timeout:60000});
    await page.locator('#environment-toggle').click();
    await page.locator('#auto-time').click();
  });
  test.afterAll(async()=>{await page?.close();});

  test('starts at eye level with all twelve districts resident in shared coordinates',async()=>{
    const s=await state();expect(s.ready).toBe(true);expect(s.connectedWorld).toBe(true);expect(s.walking).toBe(true);
    expect(new Set(s.loadedRegions)).toEqual(new Set(regions.map(r=>r[0])));expect(s.loadedAssets).toContain('mole-castle');
    expect(s.position[1]).toBeCloseTo(2.18,1);expect(s.playerPosition[2]).toBe(27);
    await expect(page.locator('#walk-location')).toHaveText('摩尔城堡');
    await expect(page.locator('#minimap')).toHaveAttribute('aria-label',/全部十二个地区/);
    expect(errors).toEqual([]);
  });

  test('every destination has a collision-free continuous walking route from the castle',async()=>{
    test.setTimeout(150000);
    for(const [id,ox,oz] of regions){
      if(id==='castle')continue;
      await select(id,'walk');
      await expect(page.locator('#route-panel')).toBeVisible();
      const s=await state();expect(s.activeRegion).toBe('castle');expect(s.navigation.destination).toBe(id);
      expect(s.navigationValidation.blockedSamples,`${id}: the guide must not pass through a wall or water`).toBe(0);
      expect(s.navigationRoute.length).toBeGreaterThan(2);
      const last=s.navigationRoute.at(-1);expect(last[0]).toBe(ox);expect(last[1]).toBe(oz+30);
      expect(new Set(s.loadedRegions).size).toBe(12);expect(s.position[0]).toBe(0);expect(s.position[2]).toBe(27);
    }
    await page.locator('#route-cancel').click();expect(errors).toEqual([]);
  });

  test('eight outdoor submaps have walkable routes and visible atlas entries',async()=>{
    test.setTimeout(120000);
    const sites=[['rainbow-falls','berry-jungle'],['strength-spring','berry-jungle'],['berry-passage','berry-jungle'],['moraya-rink','moraya-mountain'],['moraya-summit','moraya-mountain'],['ram-sports','ram-academy'],['knight-training','outpost'],['race-track','amusement-park']];
    for(const [id,parent] of sites){
      await page.evaluate(({id,parent})=>{document.getElementById('nav-world')!.click();(document.querySelector(`.atlas-region[data-region="${parent}"]`) as HTMLButtonElement).click();(document.querySelector(`[data-site="${id}"]`) as HTMLButtonElement).click();},{id,parent});
      const s=await state();expect(s.outdoorSites).toContain(id);expect(s.navigation.destination).toBe(id);expect(s.navigationValidation.blockedSamples,`${id}: must be reachable on foot`).toBe(0);expect(s.navigationValidation.waypoints).toBeGreaterThan(1);
    }
    await page.locator('#route-cancel').click();
  });

  test('crosses the old district boundary by walking without loading another scene',async()=>{
    test.setTimeout(180000);
    await select('taotao-street','fast');
    await expect.poll(async()=>(await state()).activeRegion).toBe('taotao-street');
    const before=await state();expect(before.playerPosition[0]).toBe(-180);expect(before.playerPosition[2]).toBe(30);
    await page.keyboard.down('ShiftLeft');await page.keyboard.down('KeyS');
    try{
      await expect.poll(async()=>(await state()).playerPosition[2],{timeout:150000,message:'Must walk beyond the old 46-metre boundary'}).toBeGreaterThan(52);
    }finally{await page.keyboard.up('KeyS');await page.keyboard.up('ShiftLeft');}
    const after=await state();expect(after.regionLoading).toBe(false);expect(after.loadedRegions).toEqual(before.loadedRegions);
    expect(after.playerPosition[0]).toBeCloseTo(-180,1);expect(after.activeRegion).toBe('taotao-street');expect(errors).toEqual([]);
  });

  test('fast travel changes global position while preserving the resident world, weather and time',async()=>{
    test.setTimeout(180000);
    await page.locator('[data-weather="rain"]').click();
    await page.locator('#time').evaluate((input:HTMLInputElement)=>{input.value='17.25';input.dispatchEvent(new Event('input',{bubbles:true}));});
    for(const [id,ox,oz] of regions){
      await select(id,'fast');await expect.poll(async()=>(await state()).activeRegion).toBe(id);
      // Let weather tracking update after the camera relocation.
      await expect.poll(async()=>(await state()).weatherPosition[0]).toBe(ox);
      const s=await state();expect(s.playerPosition[0]).toBe(ox);expect(s.playerPosition[2]).toBe(id==='castle'?13:oz+30);
      expect(s.loadedRegions).toHaveLength(12);expect(s.weather).toBe('rain');expect(s.hour).toBe(17.25);expect(s.rainVisible).toBe(true);
      if(id!=='castle')expect(s.sceneTriangleCount).toBeGreaterThan(1000);
    }
    await page.locator('[data-weather="snow"]').click();await expect.poll(async()=>(await state()).snowVisible).toBe(true);
    expect((await state()).rainVisible).toBe(false);await page.locator('[data-weather="clear"]').click();expect(errors).toEqual([]);
  });

  test('overview and first person retain the player, and keyboard M opens the route map',async()=>{
    const before=(await state()).playerPosition;
    await page.keyboard.press('Escape');await expect(page.locator('#walk-hud')).toBeHidden();
    await page.locator('#enter').click();await expect(page.locator('#walk-hud')).toBeVisible();
    expect((await state()).playerPosition).toEqual(before);
    await page.keyboard.press('KeyM');await expect(page.locator('#world-atlas')).toBeVisible();
    await expect(page.locator('.atlas-region')).toHaveCount(12);await page.keyboard.press('Escape');
    await expect(page.locator('#world-atlas')).toBeHidden();expect((await state()).walking).toBe(true);
  });

  test('real night lighting, contact shadows and audio controls remain operational',async()=>{
    await page.locator('#time').evaluate((input:HTMLInputElement)=>{input.value='.5';input.dispatchEvent(new Event('input',{bubbles:true}));});
    await expect.poll(async()=>(await state()).daylight).toBeLessThan(.05);
    await page.locator('#audio-toggle').click();await expect.poll(async()=>(await state()).audio).toBe(true);
    expect((await state()).audioState).toBe('running');await page.locator('#audio-toggle').click();
    await page.locator('#quality').click();expect((await state()).contactShadows).toBe(true);
    await page.locator('#quality').click();expect((await state()).contactShadows).toBe(false);expect(errors).toEqual([]);
  });

  test('submap fast travel points the player at the scene and the global overview retains all districts',async()=>{
    await page.evaluate(()=>{document.getElementById('nav-world')!.click();(document.querySelector('.atlas-region[data-region="amusement-park"]') as HTMLButtonElement).click();(document.querySelector('[data-fast-site="race-track"]') as HTMLButtonElement).click();});
    await expect.poll(async()=>(await state()).playerPosition[0]).toBe(-425);expect((await state()).playerPosition[2]).toBe(81);
    await page.evaluate(()=>{document.getElementById('nav-world')!.click();(document.querySelector('.atlas-overview-world') as HTMLButtonElement).click();});
    await expect(page.locator('body')).toHaveClass(/world-overview/);expect((await state()).walking).toBe(false);
    expect((await state()).loadedRegions).toHaveLength(12);
    await page.locator('#enter').click();expect((await state()).playerPosition[0]).toBe(-425);
    expect(errors).toEqual([]);
  });

  test('mountain arrival stays above the rendered terrain rather than entering the mesh',async()=>{
    await page.evaluate(()=>{document.getElementById('nav-world')!.click();(document.querySelector('.atlas-region[data-region="moraya-mountain"]') as HTMLButtonElement).click();(document.querySelector('[data-fast-site="moraya-summit"]') as HTMLButtonElement).click();});
    await expect.poll(async()=>(await state()).playerPosition[2]).toBe(-288);
    await expect.poll(async()=>(await state()).groundClearance).toBeGreaterThan(1.4);
    expect((await state()).position[1]).toBeGreaterThan(35);expect(errors).toEqual([]);
  });

  test('guided walking advances through the same world and a manual key takes control',async()=>{
    await select('castle','fast');await select('taotao-street','walk');await page.locator('#route-auto').click();
    await expect.poll(async()=>(await state()).playerPosition[0],{timeout:60000}).toBeLessThan(-3);
    await page.keyboard.down('KeyD');await expect.poll(async()=>(await state()).navigation.auto).toBe(false);await page.keyboard.up('KeyD');
    await page.locator('#route-cancel').click();expect(errors).toEqual([]);
  });

  test('mobile map supports real pointer travel actions without overflow',async()=>{
    await page.setViewportSize({width:390,height:844});
    await page.locator('#nav-world').click();const atlas=page.locator('#world-atlas');
    const region=atlas.locator('.atlas-region[data-region="mystery-lake"]');await region.scrollIntoViewIfNeeded();await region.click();
    const action=atlas.locator('.atlas-fast');await action.scrollIntoViewIfNeeded();await expect(action).toBeInViewport();await action.click();
    await expect.poll(async()=>(await state()).activeRegion).toBe('mystery-lake');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    await expect(page.locator('.touch-pad')).toBeVisible();await expect(page.locator('#walk-location')).toHaveText('神秘湖');
    expect(errors).toEqual([]);
  });
});
