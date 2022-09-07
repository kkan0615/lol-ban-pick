import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import alias from './config/alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue 3
    vue({
      reactivityTransform: false
    }),
    // Auto-importing
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    // PWA
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'vue3-boilerplate',
        short_name: 'boilerplate',
        start_url: '/',
        description: 'boilerplate!',
        theme_color: '#41B883',
        display: 'standalone',
        icons: [
          {
            src: './logo.png',
            sizes: '200x200',
          },
        ]
      },
    })
  ],
  server: {
    open: true,
  },
  resolve: {
    alias,
  },
})
