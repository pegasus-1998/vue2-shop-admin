<template>
  <div class="china-echarts" ref="chinaEcharts"></div>
</template>

<script>
require("@/libs/map/china.js");
export default {
  data() {
    return {
      myEcharts: null,
    };
  },
  mounted() {
    const el = this.$refs.chinaEcharts;
    this.myEcharts = this.$echarts.init(el);
    this.myEcharts.setOption({
      title: {
        text: "中国地图",
      },
      tooltip: {
        // 鼠标移到图里面的浮动提示框
        // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
        formatter(params, ticket, callback) {
          // params.data 就是series配置项中的data数据遍历
          let localValue, perf, downloadSpeep, usability, point;
          if (params.data) {
            localValue = params.data.value;
            // perf = params.data.perf;
            // downloadSpeep = params.data.downloadSpeep;
            // usability = params.data.usability;
            // point = params.data.point;
          } else {
            // 为了防止没有定义数据的时候报错写的
            localValue = 0;
            perf = 0;
            downloadSpeep = 0;
            usability = 0;
            point = 0;
          }
          let htmlStr = `
            <div style='font-size: 15px;'> ${params.name}</div>
            <p style='text-align:left;'>
	           数据：${localValue}<br/>
            </p>
          `;
          //   let htmlStr = `
          //   <div style='font-size:18px;'> ${params.name}</div>
          //   <p style='text-align:left;margin-top:-10px;'>
          //       区域对应数据value：${localValue}<br/>
          //       性能perf：${perf}<br/>
          //       下载速度downloadSpeep：${downloadSpeep}<br/>
          //       可用性usability：${usability}<br/>
          //       监测点数point：${point}<br/>
          //   </p>
          // `;
          return htmlStr;
        },
        // backgroundColor:"#ff7f50",//提示标签背景颜色
        // textStyle:{color:"#fff"} //提示标签字体颜色
      },
      // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
      visualMap: {
        // 左下角的颜色区域
        type: "piecewise", // 定义为分段型 visualMap
        min: 0,
        max: 1000,
        itemWidth: 40,
        bottom: 60,
        outOfRange: {
          color: "blue",
        },
        left: 20,
        pieces: [
          // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
          { gt: 900, lte: 1000, label: "非常好", color: "#6ad86e" }, // (900, 1000]
          { gt: 500, lte: 900, label: "很好", color: "#9adcfa" }, // (500, 900]
          { gt: 310, lte: 500, label: "正常", color: "#ffeb3b" }, // (310, 500]
          { gt: 200, lte: 300, label: "一般", color: "#ff9800" }, // (200, 300]
          { gt: 10, lte: 200, label: "较差", color: "orangered" }, // (10, 200]
          { value: 0, label: "非常差", color: "#999" }, // [0]
        ],
      },
      // geo配置详解： https://echarts.baidu.com/option.html#geo
      geo: {
        // 地理坐标系组件用于地图的绘制
        map: "china", // 表示中国地图
        // roam: true, // 是否开启鼠标缩放和平移漫游
        zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
        y: 50,
        label: {
          show: true,
        },
        itemStyle: {
          // 地图区域的多边形 图形样式。
          borderColor: "rgba(0, 0, 0, 0.2)",
          emphasis: {
            // 高亮状态下的多边形和标签样式
            shadowBlur: 20,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      series: [
        {
          name: "", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
          type: "map",
          geoIndex: 0,
          label: {
            show: true,
          },
          // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
          data: [
            {
              name: "北京",
              value: 599,
              perf: "0.501s", // 性能
              //downloadSpeep: "1.221MB/s", // 下载速度
              usability: "100%", // 可用性
              point: "250", // 监测点
            },
            {
              name: "上海",
              value: 142,
            },
            {
              name: "黑龙江",
              value: 44,
            },
            {
              name: "新疆",
              value: 9,
              //  perf: "0.501s", // 性能
              // downloadSpeep: "1.221MB/s", // 下载速度
              // usability: "100%", // 可用性
              // point: "250", // 监测点
            },
            {
              name: "深圳",
              value: 92,
            },
            {
              name: "湖北",
              value: 810,
            },
            {
              name: "四川",
              value: 453,
            },
            {
              name: "福建",
              value: 1000,
            },
          ],
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
.china-echarts {
  width: 100%;
  height: 350px;
}
</style>