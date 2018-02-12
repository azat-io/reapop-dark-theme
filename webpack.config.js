const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  entry: resolveApp('index.js'),
  output: {
    path: resolveApp('lib'),
    filename: 'index.js',
    library: 'reapopDarkTheme',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
