/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');

const {
  version,
  name,
  license,
  repository,
  author
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository?.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/js')
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/isms/'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CssMinimizerPlugin()
    ]
  },
  devServer: {
    port: 3004, // you can change the port,
    compress: true,
    hot: false,
    allowedHosts: 'all'
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true // <-- !!IMPORTANT!!
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        exclude: /node_modules/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192
          }
        }
      }
      // {
      //   test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
      //   exclude: /node_modules/,
      //   use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      // }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './assets', to: './assets' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new webpack.BannerPlugin(banner),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: path.resolve(__dirname, './src/favicon.ico')
    })
  ]
};
