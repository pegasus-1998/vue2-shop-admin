<template>
  <div class="nav-date">
    <el-select v-model="lan" placeholder="请选择">
      <el-option v-for="(item, index) in lans" :key="index" :value="item"></el-option>
    </el-select>
    <span>{{timers.hour}}</span> :
    <span>{{timers.minute}}</span> :
    <span style="margin-right: 5px;">{{timers.second}}</span>  
    星期{{timers.week}}
  </div>
</template>
<script>
import { dateFormat } from '@/utils/format'
export default {
  data() {
    return {
      lan: 'zh',
      lans: ['zh', 'en'],
      timers: {
        timer: null,
        month: '01',
        day: '01',
        hour: '00',
        minute: '00',
        second: '00',
        week: '一'
      }
    }
  },
  mounted() {
    dateFormat(this)
  },
  destroyed() {
    this.timers.timer = null
  },
  methods: {
    changeLan() {
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav-date {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding-right: 15px;
    img {
      cursor: pointer;
      width: 25px;
      margin-right: 10px;
    }
    span {
      display: inline-block;
      letter-spacing: 2px;
      color: #fff;
      padding: 0 13px;
      background: $default-color;
    }
    ::v-deep .el-select > .el-input {
      margin-right: 15px;
      width: 85px;
      font-size: 18px;
      user-select: none;
      .el-input__suffix {
        top: -2px;
        right: 8px;
        i {
          color: $default-color;
        }
      }
      input {
        border: none;
        background: none;
        color: $default-color;
      }
    }
  }
</style>