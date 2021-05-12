/*
 * @Author: sam.li
 * @Date: 2021-05-08 17:41:07
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 17:07:26
 */
import {
    get,
    post
} from '@/common/http'
export default {
    user: {
        login: (params) => post('/weapp/login', params)
    }
}