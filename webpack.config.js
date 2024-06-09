const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash:8].js',
    publicPath: '/',
  }
};