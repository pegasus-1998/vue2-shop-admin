<template>
  <div class="header">
    <div class="left">
      <el-image :src="circleUrl[0]" :preview-src-list="circleUrl"></el-image>
      <div>
        <p class="sp1">{{ isLogin ? "admin" : "未登录" }}</p>
        <p>个性签名：{{ isLogin ? "生活不仅眼前的苟且，还有诗和远方" : "" }}</p>
      </div>
    </div>
    <p>我的支付宝</p>
    <p>我的优惠休息</p>
    <el-button type="primary" @click="outLogin">退出登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      circleUrl: [require("@/images/tx.jpg")],
    };
  },
  created() {
    if (localStorage.getItem("token") === "6v6v6v") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
      this.$router.replace("/account");
      this.$message({
        type: "warning",
        message: "请先登录！",
      });
    }
  },
  methods: {
    outLogin() {
      localStorage.setItem("token", "");
      this.$router.replace("/account");
      this.$message({
        type: "success",
        message: "退出成功",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  @include spaceBetween();
  align-items: center;
  background: #e4eaee;
  padding: 35px;
  border: 1px solid #ccc;
  .left {
    display: flex;
    align-items: center;
    ::v-deep .el-image {
      margin-right: 5px;
      width: 60px;
      height: 60px;
      .el-image__preview {
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .sp1 {
      display: inline-block;
      color: $default-color;
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
  .el-button {
    color: #fff;
    width: 85px;
  }
}
</style>