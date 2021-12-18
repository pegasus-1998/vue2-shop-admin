<template>
    <slide-y-down-transition :duration='duration'>
        <slot v-if="show"/>
    </slide-y-down-transition>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { SlideYDownTransition },
    mixins: [transitionMixins]
}
</script>