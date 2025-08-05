import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Good!

export default defineConfig({
  plugins: [
    react(),         // ✅ React plugin
    tailwindcss(),   // ✅ Tailwind plugin
  ],
})
