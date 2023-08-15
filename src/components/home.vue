<script setup>
import {useRouter} from 'vue-router'


const router = useRouter()

function routerFunction() {

  router.push({name: 'cpn',params:{user_id:12345687}})
  // router.push({path: 'component-url'})
}
</script>

<template>
<div>
  <h1>Home Page</h1>
  <button @click="routerFunction">go component</button>
</div>
</template>

<style scoped>

</style>
