<template>
    <div class="person">
        <h2>一辆{{car.brand}}车,价值{{car.price}}万</h2>
        <button @click="changePrice">修改车的价格</button>
        <h2>游戏列表</h2>
        <li v-for="g in games" :key="g.id">{{g.name}}</li>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
        <h2>obj.a.b.c.d的值为：{{obj.a.b.c.d}}</h2>
        <button @click="changeObj">修改obj.a.b.c.d</button>
    </div>

</template>

<script setup lang="ts" name="Person">
    import {ref} from 'vue'
    let car=ref({
        brand:'奔驰',
        price:100
    })
    let games=ref([
        {id:"1",name:"王者"},
        {id:"2",name:"原神"},
        {id:"3",name:"三国志"}
    ])
    let obj=ref({
        a:{
            b:{
                c:{
                    d:666
                }
            }
        }
    })

    console.log(car)
    console.log(games)
    console.log(obj)
    function changePrice(){
        car.value.price+=10
    }
    function changeFirstGame(){
        games.value[0].name="绝地求生"
    }
    function changeObj(){
        obj.value.a.b.c.d=1000
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