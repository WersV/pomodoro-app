<template>
  <button @click="$emit('handleCountdown')">{{ flag ? 'Stop' : 'Start' }}</button>
  <button @click="$emit('resetCountdown')">Reset</button>
  <button @click="$emit('handleConfiguration')">Config</button>
</template>

<script setup>

defineProps({
  flag: {
    type: Boolean,
    default: false
  }
})

defineEmits(['handleCountdown', 'resetCountdown', 'handleConfiguration'])
</script>

<style lang="scss" scoped></style>