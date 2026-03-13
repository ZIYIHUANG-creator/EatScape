import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置 GitHub Pages 专用路径
export default {
  base: '/EatScape/',
  plugins: [vue()],
}