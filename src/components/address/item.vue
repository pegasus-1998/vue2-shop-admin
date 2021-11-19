<template>
  <div class="item" @click="$emit('showDir')">
      <i class="el-icon-s-home icon1"></i>
      <div class="main">
          <div>
              <p>
                <span class="sp1">潇洒哥</span>
                <span class="sp2">11012013014</span>
                <span class="sp3">默认</span>
              </p>
              <p class="con">xx省 xx市 xx区 某一条街道的某一个地方的</p>
          </div>
      </div>
      <i class="el-icon-edit-outline icon2"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .item {
        @include spaceBc();
        background: rgb(240, 214, 232);
        width: 600px;
        border-radius: 12px;
        padding: 7px;
        cursor: pointer;
        [class^=el-icon-] {
            font-size: 31px;
        }
        .icon1 {
             color: $default-color;
        }
        .icon2 {
            color: palevioletred;
        }
        .main {
            .sp1 {
                color: #000;
                font-weight: 700;
                font-size: 21px;
            }
            .sp3 {
                color: $default-color;
                border: 1px solid $default-color;
                padding: 2px;
                border-radius: 2px;
            }
            span {
                margin-left: 6px;
            }
            .con {
                margin: 10px 0;
            }
        }
    }
</style>