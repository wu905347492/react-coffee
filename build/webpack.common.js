/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const resolvePath = (_path) => path.resolve(__dirname, '..', _path);

module.exports = {
  entry: {
    app: resolvePath('src/index.tsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolvePath('dist'),
  },
};
