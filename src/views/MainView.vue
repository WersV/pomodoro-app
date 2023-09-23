<template>
  {{ store.someState }}
  <AppPomodoroControls @set-time="setTime"/>
  <AppTimer :minutes="displayTime('minutes')" :seconds="displayTime('seconds')"/>
  <AppControls 
    @handle-countdown="handleCountdown()" 
    @handle-reset="handleReset()"
    @handle-configuration="handleConfiguration()"
    :flag="isTimeRunning" 
  />
  <AppModal 
    v-if="isModalDisplayed"
    @handle-configuration="handleConfiguration()"
    @save-time="saveTime()"
  >
    <template #options>
      <div>
        <h2 class="modal-h2">Focus time</h2>
        <AppInput v-model="pomodoroMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
        <AppInput v-model="shortBreakMinutes" id="ShortBreak" label="Short break: " type="number"/>
        <AppInput v-model="longBreakMinutes" id="LongBreak" label="Long break: " type="number"/>
      </div>
    </template>
  </AppModal>
  <button @click="testClick()">test</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AppControls from '@/components/AppControls.vue';
import AppModal from '@/components/AppModal.vue';
import AppInput from '@/components/AppInput.vue';
import AppTimer from '@/components/AppTimer.vue';
import AppPomodoroControls from '@/components/AppPomodoroControls.vue';
import {useTimeStore} from '@/stores/store.js';

let nIntervId;
// const defaultTime = {
//   pomodoroSeconds: 1500, //default 25min on start
//   get pomodoroMinutes() {
//     return this.pomodoroSeconds / 60;
//   },
//   shortBreakSeconds: 300, //default 5min on start
//   get shortBreakMinutes() {
//     return this.shortBreakSeconds / 60;
//   },
//   longBreakSeconds: 1800, //default 30min on start
//   get longBreakMinutes() {
//     return this.longBreakSeconds / 60;
//   }
// }

const store = useTimeStore();

let {pomodoroSeconds, pomodoroMinutes, shortBreakSeconds, longBreakSeconds} = store.defaultTime;
const {changeTimeValues, changeActiveTabValue} = store;

const seconds = ref(pomodoroSeconds);
const secondsToDisplay = ref(pomodoroSeconds);
const minutesToDisplay = ref(pomodoroMinutes);
const isTimeRunning = ref(false);
const isModalDisplayed = ref(false);

const inputMinutes = ref(null);
const inputShortBreak = ref(null);
const inputLongBreak = ref(null);

// const activeTab = ref('pomodoro');

const formatTime = () => {
  secondsToDisplay.value = seconds.value % 60;
  minutesToDisplay.value = Math.floor(seconds.value / 60);
}

// const formatTimeTest = (timeType) => {
//   if(timeType === 'pomodoro') {
//     return pomodoroSeconds
//   } else if(timeType === 'shortBreak') {
//     this.defaultTime.shortBreakSeconds = timeValue;
//   } else if(timeType === 'longBreak') {
//     this.defaultTime.longBreakSeconds = timeValue;
//   }
// }

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

const handleConfiguration = () => {
  isModalDisplayed.value = !isModalDisplayed.value;
}

const saveTime = () => {
  const minutes = Number(inputMinutes.value);
  const shortBreak = Number(inputShortBreak.value);
  const longBreak = Number(inputLongBreak.value);
  // if(minutes === 0 || shortBreak === 0 || longBreak === 0) {
  //   return alert('Values cannot be 0') 
  // }

  isTimeRunning.value = false;
  clearInterval(nIntervId);
  // pomodoroSeconds = minutes*60;
  // shortBreakSeconds = shortBreak*60;
  // longBreakSeconds = longBreak*60;
  changeTimeValues(minutes*60,'pomodoro');
  changeTimeValues(shortBreak*60,'shortBreak');
  changeTimeValues(longBreak*60,'longBreak');
  setTime('shortBreak') // assume that after save-btn click(AppModal.vue)
  // pages redirects automatically to pomodoro timer so time is given to pomodoro timer not any break timer.
}

const handleReset = () => {
  isTimeRunning.value = false;
  clearInterval(nIntervId);
  nIntervId = null;
  // if(store.activeTab === 'pomodoro') {
  //   seconds.value = pomodoroSeconds;
  // } else if(store.activeTab === 'shortBreak') {
  //   seconds.value = shortBreakSeconds;
  // } else if(store.activeTab === 'longBreak') {
  //   seconds.value = longBreakSeconds;
  // }
  formatTime();
}

const setTime = (timeType) => {
  changeActiveTabValue(timeType);
  handleReset();
  if(store.activeTab === 'pomodoro') {
    seconds.value = pomodoroSeconds;
    // console.log(pomodoroSeconds);
  } else if(store.activeTab === 'shortBreak') {
    seconds.value = shortBreakSeconds;
    // console.log(shortBreakSeconds);
  } else if(store.activeTab === 'longBreak') {
    seconds.value = longBreakSeconds;
    // console.log(longBreakSeconds);
  }
  formatTime();
  // console.log(seconds.value);
  // seconds.value = changeTimeValues();
  // console.log(changeTimeValues());
  // console.log(pomodoroSeconds);
}

const testClick = () => {
  console.log(pomodoroSeconds);
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