<template>
    <div class="person">
        <h2>情况三：监视【reactive】定义的【对象类型】数据</h2>
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改姓名</button>
        <button @click="changePerson">修改整个人</button>
        <hr>
        <h2>测试：{{obj.a.b.c}}</h2>
        <button @click="test">修改obj</button>
    </div>

</template>

<script setup lang="ts" name="Person">
    import {reactive, watch} from 'vue'

    let person=reactive({
        name: '张三',
        age: 18
    })
    let obj=reactive({
        a:{
            b:{
                c: 666
            }
        }
    })

    function changeName(){
        person.name+='~'
    }
    function changeAge(){
        person.age+=1
    }
    function changePerson(){
        Object.assign(person,{name: '李四',age:20})
    }
    function test(){
        obj.a.b.c+=1
    }
    //watch函数 默认开启深度监视，且无论修改属性还是整个对象，新值旧值都是一样的
    //第一个参数：被监视对象
    // 第二个参数：监视的回调 
    // 第三个参数：配置对象options（deep,immediate）
    watch(person,(newValue,oldValue)=>{
        console.log('@person发生变化',newValue,oldValue)
    },{immediate:true})
    watch(obj,(newValue,oldValue)=>{
        console.log('@obj发生变化',newValue,oldValue)
    },{immediate:true})

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