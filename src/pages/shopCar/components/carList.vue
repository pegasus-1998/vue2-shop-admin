<template>
  <ul class="car-list">
    <div class="sum">
      总价：<span class="sp"> {{ '￥' + sum.toFixed(2) }}</span>
      <el-button @click="$message({message: '余额不足，敬请期待！'})">付款</el-button>
    </div>
    <li class="item" v-for="(item, index) in shopMessage" :key="item.src">
      <el-checkbox v-model="checked[index]" size="medium"></el-checkbox>
      <img v-lazy="item.src" class="item-img" />
      <p class="item-con">描述：{{ item.con }}</p>
      <p class="item-con">专卖店：{{ item.store }}</p>
      <span class="item-sp">￥：{{ item.nowPrice  }}</span>
      <el-input-number
        v-model="num[index]"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
      <el-button type="primary" @click="removeShop(index)">删除</el-button>
    </li>
    <el-empty v-show="shopMessage.length == 0" description="快去将商品加入购物车吧！" :image-size="300"></el-empty>
  </ul>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      checked: [], //存储每个商品的布尔值
      num: [], //存储每个商品的数量
    };
  },
  props: ['fatherSum'],
  computed: {
    ...mapState("shopCarModule", ["shopMessage"]),
    sum() {
      return this.shopMessage.reduce((prev, item, index) => {
        if (this.checked[index]) {
          return prev + Number(item.nowPrice) * this.num[index];
        } else {
          return prev + 0;
        }
      }, 0);
    },
  },
  created() {
    this.shopMessage.forEach(() => {
      this.checked.push(true);
      this.num.push(1);
    });
  },
  methods: {
    ...mapMutations("shopCarModule", {
      DELETE_SHOP_MESSAGE: "DELETE_SHOP_MESSAGE",
    }),
    removeShop(idx) {
      this.$alert("您确定删除这件商品吗？", "提示", {
        confirmButtonText: "确定",
        type: "warning",
      })
        .then(() => {
          this.DELETE_SHOP_MESSAGE(idx)
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {});
    },
    handleChange() {},
  },
};
</script>
<style lang="scss" scoped>
.car-list {
  font-size: 18px;
  min-height: 450px;
  .sum {
    position: relative;
    padding-left: 25px;
    margin: 25px 0;
    .sp {
      color: $default-color;
    }
    .el-button {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .item {
    display: flex;
    align-items: flex-start;
    padding: 25px;
    border: 1px solid #ccc;
    background: rgb(236, 234, 234);
    margin: 25px 0;
    ::v-deep .el-checkbox {
      span {
        width: 30px;
        height: 30px;
        &::after {
          top: 20%;
          left: 35%;
          width: 7px;
          height: 15px;
        }
      }
    }
    .item-img {
      width: 150px;
      margin: 0 40px;
    }
    .item-con {
      width: 120px;
      margin: 0 20px;
      letter-spacing: 2px;
    }
    .item-sp {
      color: $default-color;
    }
    .el-input-number {
      margin: 0 20px;
    }
    .el-button {
      margin-left: 35px;
      color: #fff;
    }
  }
}
</style>