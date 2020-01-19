const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BaseConfig = require('./webpack.base.js');

module.exports = merge(BaseConfig, {
    devtool: '#eval-source-map',
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin([ './server/www' ], {
            root: path.join(__dirname, '../../'),
            verbose: true  // Write logs to console.
        })
    ]
});
