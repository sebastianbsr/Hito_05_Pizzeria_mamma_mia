import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// DEDUPE: fuerza a usar una sola instancia de react/react-dom
export default defineConfig({
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
})
