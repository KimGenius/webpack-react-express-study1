
module.exports = {
	entry: [
		'./src/index.js',
		'webpack-dev-server/client?http://0.0.0.0:3001',
		'webpack/hot/only-dev-server'
	],
	output: {
		path: '/',
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
		filename: 'bundle.js',
		publicPath: '/',
		historyApiFailback: true,
		contentBase: './public',
		proxy: {
			"**": "http://localhost:3000"
		}
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot','babel-loader'+JSON.stringify({
					cacheDirectory: true,
					presets:['es2015','react']
				})],
				exclude: /node_modules/
			}
		]
	}
};
