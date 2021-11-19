<template>
  <div class="address">
    <item @showDir='$refs.pm.flag = true'/>
    <pull-message ref="pm"></pull-message>
  </div>
</template>

<script>
import item from './item.vue'
import pullMessage from './pullMessage.vue'
export default {
  components: { item, pullMessage },
  data() {
    return {
    }
  }
}
</script>
