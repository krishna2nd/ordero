const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const appVersion = require('../package.json').version;
const staticFolder = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: staticFolder,
    //publicPath: '/public/',
    filename: `app.${appVersion}.js`
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve('./src'),
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg|\.ico$/, loader: 'url-loader?limit=10' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpeg' },
      {
        test: /(\.scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            {
              loader: 'sass-loader?sourceMap',
              options: {
                data: `@import "${path.resolve(__dirname, 'app/theme.scss')}";`
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: false,
      template: 'public/index.html',
      inject: true,
      appVersion
    }),
    new ExtractTextPlugin({ filename: `style.${appVersion}.css`, allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
   
  ]
};
