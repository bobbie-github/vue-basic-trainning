<script setup>



import {userStore} from "../../store/index.js";

const user_store = userStore()
function onCounter(){
  user_store.increment();
}

</script>

<template>

  <h1>State Management</h1>

  <h1>name:{{user_store.name}}</h1>
  <h1>counter:{{user_store.count}}</h1>
  <button @click="onCounter">click active </button>
</template>

<style scoped>

</style>