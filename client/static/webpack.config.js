const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    watch: false,
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./public")
    },
//    optimization: {
//        minimizer: [new UglifyJsPlugin(), new TerserPlugin({
//            sourceMap: true, // Must be set to true if using source-maps in production
//            terserOptions: {
//                compress: {
//                    drop_console: true,
//                     // remove warnings
//                    warnings: false,
//                },
//            },
//        })],
//    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            // { test: /\.png$/, loader: "url-loader?limit=100000" },
            // { test: /\.jpg$/, loader: "file-loader" },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader" ,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
//    devServer: {
//        historyApiFallback: true,
//    },
//    plugins: [
//        new HtmlWebpackPlugin({
//            template: "src/index.html"
//        })
//    ]
};