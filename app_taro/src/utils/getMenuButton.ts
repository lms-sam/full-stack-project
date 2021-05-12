/*
 * @Date: 2019-11-25 10:32:02
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 15:17:00
 */
// 获取胶囊位置
import globalData from '@/common/globalData';
import Taro from '@tarojs/taro'
const defaultRect = {
    top: 26,
    height: 32,
    bottom: 58,
    width: 85
};
const CACHE_MENUBUTTON = 'getMenuButtonBoundingClientRect';
const CACHE_MENUBUTTON_TOP = 'MenuButtonBoundingClientRectTop';

function getMenuButton() {
    let menuButton = globalData.get(CACHE_MENUBUTTON);
    if (!menuButton) {
        if(process.env.TARO_ENV === 'weapp'){
            try {
                menuButton = Taro.getMenuButtonBoundingClientRect();
            } catch (error) {
                menuButton = defaultRect;
                console.log("error",error,"，手动赋值替代")
            }
            console.log('wx get menuButton', menuButton);
        }
        if (menuButton) {
            globalData.set(CACHE_MENUBUTTON, menuButton);
            menuButton.top > 0 && globalData.set(CACHE_MENUBUTTON_TOP, menuButton.top);
        } else {
            menuButton = {};
        }
    }
    return menuButton;
}
function getMenuButtonTop() {
    let menuButtonTop = globalData.get(CACHE_MENUBUTTON_TOP);
    if (!menuButtonTop) {
        if(process.env.TARO_ENV === 'weapp'){
            menuButtonTop = Taro.getMenuButtonBoundingClientRect().top;
            console.log('wx get menuButtonTop', menuButtonTop);
        }
        if (menuButtonTop > 0) {
            globalData.set(CACHE_MENUBUTTON_TOP, menuButtonTop);
        } else {
            menuButtonTop = 40;
        }
    }
    return menuButtonTop;
}

export {
    getMenuButton,
    getMenuButtonTop
};
