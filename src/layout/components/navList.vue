<template>
  <div class="nav-list">
    <router-link :to="path" active-class="active">首页</router-link>
    <router-link to="/seckill" active-class="active">秒杀</router-link>
    <router-link to="/shopCar" active-class="active">购物车</router-link>
    <router-link to="/person" active-class="active">个人信息</router-link>
    <router-link to="/bazaar" active-class="active">主题市场</router-link>
    <router-link to="/jsx" active-class="active">系列</router-link>
    <router-link to="/recr" active-class="active">娱乐</router-link>
    <router-link to="/admin" active-class="active">用户管理</router-link>
    <router-link to="/account" active-class="active">账号</router-link>
    <router-link to="/about" active-class="active">关于</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: "/",
    };
  },
  watch: {
    "$route.path": {
      handler(newVal) {
        if (newVal === "/") {
          this.path = "/";
        } else {
          this.path = "/home";
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-list {
  font-size: 16px;
  font-weight: 700;
  a {
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    border-radius: 5px;
    padding: 0 5px;
  }
  .active {
    color: #fff;
    background: $default-color;
  }
}
</style>