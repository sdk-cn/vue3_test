<template>
    <div class="count">
        <h2>当前的和为：{{sum}}</h2>
        <select v-model="count">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">加</button>
        <button @click="decrement">减</button>

    </div>

</template>

<script setup lang="ts" name="Count">
    import {ref} from 'vue'
    let sum=ref(0)
    let count=ref(1)
    function increment(){

    }
    function decrement(){
        
    }


</script>

<style scoped>
    .count {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px
    }

</style>