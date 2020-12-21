/*
 * @Author: sam.li
 * @Date: 2020-11-03 17:51:51
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-03 17:58:20
 */
module.exports = app => {
    const { model, checkUpdate } = app;
    const userSchema = require('../schema/user.js')(app);
    const User = model.define('user', userSchema);
    User.has = async ({ openId }) => {
        return await User.findOne({
            attributes,
            where: {
                openId,
            },
        });
    };
    return User;
};
