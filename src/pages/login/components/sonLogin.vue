<template>
  <div class="son-login">
    <el-input placeholder="请输入内容" v-model="loginObj.account" clearable>
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
    <div class="btns">
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="$router.back()">返回</el-button>
    </div>
    <div class="bottom">
      <span>账号：admin</span>
      <span>密码：123456</span>
      <span class="sp" @click="useAccount">
        <i class="el-icon-s-help"></i>
        使用测试号
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["activeName"],
  data() {
    return {
      loginObj: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("userModule", { LOGIN_USER: "LOGIN_USER" }),
    login() {
      this.LOGIN_USER(this.loginObj);
    },
    useAccount() {
      this.loginObj.account = 'admin'
      this.loginObj.password = '123456'
    }
  },
};
</script>

<style lang='scss' scoped>
.son-login {
  .btns {
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
  }
  .bottom {
    display: flex;
    align-items: center;
    .sp {
      cursor: pointer;
      color: $default-color;
      i {
        margin-left: 15px;
        vertical-align: middle;
        font-size: 28px;
      }
    }
  }
}
</style>
