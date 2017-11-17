'use strict';
require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap&minimize&localIdentName=[local]___[hash:base64:5]!postcss-loader!sass-loader?outputStyle=expanded' }),
  exclude: ['node_modules'],
});

module.exports = {
    entry: {
        'app':
        [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index.jsx',
        ]
    },
    devtool: 'cheap-module-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'assets/js/[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            scss: path.resolve(__dirname, 'src/scss/'),
            vendors: path.resolve(__dirname, 'static/vendors/'),
        },
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: './public',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
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
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          chunks: ['app'],
          minChunks: ({ resource }) => /node_modules/.test(resource),
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'lib',
          chunks: ['app'],
          minChunks: ({ resource }) => /src\/app\/lib\/vendor/.test(resource),
        }),
        new BundleAnalyzerPlugin(),
        new ExtractTextPlugin({
            filename: 'assets/css/main.css',
            allChunks: true
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
            copyUnmodified: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.hbs',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true
            },
        }),
        /*new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'js/file.js',
            ],
            append: true,
        }), */
    ]
};