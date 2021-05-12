/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:05:14
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 17:19:05
 */
// response 拦截器

// response 拦截器
const interceptors = [
    response => {
        return response.data || {};
    }
];

export default http => {
    // 添加一个返回拦截器
    interceptors.forEach(interceptor => {
        if (!Array.isArray(interceptor)) {
            interceptor = [interceptor];
        }
        const [fulfilled, rejected = null] = interceptor;
        http.interceptors.response.use(
            response => {
                return fulfilled(response) || response;
            },
            error => {
                // const {
                //     config: {
                //         headers: errHeaders = {},
                //         data: requestParams = {}
                //     } = {},
                //     request: { _url },
                //     response: {
                //         data = {},
                //         data: {
                //             bizId = ''
                //         } = {},
                //         status,
                //         statusText,
                //     } = {},
                // } = error || {};
                return rejected ? (rejected(error) || error) : error;
            });
    });
};
