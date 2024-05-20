<template>
    <div class="person">
        <h2>当前值为：{{sum}}</h2>
        <select v-model="count">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">加</button>
        <button @click="decrement">减</button>
        <hr>
        <img v-for="img in imageList" :key="img.id" :src="img.url">
        <br>
        <button @click="getDog">随机增加一张</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'
    let {sum,count,increment,decrement} =useSum()
    let {imageList,getDog}=useDog()

</script>
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 10px;
    }

    img {
        height: 200px;
        margin-right: 10px;
    }

    button {
        margin: 0 10px;
    }
</style>