import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
import {ref} from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isModalDisplayed = ref(false)

  function switchModal() {
    isModalDisplayed.value = !isModalDisplayed.value;
    console.log('dziala')
  }

  function saveModalChanges() {
    console.log('dziala');
  }

  return { isModalDisplayed, switchModal, saveModalChanges }
})