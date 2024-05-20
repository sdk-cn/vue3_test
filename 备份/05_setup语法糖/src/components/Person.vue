<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>

        
    </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person',
}
</script> -->
<script setup lang="ts" name="Person234">
//数据 原来是写在data中的，注意此时的name、age、tel不是响应式的数据
    let name='张三' 
    let age=18
    let tel='1151655166'
    //方法
    function changeName(){
        console.log(1)
        name='zhang-san'
        console.log(name)
    }
    function changeAge(){
        console.log(2)
        age+=1
        console.log(age)
    }
    function showTel(){
        console.log(3)
        alert(tel)
    }
</script>
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }

</style>