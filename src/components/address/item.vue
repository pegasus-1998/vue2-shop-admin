<template>
    <div class="item" @click="$emit('showDir')">
        <i class="el-icon-s-home icon1" v-if="address.isDA"></i>
        <i class="el-icon-s-operation icon1" v-else></i>
        <div class="main">
            <div>
                <p>
                    <span class="sp1">{{address.name}}</span>
                    <span class="sp2">{{address.phone}}</span>
                    <span class="sp3" v-if="address.isDA">默认地址</span>
                </p>
                <p class="con">
                    {{address.pro}}-
                    {{address.city}}-
                    {{address.area}}=>
                    {{address.detailAddress}}</p>
            </div>
        </div>
        <i class="el-icon-edit-outline icon2"></i>
    </div>
</template>

<script>
export default {
    props: {
        address: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang='scss' scoped>
.item {
    @include spaceBc();
    width: 600px;
    border-radius: 12px;
    padding: 7px;
    cursor: pointer;
    margin-bottom: 25px;
    transition: all .3s;
    background-image: linear-gradient(
        to left,
        rgb(235, 227, 227),
        rgb(170, 172, 163)
    );
    &:hover {
        transform: scale(1.03);
    }
    [class^="el-icon-"] {
        font-size: 31px;
    }
    .icon1 {
        color: $default-color;
    }
    .icon2 {
        color: rgb(206, 182, 190);
    }
    .main {
        flex: 1;
        padding-left: 35px;
        .sp1 {
            color: #000;
            font-weight: 500;
            font-size: 19px;
        }
        .sp3 {
            color: $default-color;
            border: 1px solid $default-color;
            padding: 5px;
            border-radius: 2px;
            margin-left: 25px;
            border-radius: 3px;
        }
        span {
            margin-left: 6px;
        }
        .con {
            margin: 10px 0;
            text-align: center;
        }
    }
}
</style>