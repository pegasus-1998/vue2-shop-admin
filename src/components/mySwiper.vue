<template>
    <swiper :options='options' ref="swiper">
        <slot name="con"></slot>
    </swiper>
</template>

<script>
export default {
    props: {
        swOptions: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiper.$swiper
        }
    },
    data() {
        return {
            options: {
                slidesPerView: 5,
                spaceBetween: 30,
                autoplay: true,
                loop: true,
                speed: 300,
                autoplay : {
                    delay: 1200,  
    //                     stopOnLastSlide: false,
    // disableOnInteraction: true,
                },
                ...this.swOptions,
            }
        }
    }
}
</script>
