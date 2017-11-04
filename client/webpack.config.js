const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const staticFolder = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: staticFolder,
    publicPath: 'http://localhost:8080/',
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve('./app'),
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg$/, loader: 'url-loader?limit=10' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpeg' },
      {
        test: /(\.scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'sass-loader?sourceMap',
            options: {
              data: `@import "${path.resolve(__dirname, 'app/theme.scss')}";`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: false,
      template: 'public/index.html',
      inject: true
    }),
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
