<script setup>

import {defineProps} from 'vue'

const prop = defineProps({
  my_id:{
    required:true
  },
  items: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
 <div>
   <h1>
     Item component {{prop.my_id}}
   </h1>
   <ul>
     <li v-for="(item,index) in items">
       <p>{{ item }}</p>
     </li>
   </ul>
 </div>
</template>

<style scoped>

</style>