'use strict';

const path = require('path');

module.exports = {
  entry: {
    '01-hello/app': './src/01-hello/app.js',
    '02-component/app': './src/02-component/app.js',
    '03-props/app': './src/03-props/app.js',
    '04-state/app': './src/04-state/app.js',
    '05-dom/app': './src/05-dom/app.js',
    '06-components/app': './src/06-components/app.js',
    '07-fetch/app': './src/07-fetch/app.js'
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
