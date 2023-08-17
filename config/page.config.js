
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/main.js',
        picwall: './src/views/picwall/main.js'
    },
    
    pages: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: './src/index.html',
            inject: true,
            outputPath: './dist'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/picwall/index.html',
            chunks: ['picwall'],
            template: './src/views/picwall/index.html',
            inject: true,
            outputPath: './dist'
        }),
    ],

    watchFiles: [
        './src/index.html',
        './src/views/picwall/index.html'
    ]
}