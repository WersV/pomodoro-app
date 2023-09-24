import { defineStore } from 'pinia'
import {ref} from 'vue'
import { useStorage } from '@vueuse/core'
import {useModalStore} from '@/stores/store.js'

export const useTimeStore = defineStore('time', () => {
  const storeModal = useModalStore()
  const pomodoroInputMinutes = useStorage('pomodoroInputMinutes', 25)
  const shortBreakInputMinutes = useStorage('shortBreakInputMinutes', 5)
  const longBreakInputMinutes = useStorage('longBreakInputMinutes', 20)

  function $reset() {
    pomodoroInputMinutes.value = 25
    shortBreakInputMinutes.value = 5
    longBreakInputMinutes.value = 20
  }

  function addInputValuesToStore() {
    console.log('dziala w time.js');
  }


  return { pomodoroInputMinutes, shortBreakInputMinutes, longBreakInputMinutes, addInputValuesToStore, $reset }
})