import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { windi } from 'svelte-windicss-preprocess'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    }),
    windi()
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },

    vite () {
      return {
        resolve: {
          alias: {
            $lib: resolve(__dirname, 'src/lib'),
            $types: resolve(__dirname, 'src/types'),
            $shared: resolve(__dirname, 'src/lib/shared'),
            $plugins: resolve(__dirname, 'src/lib/plugins'),
            $components: resolve(__dirname, 'src/lib/components')
          }
        }
      }
    }
  }
}

export default config
