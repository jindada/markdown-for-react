var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry:{
        app:[
            path.resolve(__dirname,'example/index.js')
        ],
    },
    output:{
        path:path.resolve(__dirname,'example'),
        filename:'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:9001',
              changeOrigin: true
            }
         }
    },
    module:{
        loaders:[
            {
                loader: 'babel',
                exclude: [ path.resolve(__dirname,'node_modules') ],
                test: /\.(js|jsx)$/,
                query:{
                    presets: ['es2015','stage-0','react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve:{
        extensions:['','.js','.jsx','.json']
    }
};