<template>
    <swiper :options='options'>
        <slot name="con"></slot>
        <!-- <swiper-slide>
            <img src="@/images/swiper/swiper01.jpg" alt="">
        </swiper-slide > -->
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            options: {
                slidesPerView: 6,
                spaceBetween: 30,
                autoplay: true,
                loop: true,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>