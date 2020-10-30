/*
 * @Author: sam.li
 * @Date: 2020-10-30 11:52:41
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-30 11:59:39
 */
'use strict';


const { Controller } = require('egg');

/**
 * Controller - 订货单
 * @class
 * @author ruiyong-lee
 */
class GoodsOrderController extends Controller {
  /**
   * 获取订单分页列表
   */
  async query() {
    const { ctx } = this;
    const goodsOrderData = await ctx.service.goodsOrder.query(ctx.request.body);

    ctx.success(goodsOrderData);
  }

  /**
   * 获取订单详情
   */
  async get() {
    const { ctx } = this;
    const goodsOrder = await ctx.service.goodsOrder.get(ctx.request.body);

    ctx.success(goodsOrder);
  }

  /**
   * 配送订单
   */
  async dispatch() {
    const { ctx } = this;
    const rule = {
      uuid: 'string',
      version: 'number',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.goodsOrder.dispatch(ctx.request.body);

    ctx.success(uuid);
  }

  /**
   * 完成订单
   */
  async complete() {
    const { ctx } = this;
    const rule = {
      uuid: 'string',
      version: 'number',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.goodsOrder.complete(ctx.request.body);

    ctx.success(uuid);
  }
}

module.exports = GoodsOrderController;
