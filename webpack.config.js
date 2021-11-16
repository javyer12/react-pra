const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //archivo de entrada que encontrara webpack para realizar la configuracion necesaria.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', //se acompla con el html gracias al html-webpack-plugin
    publicPath: '/'
  }, //es donde compilaremos el resultado de la compilacion de webpack
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      //estas rules, son elementos que por medio de loader  nos permitiran detectar archivos js y como trabajar con ellos, y entonces  los html, imagenes y todos los recursos qeu nececitemos cuando enviemos el proyecto a produccion
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //no debemos de trabajar el compilado con este archivo por ello lo excluimos
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
    open: true,
  },
};
