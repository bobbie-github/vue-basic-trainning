<script setup>

import {defineProps,defineEmits} from 'vue'

let emit = defineEmits(['onChange'])
const prop = defineProps({
  my_id:{
    required:true
  },
  items: {
    type: Array,
    default: () => []
  }
})

function isEmit(val) {
  emit('onChange', val)
}

</script>

<template>
 <div>
   <h1>
       Item component {{prop.my_id}}
   </h1>
   <ul>
     <li v-for="(item,index) in items">
       <p>{{ item }}</p>
       <button @click="isEmit(item)">Emit</button>
     </li>
   </ul>
 </div>
</template>

<style scoped>

</style>