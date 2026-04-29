import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/workshopagente/',
  define: {
    '__ASSET_PREFIX__': JSON.stringify('/workshopagente/')
  },
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        tkpage: resolve(__dirname, 'tkpage.html'),
      }
    }
  }
})
