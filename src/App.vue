<template>
  <div id="app">
      <layout-header></layout-header>
      <keep-alive include="home,login">
         <router-view></router-view>
      </keep-alive>
      <layout-bottom></layout-bottom>
  </div>
</template>

 <script>
 import layoutHeader from '@/layout/layoutHeader.vue'
 import layoutBottom from '@/layout/layoutBottom.vue'
 export default {
    components: { layoutHeader, layoutBottom },
 }
 </script>
 
 
 

 
