<template>
<h2>
  Timer: minutes: {{ minutes }}
  seconds: {{ seconds }}
</h2>
</template>

<script setup>

defineProps({
  minutes: {
    type: [Number,String],
    default: null
  },
  seconds: {
    type: [Number,String],
    default: null
  }
})
</script>

<style lang="scss" scoped>

</style>