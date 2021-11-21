<template>
  <ul class="nav">
    <li 
      v-for="(item, index) in arrList" 
      :key="index" 
      :class="{active: index === active, item: true}"
      @click="eventHandler(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      arrList: ['收货地址', '我的收藏', '我的物流', '我的钱包', '退款维权', '已购宝贝']
    }
  },
  methods: {
    eventHandler(idx) {
      this.$emit('update:active', idx)
    }
  }
};
</script>

<style lang='scss' scoped>
    .nav {
        color: #000;
        border: 1px solid #ccc;
        background: #e4eaee;
        padding: 15px;
        letter-spacing: 2px;
        width: 110px;
        .item {
          cursor: pointer;
          margin: 12px 0;
          font-size: 16px;
          &:hover {
              text-align: right;
          }
        }
        .active {
          color: $default-color;
        }
    }
</style>