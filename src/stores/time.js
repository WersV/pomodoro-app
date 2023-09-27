import { defineStore } from 'pinia'
import {ref, onMounted} from 'vue'
import { useStorage } from '@vueuse/core'
import {useModalStore} from '@/stores/store.js'

export const useTimeStore = defineStore('time', () => {
  const pomodoroInputMinutes = useStorage('pomodoroInputMinutes', 25)
  const shortBreakInputMinutes = useStorage('shortBreakInputMinutes', 5)
  const longBreakInputMinutes = useStorage('longBreakInputMinutes', 20)

  const isTimeRunning = ref(false)
  const activeTab = ref('pomodoro')
  const seconds = ref(pomodoroInputMinutes.value*60)

  let pomodoroSeconds = Number(pomodoroInputMinutes.value*60)
  let shortBreakSeconds = Number(shortBreakInputMinutes.value*60)
  let longBreakSeconds = Number(longBreakInputMinutes.value*60)
  let intervalId

  function $reset() {
    pomodoroInputMinutes.value = 25
    shortBreakInputMinutes.value = 5
    longBreakInputMinutes.value = 20
  }

  function handleCounter() {
    if(activeTab.value === 'pomodoro') {
      // if(seconds === null) {
      //   seconds = pomodoroSeconds // if it's first run give default value of pomodoroSeconds
      // } else {
      //   pomodoroSeconds = seconds; // if it's second and every next countdown run use ramining seconds from first run
      // }
      handleCounterHelper(pomodoroSeconds)
    } else if(activeTab.value === 'shortBreak') {
      // if()
      seconds.value = shortBreakSeconds
    } else if(activeTab.value === 'longBreak') {
      seconds.value = longBreakSeconds
    }
    if(!isTimeRunning.value) {
      intervalId = setInterval(() => {
        // console.log(seconds);
        seconds.value -= 1
        console.log(seconds.value);
      },1000)
    } else if(isTimeRunning.value) {
      clearInterval(intervalId)
      intervalId = null
    }
    isTimeRunning.value = !isTimeRunning.value
  }

  function handleCounterHelper(defaultSeconds) {
    if(seconds.value === null) {
      return seconds.value = defaultSeconds // if it's first run give default seconds value
    } else {
      defaultSeconds = seconds.value; // if it's second and every next countdown run use remaining seconds from first run
    }
  }

  function activeTabSwitch(tabType) {
    if(tabType === 'pomodoro') {
      activeTab.value = 'pomodoro'
    } else if(tabType === 'shortBreak') {
      activeTab.value = 'shortBreak'
    } else if(tabType === 'longBreak') {
      activeTab.value = 'longBreak'
    }
    seconds.value = null
  }

  // function displayFormatedTime(timeUnit) {
  //   // let time;
  //   let seconds = pomodoroInputMinutes*60
  //   if(timeUnit === 'seconds') {
  //     return seconds%60
  //   } else if(timeUnit === 'minutes') {
  //     return seconds/60
  //   }
  //   return null
  // }

  // onMounted(() => {
  //   seconds.value
  // })


  return { 
    pomodoroInputMinutes,
    shortBreakInputMinutes,
    longBreakInputMinutes,
    isTimeRunning,
    seconds,
    $reset,
    handleCounter,
    // displayFormatedTime
  }
})