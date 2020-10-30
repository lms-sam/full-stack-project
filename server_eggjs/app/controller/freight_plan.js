/*
 * @Author: sam.li
 * @Date: 2020-10-30 14:05:06
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-30 14:06:18
 */

'use strict';

const { Controller } = require('egg');

/**
 * Controller - 运费方案
 * @class
 * @author ruiyong-lee
 */
class FreightPlanController extends Controller {
  /**
   * 新增运费方案
   */
  async saveNew() {
    const { ctx } = this;
    const rule = {
      freightPlan: 'object',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.freightPlan.saveNew(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 修改运费方案
   */
  async saveModify() {
    const { ctx } = this;
    const rule = {
      freightPlan: 'object',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.freightPlan.saveModify(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 删除运费方案
   */
  async remove() {
    const { ctx } = this;
    const uuid = await ctx.service.freightPlan.remove(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 获取运费方案分页列表
   */
  async query() {
    const { ctx } = this;
    const freightPlanData = await ctx.service.freightPlan.query(ctx.request.body);
    ctx.success(freightPlanData);
  }

  /**
   * 根据uuid获取运费方案
   */
  async get() {
    const { ctx } = this;
    const freightPlan = await ctx.service.freightPlan.get(ctx.request.body);
    ctx.success(freightPlan);
  }

  /**
   * 设置默认运费方案
   */
  async setDefault() {
    const { ctx } = this;
    const uuid = await ctx.service.freightPlan.setDefault(ctx.request.body);

    ctx.success(uuid);
  }
}

module.exports = FreightPlanController;
