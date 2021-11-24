<template>
  <div class="layout">
      <layout-header></layout-header>
      <keep-alive include="home,login">
         <router-view></router-view>
      </keep-alive>
      <layout-bottom></layout-bottom>
      <back-top></back-top>
  </div>
</template>

<script>
 import layoutHeader from './components/layoutHeader.vue'
 import layoutBottom from './components/layoutBottom.vue'
export default {
  components: { layoutHeader, layoutBottom },
}
</script>
 