<template>
    <div class="app">
       <Person ref="ren"/>
       <button @click="test">测试</button>
    </div>
</template>
   
<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue';
    let ren=ref()
    function test(){
        console.log(ren.value.name)
        console.log(ren.value.age)
    }
    
</script>
<style scoped>

</style>