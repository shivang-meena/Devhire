import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
   optimizeDeps: {
    include: ['react-icons/bi', 'react-icons/fa6', 'react-icons/fi'] // jo bhi use kar raha hai
  }
})