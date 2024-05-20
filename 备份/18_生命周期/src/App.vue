<template>
    <Person v-if="isShow"/>
</template>

<script setup lang="ts" name="App">
import { ref } from 'vue';
import Person from './components/Person.vue';
let isShow=ref(true)
</script>
<style scoped>
</style>