/*
 * @Author: sam.li
 * @Date: 2020-10-25 05:01:36
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-25 05:21:38
 */
// 混合
import _ from 'lodash'
export default {
  methods: {
    // 上架
    async upGoods (goods = {}) {
      const { uuid, version } = goods
      await this.$api.goods.up({ uuid, version })
      this.$message({ message: '商品上架成功', type: 'success' })
      return (_.isFunction(this.query) && this.query()) || (_.isFunction(this.get) && this.get())
    },
    // 下架
    async downGoods (goods = {}) {
      const { uuid, version } = goods
      await this.$api.goods.down({ uuid, version })
      this.$message({ message: '商品下架成功', type: 'success' })
      return (_.isFunction(this.query) && this.query()) || (_.isFunction(this.get) && this.get())
    }
  }
}
