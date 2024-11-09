import { basename, dirname, sep } from 'node:path'
import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],

  server: {
    port: 8080
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    resolveSnapshotPath: (path, ext) => {
      const testDir = dirname(path).split(sep).pop()
      const snapshots = `${basename(path)}${ext}`

      return `test/unit/snapshots/${testDir}/${snapshots}`
    }
  }
})
