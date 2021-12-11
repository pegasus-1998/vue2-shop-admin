<template>
  <div class="echarts">
    <!-- <cy-echarts></cy-echarts> -->
    <pie-echarts></pie-echarts>
  </div>
</template>

<script>
import cyEcharts from './components/cyEcharts.vue'
import pieEcharts from './components/pieEcharts.vue'
export default {
  components: { cyEcharts, pieEcharts }
}

</script>

<style lang="scss" scoped>
</style>