const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
            (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
            'css-loader', 
            'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
            'file-loader?name=./images/[name].[ext]',
            {
                loader: 'image-webpack-loader',
                options: { 
                    bypassOnDebug:  true,  
                    disable:  process.env.NODE_ENV === 'development',
                }
            },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=vendor/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
   }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};