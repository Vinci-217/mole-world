import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  timeout: 90000,
  expect: {timeout: 30000},
  workers: 1,
  reporter: 'list',
  outputDir: 'artifacts/test-results',
  use: {
    baseURL: process.env.FLOWER_TEST_BASE_URL || 'http://127.0.0.1:5173',
    viewport: {width: 1440, height: 1000},
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
      args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--disable-dev-shm-usage'],
    },
  },
  webServer: process.env.FLOWER_TEST_BASE_URL ? undefined : {command: 'npm run dev', url: 'http://127.0.0.1:5173', reuseExistingServer: true, timeout: 15000},
});
