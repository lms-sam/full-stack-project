/*
 * @Author: sam.li
 * @Date: 2020-11-25 15:38:18
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-26 10:49:28
 */
'use strict';

const { Controller } = require('egg');
const request = require('request');
const ffmetadata = require('ffmetadata');

/**
 * Controller - 商品
 * @class
 * @author sam.li
 */

const path = require('path');
const fs = require('fs');
class MusicController extends Controller {
    /**
     * 新增商品
     */
    async index() {
        const { ctx } = this;
        const {
            filename,
            url,
        } = ctx.query;
        const filePath = path.join(this.config.baseDir, `app/public/mp3/${filename}.mp3`);
        if (fs.existsSync(filePath)) {
            ctx.fail(filename + ':已存在');
            return;
        }
        const stream = fs.createWriteStream(filePath);
        await request(url).pipe(stream).on('close', () => {});
        ctx.success({
            filename:filename + ':已下载成功'
        });
    }
}

module.exports = MusicController;
