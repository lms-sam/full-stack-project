/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:00:48
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 17:04:30
 */
var utils = require('./utils');
// var wxRequest = require('./wxRequest');
import Taro from '@tarojs/taro'

export default function dispatchRequest(config) {
    // 合并处理 baseURL
    if (config.baseURL && !utils.isAbsoluteURL(config.url)) {
        config.url = utils.combURL(config.baseURL, config.url);
    }

    // 合并处理 headers
    config.header = utils.merge(
        {},
        config.header.common || {},
        config.header[config.method] || {},
        config.header || {}
    );
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'].forEach(method => {
        delete config.header[method];
    });
    return Taro.request(config);
};
