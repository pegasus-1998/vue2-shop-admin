<template>
  <ul class="select-img" v-if="flag">
      <li v-for="item in 21" :key="item" @click="changeSrc(item)">
        <el-avatar 
            :size="68" 
            :src="require(`@/images/ava/ava0${item}.png`)"
        />
      </li>
  </ul>
</template>

<script>
export default {
    props: ['img'],
    data() {
        return {
            flag: false
        }
    },
   methods:{
       changeSrc(item) {
           this.flag = false
           this.$emit('update:img', require(`@/images/ava/ava0${item}.png`))
       }
   }
}
</script>

<style lang="scss" scoped>
    .select-img {
        @include fixCen();
        @include spaceBetween();
        z-index: 99;
        width: 450px;
        background: rgba(#000, .5);
        li {
            cursor: pointer;
            margin: 5px;
            .el-avatar {
                transition: all, .3s;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
</style>