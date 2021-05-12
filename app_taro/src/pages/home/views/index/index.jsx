/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @email: minshen_li@163.com
 * @Date: 2021-05-07 02:23:44
 * @LastEditTime: 2021-05-08 15:22:57
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \weap-taro\src\pages\home\views\index\index.tsx
 */
import {
    View,
    ScrollView
} from '@tarojs/components'
import {
    useState
} from '@tarojs/taro'

import NavBar from '@/components/NavBar'

import './index.scss'
export default function HomeIndexPage () {
    return (
        <View className="app-wrap">
            <NavBar/>
            <View className="app-container">
                <ScrollView className="app-scrollContainer">
                </ScrollView>
            </View>
        </View>
    )
}
