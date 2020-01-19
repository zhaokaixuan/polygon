const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { rootPath } = require('./config')

const templateId = global.process.env.templateId;
const content = global.process.env.content;
console.log(`------------------------信息-----------------------------------`)
console.log(`模板id：${templateId}`)
console.log(`模板文件名：${content}`)
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('============================start===============================');

const extractCSS = new MiniCssExtractPlugin({
	filename: 'static/css/[name]-css-[chunkHash:5].css'
});

module.exports = {
	entry: {
		app: './src/views/'+content+'/index.js',
		// vendor: ['vue', 'vue-router', 'vuex']
	},
	output: {
		filename: 'static/js/[name]-[chunkHash:5].js',
		path: rootPath + templateId,
		publicPath: './'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@Lib': path.resolve(__dirname, './../lib'),
			'@Components': path.resolve(__dirname, './../src/components'),
			'@Utils': path.resolve(__dirname, './../utils')
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minChunks: 1,
			cacheGroups: {
				vendors: {
					name: 'vendors',
					chunks: 'all',
					test: function (module) {
						return (
							module.context &&
							(module.context.indexOf('vue') !== -1 ||
								module.context.indexOf('vuex') !== -1)
						);
					},
					reuseExistingChunk: true
				},
				elementUI: {
					name: 'elementUI',
					chunks: 'all',
					test: /element/,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
				// use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
				// use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							outputPath: 'static/images/'
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		extractCSS,
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/views/'+content+'/index.html',
			title: 'template-graph',
			inject: true,
			favicon: '',
		}),
		new FriendlyErrorsPlugin()
	]
};
