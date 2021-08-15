<template>
  <div class="no-path bx">
      <img src="@/images/error.png" alt="">
      <h3>亲，不知道你在找什么？</h3>
    <el-button type="primary" @click="$router.replace('/home')">回到首页</el-button>
  </div>
</template>
<script>
export default {
 
}
</script>
<style lang="scss" scoped>
    .no-path {
        padding: 70px;
        text-align: center;
        h3 {
            margin: 25px;
            font-size: 25px;
            font-weight: 700;
            letter-spacing: 5px;
            color: $default-color;
        }
        .el-button {
            color: #fff;
        }
    }
</style>