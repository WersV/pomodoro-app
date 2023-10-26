<template>
  <div class="control-btns">
    <button class="time-btn" :class="{clicked: storeTime.isStartStopBtnStyling}" 
      @click="storeTime.handleCounter(); toggleClassClicked('startStop')" 
      :disabled="storeTime.isStartStopBtnDisabled">
      {{ storeTime.isTimeRunning ? 'Stop' : 'Start' }}
    </button>
    <button class="btns reset" 
      @click="storeTime.resetCounter(); startAnimation('reset'); toggleClassClicked('reset')">
      <font-awesome-icon :class="{animated: isResetAnimating}" icon="fa-solid fa-arrow-rotate-right" />
    </button>
    <button class="btns" @click="storeModal.switchModal(); startAnimation('settings')">
      <font-awesome-icon :class="{animated: isSettingsAnimating}" icon="fa-solid fa-gear" />
    </button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {watchEffect} from 'vue'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()
const isResetAnimating = ref(false)
const isSettingsAnimating = ref(false)

watchEffect(() => {
  if(storeTime.seconds < 1) {
    storeTime.isStartStopBtnDisabled = true
  } else {
    storeTime.isStartStopBtnDisabled = false
  }
})

const toggleClassClicked = (btnType) => {
  if(btnType === 'startStop') storeTime.isStartStopBtnStyling = !storeTime.isStartStopBtnStyling
  if(btnType === 'reset') storeTime.isStartStopBtnStyling = true
}

const startAnimation = (btnType) => {
  if(btnType === 'reset') {
    isResetAnimating.value = true
  } else if (btnType === 'settings') {
    isSettingsAnimating.value = true
  }

  setTimeout(() => {
    isResetAnimating.value = false
    isSettingsAnimating.value = false
  }, 700)
}

</script>

<style lang="scss" scoped>
.control-btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  width: 320px;
  .time-btn {
    width: 80px;
    background-color: transparent;
    border-radius: 30px;
    border: 1px solid white;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    font-family: lato;
    // margin: 0 5px;
    cursor: pointer;
  }
  .time-btn.clicked {
    background-color: white;
    color: black;
  }
  .time-btn:disabled {
    background-color: gray;
    border-color: black;
    color: black;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    padding: 0;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }

  .btns.reset {
    font-size: 34px; 
  }
  .animated {
    animation: rotation .7s linear; // when changing duration remember to update duration of setTimeout()
  }
}

@media(min-width: 575px) {
.control-btns {
  .time-btn {
    width: 100px;
    font-size: 17px;
    padding: 12px 20px; //no left/right padding bcs fixed width
  }
  .btns {
    font-size: 35px;
  }
  .btns.reset {
    font-size: 38px;
  }
}
}

@media(min-width: 1200px) {
.control-btns {
  .time-btn {
    width: 120px;
    font-size: 20px;
    padding: 12px 35px;
  }
  .btns {
    font-size: 40px;
  }
  .btns.reset {
    font-size: 43px;
  }
}
}

@keyframes rotation {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
</style>