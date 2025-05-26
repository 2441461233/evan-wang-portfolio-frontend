import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-ilt11mkwu2vedpqt9p7yy-6d6cba02.manusvm.computer',
      'localhost'
    ]
  }
})
