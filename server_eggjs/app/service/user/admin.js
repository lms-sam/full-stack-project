/*
 * @Author: sam.li
 * @Date: 2020-10-26 21:40:40
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-27 09:20:08
 */
'use strict';

const md5 = require('md5');
const Service = require('egg').Service;

/**
 * Service - admin
 * @class
 * @author ruiyong-lee
 */
class AdminService extends Service {
    /**
     * 查找某个管理员数据
     * @param {string} userName - 管理员账号
     * @param {string} password - 管理员密码
     * @return {object|null} - 查找结果
     */
    async getAdminByLogin(userName, password, uuid) {
        // return await this.app.mysql.get('admin', { userName, password: md5(password) });
        return await this.app.model.Admin.findOnd({
            where: {
                userName,
                password,
                uuid
            }
        })
    }

    /**
     * 修改管理员密码
     * @param {object} params - 条件
     * @return {string|null} - 商家uuid
     */
    async savePasswordModify(params = {}) {
        const { app } = this;
        const { userUuid, userName, oldPassword, newPassword } = params;
        const modifyInfo = app.getModifyInfo(userUuid, userName);

        return await app.model.User.Admin.savePasswordModify({
            uuid: userUuid,
            oldPassword: md5(oldPassword),
            password: md5(newPassword),
            ...modifyInfo,
        });
    }
}

module.exports = AdminService;
