/*
 * @Author: sam.li
 * @Date: 2021-05-08 16:28:14
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 17:48:02
 */
import {
    SUCESS_STATE
} from '@/common/constants'
import {
    getToken,
    setToken
} from '@/common/token'
import globalData from '@/common/globalData'
import api from '@/common/api'

let loginPromise: any = null;
const silentLogin = (jump = true, updateUserInfo = false) => {
    updateUserInfo && (loginPromise = null); // 假如更新用户信息，清除promise
    loginPromise = loginPromise || new Promise((resolve, reject) => {
        // 假如有token缓存 直接拿用户信息
        if (getToken()) {
            // 假如有用户信息缓存直接返回用户信息
            if (globalData.get('userInfo')) {
                resolve(globalData.get('userInfo'))
                return;
            } else {
                fetchUserInfo(resolve, reject, jump)
            }
        } else {
            fetchSilentLogin(resolve, reject, jump)
        }
        
    });
    return loginPromise;
}

// 登录获取有效用户token
const fetchSilentLogin = (resolve, reject, jump) => {
    console.log('login');
    api.user.login().then(res=>{
        console.log(res);
    });
    // TODO:登录 setToken
}

// 获取用户信息
const fetchUserInfo = (resolve, reject, jump = false) => {
    // TODO: 获取用户信息 globalDataDel.set('userInfo')
}

export {
    silentLogin,
    fetchUserInfo
}