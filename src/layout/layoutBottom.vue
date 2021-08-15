<template>
  <div class="layout-bottom bx">
      <a href="">联系客服</a>
      <a href="">开发平台</a>
      <a href="">法律声明</a>
      <a href="">廉政举报</a>
      <a href="">Taobao.com版权所有 2003-现在</a>
      <a href="">增值电信业务经营许可证：浙B2-20070195</a>
      <img src="//gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png" alt="">
      <a href="">浙公网安备 33010002000075号</a><br>
      <a href="" v-for="(item,index) in arr" :key="index" class="item">{{item.name}}</a>
      <br/>
      <img class="color" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="">
      <img class="color" src="//gw.alicdn.com/tfs/TB1HxCbreL2gK0jSZPhXXahvXXa-65-70.gif" alt="">
      <img class="color" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png" alt="">
  </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [
                {name: '阿里巴巴集团',src:''},
                {name: '淘宝网',src:''},
                {name: '天猫',src:''},
                {name: '聚划算',src:''},
                {name: '全球速卖通',src:''},
                {name: '阿里巴巴国际交易市场',src:''},
                {name: '1688',src:''},
                {name: '阿里妈妈',src:''},
                {name: '飞猪',src:''},
                {name: '阿里云计算',src:''},
                {name: 'AliOS',src:''},
                {name: '阿里通信',src:''},
                {name: '高德',src:''},
                {name: 'UC',src:''},
                {name: '友盟',src:''},
                {name: '虾米',src:''},
                {name: '阿里星球',src:''},
                {name: '钉钉',src:''},
                {name: '支付宝',src:''},
                {name: '达摩院',src:''},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .layout-bottom {
        color: #666;
        line-height: 35px;
        margin: 25px auto;
        a {
            margin-right: 25px;
            &:hover {
                color: #000;
                text-decoration: underline;
            }
        }
        .item {
            padding-right: 25px;
            border-right-width: 1px;
            border-right-style: solid;
            border-right-color: #666;
        }
        .color {
            cursor: pointer;
            width: 50px;
            filter: grayscale(100%);
            margin-right: 25px;
            &:hover {
                filter: none;
            }
        }
    }
</style>