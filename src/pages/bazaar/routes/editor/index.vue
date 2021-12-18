<template>
  <div class="editor">
    <quill-editor></quill-editor>
  </div>
</template>

<script>
import quillEditor from './components/quillEditor.vue'
export default {
  components: { quillEditor }
}
</script>
<style lang="scss" scoped>
  .editor {
    height: 100%;
    .quill-editor {
      height: 92%;
    }
  }
</style>