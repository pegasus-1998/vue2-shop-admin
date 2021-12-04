<template>
  <ul class="rates">
    <li class="rat">
      <span class="sp1">总体评价：</span>
      <el-rate v-model="value1"></el-rate>
      <span class="sp2">—— {{ rate(value1) }}</span>
    </li>
    <li class="rat">
      <span class="sp1">质量评价：</span>
      <el-rate v-model="value2"></el-rate>
      <span class="sp2">—— {{ rate(value2) }}</span>
    </li>
    <li class="rat">
      <span class="sp1">效果评价：</span>
      <el-rate v-model="value3"></el-rate>
      <span class="sp2">—— {{ rate(value3) }}</span>
    </li>
    <li class="rat">
      <span class="sp1">客服评价：</span>
      <el-rate v-model="value4"></el-rate>
      <span class="sp2">—— {{ rate(value4) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
    };
  },
  methods: {
    rate(value) {
      switch (parseInt(value)) {
        case 1:
          return "不咋地";
        case 2:
          return "一般般";
        case 3:
          return "还可以";
        case 4:
          return "很不错";
        case 5:
          return "非常好";
        default:
          return "未评价";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.rates {
  width: 600px;
  .rat {
    display: flex;
    align-items: center;
    margin: 25px 0;
    .sp1 {
      font-size: 18px;
      color: $default-color;
    }
    .sp2 {
      color: green;
      margin-left: 15px;
    }
  }
}
</style>