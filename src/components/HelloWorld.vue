<script setup>
import {reactive, ref} from 'vue'

defineProps({
  msg: String,
})

const username = ref('isIf')
const text = ref('')

const data = ref([] )
const isActive = ref(true)
const object  = reactive({
  phone:'2020000',
  address:'lao',
  url:'lao.com',
  age:90
})

function onActive() {
  console.log(isActive.value)
  isActive.value = false;
  username.value = 'isNot';
  text.value ='create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for community maintained templates that include other tools or target different frameworks. You can use a tool like degit to scaffold your project with one of the templates.'
  console.log(isActive.value)
  console.log("on active")
  console.log(object)

  for (let i =0;i<10;i++){
    data.value.push({
      ceo:'pupe',
      age:i*2
    })
  }
}


</script>

<template>
  <h1>{{ msg }}</h1>


  {{data.length}}
  {{data}}
  <div v-if="data.length<=0">
    isEmpty
  </div>

  <ul v-else>
    <li v-for="(item,index) in data">
      username:{{item.ceo}} age: {{item.age}}
    </li>
  </ul>

  <p class="read-the-docs" v-if="username==='isShow'">Click {{ username }} </p>
  <p class="read-the-docs">text {{ text }} </p>
  <p class="read-the-docs" v-if="isActive">isActive {{ isActive }} </p>
  <p class="read-the-docs">object {{ object.phone }} </p>
  <button @click="onActive">click active </button>
</template>

<style scoped>
.read-the-docs {
  color: red;
}
</style>
