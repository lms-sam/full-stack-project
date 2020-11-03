/*
 * @Author: sam.li
 * @Date: 2020-11-02 17:10:35
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 17:27:06
 */
'use strict';

const Controller = require('egg').Controller;

class WeappController extends Controller {
  async login() { // 静默登录-openid、授权手机登录
    const { ctx, app } = this;
    const { orgUuid, code } = ctx.request.body;
    const sessionid = ctx.helper.uuidv1();
    // 根据orgUuid获取商家
    const merchant = await ctx.service.user.merchant.get(orgUuid);

    if (app._.isEmpty(merchant)) {
      return ctx.fail(ctx.ERROR_CODE, '该应用未绑定商家');
    }
    // 登录凭证校验
    const weappInfo = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${merchant.appId}&secret=${merchant.appSecret}&js_code=${code}&grant_type=authorization_code`, {
      dataType: 'json',
    }) || {};
    const { openid: openId, session_key } = weappInfo.data || {};
    if (openId) {
      const result = JSON.stringify({ openId });
      // 保存openId和session_key到redis
      await app.redis.get('default').setex(sessionid, 3600 * 24, result);
    } else {
      return ctx.fail(ctx.ERROR_CODE, weappInfo.data.errmsg);
    }
    // 查商家id，来登录换access_token
    // 存用户信息，返回token
    // 存商家信息-access_token
    ctx.success(sessionid);
  }
}

module.exports = WeappController;
