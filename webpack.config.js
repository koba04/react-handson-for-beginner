'use strict';

const path = require('path');

module.exports = {
  entry: {
    '01-hello/app': './src/01-hello/app.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
}
