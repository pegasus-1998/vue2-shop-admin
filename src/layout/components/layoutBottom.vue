<template>
  <div class="layout-bottom">
    <div class="bx">
      <h3>vue2-shop-admin: </h3>
      <div class="mes">
        <a href="https://github.com/pegasus-1998/vue2-shop-admin" target="black">
          <img src="@/images/github.png"/>
        </a>
        <a href="https://github.com/pegasus-1998/vue2-shop-admin/blob/master/LICENSE">MIT</a>
      </div>
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
.layout-bottom {
  padding: 15px 0;
  color: #fff;
  line-height: 35px;
  background: rgba(#000, .8);
  h3 {
    font-size: 19px;
    font-style: italic;
  }
  .mes {
    padding-left: 180px;
  }
  img {
    width: 48px;
    margin: 0 15px;
    &:hover {
      transform: scale(1.1);
    }
  }
  a {
    font-size: 16px;
    &:hover {
      color: $default-color;
    }
  }
}
</style>