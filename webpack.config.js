var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        port: 3000,
        proxy: {
            '/': 'http://localhost:8080'
        }
    },
    devtool: "source-map",
    plugins: [
        new hwp({ template: path.join(__dirname, '/src/index.html') })
    ]
}