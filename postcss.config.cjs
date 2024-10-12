const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const unocss = require('@unocss/postcss')

module.exports = {
  plugins: [
    unocss(),
    autoprefixer({
      cascade: false,
      grid: false
    }),
    cssnano({
      preset: 'advanced'
    })
  ]
}
