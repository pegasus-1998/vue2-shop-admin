<template>
  <div class="loading">
      <img src="@/images/loading.png" alt="">
      <p>加载中...</p>
  </div>
</template>
<style lang="scss" scoped>
  .loading {
    margin: 35px auto;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: $default-color;
    img {
      width: 80px;
      margin-bottom: 25px;
      animation: rt 5s infinite ease-out;
    }
    @keyframes rt {
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>