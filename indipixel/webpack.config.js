'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './frontend/css/main.styl',
    },
    output: {
        path: "./public",
        filename: "[name].js"
    },

    module: {
        loaders: [{
            test: /\.pug$/,
            loader: "pug"
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=./img/[name].[ext]'
        }, {
            test: /\.(svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=./fonts/[name].[ext]'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.pug'
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ]
};