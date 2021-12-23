<template>
  <ul class="img-modules">
      <li v-for="(item, index) in imgs" :key="index">
          <img :src="item" preview='1' preview-text='精彩的图片欣赏'/>
      </li>
  </ul>
</template>
<script>
export default {
    data() {
        return {
            imgs: [
                require('@/images/swiper/swiper01.jpg'),
                require('@/images/swiper/swiper02.jpg'),
                require('@/images/swiper/swiper03.jpg'),
                require('@/images/swiper/swiper04.jpg'),
                require('@/images/swiper/swiper05.jpg'),
                require('@/images/swiper/swiper06.jpg'),
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .img-modules {
       @include spaceBetween();
        li {
            margin-bottom: 15px;
            img {
                cursor: pointer;
                width: 380px;
            }
        }
    }
</style>