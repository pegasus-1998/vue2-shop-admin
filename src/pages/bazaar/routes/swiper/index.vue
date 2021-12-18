<template>
  <div class="swiper-main">
    <component :is="conName"></component>
    <ul class="nav-swiper">
      <li :class="{ navItem: true, active: conName == 'twoSwiper' }" @click="changeSwiper(1)">双向轮播</li>
      <li :class="{ navItem: true, active: conName == 'cfSwiper' }" @click="changeSwiper(2)">3D轮播</li>
      <li :class="{ navItem: true, active: conName == 'scSwiper' }" @click="changeSwiper(3)">滚动条轮播</li>
      <li :class="{ navItem: true, active: conName == 'loopSwiper' }" @click="changeSwiper(4)">无缝轮播</li>
    </ul>
  </div>
</template>

<script>
import twoSwiper from "./components/twoSwiper";
import cfSwiper from "./components/cfSwiper.vue";
import scSwiper from "./components/scSwiper.vue";
import loopSwiper from "./components/loopSwiper.vue";
export default {
  components: { twoSwiper, cfSwiper, scSwiper, loopSwiper },
  data() {
    return {
      conName: "twoSwiper",
    };
  },
  methods: {
    changeSwiper(num) {
      switch (num) {
        case 1:
          this.conName = "twoSwiper";
          break;
        case 2:
          this.conName = "cfSwiper";
          break;
        case 3:
          this.conName = "scSwiper";
          break;
        case 4:
          this.conName = "loopSwiper";
          break;
        default:
          this.conName = "twoSwiper";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.swiper-main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .nav-swiper {
    position: absolute;
    top: 50%;
    right: 0;
    text-align: center;
    transform: translateY(-50%);
    padding: 15px 7px;
    background: $default-color;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    .navItem {
      cursor: pointer;
      margin: 15px 0;
      color: sandybrown;
      &:hover {
        transform: scale(1.1);
      }
    }
    .active {
      color: rgba(#fff, 0.9);
    }
  }
}
</style>
