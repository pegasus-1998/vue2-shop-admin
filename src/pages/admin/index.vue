<template>
  <div class="admin">
    <scroll-bar :isCollapse='isCollapse'></scroll-bar>
    <div class="main-container">
      <main-header :isCollapse.sync='isCollapse'></main-header>
      <path-tars></path-tars>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import scrollBar from './components/scrollBar.vue'
import mainHeader from './components/mainHeader.vue'
import pathTars from './components/pathTars.vue'
export default {
  components: { scrollBar, mainHeader, pathTars },
  data() {
    return {
      isCollapse: false
    }
  }
};
</script>
<style lang="scss" scoped>
.admin {
  display: flex;
  height: 100%;
  user-select: none;
  .main-container {
    flex: 1;
    padding: 25px;
    height: 100%;
    background-image: linear-gradient(to left, #d9e8ee, #efeff3);
  }
}
</style>