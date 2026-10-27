import {defineConfig} from '@playwright/test';
export default defineConfig({
  testDir:'./tests',testMatch:'**/manor.spec.ts',workers:1,timeout:180000,expect:{timeout:30000},reporter:'list',outputDir:'artifacts/handmade/test-results',
  webServer:process.env.MANOR_TEST_URL?undefined:{command:'python3 -m http.server 4186 --bind 127.0.0.1 --directory dist',port:4186,reuseExistingServer:!process.env.CI,timeout:15000},
  use:{baseURL:process.env.MANOR_TEST_URL||'http://127.0.0.1:4186',viewport:{width:1200,height:820},acceptDownloads:true,launchOptions:{executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader','--disable-dev-shm-usage']}},
});
