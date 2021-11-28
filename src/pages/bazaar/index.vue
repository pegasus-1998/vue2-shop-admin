<template>
  <div class="bazaar bx">
    <left-nav></left-nav>
    <router-view></router-view>
    <my-swiper></my-swiper>
  </div>
</template>

<script>
import leftNav from './components/leftNav.vue'
import mySwiper from '@/components/mySwiper.vue'
export default {
  components: { leftNav, mySwiper  },
}
</script>

<style lang="scss" scoped>
  .bazaar {
    padding: 25px 0;
  }
</style>