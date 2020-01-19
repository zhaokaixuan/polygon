const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BaseConfig = require('./webpack.base.js');
const { rootPath } = require('./config')
const templateId = global.process.env.templateId;

module.exports = merge(BaseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['./' + templateId], {
			root: rootPath,
			verbose: true  // Write logs to console.
		})
    ]
});
