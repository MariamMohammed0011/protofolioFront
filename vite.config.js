import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // استيراد وحدة path

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://protofolioback-production.up.railway.app', // ✅ رابط API الصحيح
        changeOrigin: true,
        secure: false,
      },
    },
  },
});