<template>
  <div class="bazaar bx">
    <left-nav></left-nav>
    <router-view></router-view>
    <b-title title='有好货' cor='#6699CE' fTitle='全民口碑'></b-title>
    <my-swiper>
      <template #con>
        <!-- <swiper-slide>
            <img src="@/images/swiper/swiper01.jpg" alt="">
        </swiper-slide > -->
      </template>
    </my-swiper>
    <b-title title='猜你喜欢' cor='#F40' fTitle='个性推荐'></b-title>
  </div>
</template>

<script>
import leftNav from './components/leftNav.vue'
import mySwiper from '@/components/mySwiper.vue'
import bTitle from './components/bTitle.vue'
export default {
  components: { leftNav, mySwiper, bTitle  },
}
</script>

<style lang="scss" scoped>
  .bazaar {
    padding: 25px 0;
  }
</style>