<template>
  <div class="logistics">
      <log-steps></log-steps>
      <div class="con">
          <time-clock></time-clock>
          <button>a</button>
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
            margin: 25px 0;
        }
    }
</style>