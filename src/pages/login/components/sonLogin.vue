<template>
  <div class="son-login">
    <el-input :placeholder="$t('pa')" v-model="loginObj.account" clearable>
      <template slot="prepend">
        <i class="el-icon-user-solid"></i>
      </template>
    </el-input>
    <el-input
      :placeholder="$t('pp')"
      v-model="loginObj.password"
      show-password
      clearable
    >
      <template slot="prepend">
        <i class="el-icon-s-operation"></i>
      </template>
    </el-input>
    <div class="btns">
      <el-button type="primary" @click="login">{{$t('login')}}</el-button>
      <el-button type="primary" @click="$router.back()">{{$t('back')}}</el-button>
    </div>
    <div class="bottom">
      <span>{{$t('account')}}：admin</span>
      <span>{{$t('password')}}：123456</span>
      <span class="sp" @click="useAccount">
        <i class="el-icon-s-help"></i>
        {{$t('use')}}
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
    margin-top: 35px;
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
