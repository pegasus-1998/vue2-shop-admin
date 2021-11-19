<template>
  <div class="calendar">
      <header>我的日历</header>
      <div class="bottom-con">
          <h3>{{timers.day}}</h3>
          <p>星期{{timers.week}}</p>
          <p>{{timers.year}}.{{timers.month}}</p>
      </div>
  </div>
</template>

<script>
import { recDate } from '@/utils/format.js'
export default {
    data() {
        return {
            timers: {
                month: '00',
                year: '0000',
                week: '一',
                day: '00'
            }
        }
    },
    created() {
        recDate(this)
    }
}
</script>

<style lang='scss' scoped>
    .calendar {
        width: 300px;
        text-align: center;
        border: 1px solid #6ec884;
        header {
            background: #6ec884;
            padding: 12px;
            color: #fff;
            font-size: 16px;
            letter-spacing: 2px;
        }
        .bottom-con {
            color: #6ec884;
            h3 {
                font-size: 50px;
            }
            p {
                margin: 10px 0;
            }
        }  
    }
</style>