const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
  // {
  //   enforce: 'pre', // To be safe, you can use enforce: "pre" section to check source files, not modified by other loaders (like babel-loader)
  //   test: /\.jsx?$/,
  //   exclude: /(node_modules|bower_components|public\/)/,
  //   loader: 'eslint-loader',
  // },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1'],
    exclude: ['node_modules'],
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?sourceMap&minimize!postcss-loader!sass-loader?outputStyle=expanded',
    }),
    exclude: /(node_modules|bower_components)/,
    include: [
      path.resolve(__dirname, '../../source/styles'),
    ],
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.(jpe?g|png|gif|svg|pdf|ico)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true,
        },
      },
    ],
  },
];
