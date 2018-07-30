require('dotenv').config(); // Loads environment variables from a .env file into process.env
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const OfflinePlugin = require('offline-plugin');
const rules = require('./rules');
const config = require('../application/settings');

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
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      configuration: path.resolve(__dirname, '../../configurations/'),
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
    new BundleAnalyzerPlugin({
      analyzerHost: HOST,
    }),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'css/[name].[hash].css',
      allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new DashboardPlugin(),
    new CopyWebpackPlugin([
      { from: './static/robots.txt', to: '' },
    ], {
      copyUnmodified: false,
    }),
    (config.pwa.assetsManifest.enabled &&
      new ManifestPlugin({
        fileName: config.pwa.assetsManifest.fileName,
      })
    ),
    new HtmlWebpackPlugin({
      template: './source/index.hbs',
      favicon: './static/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    (config.pwa.enabled &&
      new OfflinePlugin({
        publicPath: '/',
        relativePaths: false,
        ServiceWorker: {
          output: config.pwa.serviceWorkerName,
          events: true,
          publicPath: `/${config.pwa.serviceWorkerName}`,
          navigateFallbackURL: '/',
        },
        AppCache: false,
      })
    ),
    /* new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'js/file.js',
            ],
            append: true,
        }), */
  ],
};
