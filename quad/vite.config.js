import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // This allows you to use '@' as a shortcut to your 'src' directory
    },
  },
  server: {
    open: true, // Automatically open the app in the browser when starting the server
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
});
