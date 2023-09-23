<template>
  <button @click="$emit('handleCountdown')">{{ flag ? 'Stop' : 'Start' }}</button>
  <button @click="$emit('handleReset')">Reset</button>
  <button @click="$emit('handleConfiguration')">Config</button>
</template>

<script setup>

defineProps({
  flag: {
    type: Boolean,
    default: false
  }
})

defineEmits(['handleCountdown', 'handleReset', 'handleConfiguration'])
</script>

<style lang="scss" scoped></style>