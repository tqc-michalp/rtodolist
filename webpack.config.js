/* eslint-env node */

'use strict';

const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.scss?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                 'style-loader', require.resolve('css-loader'), require.resolve('sass-loader')
                ]
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new copyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])
    ]
};

