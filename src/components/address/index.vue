<template>
  <div class="address">
    <item
      @showDir="changeTake(index)"
      v-for="(item, index) in users[userIdx].address"
      :key="index"
      :address="item"
    />
    <pull-message ref="pm"></pull-message>
    <el-button type="primary" icon="el-icon-plus">添加收货地址</el-button>
  </div>
</template>

<script>
import item from "./item.vue";
import { mapState, mapMutations } from "vuex";
import pullMessage from "./pullMessage.vue";
export default {
  components: { item, pullMessage },
  computed: {
    ...mapState('userModule', ['users', 'userIdx'])
  },
  methods: {
    ...mapMutations('userModule', { SET_ADDRESS_IDX: 'SET_ADDRESS_IDX' }),
    changeTake(idx) {
      this.SET_ADDRESS_IDX(idx)
      this.$refs.pm.flag = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .address {
    .el-button {
      display: block;
      margin: 0 auto;
      margin-top: 35px;
      width: 350px;
      color: #fff;
      font-size: 16px;
      border-radius: 25px;
    }
  }
</style>
