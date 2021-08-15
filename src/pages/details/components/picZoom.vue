<template>
  <div class="box">
    <pic-zoom :url="url" :scale="2.5"></pic-zoom>
  </div>
</template>

<script>
import PicZoom from "vue-piczoom";
export default {
  components: {
    PicZoom,
  },
  props: ['url'],
  data() {
    return {
      imgurl: require("@/images/error.png"),
    };
  },
};
</script>
 <style lang="scss" scoped>
.box {
  width: 320px;
  height: 320px;
  ::v-deep img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
 
 