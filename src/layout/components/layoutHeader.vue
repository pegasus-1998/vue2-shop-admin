<template>
  <div class="layout-header bx">
      <div class="content">
          <nav-list></nav-list>
          <nav-date></nav-date>
      </div>
  </div>
</template>
<script>
import navList from './navList.vue'
import navDate from './navDate.vue'
export default {
    components: { navList, navDate }
}
</script>
<style lang="scss" scoped>
    .layout-header {
        position: fixed;
        top: 0;
        left: 50%;
        z-index: 999;
        transform: translateX(-50%);
        width: 1200px;
        height: 45px;
        line-height: 45px;
        background: #F5F5F5;
        .content {
             @include spaceBetween;
        }
    }
</style>