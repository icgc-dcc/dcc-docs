var webpack = require('webpack');

module.exports = {
  entry: {
    'dictionary-viewer': './js/dictionary-viewer',
    // 'api-endpoints': './js/api-endpoints',
    // 'icgc-common': './js/icgc-common',
  },
  output: {
    filename: '[name].js',
    path: './theme/js-out',
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
        { test: /d3-tip\/index\.js/, loader: 'imports?define=>false'},
    ],
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin("commons-chunk.js")],
  node: {
    global: 'window',
    crypto: 'empty',
    process: false,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}