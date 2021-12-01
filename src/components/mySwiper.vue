<template>
    <swiper :options='options'>
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
    data() {
        return {
            options: {
                slidesPerView: 5,
                spaceBetween: 30,
                autoplay: true,
                loop: true,
                ...this.swOptions
            }
        }
    }
}
</script>
