<template>
  <div class="b-title">
      <span class="sp1">{{ title }}</span>
      <span class="sp2" :style="{background: cor}">{{ fTitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cor: {
        default: '#f03726',
    },
    title: {
        default: '默认值'
    },
    fTitle: {
        default: '默认值'
    }
  },
  data () {
   return {}
  },
   methods:{}
}
</script>

<style lang="scss" scoped>
    .b-title {
        .sp1 {
            color: #000;
            font-weight: 500;
            font-size: 21px;
        }
        .sp2 {
            font-size: 15px;
            padding: 2px 5px;
            color: #fff;
            border-radius: 5px;
            margin-left: 5px;
        }
    }
</style>