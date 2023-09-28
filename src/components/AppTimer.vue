<template>
<h2>
  Timer: minutes: {{ displayTime('minutes') }}
  seconds: {{ displayTime('seconds') }}
</h2>
</template>

<script setup>
// import {ref, computed} from 'vue';
import {useTimeStore} from '@/stores/time.js'

const storeTime = useTimeStore()


const displayTime = (timeType) => {
  let time
  if(timeType === 'seconds') {
    time = storeTime.seconds%60
  } else if(timeType === 'minutes') {
    time = Math.floor(storeTime.seconds/60)
  }
  return formatTime(time) //adds additional 0 when digit is 1 character long
}

const formatTime = (time) => {
  if(time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

console.log(storeTime.seconds);

</script>

<style lang="scss" scoped>

</style>