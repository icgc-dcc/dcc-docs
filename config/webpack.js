var webpack = require('webpack');

var PROD = process.env.NODE_ENV === 'production';

var plugins = [
  new webpack.optimize.CommonsChunkPlugin("commons-chunk.js"),

  // Can't uglify yet, dictionary viewer needs to use ngannotate
  // PROD && new webpack.optimize.UglifyJsPlugin({
  //   beautify: false,
  //   mangle: { screw_ie8 : false },
  //   compress: { screw_ie8: true },
  //   comments: false
  // }),
].filter(Boolean);

module.exports = {
  entry: {
    'dictionary-viewer': './src/js/dictionary-viewer',
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
  plugins: plugins,
  node: {
    global: 'window',
    crypto: 'empty',
    process: false,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}