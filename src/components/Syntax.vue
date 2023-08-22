<script setup>
import {onActivated, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, reactive, ref} from "vue";


//Composition API: Lifecycle Hooks

onBeforeMount(() => {
  console.log("onBeforeMount")

})

//todo::==> onMounted()
onMounted(() => {
  console.log("onMounted")
  model.value = 'CEO KAPOK'
})


onBeforeUnmount(() => {
  console.log("is onBeforeUnmount")
  // alert("is onBeforeUnmount")
})

//desc:: before leave page
onUnmounted(() => {
  console.log("onUnmounted")
})


let username = ref(11) //todo::===> string, number ,boolean,array
let value1 = ref(false)
let isObject = reactive({
  "userId": 1,
  "id": 2,
  "title": "quis ut nam facilis et officia qui",
  "completed": false,
  "data": [1, 2, 3, 4, 5]
},)

function isFunction() {
  value1.value = true
}

function dataClick() {
  value1.value = false
  console.log("click@@@@")
}

let forE = ref([
  {
    "title": "nam facilis et officia qui",

  },
  {
    "title": "facilis et officia qui",
  },
  {
    "title": "officia qui",
    number: 1000,
  },
])

let isChange =ref(false)
function onChangeBg(){
  isChange.value = !isChange.value

}

let model =ref('')
let selected =ref('')

function onChangModel() {
  console.log(model.value)
  console.log(parseInt(model.value))
}

</script>

<template>
  <div>
    <h1>value1 {{ value1 }}</h1>
    <h1 v-if="value1===true">v-if Data</h1>
    <h1 v-else>v-else</h1>

    <h1 v-show="value1===true">v-show</h1>
    <h1>Syntax {{ username }}</h1>

    <button v-on:click="isFunction">click</button>
    <div v-on:click="dataClick">
      data
    </div>

    <h1>V-for</h1>
    {{ forE }}
    <ul>
      <li v-for="(item,index) in forE" :key="index">
        index:{{ index }} {{ item.title }}
      </li>
    </ul>


    <h1>class and style condition</h1>
    <button @click="onChangeBg">change background</button>

    <div>{{isChange}}</div>
    <div :class="isChange===true ? 'background-green':'background-red'" >
     my class
    </div>

    <p :style="isChange===true? { color: '#07CE3FFF', fontSize: '20px' }:{ color: 'red', fontSize: '30px' }">
      style binding
    </p>


    <h1>v-model</h1>
    {{model}}
    <input v-model="model" >
    <button @click="onChangModel">change Model</button>


    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

  </div>
</template>

<style scoped>
.background-red{
  background: red;
  color: white;
  width: 200px;
  height: 200px;
}
.background-green{
  color: white;
  background: green;
  width: 200px;
  height: 200px;
}

</style>
