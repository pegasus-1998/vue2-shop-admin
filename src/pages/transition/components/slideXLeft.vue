<template>
    <slide-x-left-transition :duration='duration'>
        <slot v-if="show"/>
    </slide-x-left-transition>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { SlideXLeftTransition },
    mixins: [transitionMixins]
}
</script>