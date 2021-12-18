<template>
    <fade-transition :duration='1000'>
        <slot v-if="show"/>
    </fade-transition>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
import transitionMixins from '@/mixins/transitionMixins'
export default {
    components: { FadeTransition },
    mixins: [transitionMixins]
}
</script>

 