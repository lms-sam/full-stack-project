/*
 * @Author: sam.li
 * @Date: 2020-10-30 14:40:55
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 16:16:02
 */
import Vue from 'vue'
import App from './App'
import util from './common/util';
import filters from './common/filters';
import constants from './common/constants';

Vue.prototype.$util = util; // 工具函数
Vue.prototype.$constants = constants; // 常量
Vue.config.productionTip = false

// 全局过滤器
Object.entries(filters).forEach(([name, fn]) => {
  Vue.filter(name, fn);
});

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
