/*
 * @Author: sam.li
 * @Date: 2021-05-08 09:18:19
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 10:46:20
 */
const getIPAdress = require('./utils/getIPAdress');
const cdnVersion = 'v4';
const projectEnv = process.env.projectEnv || 'dev';
const publicPath = `http://${getIPAdress()}:8100`; // cdn路径
const assetHost = `${publicPath}/asset`; // 静态资源路径


module.exports = {
	env: {
		NODE_ENV: '"production"'
	},
	defineConstants: {
		imgHost: `"${assetHost}/images"`,
		fontHost: `"${assetHost}/fonts"`,
		appname: `"botao"`,
		projectEnv: `"${projectEnv}"`
	},
	mini: {},
	h5: {
		/**
		 * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
		 * 参考代码如下：
		 * webpackChain (chain) {
		 *   chain.plugin('analyzer')
		 *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
		 * }
		 */
		miniCssExtractPluginOption: {
			filename: 'css/[name][hash:8].css',
			chunkFilename: 'css/[id][hash:8].css'
		},
		esnextModules: ['taro-ui'],
		output: {
			filename: 'js/[name].[hash:8].js',
			chunkFilename: 'js/[name].[chunkhash:8].js'
		},
		publicPath: publicPath,
	}
}