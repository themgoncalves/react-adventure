require('dotenv').config(); // Loads environment variables from a .env file into process.env
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const path = require('path');
const rules = require('./webpack.rules');

module.exports = {
  entry: {
    app:
    [
      'babel-polyfill',
      'react-hot-loader/patch',
      './source/application.jsx',
    ],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../public'),
    filename: 'js/[name].bundle.[hash].js',
    chunkFilename: 'js/[name].[hash].[chunkhash].chunk.js',
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      configuration: path.resolve(__dirname, '../../configuration/'),
      styles: path.resolve(__dirname, '../../source/styles/'),
      static: path.resolve(__dirname, '../../static'),
      actions: path.resolve(__dirname, '../../source/app/actions'),
      components: path.resolve(__dirname, '../../source/app/components'),
      containers: path.resolve(__dirname, '../../source/app/containers'),
      decorators: path.resolve(__dirname, '../../source/app/decorators'),
      hoc: path.resolve(__dirname, '../../source/app/hoc'),
      reducers: path.resolve(__dirname, '../../source/app/reducers'),
      screens: path.resolve(__dirname, '../../source/app/screens'),
      services: path.resolve(__dirname, '../../source/app/services'),
    },
  },
  module: {
    rules,
  },
  performance: {
    hints: 'error',
    maxAssetSize: 250000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },
  target: 'web',
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'css/[name].[hash].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: './static/robots.txt', to: '' },
    ], {
      copyUnmodified: false,
    }),
    new HtmlWebpackPlugin({
      template: './source/index.hbs',
      favicon: './static/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    /* new HtmlWebpackIncludeAssetsPlugin({
        assets: [
            'js/file.js',
        ],
        append: true,
    }), */
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
};
