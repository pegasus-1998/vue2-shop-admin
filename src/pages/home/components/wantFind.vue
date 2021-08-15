<template>
  <div class="want-find">
      您是不是想找：
      <span v-for="(item,index) in arr" :key="index">{{item}}</span>
  </div>
</template>
<script>
export default {
  data () {
   return {
       arr: ['安踏','鸿星尔克','李宁','贵人鸟','耐克']
   }
  },
 
}
</script>
<style lang="scss" scoped>
    .want-find {
        padding: 20px 15px;
        margin: 25px auto;
        background: #f5f5f5;
        span {
            display: inline-block;
            cursor: pointer;
            color: #333;
            padding: 0 15px;
            border-right-width: 1px;
            border-right-style: solid;
            border-right-color: #333;
        }
    }
</style>