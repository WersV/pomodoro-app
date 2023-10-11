<template>
  <div class="input-wrapper">
    <label :for="id" v-if="label">{{ label }}</label>
    <input 
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    >
    <span class="minutes">minutes</span>
    <p
      v-if="error"
      class="errorMessage">
      {{ error }}
    </p>
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  id: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>
<style lang="scss" scoped>
// .input-wrapper {
//   label {
//     display: inline-block;
//     width: 85px;
//   }
//   input {
//     width: 50px;
//   }
// }
// .input-wrapper {
//   margin: 10px 0;
//   label {
//     display: inline-block;
//     width: 90px;
//   }
//   input {
//     width: 30px;
//     background-color: transparent;
//     border: 1px solid white;
//     border-radius: 5px;
//     color: white;
//     padding: 5px;
//   }

//   .minutes {
//     padding-left: 5px;
//   }
// }

.input-wrapper {
  margin: 10px 0;
  label {
    display: inline-block;
    width: 90px;
  }
  input {
    width: 30px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 5px;
  }

  .minutes {
    padding-left: 5px;
  }
}
</style>