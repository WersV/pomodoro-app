<template>
    <h2>Timer: minutes: {{ displaySeconds('minutes')}} 
    seconds: {{ displaySeconds('seconds') }}
    </h2>
    <button @click="handleCountdown()">{{ isTimeRunning ? 'Stop' : 'Start' }}</button>
    <button @click="resetCountdown()">Reset</button>
</template>

<script setup>
import {onMounted, ref} from 'vue';

let nIntervId;
const defaultTime = {
  milliseconds: 1500000, //time in ms (25min)
  get seconds() {
    return this.milliseconds/1000;
  },
  get minutes() {
    return this.seconds/60;
  }
}

const seconds = ref(defaultTime.seconds);
const secondsToDisplay = ref(defaultTime.seconds);
const minutesToDisplay = ref(defaultTime.minutes);
const isTimeRunning = ref(false);

const formatTime = () => {
  secondsToDisplay.value = seconds.value%60;
  minutesToDisplay.value = Math.floor(seconds.value/60);
}

const getTime = (time) => {
  nIntervId = setInterval(() => {
    seconds.value -= 1;
    if(secondsToDisplay.value < 10) {
      secondsToDisplay.value;
    }
    formatTime()
  }, 1000)
}

const displaySeconds = (unitOfTime) => {
  let time = 0;

  if(unitOfTime === 'seconds') {
    time = secondsToDisplay.value;
  } else if(unitOfTime === 'minutes') {
    time = minutesToDisplay.value;
  }

  if(time < 10) {
    return `0${time}`;
  }
  return time;
}

const handleCountdown = () => {
  isTimeRunning.value = !isTimeRunning.value;
  if(isTimeRunning.value) {
    getTime();
  } else if(!isTimeRunning.value) {
    clearInterval(nIntervId);
  }
}

const resetCountdown = () => {
  isTimeRunning.value = false;
  clearInterval(nIntervId);
  nIntervId = null;
  seconds.value = defaultTime.seconds;
  formatTime();
}

onMounted(formatTime);
</script>

<style lang="scss" scoped>
 h2 {
  color: white;
 }
</style>