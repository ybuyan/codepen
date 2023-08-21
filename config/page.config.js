
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = './src/views'
const htmlFolderPath = 'views'

const chunks = [
    'index', 
    'picwall', 
    'rotationMeun', 
    'focusRotationChart', 
    'sunAndMoon', 
    'watermelonClock'
]
const pages = []
const entry = {}
const watchFiles = []
chunks.forEach(item => {
    if(item !== 'index') {
        entry[item] = `${path}/${item}/main.js`
        pages.push(
            new HtmlWebpackPlugin({
                filename: `${htmlFolderPath}/${item}/index.html`,
                chunks: [item],
                template: `${path}/${item}/index.html`,
                inject: true,
                outputPath: './docs'
            })
        )
        watchFiles.push(`${path}/${item}/index.html`)
    } else {
        entry['index'] = './src/main.js'
        pages.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: './src/index.html',
                inject: true,
                outputPath: './docs'
            })
        )
        watchFiles.push('./src/index.html')
    }
})

module.exports = {
    entry,
    pages,
    watchFiles
}