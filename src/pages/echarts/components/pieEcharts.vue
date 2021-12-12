<template>
  <div class="pieEcharts" ref="pieEcharts"></div>
</template>
<script>
export default {
  data() {
    return {
      myEcharts: null,
    };
  },
  mounted() {
    const el = this.$refs.pieEcharts;
    this.myEcharts = this.$echarts.init(el);
    this.myEcharts.setOption({
      title: {
        text: "2050年最新编程语言热度图",
      },
      legend: {
        top: "bottom",
      },
    //   toolbox: {
    //     show: true,
    //     feature: {
    //       mark: { show: true },
    //       dataView: { show: true, readOnly: false },
    //       restore: { show: true },
    //       saveAsImage: { show: true },
    //     },
    //   },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 160],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: "javascript" },
            { value: 38, name: "python" },
            { value: 32, name: "php" },
            { value: 30, name: "C#" },
            { value: 28, name: "C++" },
            { value: 26, name: "nodejs" },
            { value: 22, name: "TypeScript" },
            { value: 18, name: "Go" },
          ],
        },
      ],
    });
  },
};
</script>

<style scoped>
.pieEcharts {
  width: 100%;
  height: 350px;
}
</style>