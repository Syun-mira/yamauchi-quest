const path = require('path');

module.exports = {
  entry: {
    js: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8000,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};