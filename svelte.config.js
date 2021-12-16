import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess()
  ],

  kit: {
    // hydrate the <div id="h-app"> element in src/app.html
    target: '#h-app',
    adapter: adapter(),
    ssr: true,

    vite () {
      return {
        resolve: {
          alias: {
            $lib: resolve(__dirname, 'src/lib'),
            $components: resolve(__dirname, 'src/lib/components')
          }
        }
      }
    }
  }
}

export default config
