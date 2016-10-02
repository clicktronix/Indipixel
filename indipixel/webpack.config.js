/**
 * Created by Владислав on 02.10.2016.
 */
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./frontend/main",
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
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};