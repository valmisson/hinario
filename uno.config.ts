import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,svelte}'
    ]
  },
  presets: [
    presetUno()
  ]
})
