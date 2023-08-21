const path = require("path");
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 打包静态文件夹
const { pages, entry, watchFiles } = require('./config/page.config');

module.exports = {
    entry,
    resolve: {
        alias: {
            'css': path.resolve(__dirname, '../', 'src/static/css/'),
            'font': path.resolve(__dirname, '../', 'src/static/font/'),
            'img': path.resolve(__dirname, '../', 'src/static/img/'),
            'js': path.resolve(__dirname, '../', 'src/static/js/'),
        }
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/[name].[chunkhash].js'
    },
    target: 'web',
    devServer: {
        watchFiles
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                            // `resourcePath` is original absolute path to asset
                            // `context` is directory where stored asset (`rootContext`) or `context` option
                
                            // To get relative path you can use
                            const relativePath = path.dirname(path.relative('src', path.relative(context, resourcePath)));
                            return `${relativePath}/${url}`;
                          },
                    },
                }]
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/static"),
                    to: path.resolve(__dirname, "./dist/static")
                },
            ],
        }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        ...pages
    ],
};