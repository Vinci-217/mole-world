import { defineConfig } from 'vite';

// Build the focused map independently so the existing offline world's entry
// remains self-contained and does not acquire shared ES-module imports.
export default defineConfig({
  base: './',
  build: {
    emptyOutDir: false,
    assetsDir: 'flower-assets',
    chunkSizeWarningLimit: 750,
    rollupOptions: { input: 'flower-sea.html' },
  },
});
