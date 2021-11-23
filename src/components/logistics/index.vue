<template>
  <div class="logistics">
      <log-steps></log-steps>
      <div class="con">
          <time-clock></time-clock>
          <div class="right-con">
            <p class="p1">
                您的宝贝离你越来越近了
                <i class="el-icon-s-opportunity"></i>
            </p>
            <el-button type="primary" icon="el-icon-edit">修改收货地址</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import logSteps from './logSteps.vue'
import timeClock from './timeClock.vue'
export default {
    components: { logSteps, timeClock }
}
</script>

<style lang='scss' scoped>
    .logistics {
        .con {
            display: flex;
            margin: 25px 0;
            .right-con {
                margin-left: 25px;
                .p1 {
                    color: $default-color;
                    font-size: 18px;
                    letter-spacing: 2px;
                }
                .el-button {
                    color: #fff;
                    margin: 25px 0;
                }
            }
        }
    }
</style>