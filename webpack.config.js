var webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/app/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'prettier-loader' },
                    { loader: 'eslint-loader' }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src/app'),
            path.resolve('./public'),
            'node_modules'
        ],
        extensions: ['.json', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React boilerplate',
            filename: path.resolve(__dirname, 'public/index.html'),
            template: path.resolve(__dirname, 'src/app/index.html'),
            hash: true
        })
    ]
};
