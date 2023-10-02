import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
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
  const intervalId = ref(null)
  const isStartStopBtnDisabled = ref(false)


  const FULL_DASH_ARRAY = 283 // because 2*pi*r = 2*pi*45(my actual radius) = 283

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
      clearInterval(intervalId.value)
      intervalId.value = null
    }
    isTimeRunning.value = !isTimeRunning.value

    function handleRunningTime() {
      intervalId.value = setInterval(() => {
        if(seconds.value < 1) {
          clearInterval(intervalId.value)
          intervalId.value = null
          isStartStopBtnDisabled.value = true
          alert('Time has passed')
        } else {
          seconds.value -= 1
          isStartStopBtnDisabled.value = false
        }
      }, 1000)
    }
  }

  function activeTabSwitch(tabType) {
    setCircleDasharray()
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
    seconds.value = null
    handleCounterHelper(defaultTime) // after tab change get new seconds value to display in the app.
    // seconds will always be null here so handleCounterHelper() will always return default time of current tab
    
    clearInterval(intervalId.value) // stop countdown when tab switching
    intervalId.value = null
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

    clearInterval(intervalId.value)
    intervalId.value = null
    isTimeRunning.value = false
  }

  function calculateTimeFraction() {
    let rawTimeFraction
    if(activeTab.value === 'pomodoro') {
      rawTimeFraction = seconds.value / pomodoroSeconds.value
    } else if(activeTab.value === 'shortBreak') {
      rawTimeFraction = seconds.value / shortBreakSeconds.value
    } else if(activeTab.value === 'longBreak') {
      rawTimeFraction = seconds.value / longBreakSeconds.value
    }
    return rawTimeFraction
  }

  function setCircleDasharray() {
    const circleDasharray = (calculateTimeFraction() * FULL_DASH_ARRAY) + ' 283'
    return circleDasharray
  }

  return { 
    pomodoroInputMinutes,
    shortBreakInputMinutes,
    longBreakInputMinutes,
    isTimeRunning,
    seconds,
    isStartStopBtnDisabled,
    $reset,
    handleCounter,
    activeTabSwitch,
    changeTimeOnModalSave,
    resetCounter,
    setCircleDasharray
  }
})