/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @email: minshen_li@163.com
 * @Date: 2021-05-07 02:07:47
 * @LastEditTime: 2021-05-07 02:10:41
 * @motto: Still water run deep
 * @Description: 全局变量
 * @FilePath: \weap-taro\src\common\globalData.ts
 */

let globalData = {};
const hasOwn = function(obj: object, key: string) {
    return !!Object.prototype.hasOwnProperty.call(obj, key)
}
export default {
    set: function(key: string, value: any) {
        globalData[key] = value
    },
    get: function(key: string) {
        try {
            return globalData[key]
        } catch(e){
            console.warn(e)
        }
    },
    remove: function(key: string) {
        if (hasOwn(globalData, key)) {
            delete globalData[key]
        }
    }
}
