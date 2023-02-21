const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: [path.resolve('src', 'js', 'app.js')],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
};