const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const rules = require('./rules');
const settings = require('../application/settings');

let configuration = {
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
      name: false,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 2,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  target: 'web',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerHost: settings.ssr.server.host,
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
  ].filter(plugin => plugin !== false), // remove 'false' output from conditional assertions
};

if (!settings.ssr.enabled) {
  configuration = Object.assign(
    {},
    configuration,
    {
      devServer: {
        contentBase: path.join(__dirname, '../../public'),
        open: true,
        hot: true,
        inline: true,
        noInfo: true,
        compress: true,
        historyApiFallback: true,
        port: settings.ssr.server.port,
        host: settings.ssr.server.host,
      },
    },
  );
}

module.exports = configuration;
