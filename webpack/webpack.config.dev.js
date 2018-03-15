
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
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'assets/js/[name].bundle.js',
    chunkFilename: 'assets/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      scss: path.resolve(__dirname, 'scss/'),
      vendors: path.resolve(__dirname, 'static/vendors/'),
    },
  },
  module: {
    rules,
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 250000,
    maxEntrypointSize: 4500000,
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new BundleAnalyzerPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'assets/css/[name].[contenthash].css',
      allChunks: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new DashboardPlugin(),
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
