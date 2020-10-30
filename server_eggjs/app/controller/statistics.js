/*
 * @Author: sam.li
 * @Date: 2020-10-30 11:31:50
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-30 11:32:24
 */
'use strict';

const { Controller } = require('egg');

/**
 * Controller - 统计
 * @class
 * @author ruiyong-lee
 */
class StatisticsController extends Controller {
  /**
   * 获取今日订单数量统计
   */
  async getForDay() {
    const { ctx } = this;
    const result = await ctx.service.statistics.getForDay(ctx.request.body);

    ctx.success(result);
  }

  /**
   * 获取近七天订单统计
   */
  async getForWeek() {
    const { ctx } = this;
    const result = await ctx.service.statistics.getForWeek(ctx.request.body);

    ctx.success(result);
  }
}

module.exports = StatisticsController;
