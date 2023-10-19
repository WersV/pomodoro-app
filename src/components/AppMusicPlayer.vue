<template>
  <div class="song-player">
    <div class="song-details">
      <h2 class="song-title"><span>Tiger Tales (of the concrete jungle)</span></h2>
      <span class="song-author">Tiperpalm*Bay asd as as</span>
    </div>
    <div class="song-controls">
      <div class="song-progress-wrapper">   
        <div class="song-timer-current">1:23</div>
        <div class="song-progress-bar-wrapper">
          <div class="song-progress-bar">
            <div class="song-progress-fill"></div>
          </div>
        </div>
        <div class="song-timer-max">3:47</div>   
      </div>
      <div class="song-control-btns">
        <button class="song-previous"> <font-awesome-icon icon="fa-solid fa-backward-step"/></button>
        <button class="song-start-stop"><font-awesome-icon icon="fa-solid fa-play" /></button> 
        <!-- <font-awesome-icon icon="fa-solid fa-pause" /> -->
        <button class="song-next"><font-awesome-icon icon="fa-solid fa-forward-step"/></button>
      </div>
      <!-- <div class="song-volume"></div> -->
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
  height: 110px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(3px); 
  padding: 10px;
  border-radius: 15px;
  .song-details {
    display: flex;
    flex-wrap: wrap;
    color: white;
    .song-title {
      margin: 0;
      font-size: 16px;
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
    .song-progress-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      .song-progress-bar-wrapper {
        position: relative;
        width: 200px;
        margin: 0 5px;
        .song-progress-bar {
          position: absolute;
          top: 50%;
          transform: translateY(-45%);
          height: 6px;
          width: 200px;
          border-radius: 3px;
          background-color: #919191;
          overflow: hidden;
          cursor: pointer;
          .song-progress-fill {
            transform: translateX(-50%);
            width: 200px;
            height: 6px;
            border-radius: 3px;
            background-color: white;
          }
        }
        width: 200px;
      }
      .song-timer-current, .song-timer-max {
        font-size: 12px;
      }
    }

    .song-control-btns {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      .song-previous, .song-start-stop, .song-next {
        background: transparent;
        border: 0;
        color: white;
        font-size: 25px;
        cursor: pointer;
      }
      .song-start-stop {
        padding: 0 20px 0 22px;
      }
    }
  }
}
</style>