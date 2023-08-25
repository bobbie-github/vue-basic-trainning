<script setup>
import {onMounted, reactive, ref} from 'vue'

defineProps({
  msg: String,
})

const username = ref('isIf')
const text = ref('')
const loading = ref(false)
const data = ref([] )
const number =ref(0)
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
function onItem(item,index){
  console.log(item)
  console.log(index)
}

onMounted(()=>{
  console.log("created component")
  loading.value =true;
  setTimeout(()=>{
    onActive()
    loading.value=false;
  },10000)


  setInterval(()=>{
    console.log('all')
    number.value++
  },500)

})
</script>


<template>
  <h1>{{ msg }}</h1>

  <h2>{{number}}</h2>

  <p v-if="loading">loading...</p>

  <ul v-else>
    <li v-for="(item,index) in data" :key="index">
      <div :class="item.age===2 || item.age===10?'color-green':index===3?'color-blue':'color-red'" @click="onItem(item,index)">color item</div>
<!--     {{index}}  username:{{item.ceo}} age: {{item.age}}-->
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

.color-green{
  color: green;
}
.color-red{
  color: red;
}
.color-blue{
  color: blue;
}
</style>
