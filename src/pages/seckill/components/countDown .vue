<template>
  <div class="count-down">
    <h3>
      <slot>裙子秒杀</slot>
    </h3>
    <img src="@/images/skill.png" alt="" /><br />
    <count-down ref="count" :startTime="Date.now()" :endTime="tamp" />
  </div>
</template>
<script>
import CountDown from "vue2-countdown";
export default {
  components: { CountDown },
  props: ['tamp']
};
</script>
<style lang="scss" scoped>
.count-down {
  color: #fff;
  width: 210px;
  font-size: 18px;
  height: 280px;
  padding-top: 45px;
  text-align: center;
  background: $default-color;
  h3 {
    color: wheat;
    font-size: 21px;
    letter-spacing: 5px;
  }
  img {
    width: 65px;
    margin: 25px 0;
  }
  ::v-deep p {
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin: 0 5px;
      vertical-align: middle;
      letter-spacing: 2px;
      line-height: 40px;
      background: lightcoral;
    }
    i {
      font-style: normal;
      &:nth-of-type(3) {
        display: none;
      }
    }
  }
}
</style>