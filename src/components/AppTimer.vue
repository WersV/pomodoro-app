<template>
<h2>
  Timer: minutes: {{ Math.floor(storeTime.seconds/60) }}
  seconds: {{ storeTime.seconds%60 }}
</h2>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useTimeStore} from '@/stores/time.js'

const storeTime = useTimeStore()

const displaySeconds = ref(storeTime.seconds%60)
const displayMinutes = ref(storeTime.seconds/60)

const showTime = (timeType) => {
  if(timeType)
  return storeTime.seconds%60
}

console.log(storeTime.seconds);

</script>

<style lang="scss" scoped>

</style>