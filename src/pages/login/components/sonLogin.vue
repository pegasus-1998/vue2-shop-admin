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
        <el-button type="primary" @click="login">首页</el-button>
    </div>
    <div class="bottom">
      <span>账号：admin</span>
      <span>密码：123456</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["activeName"],
  data() {
    return {
      loginObj: {
        account: "admin",
        password: 123456,
      },
    };
  },
  computed: {
    ...mapState("userModule", ["users", "token", "userIdx"]),
  },
  methods: {
    ...mapMutations("userModule", {
      SET_USERS_INDEX: "SET_USERS_INDEX",
      SET_TOKEN: "SET_TOKEN",
    }),
    login() {
      this.users.some((item, index) => {
        if (
          item.userName === this.loginObj.account &&
          item.password === this.loginObj.password
        ) {
          this.$message({
            type: "success",
            message: "登录成功",
          });
          this.SET_USERS_INDEX(index);
          this.SET_TOKEN(item.token);
          this.$router.replace("/person");
        } else {
          this.$message({
            type: "warning",
            message: "账号密码不正确",
          })
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
    .son-login {
        .btns {
            margin: 15px 0;
            display: flex;
            justify-content: flex-start;
        }
    }
</style>
