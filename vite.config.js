import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/films': 'http://localhost:5000',
      '/genres': 'http://localhost:5000'
    }
  }
})