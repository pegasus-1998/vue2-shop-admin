<template>
    <draggable 
        element='ul' 
        class="vuedraggable" 
        :options='options'
        @end='end'
    >
        <span>vuedraggable: 拖拽组件库</span>
        <li v-for="item in fruits" :key="item.name" class="f-item">
            <span>{{ item.name }}</span>
            <img :src="item.img"/>
        </li>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    components: { draggable },
  data () {
   return {
       fruits: [
           { name: '苹果', img: require('@/images/fruits/apple.png')},
           { name: '香蕉', img: require('@/images/fruits/banana.png')},
           { name: '葡萄', img: require('@/images/fruits/grape.png')},
           { name: '橙子', img: require('@/images/fruits/orange.png')},
           { name: '草莓', img: require('@/images/fruits/strawberry.png')},
           { name: '桃子', img: require('@/images/fruits/peach.png')},
           { name: '西瓜', img: require('@/images/fruits/watermelon.png') },
       ],
       options: {
           draggable: ".f-item"
       }
   }
  },
  methods: {
      end() {
        this.$message({
            type: 'success',
            message: '拖拽结束'
        })
      }
  }
}
</script>
<style lang="scss" scoped>
    .vuedraggable {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            color: orange;
            font-size: 23px;
        }
        .f-item {
            cursor: grabbing;
            font-size: 18px;
            margin: 15px 0;
            padding: 5px;
            width: 50%;
            background: rgba(#fff, .5);
           img {
               width: 48px;
               margin-left: 50px;
           }
        }
    }
</style>