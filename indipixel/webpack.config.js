'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cssExtractor  = new ExtractTextPlugin(
    './frontend/css/[name].css');
var stylExtractor  = new ExtractTextPlugin(
    './frontend/css/[name].css');

module.exports = {
    entry: [
        './frontend/css/main.styl',
        './frontend/css/fonts.styl'
    ],
    output: {
        path: "./public",
        filename: "[name].js"
    },

    module: {
        loaders: [{
            test: /\.pug$/,
            loader: "pug"
        }, {
        //     test: /\.css$/,
        //     loader: cssExtractor.extract('style!css')
        // }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.pug'
        }),
        new ExtractTextPlugin('./frontend/css/[name].css', {allChunks: true}),
        // stylExtractor,
        // cssExtractor
    ]
};