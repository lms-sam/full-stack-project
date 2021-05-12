/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:05:00
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 17:08:48
 */

// request 拦截器
const interceptors = [
    // example1: async
    config => {
        config.header['orgUuid'] = 'c6de19a0-b2d3-11eb-a723-0785779d53ec';
        config.header['sessionId'] = '';// token
        // config.headers['token'] = 'LONG9f04902077e0459ca13a602ba10ec30a';
        // config.headers['token'] = 'LONG5379d54a4e184a7b87cc7173afde4c24';
        // config.headers['token'] = Cookie.get('SSO-AUTH-HEADER');
        return config;
    }
];

export default http => {
    interceptors.forEach(interceptor => {
        if (!Array.isArray(interceptor)) {
            interceptor = [interceptor];
        }
        const [fulfilled, rejected = null] = interceptor;
        http.interceptors.request.use(config => {
            return fulfilled(config) || config;
        }, config => {
            return rejected ? (rejected(config) || config) : config;
        });
    });
};