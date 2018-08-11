const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = 1234;


module.exports = {
    entry: {
        babelPolyfill: 'babel-polyfill',
        vendors: ['react', 'react-dom', 'react-router'],
        bundle: [path.join(__dirname, './client/app/app.js'), 'webpack/hot/only-dev-server']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        noInfo: true,
        inline: true,
        publicPath: '/',
        stats: {
            assets: false,
            children: false,
            chunks: false,
            colors: true
        },
        port: process.env.PORT || PORT,
        disableHostCheck: true
    },
    output: {
        path: path.join(__dirname, '../dist/dev/'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[id].[hash:8].js',
        publicPath: '/',
        sourceMapFilename: 'debugging/[file].map',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true,
        }),
    ]
};


