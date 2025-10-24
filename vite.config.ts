import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MixMyface/', // <= tačno ime repoa iz URL-a (case-sensitive)
})
