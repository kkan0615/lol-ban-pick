import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: false,
    specPattern: 'cypress/test/**/*.spec.*',
    supportFile: false,
  },
})
