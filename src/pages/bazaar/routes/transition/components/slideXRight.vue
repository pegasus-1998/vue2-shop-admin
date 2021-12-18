<template>
    <slide-x-right-transition :duration='duration'>
        <slot v-if="show"/>
    </slide-x-right-transition>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { SlideXRightTransition },
    mixins: [transitionMixins]
}
</script>