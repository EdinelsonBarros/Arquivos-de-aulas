const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        //...
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress:true,
        port: 9000,
        
    },
    optimization: {
        minimizer: [
            new cssMinimizerWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        
    ],
    module: {
        rules: [{ test: /\.s?[ac]ss$/, 
        use:[
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ] 
        }],
    },
};