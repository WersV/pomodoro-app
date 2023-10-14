import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
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
   'src/assets/img/bcg4.jpg',
   'src/assets/img/bcg5.jpg',
   'src/assets/img/bcg6.jpg',
   'src/assets/img/bcg7.jpg',
   'src/assets/img/bcg8.jpg',
   'src/assets/gif/gif1.gif',
   'src/assets/gif/gif2.webp',
   'src/assets/gif/gif3.gif',
   'src/assets/gif/gif4.gif',
   'src/assets/gif/gif5.gif',]

  function $reset() {
    activeTheme.value = 'theme 1'
    changeAppTheme() //invoke fun here just to immediately change bcg img when clicking "reset default" btn
  }

  function switchModal() {
    isModalDisplayed.value = !isModalDisplayed.value;
  }

  function saveModalChanges() {
    isModalDisplayed.value = !isModalDisplayed.value;
    storeTime.changeTimeOnModalSave()
    // changeAppTheme()
  }

  function changeAppTheme() {
    const themesCount = bcgThemePaths.length
    let index
    for(let i = 0; i < themesCount; i++) {
      const cond1 = activeTheme.value === `theme ${i+1}`
      const cond2 = activeTheme.value === `theme ${i+1} (gif)`
      if(cond1 || cond2) index = i
    }

    document.body.style.backgroundImage=`url(${bcgThemePaths[index]})`
  }
  changeAppTheme()

  return { isModalDisplayed, activeTheme, $reset, switchModal, saveModalChanges, changeAppTheme }
}) 