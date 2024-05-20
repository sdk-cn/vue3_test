<template>
   <div class="app">
        <Header/>
        <!-- 导航区 -->
        <div class="navigate">
            <!-- 方式1 -->
            <!-- <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
            <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            <RouterLink to="/about" active-class="xiaozhupeiqi">关于</RouterLink> -->
            <!-- 方式2 -->
            <RouterLink :to="{name: 'zhuye'}" active-class="xiaozhupeiqi">首页</RouterLink>
            <RouterLink :to="{name: 'xinwen'}" active-class="xiaozhupeiqi">新闻</RouterLink>
            <RouterLink :to="{path: '/about'}" active-class="xiaozhupeiqi">关于</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
   </div>

</template>

<script setup lang="ts" name="App">
 import {RouterView,RouterLink} from 'vue-router'
 import Header from './components/Header.vue';
</script>
<style scoped>
    .title {
        background-image: linear-gradient(45deg, gray, white);
        height: 70px;
        line-height: 70px;
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
    }
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a {
        width: 90px;
        height: 40px;
        display: block;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.xiaozhupeiqi {
        background-color: #64967E;
        color: #ffc268;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: 微软雅黑;
    }
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>