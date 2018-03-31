/*eslint-disable*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: [
    './src/index.js',
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loaders: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'A React Quickstarter',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        collapseInlineTagWhitespace: true
      },
      inject: false,
      template: require('html-webpack-template'),
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.'
        }
      ],
      mobile: true,
      lang: 'pt-BR',
      bodyHtmlSnippet: "<div id='root'></div><link href='https://fonts.googleapis.com/css?family=Nunito:300,400,700' rel='stylesheet'>",
    }),
    //if you want to pass in options, you can do so:
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};