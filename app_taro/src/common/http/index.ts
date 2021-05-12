/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:02:21
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 17:59:06
 */
import wxios from '@/lib/Wxios'
import requestInterceptor from './requestInterceptor'
import responseInterceptor from './responseInterceptor'
import { baseUrl } from '@/common/env'

const http = wxios.create({
    baseURL: baseUrl,
    timeout: 120000,
    headers: {
        common: {
            'Content-Type': 'application/json',
            Accept: '*/*'
        }
    },
});

requestInterceptor(http);
responseInterceptor(http);
function request(url: string, option: object) {
    return http(url, option)
}
function get(url:string, params: object) {
    return request(url, {
        method: 'get',
        data: params
    })
}
function post(url:string, params: object) {
    return request(url, {
        method: 'post',
        data: params
    })
}
export {
    get,
    post
}

export default request