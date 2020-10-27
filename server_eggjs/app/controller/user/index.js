/*
 * @Author: sam.li
 * @Date: 2020-10-26 18:07:53
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-27 15:16:10
 */
const { Controller } = require('egg');

class AdminCtroller extends Controller {
    async login() {
        // 获取body
        const { ctx, app } = this;
        const { userName, password, loginType, uuid } = ctx.request.body;
        let user;
        // 查询数据库有没有当前用户
        if (loginType === 'admin') {
            user = await ctx.service.user.admin.getAdminByLogin(userName, password, uuid)
        } else {
            user = await ctx.service.user.merchant.getMerchantByLogin(userName, password)
        }
        // 返回jwt
        if (!app._.isEmpty()) {
            return ctx.fail(ctx.ERROR_CODE, '账号或密码错误');
        }
        const { uuid: userUuid, userType, name, orgUuid } = user;
        const result = { name, userUuid, userName, userType, orgUuid };
        ctx.setToken(result);
        ctx.success(result);
    }
    async changePassWord() {
        const { ctx } = this;
        const { userType } = ctx.request.body;
        const rule = {
          userUuid: 'string',
          oldPassword: 'string',
          newPassword: 'string',
        };
    
        ctx.validate(rule);
    
        if (userType === 'admin') {
          // 根据userName获取管理员
          await ctx.service.user.admin.savePasswordModify(ctx.request.body);
        } else {
          // 根据userName获取商家
          await ctx.service.user.merchant.savePasswordModify(ctx.request.body);
        }
    
        this.logout();
    }
    logout() {
        // 清除浏览器cookies
        this.ctx.removeToken();
        this.ctx.success();
    }
}

module.exports = AdminCtroller;