import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/namramahak/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
