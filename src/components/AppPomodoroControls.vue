<template>
  <div class="pomodoro-controls-container">
    <button @click="storeTime.activeTabSwitch('pomodoro')">Pomodoro</button>
    <button @click="storeTime.activeTabSwitch('shortBreak')">Short Break</button>
    <button @click="storeTime.activeTabSwitch('longBreak')">Long Break</button>
  </div>
</template>

<script setup>
import {useTimeStore} from '@/stores/time.js'

const storeTime = useTimeStore()


</script>

<style lang="scss" scoped>

</style>