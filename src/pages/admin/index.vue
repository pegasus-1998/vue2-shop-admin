<template>
  <div class="admin">
    <scroll-bar></scroll-bar>
    <div class="main-container">

    </div>
  </div>
</template>

<script>
import scrollBar from './components/scrollBar.vue'
export default {
  components: { scrollBar }
};
</script>
<style lang="scss" scoped>
.admin {
  display: flex;
  height: 100%;
  .main-container {
    height: 100%;
    background-image: linear-gradient(to left, #d9e8ee, #efeff3);
  }
}
</style>