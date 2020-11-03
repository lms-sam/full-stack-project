/*
 * @Author: sam.li
 * @Date: 2020-11-02 16:28:40
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 17:20:47
 */
let cache_token = '';

const getToken = () => {
    return cache_token
}

const setToken = (t) => {
    cache_token = t
}

const removeToken = () => {
    cache_token = ''
}

export {
    getToken,
    setToken,
    removeToken
}