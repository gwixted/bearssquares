var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index-bundle.js"
  },
  resolve: {
    extensions: ['','.js','.jsx','.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ],
    rules: [
      { test: /\.json$/, loader: "json", include: './' }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
