<template>
<div class="main-container">
  <AppPomodoroControls/>
  <AppTimer/>
  <AppControls />
  <Transition>
    <AppModal 
      v-if="storeModal.isModalDisplayed"
    >
      <template #content-main>
        <div>
          <AppInput v-model="storeTime.pomodoroInputMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
          <AppInput v-model="storeTime.shortBreakInputMinutes" id="ShortBreak" label="Short break: " type="number"/>
          <AppInput v-model="storeTime.longBreakInputMinutes" id="LongBreak" label="Long break: " type="number"/>
          <AppSelect @changeTheme="storeModal.changeAppTheme()" v-model="storeModal.activeTheme" :options="['theme 1', 'theme 2',
           'theme 3', 'theme 4', 'theme 5', 'theme 6', 'theme 7',
           'theme 8','theme 9 (gif)', 'theme 10 (gif)', 'theme 11 (gif)',
           'theme 12 (gif)', 'theme 13 (gif)']"
          label="Background: "/>

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
import AppSelect from '@/components/AppSelect.vue'

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