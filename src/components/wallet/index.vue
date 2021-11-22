<template>
  <div class="wallet.vue">
      <header-card></header-card>
      <money-body></money-body>
  </div>
</template>

<script>
import headerCard from './headerCard.vue'
import moneyBody from './moneyBody.vue'
export default {
  components: { headerCard, moneyBody },
}
</script>
