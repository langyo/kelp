var path = require('path');
var webpack = require("webpack");

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    unknownContextCritical : false,
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    inline: true,
    hot: true,
    filename: 'bundle.js',
    publicPath: '/public/',
    port: 16000
  },
  
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])
  ]
};
