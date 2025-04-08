import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // استيراد وحدة path

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'public'), // تحديد دليل الإخراج إلى "public"
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://your-api-endpoint.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});