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
                presets: ['es2015', 'react', 'stage-1']
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: './src/tpl.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            // _ajaxBase_: '"http://tuohuang.yl.com/yanghj/tuohuang.yl.com"'
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}