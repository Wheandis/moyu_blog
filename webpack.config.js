const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: './src/tpl.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            _ajaxBase_: '""'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        proxy: {
            '/': {
                target: 'http://tuohuang.yl.com/yanghj/blog/',
                secure: false,
                changeOrigin: true
            }
        },
        disableHostCheck: true
    }
}