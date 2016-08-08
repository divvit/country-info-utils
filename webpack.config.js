var path = require('path')

module.exports = {
  debug: false,

  entry: {
    index: './src/index.js',
    test: './test/index.js'
  },

  target: 'web',

  devtool: 'source-map',

  output: {
    path: './build',
    filename: '[name].js',
    library: 'country-info-utils',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/lib'
    ]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './test')
      ],
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }

}
