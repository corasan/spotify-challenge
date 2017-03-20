const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/public',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, 'app'),
      },
    ],
  },
}
