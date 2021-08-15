<template>
  <div class="details bx">
       <div>
         <pic-zoom :url='url'></pic-zoom>
         <img-arr ref="imgArr" @changeUrl='changeUrl'></img-arr>
       </div>
       <div class="right-con">
         <p>{{  everyMessage.store}}</p>
         <p>
           <span>{{$route.query.isSkill? '限时秒杀': '价格'}}</span>
           {{sort}}
          </p>
         <span style="color: red; font-size: 21px">评价：</span>
         <p>
           还可以，一分价钱一分货,
           ~ 东西还ok，但是有点脏了，希望下次发货速度的时候多注意一下，
           发货速度很快，东西不错，有效果,本来有点担心，不过去验证了，是行货，是个好店家、
           很好的店家。谢谢喽。我的同事们都很喜欢呢。下次再来哦。
           店家货物做工很精美，服务也不错，给好评1个。
          </p>
         <h3>{{ everyMessage.con }}</h3>
         <el-button type="danger" @click="$router.push('/shopCar')">立即购买</el-button>
         <el-button type="primary" icon="el-icon-shopping-cart-1" @click="addShopCar()">加入购物车</el-button>
         <span class="sp" @click="$router.goBack()">返回</span>
       </div>
  </div>
</template>

<script>
import picZoom from './components/picZoom.vue'
import imgArr from './components/imgArr.vue'
import { getHomeMockApi } from '@/apis/mock.js'
import { mapMutations, mapState } from 'vuex'
import createVuexAlong from "vuex-along";
export default {
  components: { picZoom, imgArr },
  data() {
    return {
      url: '',
      everyMessage: {},
    }
  },
  computed: {
    ...mapState('shopCarModule', ['shopMessage']),
    sort() {
      return this.$route.query.isSkill ? this.everyMessage.nowPrice - 15 : this.everyMessage.nowPrice
    }
  },
  created() {
    const { path, index } = this.$route.query
    this.getMessage(path, index)
  },
  methods: {
    ...mapMutations('shopCarModule', {ADD__SHOP_MESSAGE: 'ADD__SHOP_MESSAGE'}),
    addShopCar() {
       this.ADD__SHOP_MESSAGE(this.everyMessage)
    },
    changeUrl(idx) {
      this.url = this.$refs.imgArr.$data.arr[idx]
    },
    async getMessage(path, index) {
      const res = await getHomeMockApi(path)
      this.everyMessage = res[index]
      this.everyMessage.path = path
      this.$refs.imgArr.$data.arr = [
        this.url = this.everyMessage.src,
        'https://img.alicdn.com/imgextra/i3/56601822/O1CN01cD5U9Y1PKWJswXEqa_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/33094655/O1CN01ErtLS71kG2MLuI4x7_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .details {
    display: flex;
    padding: 65px 0;
    .right-con {
      position: relative;
      margin-left: 25px;
      border: 1px solid #ccc;
      padding: 15px 25px;
      flex: 1;
      p:nth-of-type(1) {
        color: $default-color;
        font-size: 21px;
      }
      p:nth-of-type(2) {
        display: flex;
        align-items: center;
        margin: 5px 0;
        color: $default-color;
        font-size: 30px;
        font-weight: 700;
        padding: 0 5px;
        margin: 25px 0;
        background-image: linear-gradient(to left,rgb(148, 54, 54), rgb(238, 202, 139));
        span {
          color: #fff;
          font-size: 18px;
          font-weight: normal;
          margin-right: 25px;
        }
      }
      p:nth-of-type(3) {
        text-indent: 2em;
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 25px;
        margin: 25px 0;
        margin-top: 15px;
      }
      h3 {
        color: #000;
        font-size: 21px;
        margin-bottom: 55px;
      }
      .el-button {
        margin-left: 25px;
        color: #fff;
        width: 210px;
        height: 60px;
        font-size: 21px;
        cursor: pointer;
      }
      .el-button:nth-of-type(2) {
        ::v-deep .el-icon-shopping-cart-1 {
          font-size: 30px;
          vertical-align: middle;
        } 
      }
      .sp {
        position: absolute;
        cursor: pointer;
        right: 5px;
        top: 5px;
        background: $default-color;
        padding: 10px;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
</style>