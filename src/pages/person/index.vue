<template>
  <div class="person bx">
    <person-header></person-header>
    <div class="container">
      <person-nav :active.sync="active"></person-nav>
      <component :is="showComs[active]"></component>
      <calendar></calendar>
    </div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import personHeader from './components/header.vue'
import personNav from './components/nav.vue'
import personAddress from '@/components/address'
import favorite from './components/favorite.vue'
import logistics from './components/logistics.vue'
import purchased from './components/purchased.vue'
import refund from './components/refund.vue'
import wallet from './components/wallet.vue'
import calendar from './components/calendar.vue'
export default {
  components: { 
    VDistpicker, personHeader, personNav, 
    personAddress, favorite, logistics, 
    purchased, refund, wallet, 
    calendar 
  },
  data() {
    return {
      showComs: ['personAddress','favorite','logistics','wallet','refund','purchased'],
      active: 0,
    }
  }
};
</script>
<style lang="scss" scoped>
.person {
  padding: 25px 0;
  .container {
    @include spaceBetween();
    align-items: flex-start;
    margin: 35px 0;
  }
}
</style>