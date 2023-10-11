<template>
  <label v-if="label">{{ label }}</label>
  <select
  :value="modelValue"
  v-bind="{
    ...$attrs,
    onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
  }"
  >
    <option 
    v-for="option of options"
    :value="option"
    :key="option"
    >{{ option }}</option>
  </select>
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
  options: {
    type: Array,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>
<style>
  
</style>