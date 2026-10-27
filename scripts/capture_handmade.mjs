/** Capture actual browser WebGL output; no image manipulation or concept art. */
import {chromium} from 'playwright';
import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const buildSha256=createHash('sha256').update(readFileSync('dist/release-manifest.json')).digest('hex');
const requested=process.env.MANOR_VIEWS?new Set(process.env.MANOR_VIEWS.split(',')):null;
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']});
try{
  const page=await browser.newPage({viewport:{width:1360,height:900},reducedMotion:'reduce'}),errors=[],requests=[],views={};
  await page.addInitScript(()=>{
    const native=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window),queue=new Map();let id=-1;
    window.requestAnimationFrame=callback=>{const key=id--;queue.set(key,callback);return key;};
    window.cancelAnimationFrame=key=>{if(key<0)queue.delete(key);else cancel(key);};
    window.__frames={async step(n=1){for(let i=0;i<n;i++){const q=[...queue.values()];queue.clear();q.forEach(fn=>fn(performance.now()));await new Promise(native);}}};
  });
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});page.on('request',r=>{if(r.url().endsWith('.glb'))requests.push(r.url());});
  await page.goto(process.env.MANOR_URL||'http://127.0.0.1:4186/');
  await page.waitForFunction(()=>window.__manor?.ready||!document.querySelector('#fatal').hidden,{},{timeout:180000,polling:100});
  if(await page.locator('#fatal').isVisible())throw Error(await page.locator('#fatal-message').textContent());
  if(requests.some(p=>!p.includes('/assets/handmade/')))throw Error('Unapproved model library requested');
  const cdp=await page.context().newCDPSession(page);mkdirSync('artifacts/handmade/review',{recursive:true});
  async function capture(id){if(requested&&!requested.has(id))return;await page.evaluate(()=>window.__frames.step());const {data}=await cdp.send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});writeFileSync(`artifacts/handmade/review/${id}.png`,Buffer.from(data,'base64'));views[id]=await page.evaluate(()=>window.__manor);console.log('Captured '+id);}
  const click=selector=>page.evaluate(s=>document.querySelector(s).click(),selector);
  await capture('welcome');await click('#preview-button');await capture('castle');
  for(const id of ['flower','forest']){await click(`[data-district="${id}"]`);await capture(id);}
  await click('[data-district="castle"]');await click('#walk-button');await capture('castle-walk');await click('#walk-button');
  await click('#settings-button');await click('[data-hour="22"]');await click('#settings-panel [data-close]');await capture('castle-night');
  await click('[data-district="forest"]');await capture('forest-night');
  await click('#settings-button');await click('[data-hour="17.5"]');await click('[data-weather="mist"]');await click('#settings-panel [data-close]');await capture('forest-mist');
  await click('[data-district="flower"]');await click('#settings-button');await click('[data-weather="rain"]');await click('#settings-panel [data-close]');await capture('flower-rain');
  if(errors.length)throw Error(errors.join('\n'));
  writeFileSync('artifacts/handmade/review/views.json',JSON.stringify({buildSha256,views,modelRequests:requests,errors},null,2));
  console.log(JSON.stringify({views:Object.keys(views),modelRequests:requests.length,errors}));
}finally{await browser.close();}
