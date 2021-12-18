<template>
  <swiper class="swiper" :options="options" style="width: 800px">
    <swiper-slide v-for="item in 6" :key="item">
      <img :src="require(`@/images/swiper/swiper0${item}.jpg`)" />
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 2500,
        autoplay: {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
 .swiper-container, .swiper {
  .swiper-slide {
    cursor: pointer;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
  ::v-deep .swiper-wrapper{
    -webkit-transition-timing-function: linear !important;
    -moz-transition-timing-function: linear !important;
    -ms-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
  }
}
</style>
