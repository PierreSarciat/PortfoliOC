import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Pages from 'vite-plugin-pages';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 50 },
    }),
    Pages(),
  ],
  base: '/PortfoliOC/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@images': path.resolve(__dirname, './public/images'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@logo': path.resolve(__dirname, './src/assets/logo'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
