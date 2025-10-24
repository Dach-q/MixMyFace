import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match the repo name exactly (case-sensitive)
export default defineConfig({
  plugins: [react()],
  base: '/MixMyFace/',
})
