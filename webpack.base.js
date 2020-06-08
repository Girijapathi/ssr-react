module.exports = {
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