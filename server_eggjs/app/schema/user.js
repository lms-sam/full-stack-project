/*
 * @Author: sam.li
 * @Date: 2020-11-03 10:46:45
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-03 17:49:26
 */
'use strict';
const uuidv1 = require('uuid').v1;

module.exports = app => {
    const { STRING, BIGINT, DATE, ENUM } = app.Sequelize;
    const uuid = uuidv1(); // 这里单独引入是为了默认保持uuid和orgUuid的统一

    return {
        uuid: {
            type: STRING(38),
            allowNull: false,
            primaryKey: true,
            defaultValue: uuid,
        },
        lastModifiedTime: {
            type: DATE,
            allowNull: false,
        },
        lastModifierName: {
            type: STRING(76),
            allowNull: false,
        },
        lastModifierId: {
            type: STRING(38),
            allowNull: false,
        },
        createdTime: {
            type: DATE,
            allowNull: false,
        },
        userType: {
            type: ENUM('merchant', 'employee', 'client'), // 店员、老板、顾客
            allowNull: false,
        },
        userName: {
            type: STRING(12),
            allowNull: false,
            // unique: false,
        }, // 用户名
        password: STRING(100),
        openId: STRING(76),
        unionId: STRING(76),
        nickName: STRING(76), // 微信名
        phone: STRING(255), // 手机号码
        avatarImg: STRING(255), // 头像
        version: {
            type: BIGINT,
            defaultValue: 0,
        },
    };
};
