const path = require('path'),
  settings = require('./settings');

module.exports = {
  entry: {
    App: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build/js"),
    filename: "scripts-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production'
}