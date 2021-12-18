<template>
  <div ref="cyEcharts" class="cyEcharts"></div>
</template>
<script>
export default {
  data() {
    return {
      myEcharts: null,
    }
  },
  mounted() {
    const el = this.$refs.cyEcharts;
    this.myEcharts = this.$echarts.init(el)
    this.myEcharts.setOption({
      title: {
        text: "企业个部门优秀员工人数",
      },
      tooltip: {},
      xAxis: {
        data: ["销售部", "人事部", "研发部", "行政部", "财政部", "餐饮部"],
      },
      yAxis: {
        max: 100,
        show: true, //是否显示y轴
        axisLine: {
          show: true, //是否显示y轴的那条线
        },
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [
            {
              value: 80,
              itemStyle: {
                color: "#f3715c",
              },
            },
            {
              value: 25,
              itemStyle: {
                color: "pink",
              },
            },
            {
              value: 45,
              itemStyle: {
                color: "green",
              },
            },
            {
              value: 9,
              itemStyle: {
                color: "purple",
              },
            },
            {
              value: 15,
              itemStyle: {
                color: "red",
              },
            },
            {
              value: 21,
              itemStyle: {
                color: "orange",
              },
            },
          ],
        },
      ],
    });
  },
};
</script>

<style  scoped>
    .cyEcharts {
        width: 100%;
        height: 350px;
    }
</style>