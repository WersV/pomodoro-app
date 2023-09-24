<template>
  <AppPomodoroControls/>
  <AppTimer/>
  <AppControls />
  <AppModal 
    v-if="storeModal.isModalDisplayed"
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
  {{ inputPomodoroMinutes }}
</template>

<script setup>
import { ref } from 'vue';
import AppControls from '@/components/AppControls.vue';
import AppModal from '@/components/AppModal.vue';
import AppInput from '@/components/AppInput.vue';
import AppTimer from '@/components/AppTimer.vue';
import AppPomodoroControls from '@/components/AppPomodoroControls.vue';
import {useModalStore} from '@/stores/store.js';

const storeModal = useModalStore();

const inputPomodoroMinutes = ref('')
const inputShortBreakMinutes = ref('')
const inputLongBreakMinutes = ref('')

</script>

<style lang="scss" scoped>
h2 {
  color: white;
}
.modal-h2 {
  text-align: center;
}
</style>