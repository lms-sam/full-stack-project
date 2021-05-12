/*
 * @Author: sam.li
 * @Date: 2021-05-08 10:43:01
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-08 10:43:51
 */
const getIPAdress = require('./utils/getIPAdress');
const {resolve} = require('./utils/index');
const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('staticLocalService',function () {
    connect.server({
        name: 'static App',
        root: [resolve('asset')],
        port: 8100,
        host: getIPAdress(),
        livereload: true
    })
})