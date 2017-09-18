const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled commonsChunkPlugin for you. This allows your app to
 * load faster and it splits the modules you provided as entries across
 * different bundles!
 *
 * https://webpack.js.org/plugins/commons-chunk-plugin/
 *
 */

module.exports = {
	entry: {
		main: './src/app.js'
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		noParse: /(mapbox-gl)\.js$/,
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
		new UglifyJSPlugin({
			sourceMap: true,
			compress: {
				warnings: false,
				comparisons: false,	// don't optimize comparisons
			}
		})
	]
};
