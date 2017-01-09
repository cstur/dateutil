var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  	entry: './src/index.js',
  	output: {
	  	filename: 'bundle.js' //编译后的文件名字
  	},
  	module: {
	  	loaders: [{
				test: /\.js$/,
				loader: 'babel?presets=es2015'
		  	}, {
			  	test: /\.css$/,
			  	loaders: ['style', 'css', 'autoprefixer']
		  	}, {
			  	test: /\.less/,
			  	loaders: ['style', 'css', 'autoprefixer', 'less'],
		  	}, {
			  	test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
			  	loader: 'file-loader?name=[hash].[ext]'
		  	}, {
			  	test: /\.(png|jpg)$/,
			  	loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
		  	}
	  	]
  	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
		new HtmlWebpackPlugin({
			template: 'test/index.html',
			inject: 'head'
		})
	],
  	resolve: {
	  extensions: ['', '.js', '.jsx'] //后缀名自动补全
  	}
};