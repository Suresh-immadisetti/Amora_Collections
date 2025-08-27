import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Amora_Collections/',  // 👈 important for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
