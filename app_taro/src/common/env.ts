/*
 * @Author: sam.li
 * @Date: 2021-05-08 09:19:45
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 17:48:27
 */
let baseUrl = '';
console.log(process.env.TARO_ENV);
switch(projectEnv) {
    case 'dev':
        baseUrl = `https://dev.aaa.com`;
        break;
    case 'test':
        baseUrl = `//test.aaa.com`;
        break;
    case 'pre': 
        baseUrl = `//pre.aaa.com`;
        break;
    case 'pro':
        baseUrl = `//pro.aaa.com`;
        break;
}

export {
    baseUrl
}
