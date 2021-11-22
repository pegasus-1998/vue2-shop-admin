<template>
  <clock :time="time"></clock>
</template>

<script>
import Clock from 'vue-clock2';
export default {
    components: { Clock },
    data() {
        return {
            time: '10:40:00'
        }
    },
    created() {
        setInterval(() => {
            this.getDate()
        }, 1000)
    },
    methods: {
        getDate() {
            const date = new Date()
            let h = date.getHours()
            let m = date.getMinutes()
            let s = date.getSeconds()
            h = h < 10 ? ('0' + h) : h
            m = m < 10 ? ('0' + m) : m
            s = s < 10 ? ('0' + s) : s
            this.time = h + ':' + m + ':' + s
        }
    }
}
</script>

<style lang="scss" scoped>
    .clock {
        width: 200px;
        height: 200px;
    }
</style>