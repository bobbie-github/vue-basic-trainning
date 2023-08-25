<script setup>
import {inject} from "vue";

let location = inject('location')
let sender = inject('sender')
let geolocation = inject('geolocation')
let lars = inject('lar')

</script>


<template>
<h1> component 3</h1>
  location: {{location}}<br>
  sender: {{sender}}<br>
  geolocation: {{geolocation}} <br>
  lars==>: {{lars}}
</template>

<style scoped>

</style>