<template>
  <div class="price-scope">
    <div class="price">价格区间：</div>
    <el-input v-model.trim="startValue" placeholder="￥"></el-input>—
    <el-input v-model.trim="endValue"  placeholder="￥"></el-input>
    <el-button type="primary" @click="confirm">确定</el-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            startValue: '',
            endValue: ''
        }
    },
    methods: {
        confirm() {
            if(this.startValue === '' || this.endValue === '') {
                this.$message('区间的价格不能为空')
                return
            }
            if(Number.isNaN(parseFloat(this.startValue))||Number.isNaN(parseFloat(this.endValue))) {
                 this.$message('您所输入的数值不合法')
                 return
            }
            this.$message('敬请期待！')
        }
    }
};
</script>
<style lang="scss" scoped>
.price-scope {
  display: flex;
  height: 50px;
  align-items: center;      
 .el-input {
    margin: 0 5px;
    width: 55px;
  }
  .el-button {
      margin-left: 10px;
      color: #fff;
  }
}
</style>