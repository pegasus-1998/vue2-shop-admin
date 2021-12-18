<template>
    <scale-transition :duration='duration'>
        <slot v-if="show"/>
    </scale-transition>
</template>

<script>
import { ScaleTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { ScaleTransition },
    mixins: [transitionMixins]
}
</script>