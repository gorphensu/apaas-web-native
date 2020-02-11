const baseConfig = require('./webpack.base.conf')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = smart(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})
