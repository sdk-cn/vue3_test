<template>
    <div class="person">
        <h2>一辆{{car.brand}}车,价值{{car.price}}万</h2>
        <button @click="changePrice">修改车的价格</button>
        <h2>游戏列表</h2>
        <li v-for="g in games" :key="g.id">{{g.name}}</li>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
        <hr>
        <h2>测试：{{obj.a.b.c}}</h2>
        <button @click="changeObjc">修改obj.a.b.c的值</button>
    </div>

</template>

<script setup lang="ts" name="Person">
    import {reactive} from 'vue'
    let car=reactive({
        brand:'奔驰',
        price:100
    })
    let games=reactive([
        {id:"1",name:"王者"},
        {id:"2",name:"原神"},
        {id:"3",name:"三国志"}
    ])
    let obj=reactive({
        a:{
            b:{
                c:1
            }
        }
    })
    console.log(car)
    console.log(games)
    function changePrice(){
        car.price+=10
    }
    function changeFirstGame(){
        games[0].name="绝地求生"
    }
    function changObjC(){
        obj.a.b.c+=1
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