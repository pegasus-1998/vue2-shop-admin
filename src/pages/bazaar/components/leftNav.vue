<template>
  <div class="left-nav">
    <h3 class="title">主题市场</h3>
    <ul class="navs">
      <li v-for="(item, index) in ztNavList" :key="index" class="item">
        <i :class="item.icon"></i>
        <div v-for="(sItem, sIndex) in item.kinds" :key="sIndex" class="tags">
          <span v-if="sIndex !== 0">/</span>
          <router-link 
            :to="sItem.path" 
            :key="sIndex"
            active-class="active">
            {{ sItem.text }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ztNavList from '@/utils/ztNav.js'
export default {
  data () {
   return {
     ztNavList
   }
  }
}
</script>

<style lang="scss" scoped>
  .left-nav {
    width: 212px;
    .active {
      color: $default-color;
    }
    .title {
      text-align: center;
      letter-spacing: 2px;
      color: $default-color;
    }
    .navs {
      font-size: 15px;
      .item {
        @include flexItem();
        margin: 10px 0;
        &:hover {
          color: $default-color;
        }
        .tags {
          margin-left: 9px;
          span {
            padding-right: 3px;
          }
          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>