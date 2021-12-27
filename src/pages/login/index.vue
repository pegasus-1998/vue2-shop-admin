<template>
  <div class="login">
    <div class="input-login">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录" name="sonLogin">
          <son-login></son-login>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <son-register></son-register>
        </el-tab-pane>
        <el-tab-pane label="其它登录" name="three">
          <el-empty description="敬请期待"></el-empty>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import sonLogin from './components/sonLogin.vue'
import sonRegister from './components/sonRegister.vue'
export default {
  components: { sonLogin, sonRegister },
  data() {
    return {
      activeName: 'sonLogin'
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/images/bigBanner.jpg");
  .input-login {
    @include center;
    width: 450px;
    height: 380px;
    ::v-deep .el-tabs {
      padding: 15px;
      width: 100%;
      height: 100%;
      background: hsla(0, 0%, 100%, 0.9);
      .el-tabs__nav {
        padding-bottom: 5px;
      }
      .el-tabs__item {
        font-size: 21px;
        font-weight: 700;
      }
      .el-tabs__active-bar {
        height: 4px;
      }
      .el-input {
        margin: 10px 0;
        input {
          height: 55px;
        }
        i {
          font-size: 25px;
        }
      }
      .el-button {
        margin-left: 15px;
        width: 80px;
        height: 45px;
        font-size: 18px;
        letter-spacing: 15px;
        color: #fff;
      }
      .bottom {
        span {
          font-size: 17px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>