<template>
    <collapse-transition :duration='duration'>
        <slot v-if="show"/>
    </collapse-transition>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { CollapseTransition },
    mixins: [transitionMixins]
}
</script>