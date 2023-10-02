<template>
  <button @click="storeTime.handleCounter()" :disabled="storeTime.isStartStopBtnDisabled">{{ storeTime.isTimeRunning ? 'Stop' : 'Start' }}</button>
  <button @click="storeTime.resetCounter()">Reset</button>
  <button @click="storeModal.switchModal()">Config</button>
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

<style lang="scss" scoped></style>