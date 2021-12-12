<template>
  <div class="pro-echarts" ref="proEcharts"></div>
</template>

<script>
import fuJian from '@/libs/fuJian.js'
export default {
  data () {
   return {
       myEcharts: null
   }
  },
  mounted() {
    const el = this.$refs.proEcharts
    this.$echarts.registerMap('fuJian', fuJian);
    this.myEcharts = this.$echarts.init(el)
    this.myEcharts.setOption({
        tooltip: {
            trigger: 'item',
        },
        title: {
            text: '福建省今年高温状态',
            x: "left",
        },
        visualMap: {
            // 左下角的颜色区域
            type: "piecewise", // 定义为分段型 visualMap
            min: 0,
            max: 1000,
            itemWidth: 40,
            top: 45,
            left: 10,
            outOfRange: {
                color: 'orange',
            },
            pieces: [
                // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                { gt: 900, lte: 1000, label: "炎热", color: "red" }, // (900, 1000]
                { gt: 500, lte: 900, label: "凉爽", color: "pink" }, // (500, 900]
            ],
        },
        geo: {
            map: 'fuJian',
            label: {
            },
            roam: false,
            color: [

            ],
            regions: [
                {
                    name: '南平市',
                    itemStyle: {
                        areaColor: '#d64f44',
                        color: 'red'
                    }
                },
                {
                    name: '宁德市',
                    itemStyle: {
                        areaColor: 'red',
                        color: 'red'
                    }
                },
                {
                    name: '三明市',
                    itemStyle: {
                        areaColor: '#f3715c',
                        color: 'red'
                    }
                },
                {
                    name: '龙岩市',
                    itemStyle: {
                        areaColor: '#ac6767',
                        color: 'red'
                    }
                },
                {
                    name: '福州市',
                    itemStyle: {
                        areaColor: '#f26522',
                        color: 'red'
                    }
                },
                {
                    name: '漳州市',
                    itemStyle: {
                        areaColor: '#b4534b',
                        color: 'red'
                    }
                },
                {
                    name: '泉州市',
                    itemStyle: {
                        areaColor: '#f391a9',
                        color: 'red'
                    }
                },
                {
                    name: '莆田市',
                    itemStyle: {
                        areaColor: '#d64f44',
                        color: 'red'
                    }
                },
                {
                    name: '厦门市',
                    itemStyle: {
                        areaColor: 'pink',
                        color: 'red'
                    }
                }
            ],
            itemStyle: {
                borderColor: "orange",
                color: 'green',
                emphasis: {
                    // 高亮状态下的多边形和标签样式
                    shadowBlur: 20,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                },
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: 'orange'
                }
            },
            // symbolSize: function (val, params) {
            //     return 8;
            // },
            data: [
                {
                    name: "南平市",
                    value: 'orange',
                },
                {
                    name: "三明市",
                    value: 599,
                },
                {
                    name: "龙岩市",
                    value: 599,
                },
                {
                    name: "宁德市",
                    value: 599,
                },
                {
                    name: "福州市",
                    value: 599,
                },
                {
                    name: "漳州市",
                    value: 599,
                },
                {
                    name: "泉州市",
                    value: 599,
                },
                {
                    name: "莆田市",
                    value: 599,
                },
                {
                    name: "厦门市",
                    value: 599,
                },
            ],
        }]
    })
  }
}
</script>

<style scoped>
    .pro-echarts {
        width: 100%;
        height: 350px;
    }
</style>