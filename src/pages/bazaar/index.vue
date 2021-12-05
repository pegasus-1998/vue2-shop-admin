<template>
  <div class="bazaar bx">
    <div class="zt">
      <left-nav></left-nav>
      <div class="rv">
        <router-view></router-view>
      </div>
    </div>
    <b-title title="有好货" cor="#6699CE" fTitle="全民口碑"></b-title>
    <my-swiper ref="mySwiper">
      <template #con>
        <swiper-slide
          v-for="item in goodArr"
          :key="item.id"
          @mouseenter.native="swHandler(false)"
          @mouseleave.native="swHandler(true)"
        >
          <img :src="item.src" />
          <p class="con">{{ item.con }}</p>
        </swiper-slide>
      </template>
    </my-swiper>
    <b-title title="猜你喜欢" cor="#F40" fTitle="个性推荐"></b-title>
    <ul class="likes">
      <li class="item-list" v-for="item in guessLike" :key="item.id">
        <img v-lazy="item.src" />
        <p class="con">{{ item.con }}</p>
        <div class="price">￥<span>79</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getGuessLikeApi, getGoodShopApi } from "@/apis/mock.js";
import leftNav from "./components/leftNav.vue";
import mySwiper from "@/components/mySwiper.vue";
import bTitle from "./components/bTitle.vue";
export default {
  components: { leftNav, mySwiper, bTitle },
  data() {
    return {
      goodArr: [], // 有好货数据
      guessLike: [], // 猜你喜欢
    };
  },
  created() {
    this.getMessage();
    this.getMessage2();
  },
  methods: {
    async getMessage() {
      const res = await getGoodShopApi();
      this.goodArr = res;
    },
    async getMessage2() {
      const res = await getGuessLikeApi();
      this.guessLike = res;
    },
    swHandler(flag) {
      if (flag) {
        this.$refs.mySwiper.swiper.autoplay.start();
      } else {
        this.$refs.mySwiper.swiper.autoplay.stop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bazaar {
  padding: 25px 0;
  .zt {
    display: flex;
    .rv {
      flex: 1;
    }
  }
  .swiper-wrapper {
    margin-left: 15px;
  }
  .swiper-slide {
    cursor: pointer;
    img {
      width: 225px;
      height: 225px;
      border-radius: 15px;
      object-fit: cover;
      border: 3px solid #ccc;
      transition: all 0.5s;
    }
    .con {
      @include overflow-more(2);
      margin: 15px 0;
      text-indent: 1em;
    }
    &:hover {
      color: red;
      img {
        transform: scale(1.1);
      }
    }
  }
  .likes {
    display: flex;
    flex-wrap: wrap;
    .item-list {
      width: 215px;
      cursor: pointer;
      margin-right: 25px;
      margin-bottom: 10px;
      transition: all 0.3s;
      border-radius: 25px;
      overflow: hidden;
      padding-bottom: 15px;
      &:hover {
        opacity: 0.85;
        transform: scale(1.001);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        & .con {
          color: $default-color;
        }
      }
      img {
        display: block;
        width: 100%;
      }
      .con {
        @include overflow-more(2);
        padding-left: 7px;
        margin: 10px 0;
      }
      .price {
        color: $default-color;
        padding-left: 7px;
        span {
          font-size: 21px;
        }
      }
    }
  }
}
</style>