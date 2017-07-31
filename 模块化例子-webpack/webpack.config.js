const path = require('path');	//如果是在node_modules下就不用加./
const css = require('extract-text-webpack-plugin');	//设置css
const html = require('html-webpack-plugin');	//html模板
module.exports = {
	//入口
	entry:{
		app:'./two'
	},
	//出口
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].js'
	},
	//模块
	module:{
		rules:[
		//设置bable->ES6转ES5
			{
				test:/\.js$/,
				use:'babel-loader'
			},
			//设置css
			{
				test:/\.css$/,
				use:css.extract({
					fallback: "style-loader",
          			use: "css-loader"
				})
				/*use:[
					{loader:"style-loader"},
					{loader:"css-loader"}	
				]*/
			}
		]
	},
	plugins:[
		//分离css重新new
		new css('app.css'),
		//设置css模板重新new
		new html({
			filename:'1.html',
			templete:'index.html'
		})
	]
		
}
