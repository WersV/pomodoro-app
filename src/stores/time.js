import { defineStore } from 'pinia'
import {ref} from 'vue'
import { useStorage } from '@vueuse/core'

export const useTimeStore = defineStore('time', () => {
  const pomodoroInputMinutes = useStorage('pomodoroInputMinutes', 25)
  const shortBreakInputMinutes = useStorage('shortBreakInputMinutes', 5)
  const longBreakInputMinutes = useStorage('longBreakInputMinutes', 20)

  function $reset() {
    pomodoroInputMinutes.value = 25
  }

  function addInputValuesToStore() {
    console.log('dziala w time.js');
  }


  return { pomodoroInputMinutes, shortBreakInputMinutes, longBreakInputMinutes, addInputValuesToStore, $reset }
})