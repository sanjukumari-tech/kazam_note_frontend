
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ error }"
    :placeholder="placeholder"
    class="base-input"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  error: Boolean
})
</script>

<style scoped>
.base-input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.base-input.error {
  border-color: red;
}
</style>
