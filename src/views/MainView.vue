<template>
  <h2>Timer: minutes: {{ displayTime('minutes') }}
    seconds: {{ displayTime('seconds') }}
  </h2>
  <AppControls 
    @handle-countdown="handleCountdown()" 
    @reset-countdown="resetCountdown()"
    @handle-configuration="handleConfiguration()"
    :flag="isTimeRunning" 
  />
  <AppModal 
    v-if="isModalDisplayed"
    @handle-configuration="handleConfiguration()"
    @change-time="changeTime()"
  >
    <template #options>
      <div>
        <h2 class="modal-h2">Focus time</h2>
        <AppInput v-model="inputMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
        <AppInput v-model="inputShortBreak" id="ShortBreak" label="Short break: " type="number"/>
        <AppInput v-model="inputLongBreak" id="LongBreak" label="Long break: " type="number"/>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AppControls from '@/components/AppControls.vue';
import AppModal from '@/components/AppModal.vue';
import AppInput from '../components/AppInput.vue';

let nIntervId;
const defaultTime = {
  milliseconds: 1500000, //time in ms (25min)
  get seconds() {
    return this.milliseconds / 1000;
  },
  get minutes() {
    return this.seconds / 60;
  }
}

const seconds = ref(defaultTime.seconds);
const secondsToDisplay = ref(defaultTime.seconds);
const minutesToDisplay = ref(defaultTime.minutes);
const isTimeRunning = ref(false);
const isModalDisplayed = ref(false);

const inputMinutes = ref();
const inputShortBreak = ref(null);
const inputLongBreak = ref(null);

const formatTime = () => {
  secondsToDisplay.value = seconds.value % 60;
  minutesToDisplay.value = Math.floor(seconds.value / 60);
}

const getTime = () => {
  nIntervId = setInterval(() => {
    seconds.value -= 1;
    if (secondsToDisplay.value < 10) {
      secondsToDisplay.value;
    }
    formatTime()
  }, 1000)
}

const displayTime = (unitOfTime) => {
  let time = 0;

  if (unitOfTime === 'seconds') {
    time = secondsToDisplay.value;
  } else if (unitOfTime === 'minutes') {
    time = minutesToDisplay.value;
  }

  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

const handleCountdown = () => {
  isTimeRunning.value = !isTimeRunning.value;
  if (isTimeRunning.value) {
    getTime();
  } else if (!isTimeRunning.value) {
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

const handleConfiguration = () => {
  isModalDisplayed.value = !isModalDisplayed.value;
}

const changeTime = () => {
  const minutes = Number(inputMinutes.value);
  const shortBreak = Number(inputShortBreak.value);
  const longBreak = Number(inputLongBreak.value);
  if(minutes === 0 || shortBreak === 0 || longBreak === 0) {
    return alert('Values cannot be 0')
  }
  isTimeRunning.value = false;
  clearInterval(nIntervId);
  defaultTime.milliseconds = minutes*60*1000;
  seconds.value = defaultTime.seconds;
  formatTime();
}

onMounted(formatTime);
</script>

<style lang="scss" scoped>
h2 {
  color: white;
}
.modal-h2 {
  text-align: center;
}
</style>