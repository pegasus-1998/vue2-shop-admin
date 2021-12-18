<template>
    <zoom-y-transition :duration='duration'>
        <slot v-if="show"/>
    </zoom-y-transition>
</template>

<script>
import { ZoomYTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { ZoomYTransition },
    mixins: [transitionMixins]
}
</script>