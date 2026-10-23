/** Capture real production frames. No reference artwork or image compositing. */
import {chromium} from 'playwright';
import {writeFileSync,mkdirSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage({viewport:{width:1280,height:850}}),errors=[],views={};
  // Pause only the test page's RAF queue after loading, then run one real
  // animation/render frame per capture. No capture hooks ship with the app.
  await page.addInitScript(()=>{
    const nativeRAF=window.requestAnimationFrame.bind(window),nativeCancel=window.cancelAnimationFrame.bind(window);
    const callbacks=new Map();let paused=true,id=-1;
    window.requestAnimationFrame=callback=>{if(!paused)return nativeRAF(callback);const key=id--;callbacks.set(key,callback);return key;};
    window.cancelAnimationFrame=key=>{if(key<0)callbacks.delete(key);else nativeCancel(key);};
    window.__flowerCaptureFrames={
      async pause(){paused=true;await new Promise(nativeRAF);},
      async step(){const pending=[...callbacks.values()];callbacks.clear();for(const callback of pending)callback(performance.now());await new Promise(nativeRAF);},
    };
  });
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
  await page.goto(process.env.FLOWER_CAPTURE_URL||'http://127.0.0.1:4186/flower-sea.html');
  await page.waitForFunction(()=>window.__flowerSea?.ready,{},{timeout:180000,polling:100});
  const initial=await page.evaluate(()=>window.__flowerSea);
  if(initial.failed.length||!initial.environment.ready||!initial.rendering.environmentMap)throw Error('Production assets did not load');
  await page.evaluate(()=>window.__flowerCaptureFrames.pause());
  const cdp=await page.context().newCDPSession(page);
  mkdirSync('artifacts/flower-review',{recursive:true});
  const click=selector=>page.evaluate(selector=>document.querySelector(selector).click(),selector);
  const weather=value=>page.evaluate(value=>{const select=document.querySelector('#flower-weather');select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}));},value);
  async function capture(name){
    await page.evaluate(()=>window.__flowerCaptureFrames.step());
    const {data}=await cdp.send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});
    writeFileSync(`artifacts/flower-review/production-${name}.png`,Buffer.from(data,'base64'));
    console.log(`Captured ${name}`);
  }
  for(const id of ['front','left','back','top']){
    await click(`[data-garden-view="${id}"]`);await capture(id);
    views[id]=await page.evaluate(()=>window.__flowerSea);
  }
  await click('[data-garden-view="front"]');await capture('day');
  for(const id of ['south-meadow','east-meadow','west-meadow','north-lookout']){
    await click(`[data-garden-place="${id}"]`);await capture(id);views[id]=await page.evaluate(()=>window.__flowerSea);
  }
  await click('#garden-walk');await click('[data-garden-place="flower-path"]');await capture('walk');
  await page.keyboard.press('Escape');await click('#flower-reset');
  for(const value of ['night','dusk','rain']){await weather(value);await capture(value);}
  if(errors.length)throw Error(errors.join('; '));
  writeFileSync('artifacts/flower-review/production-views.json',JSON.stringify({initial,views,errors},null,2));
  console.log(JSON.stringify({ready:initial.ready,views:Object.keys(views),landmarks:initial.landmarks,environment:initial.environment,rendering:initial.rendering,errors}));
}finally{await browser.close();}
