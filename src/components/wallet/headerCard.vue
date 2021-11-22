<template>
  <div class="header-card">
    <p>零钱余额 (元)</p>
    <p class="money-num">0.00</p>
    <p>邮费、话费充值等无法使用零钱支付 <i class="el-icon-info"></i></p>
    <img src="@/images/qb.png" class="qb"/>
  </div>
</template>

<style lang="scss" scoped>
    .header-card {
        position: relative;
        margin: 0 auto;
        width: 450px;
        color: #fff;
        text-align: center;
        padding: 15px;
        background-image: linear-gradient(to right,DeepPink, $default-color);
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        .money-num {
            margin: 20px 0;
            font-size: 45px;
        }
        .qb {
            position: absolute;
            width: 55px;
            top: 30%;
            right: 0;
        }
        
    }
</style>