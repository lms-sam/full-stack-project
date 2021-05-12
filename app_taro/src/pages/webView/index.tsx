/*
 * @Author: sam.li
 * @LastEditors: sam.li
 * @email: minshen_li@163.com
 * @Date: 2021-05-07 02:23:44
 * @LastEditTime: 2021-05-08 17:38:19
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \weap-taro\src\pages\home\views\index\index.tsx
 */
import {
    View,
    WebView
} from '@tarojs/components'
import {
    useEffect,
    useRouter,
    useState,
    useShareAppMessage,
    useRef
} from '@tarojs/taro'

import {
    silentLogin
} from '@/login'

export default function WebViewPage() {
    const router = useRouter();
    const {
        url,
        isNoShare
    } = router.params;
    const enCodeUrl = encodeURIComponent(this.$router.params.url)
    const [isShowWebView, setIsShowWebView] = useState(false);
    const shareInfo:any = useRef(null);
    useEffect(() => {
        silentLogin(true).then(res => {
            // setIsShowWebView
        });
        setTimeout(()=>{
            shareInfo.current = {
                title: '13',
                path: `/pages/webView/index?url=${enCodeUrl}`,
            }
        },10)
    }, []);
    
    useShareAppMessage(res => {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        if (shareInfo.current) {
            return shareInfo.current
        }
        if (isNoShare) {
            return {
                title: 'appName',
                path: `/pages/index/index`,
            }
        }
        return {
            title: 'appName',
            path: `/pages/webView/index?url=${enCodeUrl}`,
            // imageUrl: imageUrl
        }
    })

    const msgHandler = (e) => {
        shareInfo.current = {
            title: e.detail.data[0].title,
            path: e.detail.data[0].path,
            imageUrl: e.detail.data[0].imageUrl
        }
    }
    return (
        <View className='index'>
            {isShowWebView ? <WebView src={url} onMessage={this.msgHandler}></WebView> : ''}
        </View>
    )
}
