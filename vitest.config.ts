import { defineConfig } from 'vitest/config'
import alias from './config/alias'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({}) as any, // @TODO: Fix type error on here
  ],
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias,
  },
  test: {
    globals: true,
    include: ['tests/**/*.spec.ts', 'src/**/*.spec.ts'],
    environment: 'jsdom',
  },
})
