const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHtml = 'index.html';

const context = path.resolve('src');

module.exports = {
  context,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.less/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css/,
        loader: ['css-loader', 'style-loader']
      }
    ]
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: indexHtml })]
};
