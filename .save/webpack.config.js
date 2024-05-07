var path = require('path');

module.exports = {
  entry: './html/test.js',
  output: {
    path: path.resolve(__dirname),
    filename: '_bundle.js'
  }
};
