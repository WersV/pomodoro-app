<template>
  <div  class="song-player">
    <div class="spotify-embeed">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import _ from 'lodash'
const width = ref(null)
width.value = window.innerWidth

function getWidth() {
   width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', _.throttle(getWidth,500))
})
onUnmounted(() => {
  window.removeEventListener('resize', getWidth)
})

</script>

<style lang="scss" scoped>

.song-player {
  box-sizing: border-box;
  position: absolute;
  bottom: 5%;
  right: 50%;
  transform: translateX(50%);
  .spotify-embeed {
    width: 300px;
    height: 80px;
  }
}

@media(min-width: 575px) {
  .song-player {
    box-sizing: border-box;
    position: absolute;
    bottom: 5%;
    right: 5%;
    transform: translateX(0);
    .spotify-embeed {
      width: 300px;
      height: 80px;
    }
  }
}

@media(max-height: 680px) {
  .song-player {
    // margin-top: 20px;
    bottom: -10%;
    // margin-bottom: 20px;
  }
}

@media(min-width: 1300px) {
  .song-player {
    box-sizing: border-box;
    position: absolute;
    bottom: 5%;
    right: 5%;
    .spotify-embeed {
      width: 350px;
      height: 160px;
    }
  }
}
</style>