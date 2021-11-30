<template>
  <div class="bazaar bx">
    <left-nav></left-nav>
    <router-view></router-view>
    <b-title title='有好货' cor='#6699CE' fTitle='全民口碑'></b-title>
    <my-swiper>
      <template #con>
        <swiper-slide v-for="item in 6" :key="item">
          <img :src="require(`@/images/swiper/swiper0${item}.jpg`)"/>
          <p class="con">
              同车同伴车载头枕腰靠一路行车，如果是不适相伴
          </p>
        </swiper-slide >
      </template>
    </my-swiper>
    <b-title title='猜你喜欢' cor='#F40' fTitle='个性推荐'></b-title>
    <my-swiper>
      <template #con>
        <swiper-slide v-for="item in 6" :key="item">
          <img :src="require(`@/images/swiper/swiper0${item}.jpg`)"/>
          <p class="con">
            同车同伴车载头枕腰靠一路行车，如果是不适相伴
          </p>
        </swiper-slide >
      </template>
    </my-swiper>
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
    ::v-deep .swiper-wrapper {
      margin-left: 15px !important;
    }
    .swiper-slide {
      img {
        width: 225px;
        height: 225px;
        border-radius: 15px;
        object-fit: cover;
      }
    }
  }
</style>