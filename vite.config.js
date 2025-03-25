import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/namramahak/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: './postcss.config.js',  // Ensure PostCSS is being used
  },
})
