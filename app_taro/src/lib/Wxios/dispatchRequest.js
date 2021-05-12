/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:00:48
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 17:49:55
 */
var utils = require('./utils');
// var wxRequest = require('./wxRequest');
import Taro from '@tarojs/taro'

export default function dispatchRequest(config) {
    console.log(config);
    // 合并处理 baseURL
    if (config.baseURL && !utils.isAbsoluteURL(config.url)) {
        config.url = utils.combURL(config.baseURL, config.url);
    }

    // 合并处理 headers
    config.headers = utils.merge(
        {},
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers || {}
    );
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'].forEach(method => {
        delete config.headers[method];
    });
    return Taro.request(config);
};
