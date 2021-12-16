<template>
    <zoom-x-transition :duration='duration'>
        <slot v-if="show"/>
    </zoom-x-transition>
</template>

<script>
import { ZoomXTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { ZoomXTransition },
    mixins: [transitionMixins]
}
</script>