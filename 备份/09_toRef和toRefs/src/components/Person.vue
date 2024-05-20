<template>
    <div class="person">
        <h2>姓名：{{person.name}}</h2>
        <h2>性别：{{person.gender}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>

</template>

<script setup lang="ts" name="Person">
    import {reactive, ref, toRef, toRefs} from 'vue'
    let person=reactive({
        name: '张三',
        gender: '男',
        age: 19
    })

    let {name,age}=toRefs(person)
    let gender=toRef(person,'gender')
    console.log(name)
    console.log(age)
    console.log(gender)

    // let {name,age}=toRefs(person)
    function changeName(){
        name.value='李四'
    }
    function changeAge(){
        age.value+=1
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