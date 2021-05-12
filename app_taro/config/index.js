/*
 * @Author: sam.li
 * @Date: 2021-05-08 09:18:19
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 14:55:59
 */
const NodePath = require('path');
const getAlias = require('./utils/getAlias');
const config = {
	projectName: 'taro-template2.0',
	date: '2021-5-8',
	designWidth: 750,
	deviceRatio: {
		'640': 2.34 / 2,
		'750': 1,
		'828': 1.81 / 2
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	babel: {
		sourceMap: true,
		presets: [
			['env', {
				modules: false
			}]
		],
		plugins: [
			'transform-decorators-legacy',
			'transform-class-properties',
			'transform-object-rest-spread',
			['transform-runtime', {
				'helpers': false,
				'polyfill': false,
				'regenerator': true,
				'moduleName': 'babel-runtime'
			}]
		]
	},
	plugins: [
		'@tarojs/plugin-sass',
		'@tarojs/plugin-terser'
	],
	defineConstants: {},
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {}
			},
			url: {
				enable: true,
				config: {
					limit: 10240 // 设定转换尺寸上限
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		}
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'static',
		postcss: {
			autoprefixer: {
				enable: true,
				config: {
					browsers: [
						'last 3 versions',
						'Android >= 4.1',
						'ios >= 8'
					]
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		},
		webpackChain(chain, webpack) {
			if (process.env.projectEnv != 'pro') {
				chain.plugin('vConsole').use(require('vconsole-webpack-plugin'), [{
					enable: true
				}])
			}
			chain.plugin('filemanager').use(require('filemanager-webpack-plugin'), [{
				onEnd: {
					copy: [{
						source: './asset/**/*.*',
						destination: 'dist/asset'
					}]
				},
			}])
		}
	},
	outputRoot: process.env.TARO_ENV === 'weapp' ? `output/${process.env.TARO_ENV}` : 'dist',
	alias: getAlias(),
	sass: {
		resource: [
			'src/styles/variable.scss',
			'src/styles/mixins.scss'
		],
		projectDirectory: NodePath.resolve(__dirname, '..')
	},
}

module.exports = function (merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'))
	}
	return merge({}, config, require('./prod'))
}