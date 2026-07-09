import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
      '/book': 'http://localhost:5000',
      '/create': 'http://localhost:5000',
      '/contact-list': 'http://localhost:5000',
      '/find-by': 'http://localhost:5000',
      '/update-contact-by-id': 'http://localhost:5000',
      '/delete-contact-by-id': 'http://localhost:5000'
    }
  }
})
