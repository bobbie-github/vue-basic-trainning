<script setup>
import {useRoute} from "vue-router";


//component
import Item from "./item.vue";
import {ref} from "vue";

const route = useRoute()

let preview = ref('')
let artists =  [
  {name: 'Davido', genre: 'afrobeats', country: 'Nigeria'},
  {name: 'Burna Boy', genre: 'afrobeats', country: 'Nigeria'},
  {name: 'AKA', genre: 'hiphop', country: 'South-Africa'},
  {name: 'Sarkodie', genre: 'hiphop', country: 'Ghana'},
  {name: 'Stormzy', genre: 'hiphop', country: 'United Kingdom'},
  {name: 'Lil Nas', genre: 'Country', country: 'United States'},
  {name: 'Nasty C', genre: 'hiphop', country: 'South-Africa'},
  {name: 'Shatta-walle', genre: 'Reagae', country: 'Ghana'},
  {name: 'Khalid', genre: 'pop', country: 'United States'},
  {name: 'ed-Sheeran', genre: 'pop', country: 'United Kingdom'}
]

function aferOnChange(val) {
  console.log("aferOnChange",val)
  preview.value = val
}

</script>

<template>
<div>

  <p>{{preview}}</p>
  <h1>Component {{route.params.user_id}}</h1>
  <Item  :my_id="route.params.user_id"  :items="artists" @onChange="aferOnChange"></Item>
</div>
</template>

<style scoped>

</style>