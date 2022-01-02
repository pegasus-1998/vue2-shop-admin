<template>
  <div class="layout">
    <layout-header></layout-header>
    <div id="main" class="noneScrollbar">
      <keep-alive include="home,login">
        <router-view></router-view>
      </keep-alive>
      <back-top></back-top>
    </div>
    <layout-bottom></layout-bottom>
  </div>
</template>

<script>
import layoutHeader from "./components/layoutHeader.vue";
import layoutBottom from "./components/layoutBottom.vue";
export default {
  components: { layoutHeader, layoutBottom },
};
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  #main {
    flex: 1;
    margin: 25px auto;
    overflow: auto;
  }
}
</style>
 

 