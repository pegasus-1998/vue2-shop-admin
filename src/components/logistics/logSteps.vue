<template>
    <el-steps :active="1">
      <el-step 
        title="发货地址" 
        description="已经从浙江省杭州市上城区物流站出发"
        icon="el-icon-map-location"
      >
      </el-step>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="收货地址" description="这段就没那么长了"></el-step>
      <el-step title="收货地址" :description="address" icon="el-icon-place"></el-step>
    </el-steps>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState('userModule', ['users', 'userIdx']),
    address() {
      const { pro, city, area, detailAddress } = this.users[this.userIdx].address[0] 
      return pro + city + area + detailAddress
    }
  },
}
</script>

<style lang="scss" scoped>
</style>