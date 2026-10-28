import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at /carol-coaching/, so every asset path
  // needs that prefix. Change this to '/' when the site moves to Carol's domain.
  base: '/carol-coaching/',
})
