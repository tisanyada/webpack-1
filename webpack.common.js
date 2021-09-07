const path = require('path')
const HtmlWebpackConfig = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: "./src/main.js",
        vendor: './src/vendor.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name]-[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackConfig({
            inject: 'body',
            template: path.resolve(__dirname, 'src', 'template.html')
        }),
        new CleanWebpackPlugin()
    ]
}