/*
 * @Date: 2020-07-05 22:07:07
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 10:38:56
 */
import NodePath from 'path';

module.exports = function(){
    return {
        '@@': NodePath.resolve(__dirname, '../../', 'src/utils'),
        '@': NodePath.resolve(__dirname, '../../', 'src')
    }
}