<template>
  <div class="person bx">
    <div class="header">
      <div class="left">
        <el-avatar :src="circleUrl" :size="60" fit="scale-down"></el-avatar>
        <div>
          <span class="sp1">{{ isLogin ? "admin" : "未登录" }}</span
          ><br />
          <span>{{ isLogin ? "生活不仅眼前的苟且，还有诗和远方" : "" }}</span>
        </div>
      </div>
      <el-button type="primary" @click="outLogin">退出登录</el-button>
    </div>
    <el-carousel height="550px">
      <el-carousel-item v-for="item in 4" :key="item">
         <img :src="require(`@/images/swiper/swiper0${item}.jpg`)" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false,
      circleUrl: require("@/images/tx.jpg"),
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
      localStorage.clear();
      this.$router.replace("/account");
      this.$message({
        type: 'success',
        message: '退出成功'
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.person {
  padding: 25px 0;
  .header {
    @include spaceBetween();
    align-items: flex-start;
    .left {
      display: flex;
      align-items: center;
      .el-avatar {
        margin-right: 5px;
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
  .el-carousel {
    margin: 25px 0;
    img {
        display: block;
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
  }
}
</style>