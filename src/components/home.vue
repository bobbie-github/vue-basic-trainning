<script setup>
import {useRouter} from 'vue-router'


const router = useRouter()

function routerFunction() {
  router.push({name: 'cpn',params:{user_id:12345687}})
}

function routerSyntax() {
  router.push({name: 'syntax' })
}function routerAdmin() {
  router.push({name: 'admin' })
}
</script>

<template>
<div>
  <h1>Home Page</h1>
  <button @click="routerFunction">go component</button>
  <button @click="routerSyntax">go Syntax</button>
  <button @click="routerAdmin">go Admin</button>
</div>
</template>

<style scoped>

</style>
