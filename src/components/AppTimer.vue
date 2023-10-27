<template>

<div class="timer">
  <svg class="timer-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="timer-circle">
      <!-- <circle class="timer-path-elapsed" cx="50" cy="50" r="45" /> -->
      <path
        id="base-timer-path-remaining"
        :stroke-dasharray="storeTime.setCircleDasharray()"
        class="base-timer-path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span class="timer-display">
    {{ displayTime('minutes') + ':' + displayTime('seconds') }}
  </span>
</div>
</template>

<script setup>
import {useTimeStore} from '@/stores/time.js'

const storeTime = useTimeStore()


const displayTime = (timeType) => {
  let time
  if(timeType === 'seconds') {
    time = storeTime.seconds%60
  } else if(timeType === 'minutes') {
    time = Math.floor(storeTime.seconds/60)
  }
  if(time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

</script>

<style lang="scss" scoped>
.timer {
  position: relative;
  height: 300px;
  width: 300px;
  .timer-svg {
    transform: scaleX(-1);
    .timer-circle {
      fill: none;
      stroke: none;
    // .timer-path-elapsed {
    //   stroke-width: 5px;
    //   stroke: green;
    // }
    .base-timer-path-remaining {
      stroke-width: 5px;
      /* Makes sure the animation starts at the top of the circle */
      transform: rotate(90deg);
      transform-origin: center;

      /* One second aligns with the speed of the countdown timer */
      transition: 1s all;

      stroke: white;
    }
    }
  }
  .timer-display {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: white;
  }
}

@media(min-width: 575px) {
.timer {
  .timer-display {
    font-size: 60px;
  }
}
}

@media(min-width: 1200px) {
.timer {
  .timer-display {
    font-size: 75px;
  }
}
}

</style>