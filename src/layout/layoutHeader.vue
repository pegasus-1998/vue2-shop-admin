<template>
  <div class="layout-header">
      <div class="content bx">
          <nav-list></nav-list>
          <nav-date></nav-date>
      </div>
  </div>
</template>
<script>
import navList from './components/navList.vue'
import navDate from './components/navDate.vue'
export default {
    components: { navList, navDate }
}
</script>
<style lang="scss" scoped>
    .layout-header {
        height: 45px;
        line-height: 45px;
        background: #F5F5F5;
        .content {
             @include spaceBetween;
        }
    }
</style>