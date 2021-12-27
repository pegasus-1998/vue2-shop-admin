<template>
  <div class="header">
    <div class="left">
      <el-image 
        :src="users[userIdx].headPicture" 
        :preview-src-list="imgList"></el-image>
      <div>
        <p class="sp1">{{ users[userIdx].userName }}</p>
        <p class="pcolor">个性签名：{{ users[userIdx].ps }}<i class="el-icon-edit"></i></p>
      </div>
    </div>
    <p>我的支付宝</p>
    <p @click="$router.push('/shopCar')" class="pcolor">我的购物车</p>
    <el-button type="primary" @click="outLogin">退出登录</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("userModule", ["users","token","userIdx"]),
    imgList() {
      return [this.users[this.userIdx].headPicture]
    }
  },
  methods: {
    ...mapMutations('userModule',{CLEAR_TOKEN: 'CLEAR_TOKEN'}),
    outLogin() {
      this.CLEAR_TOKEN()
      this.$router.replace("/login");
      this.$message({
        type: "success",
        message: "退出成功",
      })
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  @include spaceBetween();
  align-items: center;
  background: #e4eaee;
  padding: 35px;
  border: 1px solid #ccc;
  .left {
    display: flex;
    align-items: center;
    ::v-deep .el-image {
      margin-right: 5px;
      width: 60px;
      height: 60px;
      .el-image__preview {
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .sp1 {
      display: inline-block;
      color: $default-color;
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
  .el-button {
    color: #fff;
    width: 85px;
  }
  .pcolor {
    cursor: pointer;
    &:hover {
      color: $default-color;
    }
  }
}
</style>