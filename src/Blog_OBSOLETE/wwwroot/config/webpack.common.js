var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require("path");

module.exports = {
    entry: {
        'polyfills': './wwwroot/app/polyfills.ts',
        'vendor': './wwwroot/app/vendor.ts',
        'app': './wwwroot/app/main.ts'
    },
    output: {
        path: helpers.root('build'),
        publicPath: 'build/',        // path used internally.  Set to / for for prod
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
          {
              test: /\.ts$/,
              loaders: ['awesome-typescript-loader', 'angular2-template-loader']
          },

          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath:"/build/"})
          },

          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/i,
              loaders: [
                  'file?hash=sha512&digest=hex&name=assets/[hash].[ext]',
                  'image-webpack?optimizationLevel=7&interlaced=false'
              ]
          }
        ],


        preLoaders: [
         //All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      }),

      new HtmlWebpackPlugin({
          template: './wwwroot/index-webpack.html'
      }),

      //new webpack.optimize.UglifyJsPlugin({
      //      test: /\.(js|jsx)$/,
      //      minimize: true,
      //      sourceMap: true,
      //      mangle:false
      //}),

      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          hljs:"highlightjs"
      })
    ]
};