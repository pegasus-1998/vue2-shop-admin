<template>
  <div class="nav-list">
    <router-link :to="path" active-class="active">{{$t('layoutNav[0]')}}</router-link>
    <router-link to="/seckill" active-class="active">{{$t('layoutNav[1]')}}</router-link>
    <router-link to="/bazaar" active-class="active">{{$t('layoutNav[2]')}}</router-link>
    <router-link to="/jsx" active-class="active">{{$t('layoutNav[3]')}}</router-link>
    <router-link to="/recr" active-class="active">{{$t('layoutNav[4]')}}</router-link>
    <router-link to="/shopCar" active-class="active">{{$t('layoutNav[5]')}}</router-link>
    <router-link to="/person" active-class="active">{{$t('layoutNav[6]')}}</router-link>
    <router-link to="/admin" active-class="active">{{$t('layoutNav[7]')}}</router-link>
    <router-link to="/login" active-class="active">{{$t('layoutNav[8]')}}</router-link>
    <router-link to="/about" active-class="active">{{$t('layoutNav[9]')}}</router-link>
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