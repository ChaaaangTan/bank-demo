import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 'base' is crucial for GitHub Pages. It ensures assets use relative paths (e.g. "./assets/...")
  // instead of absolute paths (e.g. "/assets/..."), allowing the app to run in a subdirectory.
  base: './',
  define: {
    // Prevents "ReferenceError: process is not defined" when running in the browser.
    // NOTE: For the API key to work in production, you must configure your build pipeline
    // to replace 'process.env.API_KEY' with the actual key, or set it here.
    'process.env': {}, 
  },
  build: {
    outDir: 'dist',
  }
});