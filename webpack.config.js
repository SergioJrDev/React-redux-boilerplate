/*eslint-disable*/
const path = require('path');
const indexHtml = path.join(__dirname, 'src/index.html');

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: [
    './src/index.js',
    indexHtml,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080,
    open: true,
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: indexHtml,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
              interpolate: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpg$/,
        loaders: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ]
  }
};
