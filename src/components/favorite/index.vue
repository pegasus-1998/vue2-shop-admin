<template>
  <div class="favorite">
    <for-date></for-date>
    <jw-chat></jw-chat>
  </div>
</template>

 

<script>
import forDate from './forDate.vue'
import jwChat from './jwChat.vue'
export default {
  components: { forDate, jwChat },
}
</script>

<style lang="scss" scoped>
  .favorite {

  }
</style>