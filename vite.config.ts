import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import compression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer' // ✅ correct working plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),

    // 🗜️ Gzip compression
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),

    // 🔥 Brotli compression
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),

    // 🖼️ Image optimization (modern + maintained)
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 60 },
      svg: { multipass: true },
    }),
  ],

  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },

        assetFileNames: (assetInfo) => {
          const name = assetInfo.names[0] || 'asset' // fallback if undefined
          const ext = name.split('.').pop() || ''

          if (!name) {
            return 'assets/[name]-[hash].[ext]' // fallback if name is missing
          }

          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'images/[name].[ext]' // keep original name
          }
          return 'assets/[name]-[hash].[ext]' // default for others
        },
      },
    },
  },

  esbuild: {
    drop: ['console', 'debugger'],
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

  assetsInclude: [
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.webp',
    '**/*.woff2',
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
