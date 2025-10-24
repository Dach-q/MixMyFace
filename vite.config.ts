import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// STAVI TAČNO NAZIV TVOG REPOA OVDE umesto 'mixmyface-mvp'
export default defineConfig({
  plugins: [react()],
  base: '/mixmyface-mvp/',
})
