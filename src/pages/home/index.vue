<template>
  <div class="home bx">
    <search-nav></search-nav>
    <price-scope></price-scope>
    <con-list :pageObj='pageObj' @changeNum='changeNum'></con-list>
    <el-pagination
      v-show="0 < num"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageObj.currentPage"
      :page-sizes="[15,30,45]"
      :page-size="pageObj.changeNumber"
      layout="total, sizes, prev, pager, next, jumper"
      :total="num">
    </el-pagination>
    <loading v-show="!num "/>
    <want-find></want-find>
  </div>
</template>
<script>
import searchNav from "./components/searchNav.vue";
import priceScope from "./components/priceScope.vue";
import conList from "./components/conList.vue";
import wantFind from './components/wantFind.vue'
export default {
  name: 'home',
  components: { searchNav, priceScope, conList, wantFind },
  data() {
    return {
      num: 0,
      pageObj: {
        currentPage: 1,
        changeNumber:15,
      },
      changePage: 1
    };
  },
  methods: {
    changeNum(val) {
      this.num = val
      this.pageObj.currentPage = 1
      this.changeNumber = 15
    },
    handleSizeChange(val) {
      this.pageObj.changeNumber = val
    },
    handleCurrentChange(val) {
      this.pageObj.currentPage = val
    },
  },
};
</script>
<style lang="scss" scoped>
  .home {
    .el-pagination {
       display: flex;
       justify-content: center;
    }
  }
</style>