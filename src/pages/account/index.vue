<template>
  <div class="account">
      <header-top/>
      <input-login/>
  </div>
</template>
<script>
import headerTop from './components/headerTop.vue'
import inputLogin from './components/inputLogin.vue'
export default {
  name: 'login',
  components: { headerTop, inputLogin }
}
</script>
<style lang="scss" scoped>
  .account {
    padding: 25px 0;
  }
</style>