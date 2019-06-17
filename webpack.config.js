/* eslint-env node */

'use strict';

const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new copyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' },
            { from: 'src/css/app.css', to: 'app.css' }
        ])
    ]
};

