const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.js');
const config = {
    // this is for node
    target: 'web',

    // entry point for the project
    entry: './src/client/client.js',

    // where to put generated output file.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};


module.exports = merge(baseConfig, config);