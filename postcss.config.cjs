const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    autoprefixer({
      cascade: false,
      grid: true
    }),
    cssnano({
      preset: 'advanced'
    })
  ]
}
