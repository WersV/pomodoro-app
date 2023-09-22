<template>
  <AppPomodoroControls />
  <AppTimer :minutes="displayTime('minutes')" :seconds="displayTime('seconds')"/>
  <AppControls 
    @handle-countdown="handleCountdown()" 
    @set-time="setTime()"
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
import AppInput from '@/components/AppInput.vue';
import AppTimer from '@/components/AppTimer.vue';
import AppPomodoroControls from '@/components/AppPomodoroControls.vue';

let nIntervId;
const defaultTime = {
  pomodoroSeconds: 1500, //default 25min on start
  get pomodoroMinutes() {
    return this.pomodoroSeconds / 60;
  },
  shortBreakSeconds: 300, //default 5min on start
  get shortBreakMinutes() {
    return this.shortBreakSeconds / 60;
  },
  longBreakSeconds: 1800, //default 30min on start
  get longBreakMinutes() {
    return this.longBreakSeconds / 60;
  }
}

const seconds = ref(defaultTime.pomodoroSeconds);
const secondsToDisplay = ref(defaultTime.pomodoroSeconds);
const minutesToDisplay = ref(defaultTime.pomodoroMinutes);
const isTimeRunning = ref(false);
const isModalDisplayed = ref(false);

const inputMinutes = ref(null);
const inputShortBreak = ref(null);
const inputLongBreak = ref(null);

const activeTab = ref('pomodoro');

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

// const resetCountdown = () => {
//   isTimeRunning.value = false;
//   clearInterval(nIntervId);
//   nIntervId = null;
//   if(activeTab.value === 'pomodoro') {
//     seconds.value = defaultTime.pomodoroSeconds;
//   } else if(activeTab.value === 'shortBreak') {
//     seconds.value = defaultTime.shortBreakSeconds;
//   } else if(activeTab.value === 'longBreak') {
//     seconds.value = defaultTime.longBreakSeconds;
//   }
//   formatTime();
// }

const handleConfiguration = () => {
  isModalDisplayed.value = !isModalDisplayed.value;
}

const saveTime = () => {
  const minutes = Number(inputMinutes.value);
  const shortBreak = Number(inputShortBreak.value);
  const longBreak = Number(inputLongBreak.value);
  if(minutes === 0 || shortBreak === 0 || longBreak === 0) {
    return alert('Values cannot be 0') 
  }

  isTimeRunning.value = false;
  clearInterval(nIntervId);
  defaultTime.pomodoroSeconds = minutes*60;
  defaultTime.shortBreakSeconds = shortBreak*60;
  defaultTime.longBreakSeconds = longBreak*60;
  setTime(activeTab.value) // assume that after save-btn click(AppModal.vue)
  // pages redirects automatically to pomodoro timer so time is given to pomodoro timer not any break timer.
}

const setTime = () => {
  isTimeRunning.value = false;
  clearInterval(nIntervId);
  nIntervId = null;
  if(activeTab.value === 'pomodoro') {
    seconds.value = defaultTime.pomodoroSeconds;
  } else if(activeTab.value === 'shortBreak') {
    seconds.value = defaultTime.shortBreakSeconds;
  } else if(activeTab.value === 'longBreak') {
    seconds.value = defaultTime.longBreakSeconds;
  }
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