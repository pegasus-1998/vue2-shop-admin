<template>
  <div class="main-header">
    <i 
        class="el-icon-s-fold" 
        @click="changeFlag"
        :style="{color: hColor}"
    />
    <el-breadcrumb class="my-bread">
      <el-breadcrumb-item>admin</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  computed: {
     hColor() {
         return this.isCollapse ? '#489eff' : '#666'
     }
  },
  methods: {
    changeFlag() {

        this.$emit('update:isCollapse', !this.isCollapse)
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  .el-icon-s-fold {
    cursor: pointer;
    font-size: 30px;
  }
  .el-breadcrumb {
    margin-left: 15px;
    color: #97a87e;
    font-size: 18px;
    ::v-deep .el-breadcrumb__inner, i {
        color: inherit;
        font-size: 18px;
        font-weight: 600;
    }
  }
}
</style>
