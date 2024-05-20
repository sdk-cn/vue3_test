<template>
    <div class="person">
        <h2>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h2>
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <h2>汽车：{{person.car.c1}} {{person.car.c2}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改姓名</button>
        <button @click="changeC1">修改第一辆车</button>
        <button @click="changeC2">修改第二辆车</button>
        <button @click="changeCar">修改所有车</button>
        
    </div>

</template>

<script setup lang="ts" name="Person">
    import {reactive, watch} from 'vue'

    let person=reactive({
        name: '张三',
        age: 18,
        car: {
            c1:'宝马',
            c2:'奔驰'
        }
    })

    function changeName(){
        person.name+='~'
    }
    function changeAge(){
        person.age+=1
    }

    function changeC1(){
        person.car.c1='奥迪'

    }
    function changeC2(){
        person.car.c2='小米su7'
    }
    function changeCar(){
        person.car={c1:'悍德悍斯',c2:'劳德劳斯'}
    }


    //监视对象属性，第一个参数箭头函数，返回对象属性，第二个参数监视回调，第三个配置对象
    //默认不开启深度监视
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('@person.car发生变化',newValue,oldValue)
    },{deep:true})


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