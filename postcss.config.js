/* eslint-disable */

module.exports = {
  plugins: [
    require('stylelint'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
        preset: [
            'default', {
                discardComments: {
                    removeAll: true
                }
            }
        ]
    })
  ]
}