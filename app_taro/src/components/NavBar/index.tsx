/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @Date: 2021-05-07 01:36:28
 * @LastEditTime: 2021-05-08 14:45:38
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
    Text
} from '@tarojs/components'
import classnames from 'classnames'

import { getMenuButton } from '@/utils/getMenuButton'

import './index.scss'

interface Props {
    onBackfn: () => void,
    onRightBtnFn: () => void,
    openBackfn: boolean,
    title: string,
    isFix: boolean,
    transparency: boolean,
    isShowBackBtn: boolean,
    isShowShareBtn: boolean,
    isNormal: boolean,
    backgroundColor: string,
    titleColor: string
}
export default function NavBar(props: Props) {
    const currentPages = Taro.getCurrentPages();
    const {
        title = '锦江酒店企业版',
        isFix = false,
        transparency = false,
        openBackfn = false,
        isShowBackBtn = true,
        isShowShareBtn = false
    } = props;
    const [menuButtonInfo, setMenuButtonInfo] = useState({}) //顶部胶囊按钮信息
    const [isShowBackBtnState, setIsShowBackBtnState] = useState(true) //顶部胶囊按钮信息
    useEffect(() => {
        setMenuButtonInfo(getMenuButton());
        setIsShowBackBtnState(process.env.TARO_ENV === 'weapp' ? currentPages.length > 1 : true);
    }, []);
    const back = () => {
        if (this.props.openBackfn) {
            this.props.onBackfn && this.props.onBackfn();
            return
        }
        if (process.env.TARO_ENV === 'weapp') {
            let currentPages = Taro.getCurrentPages();
            if (currentPages.length > 1) {
                back();
                // Taro.navigateBack();
            } else {
                // Taro.reLaunch({
                //     url: combineQueryIntoUrl('/pages/index/index',{})
                // })
            }

        }

        if (process.env.TARO_ENV == 'h5') {
            let writeList = [
                '/pages/homeInfo/home/index',
                '/pages/signUp/register/index',
                '/pages/signUp/checkInfo/company',
                '/pages/signUp/checkInfo/user'
            ];

            if (writeList.indexOf(this.$router.path) != -1) {
                if (this.$router.params.isDestroy) {
                    // destroyWebView();
                    // destroyWebView();
                } else if (this.$router.params.isGoBack === '1') {
                    window.history.go(-1)
                } else {
                    // backAppIndex();
                    // backAppIndex()
                }
            } else if (Taro.getCurrentPages().length == 1) {
                // destroyWebView();
            } else {
                window.history.go(-1)
            }
        }
    }

    /**
     * @Author: sam.li
     * @Date: 2020-04-30 17:29:27
     * @Description: 右侧按钮事件
     * @param {type} {type}
     * @return: 函数注释
     */
    const onRightBtnFn = () => {
        this.props.onRightBtnFn && this.props.onRightBtnFn();
    }
    return (
        <View className={classnames('navBar-container', {
            fixed: isFix,
            transparency: transparency
        })} style={{
            paddingTop: menuButtonInfo.top + 'px',
            height: menuButtonInfo.height + 'px',
            // position: isFix? 'absolute' : 'relative',
        }}>
            {((isShowBackBtn && isShowBackBtnState) || openBackfn) && <View className='back-btn' onClick={back}><Text className='iconfontBiz iconfanhui'></Text></View>}
            <View className='navBar-title'
                style={{
                    lineHeight: menuButtonInfo.height + 'px',
                }}
            >
                {title}
            </View>
            {process.env.TARO_ENV === 'h5' && <View className='right-btn' onClick={onRightBtnFn}>
                {isShowShareBtn && <View className='iconImg icon-share'></View>}
            </View>}
        </View>
    )
}
