<template>
  <div class="input-range">
    <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
    type="range" id="volume" name="volume" min="0" max="10" />
  </div>
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
  }
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>

</style>