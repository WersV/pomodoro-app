<template>
  <div class="control-btns">
    <button class="time-btn" @click="storeTime.handleCounter()" :disabled="storeTime.isStartStopBtnDisabled">{{ storeTime.isTimeRunning ? 'Stop' : 'Start' }}</button>
    <button class="btns reset" @click="storeTime.resetCounter()"><font-awesome-icon icon="fa-solid fa-arrow-rotate-right" /></button>
    <button class="btns" @click="storeModal.switchModal()"><font-awesome-icon icon="fa-solid fa-gear" /></button>
  </div>
</template>

<script setup>
import {watchEffect} from 'vue'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()

watchEffect(() => {
  if(storeTime.seconds < 1) {
    storeTime.isStartStopBtnDisabled = true
  } else {
    storeTime.isStartStopBtnDisabled = false
  }
})

</script>

<style lang="scss" scoped>
.control-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  .time-btn {
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid white;
    color: white;
    padding: 10px 15px;
    font-size: 12px;
    margin: 0 5px;
    cursor: pointer;
  }
  .time-btn:disabled {
    background-color: gray;
    border-color: black;
    color: black;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }

  .btns.reset {
    font-size: 34px; 
  }
}
</style>