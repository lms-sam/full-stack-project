/* eslint valid-jsdoc: "off" */

'use strict';
const SERVER_HOST = '127.0.0.1';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603571326858_158';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // 小程序只能存storage，关闭csrf
    security: {
      csrf: {
        enable: false,
      },
    },
    // 数据库
    mysql: {
      client: {
        host: SERVER_HOST,
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '12345678',
        // 数据库名
        database: 'mall-demo',
      },
      // 所有数据库配置的默认值
      default: {},

      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    // sequelize
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'mall-demo',
      host: SERVER_HOST,
      port: '3306',
      username: 'root',
      password: '12345678',
      timezone: '+08:00',
      define: {
        createdAt: 'createdTime',
        updatedAt: 'lastModifiedTime',
        freezeTableName: true,
        underscored: false,
        getterMethods: {
          createdTime() {
            const createdTime = this.getDataValue('createdTime');
            if (createdTime) {
              return fecha.format(createdTime, 'YYYY-MM-DD HH:mm:ss');
            }
          },
          lastModifiedTime() {
            const lastModifiedTime = this.getDataValue('lastModifiedTime');
            if (lastModifiedTime) {
              return fecha.format(lastModifiedTime, 'YYYY-MM-DD HH:mm:ss');
            }
          },
        },
        setterMethods: {
          version(value) {
            if (isNumber(value)) {
              this.setDataValue('version', value + 1);
            }
          },
        },
      },
    },

    // socket.io
    io: {
      init: {}, // passed to engine.io
      namespace: {
        '/': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
      },
    },

    // redis
    redis: {
      clients: {
        default: {
          host: SERVER_HOST,
          port: '6379',
          password: '',
          db: '0',
        },
        subscribe: {
          host: SERVER_HOST,
          port: '6379',
          password: '',
          db: '1',
        },
        session: {
          host: SERVER_HOST,
          port: '6379',
          password: '',
          db: '2',
        },
      },
      agent: true,
    },

    sessionRedis: {
      name: 'session', // specific instance `session` as the session store
    },

    // jwt
    jwt: {
      secret: '123456',
      // ignore: '/weapp',
    },

    // 文件上传 File 模式
    // multipart: {
    //   mode: 'file',
    // },

    // 中间件
    middleware: ['auth', 'errorHandler'],
  };

  return {
    ...config,
    ...userConfig,
  };
};
