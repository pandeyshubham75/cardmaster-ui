const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', 'index.html'),
                    to: path.resolve(__dirname, 'dist', 'index.html')
                }
            ]
        })
    ]
}