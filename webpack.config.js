const path                      = require('path')
const webpack                   = require('webpack')
const htmlWebpackPlugin         = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin      = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions:['.tsx', '.ts', '.js'],
    fallback: {
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      asset: require.resolve("assert"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
}
