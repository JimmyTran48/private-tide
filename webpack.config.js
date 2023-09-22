const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './client/index.html'),
    }),
  ],
  devServer: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    historyApiFallback: true,
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, '/dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
