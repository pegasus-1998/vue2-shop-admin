<template>
  <div class="joke">
    <div 
      v-html="mes[nowIndex] && mes[nowIndex].con" 
      class="con"
      :style="{fontSize:`${size}px`}"
    >
    </div>
    <div class="btns">
      <i class="el-icon-caret-top" @click="eventHandler(1)"></i>
      <i class="el-icon-caret-bottom" @click="eventHandler(2)"></i>
      <i class="el-icon-circle-plus" @click="eventHandler(3)"></i>
      <i class="el-icon-remove" @click="eventHandler(4)"></i>
    </div>
  </div>
</template>

<script>
import { getXhApi } from '@/apis/mock'
export default {
  data() {
    return {
      size: 18,
      mes: [],
      nowIndex: 0
    }
  },
  created() {
    this.getXhMessage()
  },
  methods: {
    async getXhMessage() {
      const res = await getXhApi() || []
      this.mes = res
    },
    eventHandler(num) {
      switch(num) {
        case 1:
          this.nowIndex > 0 && this.nowIndex--
          break
        case 2:
          this.nowIndex < this.mes.length - 1 && this.nowIndex++
          break
        case 3:
          this.size < 35 && (this.size += 3)
          break
        case 4:
          this.size > 15 && (this.size -= 2)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .joke {
    display: flex;
    padding-left: 25px;
    .con {
      width: 550px;
      font-size: 18px;
      padding: 25px;
      border: 3px solid $default-color;
      line-height: 1.5em;
      height: 360px;
      text-indent: 1em;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      overflow: auto;
      ::v-deep h3 {
        color: $default-color;
        font-size: 21px;
        letter-spacing: 2px;
        margin-bottom: 15px;
        text-indent: 0;
      }
    }
    .btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-left: 25px;
      padding: 25px 0;
      i {
        cursor: pointer;
        display: block;
        font-size: 55px;
        color: $default-color;
        &:nth-of-type(1), &:nth-of-type(2) {
          font-size: 75px;
          margin-top: -25px;
        }
      }
    }
  }
</style>
