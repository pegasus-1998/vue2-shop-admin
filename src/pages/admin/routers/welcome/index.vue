<template>
  <div class="welcome">
    <div
      class="monster ani1"
      v-for="item in 6"
      :key="item"
      :class="[`ani${item}`]"
    >
      <div class="eye">
        <div class="eyeBall"></div>
      </div>
      <div class="mouth"></div>
    </div>
    <span class="sp">欢迎啊......亲！</span>
  </div>
</template>

<style lang="scss" scoped>
    @import "./index.scss";
    .el-button {
      color: #fff;
      letter-spacing: 2px;
      font-size: 18px;
    }
</style>