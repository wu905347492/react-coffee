const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: '8002',
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/v1': {
        target: 'http://m82-dev.hexcloud.cn',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
