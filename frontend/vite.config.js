import { defineConfig } from 'vite'

export default defineConfig({
  base: '/<REPO_NAME>/',
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3000',
      '/socket.io': {
        target: 'http://127.0.0.1:3000',
        ws: true
      }
    }
  }
})
