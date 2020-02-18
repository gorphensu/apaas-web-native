const baseConfig = require('./webpack.base.conf')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const FileMangerPlugin = require('filemanager-webpack-plugin')
module.exports = smart(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../bundle', 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([{
    //   from: process.cwd(),
    //   to: path.resolve(process.cwd(), 'bundle', Component.name),
    //   // ignore: [/\.git/, /bundle/, /node_modules/, /node\_modules/]
    //   ignore: [/server/, './server', path.resolve(process.cwd(), 'server'), './server/**']
    // }])
    new FileMangerPlugin({
      onEnd: {
        copy: [{
          source: './src/component',
          destination: './bundle/component'
        }],
        archive: [{
          source: './bundle',
          destination: './bundle/zip.zip'
        }]
      }
    })
  ]
})
