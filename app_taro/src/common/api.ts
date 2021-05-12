/*
 * @Author: sam.li
 * @Date: 2021-05-08 17:41:07
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 17:47:04
 */
import {
    get,
    post
} from '@/common/http'
export default {
    user: {
        login: (params) => get('/login', {})
    }
}