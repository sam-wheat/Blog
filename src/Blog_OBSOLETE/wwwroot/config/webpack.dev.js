var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    plugins: [
      new ExtractTextPlugin('[name].css'),
      new webpack.DefinePlugin({
          'process.env': {
              'ENV': JSON.stringify(ENV)
          }
      }),

      new webpack.SourceMapDevToolPlugin({
          filename:'[file].map', 
          moduleFilenameTemplate: "[resource-path]", 
          fallbackModuleFilenameTemplate: "[resource-path]?[hash]"
      })

    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});