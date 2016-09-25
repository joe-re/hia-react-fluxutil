const path = require('path');

const config = {
  entry: './src/index.jsx',

  output: {
    filename: 'dist/bundle.js',
  },

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
