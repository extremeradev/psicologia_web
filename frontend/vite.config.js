import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.js.org/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa', // <-- AÑADE ESTA LÍNEA
  server: {
    host: '0.0.0.0', // Mantén las opciones de server que ya tenías
  }
})