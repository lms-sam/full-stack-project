<!--
 * @Author: sam.li
 * @Date: 2020-10-30 14:40:55
 * @LastEditors: sam.li
 * @LastEditTime: 2020-11-02 16:09:57
-->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "lib/colorui/main.css";
	@import "lib/colorui/icon.css";
	@import "style/common.scss";
</style>
