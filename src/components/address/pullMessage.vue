<template>
  <el-dialog title="修改收货信息" :visible.sync="flag" v-if="flag">
    <el-form label-width="80px">
      <el-form-item label="收货人">
        <el-input v-model='nowAddress.name'></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model='nowAddress.phone'></el-input>
      </el-form-item>
      <el-form-item label="所在地区">
        <v-distpicker 
            @province="onChangeProvince" 
            @city="onChangeCity" 
            @area="onChangeArea"
            :province='nowAddress.pro'
            :city='nowAddress.city'
            :area='nowAddress.area'>
        </v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model='nowAddress.detailAddress'></el-input>
      </el-form-item>
      <el-form-item label="默认地址">
        <el-switch v-model="nowAddress.isDA"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import VDistpicker from 'v-distpicker'
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    components: { VDistpicker },
    data() {
      return {
        flag: false,
        nowAddress: {}
      }
    },
    computed: {
        ...mapState('userModule', ['users', 'userIdx']),
        ...mapGetters('userModule', ['address']),
    },
    created() {
      this.nowAddress = { ...this.address }
    },
    methods: {
      ...mapMutations('userModule', {SET_ADDRESS: 'SET_ADDRESS'}),
      save() {
        this.$alert('您确定修改当前收货地址的信息吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
        .then(() => {
          this.SET_ADDRESS(this.nowAddress)
          this.$message({
            type: 'success',
              message: '保存成功'
          })
          this.flag = false
        })
        .catch(() => {})
        },
      onChangeProvince(obj) {
        this.nowAddress.pro = obj.value
      },
      onChangeCity(obj) {
        this.nowAddress.city = obj.value
      },
      onChangeArea(obj) {
        this.nowAddress.area = obj.value
      }
   }
}
</script>

<style lang='scss' scoped>
    .el-dialog {
        .el-button {
            display: block;
            width: 350px;
            color: #fff;
            letter-spacing: 15px;
            font-size: 18px;
            margin: 0 auto;
        }
    }
</style>