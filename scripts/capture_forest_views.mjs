/** Production WebGL frames, captured without image manipulation. */
import {chromium} from 'playwright';
import {mkdirSync,writeFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage({viewport:{width:1280,height:850}}),errors=[],views={};
  await page.addInitScript(()=>{
    const raf=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window),callbacks=new Map();let paused=false,id=-1;
    window.requestAnimationFrame=fn=>{if(!paused)return raf(fn);const key=id--;callbacks.set(key,fn);return key;};
    window.cancelAnimationFrame=key=>{if(key<0)callbacks.delete(key);else cancel(key);};
    window.__capture={async pause(){paused=true;await new Promise(raf);},async step(){const pending=[...callbacks.values()];callbacks.clear();pending.forEach(fn=>fn(performance.now()));await new Promise(raf);}};
  });
  page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.message);});page.on('console',m=>{if(m.type()==='error'){errors.push(m.text());console.log('CONSOLE ERROR',m.text());}});
  await page.goto(process.env.FOREST_CAPTURE_URL||'http://127.0.0.1:4186/black-forest.html');
  await page.waitForFunction(()=>window.__blackForest?.ready||!document.querySelector('#forest-error').hidden,{},{timeout:180000});
  if(await page.locator('#forest-error').isVisible())throw Error(await page.locator('#forest-error').textContent());
  const initial=await page.evaluate(()=>window.__blackForest);
  if(initial.failed.length||!initial.rendering.environmentMap)throw Error(JSON.stringify(initial));
  await page.evaluate(()=>window.__capture.pause());const cdp=await page.context().newCDPSession(page);
  mkdirSync('artifacts/forest-review',{recursive:true});
  const click=selector=>page.evaluate(selector=>document.querySelector(selector).click(),selector);
  async function capture(name){await page.evaluate(()=>window.__capture.step());const {data}=await cdp.send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});writeFileSync(`artifacts/forest-review/${name}.png`,Buffer.from(data,'base64'));views[name]=await page.evaluate(()=>window.__blackForest);console.log('Captured '+name);}
  await capture('entrance');
  for(const id of ['bridge','mushrooms','hollow','moon']){await click(`[data-forest-place="${id}"]`);await capture(id);}
  await click('#forest-walk');await click('[data-forest-place="mushrooms"]');await capture('walk');await page.keyboard.press('Escape');await click('#forest-reset');
  for(const value of ['mist','rain']){await page.evaluate(value=>{const s=document.querySelector('#forest-atmosphere');s.value=value;s.dispatchEvent(new Event('change'));},value);await capture(value);}
  if(errors.length)throw Error(errors.join('; '));
  writeFileSync('artifacts/forest-review/views.json',JSON.stringify({initial,views,errors},null,2));
  console.log(JSON.stringify({initial,errors}));
}finally{await browser.close();}
