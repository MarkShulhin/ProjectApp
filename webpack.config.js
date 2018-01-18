const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	devtool: debug ? 'inline-sourcemap' : false,
	entry: ['babel-polyfill', './index.js'],
	plugins: debug ?
		[
			new ExtractTextPlugin('styles.css'),
		] :
		[
			new webpack.NoEmitOnErrorsPlugin(),
			new UglifyJsPlugin({
				parallel: true,
			}),
			new ExtractTextPlugin('styles.css'),
		],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules(?!\/webpack-dev-server)/,
				query: {
					presets: ['react', 'env'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread',
					],
				},
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options: {
							minimize: true,
							sourceMap: debug,
						},
					},
				}),
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
