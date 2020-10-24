/*
 * @Author: sam.li
 * @Date: 2020-10-25 04:28:55
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-25 04:48:26
 */
'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
