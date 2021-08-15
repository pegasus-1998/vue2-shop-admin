<template>
  <div class="search-nav">
    <img src="https://img.alicdn.com/tfs/TB1R5fsgyDsXe8jSZR0XXXK6FXa-281-80.jpg" alt="">
    <div class="content">
      <search :now.sync='now'/>
      <kind :now.sync='now'/>
    </div>
  </div>
</template>
<script>
import search from './search.vue'
import kind from './kind.vue'
export default {
  components: { search, kind },
  data() {
    return {
      now: 0
    }
  },
  watch: {
    now(newVal) {
      //发射给兄弟组件conList.vue
      switch(newVal) {
        case 0: 
           this.$bus.$emit('changeNow','/shopMes')  
          break
        case 1:
          this.$bus.$emit('changeNow','/xfs') 
          break
        case 2:
          this.$bus.$emit('changeNow','/watch') 
          break
        case 3:
          this.$bus.$emit('changeNow','/fruits') 
          break
        case 4:
          this.$bus.$emit('changeNow','/shoe') 
          break
        case 5:
          this.$bus.$emit('changeNow','/bike') 
          break
        default:
           this.$bus.$emit('changeNow','/shopMes')  
      }
     
    }
  }
}
</script>
<style lang="scss" scoped>
  .search-nav {
    margin: 30px auto;
    display: flex;
    align-items: center;
  }
</style>