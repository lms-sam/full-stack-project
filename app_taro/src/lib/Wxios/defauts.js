/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:00:48
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 17:04:10
 */
var utils = require('./utils.js');

var defaults = {
    timeout: 0,
    header: {
    }
};
utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
    defaults.header[method] = {};
});

module.exports = defaults;
