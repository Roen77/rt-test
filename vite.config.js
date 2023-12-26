import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:'jsdom',
    setupFiles:'./src/setupTest.js',
    css:true
  },
  // cors 에러 방지
  server:{
    port:5001,
    strict:true
  }
})
