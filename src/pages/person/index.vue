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
import favorite from '@/components/favorite'
import logistics from '@/components/logistics'
import eva from './components/eva.vue'
import wallet from '@/components/wallet'
import calendar from './components/calendar.vue'
export default {
  components: { 
    VDistpicker, personHeader, personNav, 
    personAddress, favorite, logistics, 
    eva, wallet, calendar 
  },
  data() {
    return {
      showComs: ['personAddress','favorite','logistics','wallet','eva','purchased'],
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