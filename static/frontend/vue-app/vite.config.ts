import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
   outDir: 'build',
   assetsInlineLimit: 0,
   manifest: true,
   rollupOptions: {
     output: {
       entryFileNames: 'js/[name].js',
       chunkFileNames: 'js/[name].js',
       assetFileNames: 'assets/[name].[ext]',
     },
   },
 },
})
