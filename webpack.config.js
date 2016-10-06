/* eslint-disable import/no-extraneous-dependencies */
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    `${__dirname}/app/main.js`,
  ],

  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },

  plugins: [
    new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.tmpl.html` }),
    new HotModuleReplacementPlugin(),
  ],
};
