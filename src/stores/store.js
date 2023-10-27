import { defineStore } from 'pinia'
import {ref} from 'vue'
import {useTimeStore} from '@/stores/time.js'
import { useStorage } from '@vueuse/core'
import bcg1 from '../assets/img/bcg1.jpg'
import bcg2 from '../assets/img/bcg2.jpg'
import bcg3 from '../assets/img/bcg3.jpg'
import bcg4 from '../assets/img/bcg4.jpg'
import bcg5 from '../assets/img/bcg5.jpg'
import bcg6 from '../assets/img/bcg6.jpg'
import bcg7 from '../assets/img/bcg7.jpg'
import bcg8 from '../assets/img/bcg8.jpg'
import gif1 from '../assets/gif/gif1.gif'
import gif2 from '../assets/gif/gif2.webp'
import gif3 from '../assets/gif/gif3.gif'
import gif4 from '../assets/gif/gif4.gif'
import gif5 from '../assets/gif/gif5.gif'

export const useModalStore = defineStore('modal', () => {

  const storeTime = useTimeStore()

  const activeTheme = useStorage('activeTheme', 'theme 2')

  const isModalDisplayed = ref(false)

  const bcgThemePaths = [
    bcg1, bcg2, bcg3, bcg4, bcg5, bcg6, bcg7, bcg8, gif1, gif2, gif3, gif4, gif5
  ]

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
    document.body.style.backgroundRepeat= 'no-repeat'
  }
  changeAppTheme()

  return { isModalDisplayed, activeTheme, $reset, switchModal, saveModalChanges, changeAppTheme }
}) 