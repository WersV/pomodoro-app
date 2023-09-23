<template>
  <!-- <button >{{ flag ? 'Stop' : 'Start' }}</button> -->
  <button >Start</button>
  <button >Reset</button>
  <button @click="$emit('handleConfig')">Config</button>
</template>

<script setup>

// defineProps({
//   flag: {
//     type: Boolean,
//     default: false
//   }
// })

defineEmits(['handleConfig'])

</script>

<style lang="scss" scoped></style>