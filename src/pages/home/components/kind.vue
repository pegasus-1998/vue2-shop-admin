<template>
  <ul class="kind">
      <li 
         v-for="(item,index) in kindArr" 
        :key="index" 
        :class="{now: index === now}"
        @click="changeNow(index)">{{item}}</li>
  </ul>
</template>
<script>
export default {
  data () {
   return {
       kindArr: ['裙子','洗发水','手表','水果','鞋子','自行车']
   }
  },
  props: {
      now: {
          type: Number,
          default: 0,
      }
  },
  methods: {
      changeNow(index) {
          this.$emit('update:now',index)
      }
  }
}
</script>
<style lang="scss" scoped>
    .kind {
        display: flex;
        color: #9b9b9b;
        margin-top: 10px;
        li {
            cursor: pointer;
            padding: 2px 5px;
            margin-right: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .now {
            color: #fff;
            background: $default-color;
        }
    }
</style>