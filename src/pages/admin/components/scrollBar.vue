<template>
  <div class="scroll-bar">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scroll-bar {
  width: 230px;
  height: 100%;
  color: #fff;
  background: #304156;
}
</style>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 100%;
  background: #304156;
}
.el-submenu__title {
  color: #fff;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 2px;
}
.el-submenu .el-menu-item {
    color: #fff;
    text-indent: 1.5em;
    font-size: 16px;
    background: #304156;
}
.el-submenu__title:hover {
    background: #304156;
}
</style>