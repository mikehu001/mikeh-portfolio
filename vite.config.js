import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to https://mikehu001.github.io/mikeh-portfolio/
export default defineConfig({
  base: '/mikeh-portfolio/',
  plugins: [react()],
})
