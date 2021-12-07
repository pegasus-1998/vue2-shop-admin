<template>
  <div class="box">
     <!-- 这个放大镜插件中用了node-scss 导致很多人安装报错 所以用了新的放大镜插件vue2.0-zoom-->
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
 
 