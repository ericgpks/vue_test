import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // 開発サーバーはローカルからのみアクセス可能にする(LAN へ公開しない)
    host: 'localhost',
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: 'localhost',
  },
  build: {
    // 本番ビルドにソースマップを含めない
    sourcemap: false,
  },
})
