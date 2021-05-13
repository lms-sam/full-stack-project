/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @Date: 2021-05-07 01:36:28
 * @LastEditTime: 2021-05-12 17:59:01
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \weap-taro\src\components\NavBar\index.tsx
 */
import Taro, {
    useState,
    useEffect
} from '@tarojs/taro'
import {
    View,
    Text,
    ScrollView
} from '@tarojs/components'
import classnames from 'classnames'


import './index.scss'

interface Props {
    tagList: Array,
    goods: Array
}
export default function ClassMenus(props: Props) {
    const {
        tagList = [
            {
                name: '菜单一'
            }
        ],
        goods = []
    } = props
    return (
        <View className="menus-container">
            <View className="left-menu">
                <ScrollView
                    className="menu-scroll-con"
                    scrollY={true}
                    scrollWithAnimation={true}
                >
                    {tagList.length > 0 && tagList.map((tag, index) => {
                        return (
                            <View className="tag-item">
                                {tag.name}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View className="right-menu">
                <ScrollView
                    className="menu-scroll-con"
                    scrollY={true}
                    scrollWithAnimation={true}
                >
                    {goods.length > 0 && goods.map((good, index) => {
                        return (
                            <View className="good-item">
                                {good.name}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}
