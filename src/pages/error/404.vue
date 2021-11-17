<template>
    <div class="bx pg404">
        <img src="@/images/404.png" class="left-img"/>
        <div class="right-con">
            <p>Not Found</p>
            <p>页面找不到了!</p>
            <router-link to="/" replace>回到首页</router-link>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .pg404 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 55px;
        .left-img {
            width: 330px;
            margin-right: 35px;
        }
        .right-con {
            color: $default-color;
            font-size: 35px;
        }
        p {
            line-height: 75px;
        }
        a {
            font-size: 25px;
            color: rgb(201, 126, 138);
            text-decoration: underline;
            &:hover {
                color: $default-color;
            }
        }
    }
</style>