<template>
  <div class="pomodoro-controls-container">
    <button :class="{active: setActiveClass('pomodoro')}" @click="storeTime.activeTabSwitch('pomodoro')">Pomodoro</button>
    <button :class="{active: setActiveClass('shortBreak')}" @click="storeTime.activeTabSwitch('shortBreak')">Short Break</button>
    <button :class="{active: setActiveClass('longBreak')}" @click="storeTime.activeTabSwitch('longBreak')">Long Break</button>
  </div>
</template>

<script setup>
import {useTimeStore} from '@/stores/time.js'

const storeTime = useTimeStore()

function setActiveClass(timeType) {
  if(timeType === storeTime.activeTab) {
    return true
  } else {
    return false
  }
}


</script>

<style lang="scss" scoped>
.pomodoro-controls-container {
  margin: 20px 0;
  min-width: 300px;
  button {
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid white;
    color: white;
    padding: 10px 15px;
    margin-left: 10px;
    // text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
  }
  button:first-child {
    margin-left: 0;
  }
  button.active {
    background-color: white;
    color: black;
  }
}
</style>