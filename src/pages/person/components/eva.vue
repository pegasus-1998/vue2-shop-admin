<template>
  <div class="eva">
      我的评价
      <el-rate v-model="value"></el-rate>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
}
</script>

<style>

</style>