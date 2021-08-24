const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: "node",
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve('./'),
  },
  devServer: {
    after: () => {
      console.log('runned ded')
    }
  }
};

console.log("build as", module.exports.mode)