<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{fullName}}</span><br>
    </div>

</template>

<script setup lang="ts" name="Person">
    import {computed, ref} from 'vue'
    let firstName=ref('zhang')
    let lastName=ref('san')
    let fullName=computed({
        get(){
            return firstName.value+'-'+lastName.value

        },
        set(val){
            console.log(val)
            firstName.value=val.split('-')[0]
            lastName.value=val.split('-')[1]
        }
    })


  

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