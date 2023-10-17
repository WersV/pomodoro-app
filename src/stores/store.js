import { defineStore } from 'pinia'
import {ref} from 'vue'
import {useTimeStore} from '@/stores/time.js'
import { useStorage } from '@vueuse/core'

export const useModalStore = defineStore('modal', () => {

  const storeTime = useTimeStore()

  const activeTheme = useStorage('activeTheme', 'theme 2')
  const currentSong = useStorage('currentSong', 'song 1')
  const songVolume = useStorage('songVolume', '5')
  const playlist = useStorage('playlist', {})

  const isModalDisplayed = ref(false)

  const CLIENT_ID = 'a4289f5a26d04a0b9949ef4d02a2e74c'
  const CLIENT_SECRET = '1c76667ca7d7441cb893d2194f1a857e'
  const LOFI_PLAYLIST_LINK = 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn?si=32720bcc3be24004'
  let ACCESS_TOKEN

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
    // var audio = new Audio('src/assets/music/song1.mp3');
    // audio.volume = 0.2;
    // audio.play();
    // changeSong()
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

  async function changeSong() {
    const response = await fetch("https://accounts.spotify.com/api/token",{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    })
    const data = await response.json()
    ACCESS_TOKEN = data.access_token
    getArtist()
  }

  async function getArtist() {
    console.log(ACCESS_TOKEN);
    const response = await fetch(LOFI_PLAYLIST_LINK, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
    })
    const data = await response.json()
    console.log(data);
    playlist.value = data
  }

  changeAppTheme()
  console.log(playlist.value);

  return { isModalDisplayed, activeTheme, songVolume, $reset, switchModal, saveModalChanges, changeAppTheme }
}) 