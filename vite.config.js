import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ThisIsEnd/'   // 👈 THIS is the fix
})
