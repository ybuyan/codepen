
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/main.js',
        picwall: './src/views/picwall/main.js',
        rotationMeun: './src/views/rotationMeun/main.js',
        focusRotationChart: './src/views/focusRotationChart/main.js',
        sunAndMoon: './src/views/sunAndMoon/main.js',
        watermelonClock: './src/views/watermelonClock/main.js'
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
        new HtmlWebpackPlugin({
            filename: 'views/rotationMeun/index.html',
            chunks: ['rotationMeun'],
            template: './src/views/rotationMeun/index.html',
            inject: true,
            outputPath: './dist'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/focusRotationChart/index.html',
            chunks: ['focusRotationChart'],
            template: './src/views/focusRotationChart/index.html',
            inject: true,
            outputPath: './dist'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/sunAndMoon/index.html',
            chunks: ['sunAndMoon'],
            template: './src/views/sunAndMoon/index.html',
            inject: true,
            outputPath: './dist'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/watermelonClock/index.html',
            chunks: ['watermelonClock'],
            template: './src/views/watermelonClock/index.html',
            inject: true,
            outputPath: './dist'
        }),
    ],

    watchFiles: [
        './src/index.html',
        './src/views/picwall/index.html',
        './src/views/rotationMeun/index.html',
        './src/views/focusRotationChart/index.html',
        './src/views/watermelonClock/index.html',
        './src/views/sunAndMoon/index.html',
    ]
}