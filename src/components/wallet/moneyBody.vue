<template>
  <div class="money-body">
    <div class="title">
        <span>充值</span>
        <span class="sp" @click="eventHandler(1)">提现</span>
    </div>
    <ul class="num-arr">
        <li 
            v-for="(item, index) in numArr" 
            :key="item" 
            :class="{item: true, active: now === index}"
            @click="changeMoney(index)"
        >
            <span>充{{item}}元</span>
        </li>
    </ul>
    <el-button type="primary" @click="eventHandler(1)">找人充</el-button>
    <el-button type="primary" @click="eventHandler(2)">充值</el-button>
  </div>
</template>

<script>
export default { 
    data() {
        return {
            now: 0,
            numArr: [10, 20, 30, 50, 100, 200]
        }
    },
    methods: {
        eventHandler(num) {
            if(num === 2) {

            }else {
                this.$message({
                    type: 'warning',
                    message: '此功能暂未开放'
                })
            }  
        },
        changeMoney(idx) {
            this.now = idx
        }
    }
}
</script>

<style lang="scss" scoped>
    .money-body {
        margin: 25px auto;
        padding: 15px;
        background: #f2eada;
        .title {
            @include spaceBetween();
            font-size: 20px;
            align-items: center;
            color: #000;
            .sp {
                cursor: pointer;
                &:hover {
                    color: $default-color;
                }
            }
        }
        .num-arr {
            @include spaceBetween();
            width: 650px;
            text-align: center;
            margin: 25px 0;
            color: #000;
            font-size: 18px;
            .item {
                cursor: pointer;
                width: 100px;
                height: 45px;
                line-height: 45px;
                background: #f6f5ec;
                border-radius: 15px;
                border: 1px solid #f6f5ec;
            }
            .active {
                color: $default-color;
                border: 1px solid $default-color;
            }
        }
        .el-button {
            color: #fff;
        }
    }
</style>