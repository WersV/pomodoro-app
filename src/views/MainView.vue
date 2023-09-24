<template>
  <AppPomodoroControls/>
  <AppTimer/>
  <AppControls />
  <AppModal 
    v-if="storeModal.isModalDisplayed"
    @save-changes="saveChanges()"
  >
    <template #options>
      <div>
        <h2 class="modal-h2">Focus time</h2>
        <AppInput v-model="inputPomodoroMinutes" id="Pomodoro" label="Pomorodo: " type="number"/>
        <AppInput v-model="inputShortBreakMinutes" id="ShortBreak" label="Short break: " type="number"/>
        <AppInput v-model="inputLongBreakMinutes" id="LongBreak" label="Long break: " type="number"/>
      </div>
    </template>
  </AppModal>
  {{ storeTime.pomodoroInput }}
</template>

<script setup>
import { ref } from 'vue'
import AppControls from '@/components/AppControls.vue'
import AppModal from '@/components/AppModal.vue'
import AppInput from '@/components/AppInput.vue'
import AppTimer from '@/components/AppTimer.vue'
import AppPomodoroControls from '@/components/AppPomodoroControls.vue'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()

const inputPomodoroMinutes = ref('')
const inputShortBreakMinutes = ref('')
const inputLongBreakMinutes = ref('')

const saveChanges = () => {
  storeModal.saveModalChanges()
  storeTime.pomodoroInputMinutes = Number(inputPomodoroMinutes.value)
  storeTime.shortBreakInputMinutes = Number(inputShortBreakMinutes.value)
  storeTime.longBreakInputMinutes = Number(inputLongBreakMinutes.value)
}

</script>

<style lang="scss" scoped>
h2 {
  color: white;
}
.modal-h2 {
  text-align: center;
}
</style>