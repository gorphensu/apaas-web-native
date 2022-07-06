const baseConfig = require('./webpack.base.conf')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const FileMangerPlugin = require('filemanager-webpack-plugin')

module.exports = smart(baseConfig, {
  entry: path.resolve(__dirname, '../src/lib/index.js'),
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../lib-bundle', 'dist'),
    filename: 'index.js'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FileMangerPlugin({
      onEnd: {
        archive: [{
          source: './lib-bundle',
          destination: './lib-bundle/dist.zip'
        }]
      }
    })
  ]
})
