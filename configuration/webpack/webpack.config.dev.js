
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const rules = require('./webpack.rules');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: {
    app:
      [
        'babel-polyfill',
        'react-hot-loader/patch',
        './source/application.jsx',
      ],
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../public'),
    filename: 'assets/js/[name].bundle.js',
    chunkFilename: 'assets/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, '../../source/styles/'),
      static: path.resolve(__dirname, '../../static'),
      components: path.resolve(__dirname, '../../source/app/components'),
      containers: path.resolve(__dirname, '../../source/app/containers'),
      decorators: path.resolve(__dirname, '../../source/app/decorators'),
      hoc: path.resolve(__dirname, '../../source/app/hoc'),
      screens: path.resolve(__dirname, '../../source/app/screens'),
      services: path.resolve(__dirname, '../../source/app/services'),
    },
  },
  module: {
    rules,
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  target: "web",
  devServer: {
    contentBase: './public',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'assets/css/[name].[hash].css',
      allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new DashboardPlugin(),
    new CopyWebpackPlugin([
      { from: './static',
        to: 'assets',
        ignore:
        [
          '*.css',
          '*.scss',
          '*.sass',
          '*.txt',
          'favicon.ico',
        ]
      },
      { from: './static/robots.txt', to: '' },
    ], {
      copyUnmodified: false,
    }),
    new HtmlWebpackPlugin({
      template: './source/index.hbs',
      favicon: './static/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    /* new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'js/file.js',
            ],
            append: true,
        }), */
  ],
};
