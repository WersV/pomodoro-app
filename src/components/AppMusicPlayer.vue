<template>
  <div class="song-player">
    <div class="song-details">
      <h2 class="song-title"><span>Tiger Tales (of the concrete jungle)</span></h2>
      <span class="song-author">Tiperpalm*Bay asd as as</span>
    </div>
    <div class="song-controls">
      <div class="song-control-btns">
        <button class="song-previous"> <font-awesome-icon icon="fa-solid fa-backward-step"/></button>
        <button class="song-start-stop"><font-awesome-icon icon="fa-solid fa-play" /></button> 
        <!-- <font-awesome-icon icon="fa-solid fa-pause" /> -->
        <button class="song-next"><font-awesome-icon icon="fa-solid fa-forward-step"/></button>
      </div>
      <div class="song-progress-bar"></div>
      <div class="song-timer"></div>
      <div class="song-volume"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.song-player {
  box-sizing: border-box;
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 300px;
  height: 100px;
  background-color: #333;
  padding: 10px;
  border-radius: 15px;
  .song-details {
    display: flex;
    flex-wrap: wrap;
    color: white;
    .song-title {
      margin: 0;
      font-size: 16px;
      // width: 200px;
      overflow: hidden;
      white-space: nowrap
    }
    .song-author {
      margin-top: 5px;
      font-size: 13px;
      width: 90px;
      overflow: hidden;
      white-space: nowrap
    }
  }
  .song-controls {
    color: white;
    .song-control-btns {
      display: flex;
      justify-content: center;
      margin-top: -10px;
      .song-previous, .song-start-stop, .song-next {
        background: transparent;
        border: 0;
        color: white;
        font-size: 25px;
        cursor: pointer;
      }
      .song-previous {
        padding-right: 8px;
      }
    }
    .song-progress-bar {
      border-bottom: 6px solid;
      border-radius: 3px;
      margin-top: 10px;
    }
  }
}
</style>