<template>
  <div class="header-top bx">
      <img src="https://img.alicdn.com/tfs/TB1R5fsgyDsXe8jSZR0XXXK6FXa-281-80.jpg" alt="">
      <div @click="$router.replace('/')">
         <i class="el-icon-menu"></i> 回到首页
      </div>
  </div>
</template>
<style lang="scss" scoped>
    .header-top {
        display: flex;
        color: $default-color;
        font-size: 21px;
        align-items: center;
        justify-content: space-between;
        div {
            cursor: pointer;
        }
    }
</style>