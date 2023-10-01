<template>
  <button @click="storeTime.handleCounter()">{{ storeTime.isTimeRunning ? 'Stop' : 'Start' }}</button>
  <button @click="storeTime.resetCounter()">Reset</button>
  <button @click="storeModal.switchModal()">Config</button>
</template>

<script setup>
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()

</script>

<style lang="scss" scoped></style>