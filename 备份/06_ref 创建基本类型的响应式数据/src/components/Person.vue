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
<script setup lang="ts" name="Person">
    import {ref} from 'vue'
//数据 原来是写在data中的，注意此时的name、age、tel不是响应式的数据
    let name=ref('张三')
    let age=ref(18)
    let tel='1151655166'
    //方法
    function changeName(){
        console.log(1)
        name.value='zhang-san'
        console.log(name.value)
    }
    function changeAge(){
        console.log(2)
        age.value+=1
        console.log(age.value)
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