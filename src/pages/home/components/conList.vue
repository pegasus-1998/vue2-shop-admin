<template>
  <ul class="con-list">
    <li class="item" v-for="(item,index) in message" :key="item.id" v-show="showArr[0]<=index&&index<=showArr[1]" @click="goDetail(index)">
        <img class="big-img" v-lazy="item.src" alt=""/>
        <p class="con">{{item.con}}</p>
        <span class="sp1">￥{{(item.nowPrice * 1).toFixed(2)}}</span>
        <span class="sp2">￥{{(item.price * 1).toFixed(2)}}</span>
        <p class="store">
            <i class="el-icon-s-cooperation" color="red"></i>
            {{item.store}}
        </p>
        <span class="month-num">月销 {{item.monthNum}}</span>
    </li>
  </ul>
</template>
<script>
import { getHomeMockApi } from "@/apis/mock.js";
export default {
  data() {
      return {
          path: '/shopMes',  // 发送数据的路径
          showArr: [0, 14],  //数组中第一个和第二个参数代表的是列表显示的区间
          message: [],
      }
  },
  watch: {
      pageObj: {
          handler(newVal) {
              this.showArr = [(newVal.currentPage - 1) * newVal.changeNumber,newVal.currentPage * newVal.changeNumber -1]
          },
          deep: true
      }
  },    
  props: ['pageObj'],
  mounted() {
    this.getMessage('/shopMes');
    //监听兄弟组件searchNav.vue发射的事件
    this.$bus.$on('changeNow',(path) => {
       this.path = path
       this.getMessage(path)
    })
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        path: '/detail',
        query: {
          index,
          path: this.path
        }
      })
    },
    async getMessage(path) {
      this.message = await getHomeMockApi(path);
      this.$emit('changeNum',this.message.length)
    },
  },
};
</script>
<style lang="scss" scoped>
.con-list {
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0;
  .item {
    position: relative;
    width: 240px;
    padding: 20px;
    cursor: pointer;
    padding-bottom: 40px;
    border: 1px solid rgb(245, 241, 241);
    transition: all 0.2s linear;
    &:hover {
      border: 1px solid $default-color;
    }
    .big-img {
      display: block;
      width: 100%;
      height: 198px;
      object-fit: cover;
    }
    .con {
      font-size: 16px;
      margin: 10px 0;
      @include overflow-more(2);
    }
    .sp1 {
      font-size: 21px;
      color: $default-color;
    }
    .sp2 {
      font-size: 16px;
      color: #9b9b9b;
      margin-left: 10px;
      text-decoration: line-through;
    }
    .store {
      margin-top: 10px;
      padding-bottom: 10px;
      @include overflow();
      border-bottom: 1px solid rgb(226, 226, 226);
      i {
        color: $default-color;
      }
    }
    .month-num {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>