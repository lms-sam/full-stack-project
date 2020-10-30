'use strict';

const { Controller } = require('egg');

/**
 * Controller - 商品
 * @class
 * @author ruiyong-lee
 */
class GoodsController extends Controller {
  /**
   * 新增商品
   */
  async saveNew() {
    const { ctx } = this;
    const rule = {
      goods: 'object',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.goods.saveNew(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 修改商品
   */
  async saveModify() {
    const { ctx } = this;
    const rule = {
      goods: 'object',
    };
    ctx.validate(rule);
    const uuid = await ctx.service.goods.saveModify(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 上架商品
   */
  async up() {
    const { ctx } = this;
    const uuid = await ctx.service.goods.up(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 下架商品
   */
  async down() {
    const { ctx } = this;
    const uuid = await ctx.service.goods.down(ctx.request.body);
    ctx.success(uuid);
  }

  /**
   * 获取商品分页列表
   */
  async query() {
    const { ctx } = this;
    const goodsData = await ctx.service.goods.query(ctx.request.body);
    ctx.success(goodsData);
  }

  /**
   * 根据uuid获取商品
   */
  async get() {
    const { ctx } = this;
    const goods = await ctx.service.goods.get(ctx.request.body);
    ctx.success(goods);
  }
}

module.exports = GoodsController;
