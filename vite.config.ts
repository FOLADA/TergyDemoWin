import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  // Emit all URLs as relative (“./assets/…”) so index.html in dist/ works anywhere
  base: './',
  plugins: [
    nodePolyfills(),  // polyfill Node core modules if needed
    react(),
  ],
  resolve: {
    alias: {
      // e.g. if you ever need to alias modules:
      // events: 'events/'
    }
  },
  build: {
    rollupOptions: {
    }
  }
});
