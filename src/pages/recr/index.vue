<template>
  <div class="recr bx">
    <h3>图片欣赏</h3>
    <img-modules></img-modules>
  </div>
</template>

<script>
import imgModules from './components/imgModules.vue'
export default {
  components: { imgModules },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
    .recr {
      h3 {
        color: skyblue;
        font-size: 21px;
        letter-spacing: 2px;
      }
    }
</style>