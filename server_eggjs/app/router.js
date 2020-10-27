/*
 * @Author: sam.li
 * @Date: 2020-10-25 04:28:55
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-27 09:06:14
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // pc管理后台用户管理(管理员、商家)
  router.post('/user/login', controller.user.index.login); // 登录
  router.post('/user/changePassWord', controller.user.index.changePassWord); // 修改密码
  router.post('/user/logout', controller.user.index.logout); // 登出
  
};
