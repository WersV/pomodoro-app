import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
import {ref} from 'vue'
import {useTimeStore} from '@/stores/time.js'

export const useModalStore = defineStore('modal', () => {

  const storeTime = useTimeStore()

  const isModalDisplayed = ref(false)

  function switchModal() {
    isModalDisplayed.value = !isModalDisplayed.value;
  }

  function saveModalChanges() {
    isModalDisplayed.value = !isModalDisplayed.value;
    storeTime.changeTimeOnModalSave()
  }

  return { isModalDisplayed, switchModal, saveModalChanges }
})