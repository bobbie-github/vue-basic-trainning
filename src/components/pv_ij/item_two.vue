<script setup>
import {inject} from "vue";

let location = inject('location')
let sender = inject('sender')
let geolocation = inject('geolocation')

</script>


<template>
<h1>Item Two</h1>
  location: {{location}}<br>
  sender: {{sender}}<br>
  geolocation: {{geolocation}}
</template>

<style scoped>

</style>