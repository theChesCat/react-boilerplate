import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

export default {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            /*{
                test: /\.js$/,
                exclude: ['node_modules'],
                loaders: ['babel-loader', 'eslint-loader']
            },*/
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'react'
                            ]
                        }
                    },
                    { loader: 'eslint-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader?sourceMap',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        { loader: 'postcss-loader' }
                    ]
                })
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}
