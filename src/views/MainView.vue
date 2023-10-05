<template>
<div class="main-container">
  <AppPomodoroControls/>
  <AppTimer/>
  <AppControls />
  <Transition>
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
  </Transition>
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

.v-enter-active, .v-leave-active {
		transition: all 0.3s ease-out;
	}

	.v-enter-from,
	.v-leave-to {
		transform: scale(1.2);
		opacity: 0;
	}

</style>