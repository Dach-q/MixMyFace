import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MixMyFace/', // tačno ime repozitorijuma, slovo po slovo
})
