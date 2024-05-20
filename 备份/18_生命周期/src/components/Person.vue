<template>
    <h1>当前和为：{{sum}}</h1>
    <button @click="add">加1</button>
</template>

<script setup lang="ts" name="Person">
    import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue';
    let sum=ref(0)
    function add(){
        sum.value+=1
    }
    onBeforeMount(()=>{
        console.log('挂载之前')
    })
    onMounted(()=>{
        console.log('挂载完毕')
    })
    onBeforeUpdate(()=>{
        console.log('更新之前')
    })
    onUpdated(()=>{
        console.log('更新完毕')
    })
    onBeforeUnmount(()=>{
        console.log('卸载之前')
    })
    onUnmounted(()=>{
        console.log('卸载完毕')
    })

</script>
<style scoped>
</style>