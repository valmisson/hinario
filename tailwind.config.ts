import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',

  theme: {
    extend: {}
  },

  plugins: [
    plugin(({ addVariant }) => {
      addVariant('jump', '.font-jump &')
    })
  ]
} satisfies Config
