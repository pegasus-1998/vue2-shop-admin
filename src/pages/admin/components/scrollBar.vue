<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
    unique-opened
    :default-active="path"
    active-text-color='orange'
  >
    <el-submenu :index="item.index" v-for="item in bars" :key="item.index">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{item.text}}</span>
      </template>
      <el-menu-item 
        v-for="mItem in item.childrens" 
        :index="mItem"
        :key='mItem'
        >{{mItem}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { bars } from '@/utils/mes.js'
export default {
  props: ["isCollapse"],
  data() {
    return {
      bars
    }
  },
  computed: {
    path() {
      return this.$route.path.split('/')[2]
    }
  }
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