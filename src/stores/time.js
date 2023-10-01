import { defineStore } from 'pinia'
import {ref} from 'vue'
import { useStorage } from '@vueuse/core'

export const useTimeStore = defineStore('time', () => {
  const pomodoroInputMinutes = useStorage('pomodoroInputMinutes', 25)
  const shortBreakInputMinutes = useStorage('shortBreakInputMinutes', 5)
  const longBreakInputMinutes = useStorage('longBreakInputMinutes', 20)

  const isTimeRunning = ref(false)
  const activeTab = ref('pomodoro')
  const seconds = ref(pomodoroInputMinutes.value*60)

  const pomodoroSeconds = ref(pomodoroInputMinutes.value*60)
  const shortBreakSeconds = ref(shortBreakInputMinutes.value*60)
  const longBreakSeconds = ref(longBreakInputMinutes.value*60)
  let intervalId

  function $reset() {
    pomodoroInputMinutes.value = 25
    shortBreakInputMinutes.value = 5
    longBreakInputMinutes.value = 20
    pomodoroSeconds.value = pomodoroInputMinutes.value*60
    shortBreakSeconds.value = shortBreakInputMinutes.value*60
    longBreakSeconds.value = longBreakInputMinutes.value*60
    activeTabSwitch('pomodoro')
  }

  function handleCounter() {
    if(activeTab.value === 'pomodoro') {
      handleCounterHelper(pomodoroSeconds.value)
    } else if(activeTab.value === 'shortBreak') {
      handleCounterHelper(shortBreakSeconds.value)
    } else if(activeTab.value === 'longBreak') {
      handleCounterHelper(longBreakSeconds.value)
    }
    if(!isTimeRunning.value) {
      handleRunningTime()
    } else if(isTimeRunning.value) {
      clearInterval(intervalId)
      intervalId = null
    }
    isTimeRunning.value = !isTimeRunning.value

    function handleRunningTime() {
      intervalId = setInterval(() => {
        if(seconds.value < 1) {
          clearInterval(intervalId)
          intervalId = null
          alert('Time has passed')
        } else {
          seconds.value -= 1
        }
      }, 1000)
    }
  }

  function activeTabSwitch(tabType) {
    let defaultTime
    if(tabType === 'pomodoro') {
      activeTab.value = 'pomodoro'
      defaultTime = pomodoroSeconds.value
    } else if(tabType === 'shortBreak') {
      activeTab.value = 'shortBreak'
      defaultTime = shortBreakSeconds.value
    } else if(tabType === 'longBreak') {
      activeTab.value = 'longBreak'
      defaultTime = longBreakSeconds.value
    }
    console.log(pomodoroSeconds.value);
    seconds.value = null
    handleCounterHelper(defaultTime) // after tab change get new seconds value to display in the app.
    // seconds will always be null here so handleCounterHelper() will always return default time of current tab
    
    clearInterval(intervalId) // stop countdown when tab switching
    intervalId = null
    isTimeRunning.value = false
  }

  function handleCounterHelper(defaultSeconds) {
    if(seconds.value === null) {
      return seconds.value = defaultSeconds // if it's first run give default seconds value
    }
  }

  function changeTimeOnModalSave() {
    pomodoroSeconds.value = pomodoroInputMinutes.value*60
    shortBreakSeconds.value = shortBreakInputMinutes.value*60
    longBreakSeconds.value = longBreakInputMinutes.value*60
    activeTabSwitch('pomodoro') // invoke this function to set proper time to seconds.value
    // and then to display proper time in the app
  }

  function resetCounter() {
    seconds.value = null // null value bcs handleCounterHelper() will be able to reset particular timer value to default
    if(activeTab.value === 'pomodoro') {
      handleCounterHelper(pomodoroSeconds.value)
    } else if(activeTab.value === 'shortBreak') {
      handleCounterHelper(shortBreakSeconds.value)
    } else if(activeTab.value === 'longBreak') {
      handleCounterHelper(longBreakSeconds.value)
    }

    clearInterval(intervalId)
    intervalId = null
    isTimeRunning.value = false
  }

  return { 
    pomodoroInputMinutes,
    shortBreakInputMinutes,
    longBreakInputMinutes,
    isTimeRunning,
    seconds,
    $reset,
    handleCounter,
    activeTabSwitch,
    changeTimeOnModalSave,
    resetCounter
  }
})