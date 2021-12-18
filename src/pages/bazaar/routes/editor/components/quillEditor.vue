<template>
    <quill-editor
        v-model="content"
        ref='myQuillEditor'
        :options='options'>
    </quill-editor>
</template>

<script>
import { quillEditor  } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {  quillEditor },
  data () {
   return {
     content: `
        <img src='https://avatars.githubusercontent.com/u/83812401?v=4'/>
     `,
     options: {
       placeholder: '请在这里输入'
     }
   }
  }
}
</script>

<style lang='scss' scoped>
    .quill-editor {
        height: 90%;
        ::v-deep img {
            width: 230px;
        }
    }
</style>