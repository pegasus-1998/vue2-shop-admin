<template>
  <zoom-center-transition :duration='duration'>
    <slot v-if="show"/>
  </zoom-center-transition>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
  components: { ZoomCenterTransition },
  mixins: [transitionMixins]
}
</script>
