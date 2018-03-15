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

rules.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?sourceMap&minimize!postcss-loader!sass-loader?outputStyle=expanded',
  }),
  exclude: ['node_modules'],
});


module.exports = {
  entry: {
    app:
    [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, '../public'),
    filename: 'assets/js/[name].bundle.[hash].js',
    chunkFilename: 'assets/js/[name].[hash].[chunkhash].chunk.js',
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      static: path.resolve(__dirname, './static'),
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
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
  },
  target: "web",
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
      enabled: process.env.NODE_ENV === 'production',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'assets/css/[name].[contenthash].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'assets' },
    ], {
      ignore:
            [
              '*.css',
              '*.scss',
              '*.sass',
            ],
      copyUnmodified: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
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
