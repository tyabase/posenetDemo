<template>
    <a-row class="menu">
        <a-col :flex="10" class="headerLeft">
            <div class="logoLeft">
                <img class="logo" src="../assets/logo.png" alt="">
            </div>
        </a-col>
        <a-col :flex="1" class="headerRight">
            <div class="navItem">
                <a class="navItemBar" @click="pageMoveTo(1)">
                    作品信息
                </a>
                <a class="navItemBar" @click="pageMoveTo(2)">
                    作品特点
                </a>
                <!-- <a class="navItemBar" @click="pageMoveTo(3)">
                    联系作者
                </a> -->
                <a-button type="primary" class="try" @click="redirectToAnotherPage">在线体验</a-button>
            </div>
        </a-col>
    </a-row>
</template>

<style>
* {
    padding: 0;
    margin: 0;
}

.menu {
    z-index: 9999;
    position: fixed;
    background-color: white;
    width: 100%;
}

.headerLeft {
    height: 3.5rem;
}

.logoLeft {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5rem;
}

.logo {
    height: 2.5rem;
}

.headerRight {
    height: 3.5rem;
}

.navItem {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navItemBar {
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu, sans-serif;
    word-spacing: 1px;
    color: #676B73;
    font-size: 14px;
    margin-left: 1.8rem;
    padding-right: .5rem;
    cursor: pointer;
}

.try {
    margin-left: 1.8rem;

}

.navItemBar:hover {
    font-weight: bold;
    color: #3778e5;
}
</style>

<script>
// import { VueExtend } from 'godspen-lib';
export default {
    inject: ["pageMoveTo"],
    methods: {
        redirectToAnotherPage() {
            // 使用 this.$router.push 方法
            this.$router.push('/tensor-flow');
        },
    },
};
</script>