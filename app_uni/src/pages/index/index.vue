<template>
	<view class="index">
    <!--搜索栏-->
    <view class="search-box cu-bar" :class="{'bg-blue': !searchPanelVisible}">
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input type="text" v-model="keywords" placeholder="搜索商品"
               confirm-type="search" @focus="showSearchPanel" @confirm="search(keywords)"></input>
        <view v-if="keywords" class="action cuIcon-roundclosefill text-gray search-clear"
              @tap="keywords = ''"></view>
      </view>
      <view v-if="searchPanelVisible" class="action text-gray" @tap="hideSearchPanel">
        取消
      </view>
    </view>

    <!--搜索面板-->
    <view class="search-panel" :class="{ 'show': searchPanelVisible }">
      <view v-if="historyKeywordsVisible">
        <view class="cu-bar bg-white">
          <view class="action border-title">
            <text class="text-xl text-bold">历史搜索</text>
            <text class="bg-grey" style="width:2em"></text>
          </view>
          <view class="action" @tap="clearHistoryKeywords">
            <text class="cuIcon-delete"></text>
          </view>
        </view>
        <view class="padding">
          <view class='cu-tag radius' v-for="(item, index) in historyKeywords"
                :key="index" @tap="search(item)">
            {{item}}
          </view>
        </view>
      </view>

      <view v-else>
        <goods-list
          :datas.sync="filterGoodsList"
          :emptyOptions="searchEmptyOptions"
          right="icon"
          paddingTop="100rpx"
          @rightIconTap="showCartModal"
        >
        </goods-list>
      </view>
    </view>

    <!--商品-->
    <goods-list
      :datas.sync="goodsList"
      :emptyOptions="goodsEmptyOptions"
      right="icon"
      paddingTop="100rpx"
      group
      scroll
      @rightIconTap="showCartModal"
    >
    </goods-list>

    <!--添加购物车弹窗-->
    <view class="cu-modal bottom-modal" :class="{ 'show': cartModalVisible }"
          @tap="cartModalVisible = false">
      <view class="cu-dialog" @tap.stop>
        <view class="cu-bar bg-white solid-bottom">
          <view class="action text-blue">添加到购物车</view>
          <view class="action text-gray" @tap="cartModalVisible = false">取消</view>
        </view>
        <view class="solid-top">
          <goods-list
            :datas="selectedGoodsList"
            right="number"
            height="auto"
            @numberChange="cartModalNumChange"
          >
          </goods-list>
          <view class="cu-bar bg-white tabbar border shop">
            <view class="bg-orange submit" @tap="addToCart">添加到购物车</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
  import dataEmptyIcon from '../../static/data-empty.png';
  import {
    silentLogin
  } from '../../login/index'
	export default {
    	components: { goodsList },
		data() {
			return {
				keywords: '',
				goodsList: [],
				filterGoodsList: [],
				historyKeywords: [],
				selectedGoods: {},
				cartModalVisible: false,
				searchPanelVisible: false,
				historyKeywordsVisible: true,
				searchEmptyOptions: {
					title: '没有查找到商品',
					text: '换个关键词试试吧',
					icon: dataEmptyIcon,
				},
				// 商品无数据提示配置
				goodsEmptyOptions: {
					title: '该商家没有添加商品',
					icon: dataEmptyIcon,
				},
			}
    },
    mounted() {
      silentLogin();
    },
		computed: {
			selectedGoodsList() {
				return [{ lines: [this.selectedGoods] }];
			},
		},
		onLoad() {

		},
		methods: {
			cartModalNumChange: () =>{

			}
		}
	}
</script>

<style lang="scss" scoped>
  .index {
    /*搜索*/
    .search-box {
      z-index: 9;
      transition: all 0.15s ease;

      .search-clear {
        font-size: rpx(32) !important;
      }
    }

    .search-panel {
      position: absolute;
      z-index: 8;
      padding-top: rpx(100);
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background-color: $uni-white;
      transition: all 0.15s ease;
      overflow: hidden;

      &.show {
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }

      .cu-tag {
        margin-right: rpx(20);
        margin-bottom: rpx(20);

        + .cu-tag {
          margin-left: 0;
        }
      }

      .search-empty {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        &-icon {
          width: rpx(240);
          height: rpx(240);
          background: url("../../static/data-empty.png") no-repeat center;
          background-size: contain;
        }
      }
    }

    .cart-add-btn {
      width: 100%;
      border-radius: 0;
    }
  }
</style>
