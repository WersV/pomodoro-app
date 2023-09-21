<template>
  <div class="input-wrapper">
    <label :for="id" v-if="label">{{ label }}</label>
    <input 
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
      :id="id"
    >
    <span>minutes</span>
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
.input-wrapper {
  label {
    display: inline-block;
    width: 85px;
  }
  input {
    width: 50px;
  }
}
</style>