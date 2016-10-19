const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true, // enable displaying debug information
  devtool: 'inline-source-map', // check the documentation for other devtool options
  noInfo: false, // webpack not show files are bundling
  entry: [
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/app'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '/build'), // Note:Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
    ],
  },
};
