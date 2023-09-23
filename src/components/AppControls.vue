<template>
  <!-- <button >{{ flag ? 'Stop' : 'Start' }}</button> -->
  <button >Start</button>
  <button >Reset</button>
  <button @click="storeModal.switchModal()">Config</button>
</template>

<script setup>
import {useModalStore} from '@/stores/store.js'

const storeModal = useModalStore()

// defineProps({
//   flag: {
//     type: Boolean,
//     default: false
//   }
// })


</script>

<style lang="scss" scoped></style>