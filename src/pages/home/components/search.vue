<template>
  <div class="search">
    <el-input
      v-model.trim="value"
      :placeholder="$t('plac')"
      @focus="elState(1)"
      @blur="elState(2)"
    ></el-input>
    <el-button type="primary" @click="searchRes">{{$t('search')}}</el-button>
    <ul class="items" v-show="flag">
      <li
        class="item"
        :class="{ now: mouseNow === index }"
        v-for="(item, index) in arr"
        @click="clickHandler(index)"
        :key="index"
        @mouseenter="mouseNow = index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      mouseNow: 100,
      value: "",
      arr: ["裙子", "洗发水", "手表", "水果", "鞋子", "自行车"],
    };
  },
  props: ["now"],
  methods: {
    elState(num) {
      if (num === 1) {
          this.flag = true;
      } else {
        setTimeout(() => {
          this.flag = false
        }, 150)
      }
    },
    searchRes() {
      this.value = ''
    },
    clickHandler(index) {
       this.$emit('update:now', index)
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  ::v-deep .el-input__inner {
    width: 750px;
    height: 50px;
    border: 5px solid $default-color;
  }
  .el-button {
    color: #fff;
    width: 120px;
    font-size: 23px;
    letter-spacing: 3px;
    border-radius: 0;
    margin-left: -12px;
  }
  .items {
    position: absolute;
    z-index: 99;
    width: 100%;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    .item {
      cursor: pointer;
      padding-left: 5px;
      line-height: 35px;
    }
    .now {
      background: rgb(219, 219, 219);
    }
  }
}
</style>