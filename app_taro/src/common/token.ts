/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:22:10
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 16:25:25
 */
import Taro from '@tarojs/taro'

/**
 * 设置token缓存
 * 传入登录接口返回的data，登录态token 过期时间expirationTime
 * {"token":"653222198204028937", "expirationTime"}
 */
export function setToken(token, time) {
    time = time || new Date().getTime();
    Taro.setStorageSync('access_token', {
        token,
        expirationTime: time + 29 * 60 * 1000 // 有效期为30分钟。
    });
}

/**
 * 删除token
 */
export function removeToken() {
    Taro.removeStorageSync('access_token');
}

/**
 * 读取token 缓存
 */
export function getToken() {
    let cacheTokenObject = Taro.getStorageSync('access_token');
    const nowTime = new Date().getTime();
    if (cacheTokenObject.expirationTime > nowTime) { // 在有效期内，使用token，刷新有效期
        setToken(cacheTokenObject.token, nowTime);
        return cacheTokenObject.token
    } else {
        removeToken();
        return ''
    }
}

export default {
    set: setToken,
    get: getToken,
    remove: removeToken
}
