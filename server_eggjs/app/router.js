/*
 * @Author: sam.li
 * @Date: 2020-10-25 04:28:55
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-12 12:42:05
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const {
        user,
        notice,
        statistics,
        goodsOrder,
        goods,
        goodsCategory,
        utils,
        freightPlan,
        deliveryTimeType,
        weapp,
        music,
    } = controller;
    router.get('/', controller.home.index);

    // pc管理后台用户管理(管理员、商家)
    router.post('/user/login', user.index.login); // 登录
    router.post('/user/savePasswordModify', user.index.changePassWord); // 修改密码
    router.post('/user/logout', user.index.logout); // 登出

    // 订货单
    router.post('/bill/order/query', goodsOrder.query);

    // 商品
    router.post('/goods/saveNew', goods.saveNew);
    router.post('/goods/query', goods.query);

    // 商品类别
    router.post('/goodsCategory/query', goodsCategory.query);
    router.post('/goodsCategory/saveNew', goodsCategory.saveNew);
    router.post('/goodsCategory/remove', goodsCategory.remove);
    router.get('/goodsCategory/getDropdownList', goodsCategory.getDropdownList);

    /**
   * 管理端-管理员
   */
    router.post('/user/merchant/saveNew', user.merchant.saveNew);
    router.post('/user/merchant/saveModify', user.merchant.saveModify);
    router.post('/user/merchant/query', user.merchant.query);
    router.get('/user/merchant/get', user.merchant.get);

    // 消息通知
    router.post('/notice/readAll', notice.readAll);
    router.get('/notice/overview', notice.overview);
    router.post('/notice/query', notice.query);

    // 统计
    router.get('/statistics/order/getForDay', statistics.getForDay);
    router.get('/statistics/order/getForWeek', statistics.getForWeek);


    // utils
    router.post('/utils/upload', utils.upload.upload);

    // 运费方案

    router.post('/freightPlan/query', freightPlan.query);
    router.post('/freightPlan/saveNew', freightPlan.saveNew);
    router.post('/freightPlan/remove', freightPlan.remove);
    router.post('/freightPlan/saveModify', freightPlan.saveModify);
    // router.get('/freightPlan/get', freightPlan.get);

    // 送货时间
    router.post('/deliveryTimeType/query', deliveryTimeType.query);
    router.post('/deliveryTimeType/saveNew', deliveryTimeType.saveNew);
    router.post('/deliveryTimeType/remove', deliveryTimeType.remove);
    router.post('/deliveryTimeType/saveModify', deliveryTimeType.saveModify);

    // 微信小程序
    router.post('/weapp/login', weapp.login);

    // 微信小程序
    // router.get('/music', music.index);

};
