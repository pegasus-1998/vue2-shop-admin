<template>
  <div class="address">
    <item 
      @showDir='$refs.pm.flag = true'
      v-for="(item, index) in users[userIdx].address"
      :key='index'
      :address="item"
    />
    <pull-message ref="pm"></pull-message>
  </div>
</template>

<script>
import item from './item.vue'
import { mapState, mapMutations } from "vuex";
import pullMessage from './pullMessage.vue'
export default {
  components: { item, pullMessage },
  computed: {
    ...mapState('userModule', ['users', 'userIdx', ])
  }
}
</script>
