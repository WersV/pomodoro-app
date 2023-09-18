<template>
  <label for="input" v-if="label">{{ label }}</label>
  <input 
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
    class="label"
    id="input"
  >

  <p
    v-if="error"
    class="errorMessage">
    {{ error }}
  </p>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  error: {

  }
})
defineEmits(['update:modelValue'])
</script>
<style lang="scss" scoped>

</style>