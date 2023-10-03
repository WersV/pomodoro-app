<template>
  <div class="main-container">
  <AppPomodoroControls/>
  <AppTimer/>
  <AppControls />
  <AppModal 
    v-if="storeModal.isModalDisplayed"
  >
    <template #options>
      <div>
        <h2 class="modal-h2">Focus time</h2>
        <AppInput v-model="storeTime.pomodoroInputMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
        <AppInput v-model="storeTime.shortBreakInputMinutes" id="ShortBreak" label="Short break: " type="number"/>
        <AppInput v-model="storeTime.longBreakInputMinutes" id="LongBreak" label="Long break: " type="number"/>
      </div>
    </template>
  </AppModal>
  {{ storeTime.pomodoroInput }}
</div>
</template>

<script setup>
import AppControls from '@/components/AppControls.vue'
import AppModal from '@/components/AppModal.vue'
import AppInput from '@/components/AppInput.vue'
import AppTimer from '@/components/AppTimer.vue'
import AppPomodoroControls from '@/components/AppPomodoroControls.vue'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()

</script>

<style lang="scss" scoped>
.main-container {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .modal-h2 {
    text-align: center;
  }
}
</style>