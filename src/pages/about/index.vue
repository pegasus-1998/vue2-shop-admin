<template>
  <div class="about bx">
    <img class="vue-logo" src="https://cn.vuejs.org/images/logo.svg" />
    <h3>项目中所使用到的插件库详解</h3>
    <ul class="items">
      <li class="item">
        <a href="https://cn.vuejs.org/" target="black">vue: 构建用户界面的 MVVM 框架，易于上手，还便于与第三方库或既有项目合。
        </a>
      </li>
      <li class="item">
        <a href="https://router.vuejs.org/zh/" target="black">vue-router: Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。</a>
      </li>
      <li class="item">
        <a href="https://vuex.vuejs.org/zh/" target="black">vuex: 是一个专为 Vue.js 应用程序开发的状态管理模式。</a>
      </li>
      <li class="item">
        <a href="https://cli.vuejs.org/zh/" target="black">vue-cli: 基于 Vue.js 进行快速开发的完整系统，vue脚手架。</a>
      </li>
      <li class="item">
        <a href="https://element.eleme.cn/#/zh-CN" target="black">element-ui: 基于 Vue 2.0 的桌面端组件库, PC端而言这应该是vue用的最多的组件库。</a>
      </li>
      <li class="item">
        <a href="https://www.w3cschool.cn/jquti/" target="black">axios: 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js中。</a>
      </li>
      <li class="item">
        <a href="https://www.sass.hk/docs/" target="black">scss: css扩展语言，更高效地开发项目，Element的theme-chalk使用SCSS编写。</a>
      </li>
      <li class="item">
        <a href="https://www.npmjs.com/package/vuex-along" target="black">vuex-along: 持久化存储state的 vuex扩展。解决vuex中页面刷新数据丢失问题。</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about {
  .vue-logo {
    display: block;
    width: 190px;
    margin: 25px auto;
  }
  h3 {
    color: #000;
    font-size: 21px;
  }
  .items {
    padding-left: 25px;
    .item {
      position: relative;
      line-height: 30px;
      padding-left: 15px;
      font-size: 18px;
      margin: 25px 0;
      &::before {
        position: absolute;
        content: "";
        left: 0;
        width: 5px;
        height: 30px;
        background: #ccc;
      }
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>