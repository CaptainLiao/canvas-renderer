const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    test: path.resolve(__dirname, 'example/web/index.js')
  },
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
    new webpack.DefinePlugin({
      __buildTarget__: JSON.stringify('web')
    }),
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