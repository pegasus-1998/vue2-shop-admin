<template>
  <div class="bazaar bx">
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>
<script>

import leftNav from './components/leftNav.vue'
export default {
  components: { leftNav }
}
</script>

<style lang="scss" scoped>
  .bazaar {
    padding: 25px 0;
  }
</style>