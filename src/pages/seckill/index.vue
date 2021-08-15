<template>
  <div class="seckill bx">
    <sec-list 
      v-for="item in 3" 
      :key="item"
      :sendMessage='sendMessage[item - 1]'
      />
  </div>
</template>
<script>
import secList from './components/secList.vue'
export default {
  components: { secList },
  data() {
    return {
      sendMessage: [
        { id: 0, tamp: Date.now() + 4800000, path: '/shopMes', title: '裙子秒杀' },
        { id: 2, tamp: Date.now() + 5200000, path: '/watch', title: '手表秒杀' },
        { id: 4, tamp: Date.now() + 7200000, path: '/shoe', title: '鞋子秒杀' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .seckill {
    padding: 25px 0;
    .sec-list {
      margin-bottom: 35px;
    }
  }
</style>