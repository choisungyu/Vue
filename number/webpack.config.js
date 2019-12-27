const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.vue','.js'],
    },
    entry: {
        // app: './main.js',
        app: path.join(__dirname,'main.js'),

    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        }],

    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname,'dist'),
    },
};