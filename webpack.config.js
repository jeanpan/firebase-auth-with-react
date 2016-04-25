var webpack = require('webpack');

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  // watch: true,
  resolve: {
    extensions: ['', '.js', '.es6']
  },
}
