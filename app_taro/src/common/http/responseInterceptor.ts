/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:05:14
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 16:12:02
 */
// response 拦截器

export default http => {
    // 添加一个返回拦截器
    http.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    });
};
