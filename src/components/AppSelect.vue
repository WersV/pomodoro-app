<template>
  <div class="select-input">
    <label v-if="label">{{ label }}</label>
    <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {$emit('update:modelValue', $event.target.value); $emit('changeTheme')}
    }"
    >
      <option 
      v-for="option of options"
      :value="option"
      :key="option"
      >{{ option }}</option>
    </select>
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
  },
  options: {
    type: Array,
    required: true
  }
})
defineEmits(['update:modelValue', 'changeTheme'])
</script>
<style lang="scss">
.select-input {
  text-align: center;
  width: 200px;
  select {
    width: 80%;
    padding: 5px 5px;
    margin-top: 5px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
}
</style>