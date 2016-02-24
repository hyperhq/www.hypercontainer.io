var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '../website/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname)
            }, {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css!postcss')
                loader: 'style-loader!css-loader!postcss-loader'
            }, {
                test: /imgs\/.*[\.png|\.svg]/,
                loader: 'url-loader?&limit=1000&name=/imgs/[name].[ext]'
            }, {
                test: /fonts\/.*[\.woff|\.woff2|\.eot|\.svg|\.ttf]/,
                loader: 'url-loader?&limit=1&name=/fonts/[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    plugins: [
        // new ExtractTextPlugin("index.css"),
        // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'cheap-module-eval-source-map'
};
