/*
 * @Date: 2019-11-28 17:59:29
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 10:39:06
 */
const NodePath = require('path');
const resolve = function(...pathnames){
    return NodePath.resolve(__dirname,'../../',...pathnames);
}

module.exports ={
    resolve
}