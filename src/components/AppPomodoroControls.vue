<template>
  <div class="pomodoro-controls-container">
    <button @click="$emit('setTime', 'pomodoro')">Pomodoro</button>
    <button @click="$emit('setTime', 'shortBreak')">Short Break</button>
    <button @click="$emit('setTime', 'longBreak')">Long Break</button>
  </div>
</template>

<script setup>
defineEmits(['setTime'])
</script>

<style lang="scss" scoped>

</style>