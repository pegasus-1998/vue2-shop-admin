<template>
  <div class="pg401 bx">
    <img src="@/images/401.gif"/>
    <div class="right-con">
      <el-button type="primary" @click="$router.push('/home')">首页</el-button>
      <h3>您没有权限去改页面</h3>
      <p>是否去获取权限?</p>
      <el-button type="success" @click="$router.push('/admin')">获取权限</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pg401 {
    @include hvCenter();
    height: 100%;
    line-height: 60px;
    font-size: 18px;
    h3 {
      font-size: 28px;
    }
    .el-button {
      color: #fff;
    }
    img {
      width: 410px;
    }
  }
</style>