<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img src="@/images/swiper/swiper01.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/swiper/swiper02.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/swiper/swiper03.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/swiper/swiper04.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/swiper/swiper05.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/swiper/swiper06.jpg" />
    </swiper-slide>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.swiper {
  width: 800px;
  height: 100%;
  margin: 0 auto;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
 .swiper-scrollbar {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    opacity: .7;
    background: rgb(230, 181, 20);
    width:  600px;
    height: 8px;
    border-radius: 20px;
    ::v-deep .swiper-scrollbar-drag {
        height: 100%;
        border-radius: 20px;
        background: $default-color;
    }
  }
}
</style>