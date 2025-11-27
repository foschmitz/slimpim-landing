import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Proxy API calls to backend during development
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },

  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',

    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    },

    terserOptions: {
      compress: {
        drop_console: ['log'], // Drop console.log but keep error/warn/info
        drop_debugger: true
      }
    }
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});
