<template>
  <div class="pomodoro-controls-container">
    <button @click="$emit('changeTimeType', 'pomodoro')">Pomodoro</button>
    <button @click="$emit('changeTimeType', 'shortBreak')">Short Break</button>
    <button @click="$emit('changeTimeType', 'longBreak')">Long Break</button>
  </div>
</template>

<script setup>
defineEmits(['changeTimeType'])
</script>

<style lang="scss" scoped>

</style>