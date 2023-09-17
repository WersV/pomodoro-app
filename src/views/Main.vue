<template>
    <h2>Timer: minutes: {{ minutesToDisplay != null ? minutesToDisplay : '25'}} 
    seconds: {{ displaySeconds() }}
    </h2>
</template>

<script setup>
import {ref} from 'vue';

const timeLeft = ref(1500000) //time in ms (25min)
const seconds = ref(timeLeft.value/1000);
const minutes = ref(seconds.value/60);
const secondsToDisplay = ref(0);
const minutesToDisplay = ref(25);
// console.log('minutes:'+minutes.value,'seconds:'+seconds.value);
// console.log(119%60);
// console.log(Math.floor(119/60));
const getTime = (time) => {
  setInterval(() => {
    seconds.value -= 1;
    if(secondsToDisplay.value < 10) {
      secondsToDisplay.value 
    }
    secondsToDisplay.value = seconds.value%60;
    minutesToDisplay.value = Math.floor(seconds.value/60);
    // console.log(seconds.value);
  }, 1000)
}

const displaySeconds = () => {
  if(secondsToDisplay.value != null) {
    if(secondsToDisplay.value < 10) {
      return `0${secondsToDisplay.value}`
    }
    return secondsToDisplay.value
  } else if(secondsToDisplay.value === null) {
    return '00';
  }
}
getTime();
</script>

<style lang="scss" scoped>
 h2 {
  color: white;
 }
</style>