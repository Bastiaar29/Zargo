import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../zargo/static/frontend', // Aquí se guardará el build de React
    emptyOutDir: true,
  },
});
