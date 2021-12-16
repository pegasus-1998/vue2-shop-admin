<template>
    <slide-y-up-transition :duration='duration'>
        <slot v-if="show"/>
    </slide-y-up-transition>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { SlideYUpTransition },
    mixins: [transitionMixins]
}
</script>