<template>
  <div class="main-header">
    <div class="left-bread">
      <i
        class="el-icon-s-fold"
        @click="changeFlag"
        :style="{ color: hColor }"
      />
      <el-breadcrumb class="my-bread">
        <el-breadcrumb-item v-for="(item, index) in breads" :key="index">
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-con">
      <a href="https://github.com/pegasus-1998/vue2-whole" target="black">
        <img src="@/images/github.png"/>
      </a>
      <el-button type="primary" @click="$router.push('/home')">首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  computed: {
    hColor() {
      return this.isCollapse ? "#489eff" : "#666";
    },
    breads: {
      get() {
        return this.$route.meta.bread || []
      }
    }
  },
  methods: {
    changeFlag() {
      this.$emit("update:isCollapse", !this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  @include spaceBc();
  .el-button {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .left-bread {
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
      ::v-deep .el-breadcrumb__inner,
      i {
        color: inherit;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .right-con {
    img {
      width: 48px;
      margin-top: -2px;
      margin-right: 15px;
    }
  }
}
</style>
