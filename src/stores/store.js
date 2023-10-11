import { defineStore } from 'pinia'
import {ref} from 'vue'
import {useTimeStore} from '@/stores/time.js'
import { useStorage } from '@vueuse/core'

export const useModalStore = defineStore('modal', () => {

  const activeTheme = useStorage('activeTheme', 'theme 2')

  const storeTime = useTimeStore()

  const isModalDisplayed = ref(false)

  const bcgThemePaths = [
   'src/assets/img/bcg1.jpg',
   'src/assets/img/bcg2.jpg',
   'src/assets/img/bcg3.jpg',
   'src/assets/img/bcg4.jpg']

  function $reset() {
    activeTheme.value = 'theme 1'
    changeAppTheme() //invoke fun here just to immediately change bcg img when clicking "reset default" btn
  }

  function switchModal() {
    isModalDisplayed.value = !isModalDisplayed.value;
    console.log(activeTheme);
  }

  function saveModalChanges() {
    isModalDisplayed.value = !isModalDisplayed.value;
    storeTime.changeTimeOnModalSave()
    changeAppTheme()
  }

  function changeAppTheme() {
    let index
    switch(activeTheme.value) {
      case 'theme 1':
        index = 0
        break
      case 'theme 2':
        index = 1
        break
      case 'theme 3':
        index = 2
        break
      case 'theme 4':
        index = 3
        break
      default:
        return 
    }
    document.body.style.backgroundImage=`url(${bcgThemePaths[index]})`
  }
  changeAppTheme()

  return { isModalDisplayed, activeTheme, $reset, switchModal, saveModalChanges }
})