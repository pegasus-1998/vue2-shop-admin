<template>
  <div class="img-list">
      <img 
      :src="item" 
      :class='{now: index == now }'
       v-for="(item, index) in arr" 
       :key="index"
       @mouseenter="enterHandler(index)">
  </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [],
            now: 0
        }
    },
    methods: {
        enterHandler(idx) {
           this.now = idx
           this.$emit('changeUrl', idx)
        }
    }
}
</script>
<style lang="scss" scoped>
    .img-list {
        margin-top: 15px;
        img {
            cursor: pointer;
            width: 80px;
            margin-right: 15px;
            box-sizing: content-box;
        }
        .now {
            border: 2px solid $default-color;
        }
    }
</style>