<template>
  <div class="sec-list">
      <count-down :tamp='sendMessage.tamp'>{{sendMessage.title}}</count-down>
      <shop-list :path='sendMessage.path'/>
  </div>
</template>
<script>
import countDown from './countDown .vue'
import shopList from './shopList.vue'
export default {
    components: { countDown, shopList },
    props: ['sendMessage']
}
</script>
<style lang="scss" scoped>
  .sec-list {
    display: flex;
    justify-content: space-between;
  }
</style>