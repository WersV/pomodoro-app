import { defineStore } from 'pinia'
import {ref} from 'vue'
import {useTimeStore} from '@/stores/time.js'
import { useStorage } from '@vueuse/core'

export const useModalStore = defineStore('modal', () => {

  const activeTheme = useStorage('activeTheme', 'theme 2')

  const storeTime = useTimeStore()

  const isModalDisplayed = ref(false)

  function switchModal() {
    isModalDisplayed.value = !isModalDisplayed.value;
    console.log(activeTheme);
  }

  function saveModalChanges() {
    isModalDisplayed.value = !isModalDisplayed.value;
    storeTime.changeTimeOnModalSave()
  }

  return { isModalDisplayed, activeTheme, switchModal, saveModalChanges }
})