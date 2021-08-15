<template>
  <ul class="shop-list">
    <li v-for="(item, index) in message" :key="index" @click="goDetail(index)">
      <img v-lazy="item.src" alt="" />
      <div class="bottom">
        <p class="con">{{ item.con }}</p>
        <span class="sp1">{{ item.nowPrice - 15 }}</span>
        <span class="sp2">{{ item.price }}</span>
      </div>
    </li>
    <loading v-show="!message.length > 0"/>
  </ul>
</template>
<script>
import { getHomeMockApi } from "@/apis/mock.js";
 
export default {
  data() {
    return {
      message: [],
    };
  },
  props: ['path'],
  async mounted() {
    const res = await getHomeMockApi(this.path);
    this.message = res.splice(0, 5);
  },
  methods: {
    goDetail(index) {
        this.$router.push({
            path: '/detail',
            query: {
                index,
                path: this.path,
                isSkill: true
            }
        })
    },
  },
};
</script>
<style lang="scss" scoped>
.shop-list {
  position: relative;
  display: flex;
  flex: 1;
  li {
    cursor: pointer;
    width: 185px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 12px;
    box-shadow: 3px 3px 3px rgba(#000, 0.3);
    img {
      display: block;
      width: 100%;
    }
    .bottom {
      padding: 8px;
      span {
        display: inline-block;
        font-size: 16px;
      }
      .sp1 {
          border: 1px solid $default-color;
          color: $default-color;
          padding: 3px;
          margin-right: 15px;
      }
      .sp2 {
          display: inline-block;
          text-decoration: line-through
      }
      .con {
        @include overflow-more(2);
        margin-bottom: 10px;
      }
    }
  }
}
</style>