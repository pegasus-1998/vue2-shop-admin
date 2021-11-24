<template>
  <div class="for-date">
    {{
      timers.year + '年' + timers.month + '月' + timers.day + '日 ' + 
      timers.hour + ':' + timers.minute
    }}
  </div>
</template>

<script>
import { recDate } from '@/utils/format.js'
export default {
  data() {
    return {
      timers: {
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
      },
    };
  },
  created() {
    recDate(this)
  }
};
</script>

<style lang="scss" scoped>
  .for-date {
    text-align: center;
    margin: 25px 0;
  }
</style>