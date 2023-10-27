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
          <AppInput v-model="storeTime.pomodoroInputMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
          <AppInput v-model="storeTime.shortBreakInputMinutes" id="ShortBreak" label="Short break: " type="number"/>
          <AppInput v-model="storeTime.longBreakInputMinutes" id="LongBreak" label="Long break: " type="number"/>
          <AppSelect @changeTheme="storeModal.changeAppTheme()" v-model="storeModal.activeTheme" :options="['theme 1', 'theme 2',
           'theme 3', 'theme 4', 'theme 5', 'theme 6', 'theme 7',
           'theme 8','theme 9 (gif)', 'theme 10 (gif)', 'theme 11 (gif)',
           'theme 12 (gif)', 'theme 13 (gif)']"
          label="Background: "/>
      </template>
    </AppModal>
  </Transition>
  <AppMusicPlayer />
</div>
</template>

<script setup>
import {defineAsyncComponent} from 'vue'
import AppControls from '@/components/AppControls.vue'
import AppTimer from '@/components/AppTimer.vue'
import AppPomodoroControls from '@/components/AppPomodoroControls.vue'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'
import AppMusicPlayer from '@/components/AppMusicPlayer.vue'

const storeModal = useModalStore()
const storeTime = useTimeStore()

const AppModal = defineAsyncComponent(
  () => import('@/components/AppModal.vue')
)
const AppInput = defineAsyncComponent(
  () => import('@/components/AppInput.vue')
)
const AppSelect = defineAsyncComponent(
  () => import('@/components/AppSelect.vue')
)

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

@media(max-height: 680px) {
  .main-container {
    height: 110vh;
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