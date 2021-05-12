/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:05:00
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 16:11:46
 */

export default function requestInterceptor(http) {
    http.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
};
