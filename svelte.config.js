import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter(),

    alias: {
      $lib: resolve(__dirname, 'src/lib'),
      $types: resolve(__dirname, 'src/types'),
      $shared: resolve(__dirname, 'src/lib/shared'),
      $store: resolve(__dirname, 'src/lib/store.ts'),
      $plugins: resolve(__dirname, 'src/lib/plugins'),
      $components: resolve(__dirname, 'src/lib/components')
    }
  }
}

export default config
