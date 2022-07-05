const baseConfig = require('./webpack.base.conf')
const { smart } = require('webpack-merge')

module.exports = smart(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map', // 开发模式打开sourcemap
  plugins: [
  ]
})
