<template>
  <div class="transition">
    <el-button type="primary" @click="show = !show">切换</el-button>
    <component :is="componentName" :show="show">
        <img src="@/images/swiper/swiper01.jpg" class="xg-img" />
    </component>
    <el-select v-model="value" @change='changeCom'>
      <el-option
        v-for="item in options"
        :key="item.index"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import fadeTransition from './components/Fade.vue'
import zoomCenter from './components/ZoomCenter.vue'
import zoomX from './components/zoomX.vue'
import zoomY from './components/zoomY.vue'
import collapse from './components/collapse.vue'
import scale from './components/scale.vue'
import slideYUp from './components/slideYUp.vue'
import slideYDown from './components/slideYDown.vue'
import slideXLeft from './components/slideXLeft.vue'
import slideXRight from './components/slideXRight.vue'
export default {
  components: { 
    fadeTransition, 
    zoomCenter, 
    zoomX, 
    zoomY, 
    collapse ,
    scale,
    slideYUp,
    slideYDown,
    slideXLeft,
    slideXRight
  },
  data() {
    return {
      componentName: 'zoomY',
      show: true,
      value: "fadeTransition",
      options: [
        { value: 'fadeTransition', label: "fadeTransition" },
        { value: 'zoomCenter', label: "zoomCenter" },
        { value: 'zoomX', label: "zoomX" },
        { value: 'zoomY', label: "zoomY" },
        { value: 'collapse', label: "collapse" },
        { value: 'scale', label: "scale" },
        { value: 'slideYUp', label: "slideYUp" },
        { value: 'slideYDown', label: "slideYDown" },
        { value: 'slideXLeft', label: "slideXLeft" },
        { value: 'slideXRight', label: "slideXRight" },
      ],
    };
  },
  methods: {
      changeCom(val) {
        this.show = true
        this.componentName = val
      }
  }
}
</script>

<style lang="scss" scoped>
.transition {
  position: relative;
  padding-left: 50px;
  padding-top: 50px;
  .el-button {
    position: absolute;
    top: 150px;
    right: 460px;
    color: #fff;
  }
  .xg-img {
    width: 270px;
    height: 270px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(#000, 0.2);
  }
  .el-select {
    position: absolute;
    right: 300px;
    top: 230px;
  }
}
</style>