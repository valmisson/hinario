import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173
  },

  testDir: 'test/e2e',

  projects: [
    {
      name: 'Desktop',
      grepInvert: /Mobile$/i,
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Mobile',
      grep: /Mobile$/i,
      use: { ...devices['Pixel 7'] }
    }
  ]
})
