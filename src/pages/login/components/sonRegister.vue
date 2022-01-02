<template>
  <div class="son-register">
      <el-form :rules="rules">
          <el-form-item prop="account">
            <el-input 
              type="text"
              v-model="regForm.account"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item prop="password">
              <el-input 
                type="text" 
                v-model="regForm.password"
                placeholder="请输入密码"
          />
          </el-form-item>
      </el-form>
      <el-avatar
        @click.native="$refs.sImg.flag = true"
        :size="68" 
        :src="regForm.imgSrc"
      />
      <el-button type="primary">注册</el-button>
      <el-button type="primary" @click="$router.back()">返回</el-button>
      <select-img :img.sync='regForm.imgSrc' ref="sImg"/> 
  </div>
</template>

<script>
import selectImg from './selectImg.vue'
export default {
  components: { selectImg },
  data () {
   return {
     regForm: {
       account: '',
       password: '',
       qm: '',
       imgSrc: require('@/images/ava/ava01.png')
     },
     rules: {
       account: [
         { required: true, message: '账号不能为空', trigger: ['blur', 'change', 'input'] }
       ],
       password: [
         { required: true, message: '密码不能为空', trigger: ['blur', 'change', 'input'] }
       ]
     }
   }
  }
}
</script>

<style lang="scss" scoped>
  .son-register {
    .el-avatar  {
      position: relative;
      cursor: pointer;
      vertical-align: middle;
      user-select: none;
      &:hover {
        &::before {
          display: block;
        }
      }
      &::before {
        display: none;
        @include center();
        content: '选择';
        color: #fff;
        width:  100%;
        height: 100%;
        font-size: 18px;
        font-weight: 500;
        background: rgba(#000, .5);
      }
    }
  }
</style>