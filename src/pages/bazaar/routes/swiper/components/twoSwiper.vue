<template>
  <div class="thumb-example">
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <swiper-slide class="slide-1">
        <img src="@/images/swiper/swiper01.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img src="@/images/swiper/swiper02.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-3">
        <img src="@/images/swiper/swiper03.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-4">
        <img src="@/images/swiper/swiper04.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-5">
        <img src="@/images/swiper/swiper05.jpg" />
      </swiper-slide>
    </swiper>
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="slide-1">
        <img src="@/images/swiper/swiper01.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img src="@/images/swiper/swiper02.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-3">
        <img src="@/images/swiper/swiper03.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-4">
        <img src="@/images/swiper/swiper04.jpg" />
      </swiper-slide>
      <swiper-slide class="slide-5">
        <img src="@/images/swiper/swiper05.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",

  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.thumb-example {
  margin: 0 auto;
  width: 800px;
  height: 380px;
  .swiper {
    background: rgba(#000, 1);
    .swiper-slide {
      cursor: pointer;
      width: 100%;
      img {
        display: block;
        width: 100%;
      }
    }
    &.gallery-top {
      height: 80%;
      width: 800px;
    }
    &.gallery-thumbs {
      height: 20%;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
}
</style>