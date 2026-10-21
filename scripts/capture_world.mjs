/** Capture actual high-quality scenes from the self-contained release, offline. */
import { chromium } from '@playwright/test';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out=path.join(root,'artifacts/world-previews');
await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,
  args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage();
const errors=[],requests=[],report=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
page.on('request',request=>{if(/^https?:/.test(request.url()))requests.push(request.url());});
const allRegions=['castle','taotao-street','love-church','happy-farm','sunshine-ranch','berry-jungle',
  'moraya-mountain','mystery-lake','ram-academy','outpost','black-forest','amusement-park'];
const regions=process.argv.length>2?process.argv.slice(2):allRegions;
try{
  if(regions.some(id=>!allRegions.includes(id)))throw new Error('Unknown capture region.');
  await context.setOffline(true);
  // Managed Chromium blocks file://. setContent exercises the same self-contained
  // HTML with networking disabled, without claiming a file-navigation test.
  await page.setContent(await readFile(path.join(root,'artifacts/release/MoleManor-Offline.html'),'utf8'),{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__estate?.ready,undefined,{timeout:180000});
  await page.locator('#loading').waitFor({state:'detached',timeout:90000});
  await page.evaluate(()=>{
    document.getElementById('auto-time').click();
    const time=document.getElementById('time');time.value='16';time.dispatchEvent(new Event('input',{bubbles:true}));
  });
  for(const id of regions){
    if(id!==await page.evaluate(()=>window.__estate.activeRegion)){
      await page.evaluate(region=>{
        document.getElementById('nav-world').click();
        document.querySelector(`#world-atlas .atlas-region[data-region="${region}"]`).click();
        document.querySelector('#world-atlas .atlas-travel').click();
      },id);
      await page.waitForFunction(region=>window.__estate?.activeRegion===region&&!window.__estate.regionLoading, id,{timeout:90000});
      await page.locator('#region-transition').waitFor({state:'hidden',timeout:90000});
    }
    await page.screenshot({path:path.join(out,`${id}.png`),timeout:120000});
    const state=await page.evaluate(()=>window.__estate);
    if(!state.highQuality||!state.contactShadows)throw new Error('Captures must use the actual high-quality renderer.');
    report.push(state);console.log(`${id}: ${state.sceneTriangleCount??0} architectural triangles; captured actual high-quality view`);
  }
  await page.evaluate(()=>document.getElementById('nav-world').click());
  await page.screenshot({path:path.join(out,'atlas.png'),timeout:120000});
  await page.locator('.atlas-close').click();
  if(errors.length)throw new Error(errors.join('\n'));
  if(requests.length)throw new Error(`Unexpected offline HTTP requests: ${requests.length}`);
  await writeFile(path.join(out,regions.length===allRegions.length?'verification.json':'verification-partial.json'),JSON.stringify({offline:true,httpRequests:requests,errors,regions:report},null,2));
  console.log(`Offline release: ${regions.length} actual regions captured; zero HTTP requests and zero browser errors.`);
}finally{await browser.close();}
