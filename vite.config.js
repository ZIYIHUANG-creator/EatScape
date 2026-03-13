import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  server: {
    host: true,
    port: 5173,
  },
}