import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteMetaGlobBabelPlugin from 'babel-plugin-transform-vite-meta-glob'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ],
  },
  server: {
    open: true,
    proxy: {
      '/lolCdnApi': {
        target: 'http://ddragon.leagueoflegends.com/cdn',
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/lolCdnApi/, '')
      },
      '/lolApi': {
        target: 'http://ddragon.leagueoflegends.com/api',
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/lolApi/, '')
      },
    }
  },
  plugins: [
    vue(),
  ]
})
