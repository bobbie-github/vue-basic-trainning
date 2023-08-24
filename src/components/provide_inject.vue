<script setup>
import {provide} from "vue";
import Item_one from "./pv_ij/item_one.vue";

provide('sender',"supper basic vue")
provide('location', 'Lao')
provide('geolocation', {
  longitude: 90,
  latitude: 135
})

</script>

<template>
<h1>Data </h1>
  <Item_one />
</template>

<style scoped>

</style>