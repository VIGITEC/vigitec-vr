const path = require('path');

module.exports = {
  entry: './server/easyrtc-server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
};
