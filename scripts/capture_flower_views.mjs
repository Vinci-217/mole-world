/** Capture the actual production scene, independently from generated art references. */
import {chromium} from 'playwright';
import {writeFileSync,mkdirSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage({viewport:{width:1280,height:850}}),errors=[],views={};
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
  await page.goto(process.env.FLOWER_CAPTURE_URL||'http://127.0.0.1:4186/flower-sea.html');
  await page.waitForFunction(()=>window.__flowerSea?.ready,{},{timeout:180000});
  const initial=await page.evaluate(()=>window.__flowerSea);
  if(initial.failed.length||!initial.environment.ready)throw Error('Production assets did not load');
  mkdirSync('artifacts/flower-review',{recursive:true});
  const frames=()=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  for(const id of ['front','left','back','top']){
    await page.locator(`[data-garden-view="${id}"]`).click();await frames();
    views[id]=await page.evaluate(()=>window.__flowerSea);
    await page.screenshot({path:`artifacts/flower-review/production-${id}.png`,timeout:60000});
  }
  await page.locator('[data-garden-view="front"]').click();await frames();
  await page.screenshot({path:'artifacts/flower-review/production-day.png',timeout:60000});
  await page.locator('#garden-walk').click();await page.locator('[data-garden-place="flower-path"]').click();await frames();
  await page.screenshot({path:'artifacts/flower-review/production-walk.png',timeout:60000});
  await page.keyboard.press('Escape');await page.locator('#flower-reset').click();await page.selectOption('#flower-weather','night');await frames();
  await page.screenshot({path:'artifacts/flower-review/production-night.png',timeout:60000});
  for(const weather of ['dusk','rain']){
    await page.selectOption('#flower-weather',weather);await frames();
    await page.screenshot({path:`artifacts/flower-review/production-${weather}.png`,timeout:60000});
  }
  if(errors.length)throw Error(errors.join('; '));
  writeFileSync('artifacts/flower-review/production-views.json',JSON.stringify({initial,views,errors},null,2));
  console.log(JSON.stringify({ready:initial.ready,views:Object.keys(views),landmarks:initial.landmarks,errors}));
}finally{await browser.close();}
