const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.jsx',

  output: {
    filename: 'dist/bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'dist/index.html',
      template: 'src/index.html',
      inject: false
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          comments: false
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],

    root: [
      path.resolve(process.cwd()),
      path.join(process.cwd(), './src'),
      path.join(process.cwd(), './node_modules')
    ],
  }
};

module.exports = config;
