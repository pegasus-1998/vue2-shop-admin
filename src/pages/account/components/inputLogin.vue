<template>
  <div class="input-login">
    <div class="content bx">
      <el-tabs v-model="activeName">
        <el-tab-pane label="密码登录" name="first">
          <el-input
            placeholder="请输入内容"
            v-model="loginObj.account"
            clearable
          >
            <template slot="prepend">
              <i class="el-icon-user-solid"></i>
            </template>
          </el-input>
          <el-input
            placeholder="请输入内容"
            v-model="loginObj.password"
            show-password
            clearable
          >
            <template slot="prepend">
              <i class="el-icon-s-operation"></i>
            </template>
          </el-input>
          <el-button type="primary" @click="login">登录</el-button>
          <div class="bottom">
            <span>账号：admin</span>
            <span>密码：123456</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="second">
          <el-empty description="敬请期待"></el-empty>
        </el-tab-pane>
        <el-tab-pane label="其它登录" name="three">
          <el-empty description="敬请期待"></el-empty>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "first",
      loginObj: {
        account: "admin",
        password: 123456,
      },
    };
  },
  computed: {
    ...mapState('userModule', ['users', 'token', 'userIdx']),
  },
  methods: {
    ...mapMutations('userModule',{SET_USERS_INDEX: 'SET_USERS_INDEX',SET_TOKEN: 'SET_TOKEN'}),
    login() {
     this.users.some((item, index) => {
        if(item.userName === this.loginObj.account && item.password === this.loginObj.password) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.SET_USERS_INDEX(index)
          this.SET_TOKEN(item.token)
          this.$router.replace("/person");
        }else {
          this.$message({
            type: 'warning',
            message: '账号密码不正确'
          })
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.input-login {
  height: 750px;
  background-position: center center;
  background-image: url("https://img.alicdn.com/imgextra/i3/O1CN01MFVMtx1UA3M1kNRrg_!!6000000002476-0-tps-2500-600.jpg");
  .content {
    position: relative;
    ::v-deep .el-tabs {
      position: absolute;
      top: 100px;
      right: 0;
      padding: 15px;
      width: 450px;
      height: 380px;
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
        display: block;
        margin: 15px auto;
        width: 60%;
        height: 55px;
        font-size: 18px;
        letter-spacing: 15px;
        color: #fff;
      }
      .bottom {
        margin-top: 25px;
        span {
          font-size: 17px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>