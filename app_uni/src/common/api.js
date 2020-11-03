/*
 * @Author: sam.li
 * @Date: 2020-11-02 17:21:05
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 17:22:48
 */
import http from './http'

export default {
    user: {
        login: (data, options) => http.post('weapp/login', data, options), // 用户登录
    }
}