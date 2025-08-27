import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 required for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'], // keep this if you had issues with lucide-react
  },
})
