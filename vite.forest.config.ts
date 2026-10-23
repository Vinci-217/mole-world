import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{emptyOutDir:false,assetsDir:'forest-assets',chunkSizeWarningLimit:750,rollupOptions:{input:'black-forest.html'}}});
