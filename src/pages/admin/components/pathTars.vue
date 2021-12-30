<template>
  <div class="path-tars">
      <el-tag 
        v-for="(item, index) in tars"
        type='success' 
        closable 
        :key='index'
        @click='$router.push(item)'
        @close='handlerClose(index)'>
        {{ item }}
      </el-tag>
  </div>
</template>

<script>
export default {
  data () {
   return {
     tars: []
   }
  },
  watch: {
    '$route.path': {
      handler(newVal) {
        const path = newVal.split('/')[2]
        !this.tars.some(item => item == path) && this.tars.push(path)
      },
      immediate: true
    }
  },
  methods: {
    handlerClose(idx) {
      this.tars.length > 1 && this.tars.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
    .path-tars {
        padding: 8px;
        margin: 25px 0;
        border-radius: 8px;
        background: #fff;
        .el-tag {
          cursor: pointer;
          margin-right: 15px;
        }
    }
</style>