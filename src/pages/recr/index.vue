<template>
  <div class="recr bx">
    <h3 class="title">图片欣赏</h3>
    <img-modules></img-modules>
    <h3>笑话大全</h3>
    <joke/>
    <h3>短视频</h3>
    <short-video></short-video>
  </div>
</template>

<script>
import joke from './components/joke.vue'
import imgModules from './components/imgModules.vue'
import shortVideo from './components/shortVideo.vue'
export default {
  components: { imgModules, joke, shortVideo },
}
</script>

<style lang="scss" scoped>
    .recr {
      padding: 0 15px;
      h3 {
        color: $default-color;
        font-size: 21px;
        letter-spacing: 2px;
        margin: 25px 0;
      }
    }
</style>