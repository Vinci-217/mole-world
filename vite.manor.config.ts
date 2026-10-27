import {defineConfig} from 'vite';
export default defineConfig({
  base:'./',publicDir:false,
  build:{emptyOutDir:true,assetsDir:'runtime',chunkSizeWarningLimit:900,rollupOptions:{input:{home:'index.html',castle:'castle.html',flower:'flower-sea.html',forest:'black-forest.html'}}},
});
