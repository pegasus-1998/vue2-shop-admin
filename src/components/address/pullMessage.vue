<template>
  <el-dialog title="修改收货信息" :visible.sync="flag">
    <el-form label-width="80px">
      <el-form-item label="收货人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="所在地区">
        <v-distpicker 
            @province="onChangeProvince" 
            @city="onChangeCity" 
            @area="onChangeArea"
            :province='address.pro'
            :city='address.city'
            :area='address.area'>
        </v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="默认地址">
        <el-switch v-model="val"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import VDistpicker from 'v-distpicker'
import { mapState, mapMutations } from "vuex";
export default {
    components: { VDistpicker },
    data() {
        return {
            flag: this.flag,
            val: false,
            address: {
                pro: '广东省',
                city: '广州市',
                area: '海珠区'
            }
        }
    },
    computed: {
        ...mapState("userModule", ["users"]),
    },
    methods: {
        save() {
            
        },
        onChangeProvince(obj) {
           this.address.pro = obj.value
        },
        onChangeCity(obj) {
           this.address.city = obj.value
        },
        onChangeArea(obj) {
          this.address.area = obj.area
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