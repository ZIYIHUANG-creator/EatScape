import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/EatScape/',
  build: {
    outDir: 'docs',
  },
})