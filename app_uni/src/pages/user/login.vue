<!--
 * @Author: sam.li
 * @Date: 2020-11-02 16:19:40
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 16:35:14
-->
<template>
  <view class="login">
    <button class="login-btn cu-btn bg-green lg shadow round" @tap="login">
      <text class="cuIcon-weixin"></text>
      <text class="login-btn-text">微信登录</text>
    </button>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      login() {
        uni.login({
          provider: 'weixin',
          success: async (loginRes = {}) => {
            console.log(loginRes);
            const { code } = loginRes;
            const session = await this.$api.user.login({ code });

            uni.setStorageSync(this.$constants.SESSION, session);
            uni.reLaunch({ url: '/pages/index/index' });
          },
        });
      },
    },
    onLoad() {
    },
  };
</script>

<style lang="scss">
  .login {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: $uni-white;

    .login-btn {
      width: rpx(480);
      height: rpx(100);
      font-size: rpx(36);

      .cuIcon-weixin {
        margin-right: rpx(10);
        font-size: rpx(46);
        vertical-align: middle;
      }

      .login-btn-text {
        vertical-align: middle;
      }
    }
  }
</style>
