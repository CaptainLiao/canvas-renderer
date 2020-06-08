const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'example/web/index.ts'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [

    new HtmlWebpackPlugin({
      title: 'canvas to image',
      template: './example/web/index.html'
    }),
    new webpack.ProgressPlugin(),
  ],

  watchOptions: {
    ignored: ['src/js/**', 'node_modules']
  }
}