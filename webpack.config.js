const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    watchFiles: ['./src/**/*', './dist/**/*'],
    hot: true,
    port: 9000,
  },
};