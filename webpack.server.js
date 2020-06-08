const path = require('path');
module.exports = {
    // this is for node
    target: 'node',

    // entry point for the project
    entry: './src/index.js',

    // where to put generated output file.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',{targets: {broswer:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};