/*
 * @Author: sam.li
 * @Date: 2020-10-25 04:28:55
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-27 15:15:27
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const {
    user,
    notice
  } = controller;
  router.get('/', controller.home.index);

  // pc管理后台用户管理(管理员、商家)
  router.post('/user/login', controller.user.index.login); // 登录
  router.post('/user/savePasswordModify', controller.user.index.changePassWord); // 修改密码
  router.post('/user/logout', controller.user.index.logout); // 登出

  /**
   * 管理端-管理员
   */
  router.post('/user/merchant/saveNew', controller.user.merchant.saveNew);
  router.post('/user/merchant/saveModify', controller.user.merchant.saveModify);
  router.post('/user/merchant/query', controller.user.merchant.query);
  router.get('/user/merchant/get', controller.user.merchant.get);
  
  // 消息通知
  router.post('/notice/readAll', notice.readAll);
  router.get('/notice/overview', notice.overview);
  router.post('/notice/query', notice.query);
  
};
