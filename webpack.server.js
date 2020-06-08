const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    // this is for node
    target: 'node',

    // entry point for the project
    entry: './src/index.js',

    // where to put generated output file.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);