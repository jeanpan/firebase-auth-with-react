module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
          }
        }
      ]
  }
}
