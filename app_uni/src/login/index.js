/*
 * @Author: sam.li
 * @Date: 2020-11-02 16:23:13
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 17:29:45
 */
import {
    getToken
} from '@/common/token'
import api from '@/common/api'
import { setToken } from '../common/token';
let LoginPromise = null;
const silentLogin = (isJump = false) => {
    LoginPromise = LoginPromise || new Promise((resolve, reject) => {
        // 是否有token
        if (!getToken()) {
            // # ifdef MP-WEIXIN
            uni.login({
                provider: 'weixin',
                success: async (loginRes = {}) => {
                    const { code } = loginRes;
                    const session = await api.user.login({ code });
                    setToken(session);
                    // uni.setStorageSync(this.$constants.SESSION, session);
                    // uni.reLaunch({ url: '/pages/index/index' });
                },
            });
            // # endif
        } else {
            fetchSilentLogin(isJump, resolve, reject)
        }
    })
}
// 获取token
const fetchSilentLogin = () => {
    
}

const fetchUserInfo = () => {}

export {
    silentLogin,
    fetchSilentLogin
}