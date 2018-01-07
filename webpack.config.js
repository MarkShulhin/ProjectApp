const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	devtool: debug ? 'inline-sourcemap' : false,
	entry: './index.js',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			favicon: './img/favicon.ico',
			filename: 'index.html',
			inject: 'body',
		}),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader',
					'css-loader',
				],
			},
			{
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
					},
				}],
			},
			{
				test: /.(svg)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'svg/',
					},
				}],
			},
			{
				test: /.(ico|jpg|png)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/',
					},
				}],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'src'),
		port: 8090,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
};
