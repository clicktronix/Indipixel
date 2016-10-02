/**
 * Created by Владислав on 02.10.2016.
 */
'use strict'

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/frontend',
    entry: './main',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    module: {

        loaders: [{
            // test: /\.js$/,
            // loader: "babel?presets[]=es2015",
        }, {
            test: /\.pug$/,
            loader: "pug",
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test: /\.(png|jpg|svg|ttf|eof|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};