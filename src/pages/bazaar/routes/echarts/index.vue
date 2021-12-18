<template>
  <div class="echarts">
    <component :is="showMap"></component>
    <el-button @click="showMap = 'cyEcharts'">柱形图</el-button>
    <el-button @click="showMap = 'pieEcharts'">南丁格尔玫瑰图</el-button>
    <el-button @click="showMap = 'proEcharts'">省份地图</el-button>
    <el-button @click="showMap = 'chinaEcharts'">中国地图</el-button>
  </div>
</template>

<script>
import cyEcharts from "./components/cyEcharts.vue";
import pieEcharts from "./components/pieEcharts.vue";
import proEcharts from "./components/proEcharts.vue";
import chinaEcharts from "./components/chinaEcharts.vue";
export default {
  components: { cyEcharts, pieEcharts, proEcharts, chinaEcharts },
  data() {
    return {
      showMap: "cyEcharts",
    }
  }
}
</script>
