<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
    unique-opened
    :default-active="$route.path"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">HOME</span>
      </template>
      <el-menu-item index="/admin/welcome">welcome</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">USER</span>
      </template>
      <el-menu-item index="/admin/message">message</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: ["isCollapse"],
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  height: 100%;
  color: #fff;
  user-select: none;
  background: #304156;
}
.el-menu-vertical-demo i,
.el-menu--collapse i {
  color: skyblue;
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
.el-menu-item:hover,
.el-menu-item:focus {
  background:  #112c4d;
}
.el-menu--collapse,
.el-submenu__title:hover,
.el-menu--vertical,
.el-menu--popup-right-start {
  background: #304156;
}
.el-menu-item {
  color: #fff;
}
</style>