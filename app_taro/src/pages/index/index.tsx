/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @email: minshen_li@163.com
 * @Date: 2021-05-07 02:23:44
 * @LastEditTime: 2021-05-12 17:16:33
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \weap-taro\src\pages\home\views\index\index.tsx
 */
import {
    View
} from '@tarojs/components'
import {
    useEffect
} from '@tarojs/taro'

import {
    silentLogin
} from '@/login'

export default function HomeIndexPage () {
    useEffect(()=>{
        silentLogin(true).then(res => {
            console.log('logined', res)
        })
    },[])
    return (
        <View>
        </View>
    )
}
