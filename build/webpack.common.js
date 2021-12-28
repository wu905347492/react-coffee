const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isProd } = require('./constants');

const resolvePath = (_path) => path.resolve(__dirname, '..', _path);

module.exports = {
  entry: {
    app: resolvePath('src/index.tsx'),
  },
  output: {
    filename: `js/[name]${isProd ? '.[hash:8]' : ''}.js`,
    path: resolvePath('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
  ],
};
