const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	devtool: debug ? 'inline-sourcemap' : false,
	entry: './index.js',
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
				test: /.(ico)(\?[a-z0-9]+)?$/,
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
	},
	output: {
		path: `${__dirname}/src/`,
		filename: 'bundle.min.js',
	},
	plugins: debug ? [] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
