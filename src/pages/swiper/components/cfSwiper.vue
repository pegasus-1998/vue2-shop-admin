<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
          <img src="@/images/swiper/swiper01.jpg"/>
      </swiper-slide>
      <swiper-slide>
          <img src="@/images/swiper/swiper02.jpg"/>
      </swiper-slide>
      <swiper-slide>
          <img src="@/images/swiper/swiper03.jpg"/>
      </swiper-slide>
      <swiper-slide>
          <img src="@/images/swiper/swiper04.jpg"/>
      </swiper-slide>
      <swiper-slide>
          <img src="@/images/swiper/swiper05.jpg"/>
      </swiper-slide>
      <swiper-slide>
          <img src="@/images/swiper/swiper06.jpg"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example-3d {
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0 auto;
    width: 800px;
  }
  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      width: 300px;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>