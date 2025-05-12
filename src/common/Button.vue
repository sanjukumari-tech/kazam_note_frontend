
<template>
  <button @click="$emit('click')" class="base-button">
    <slot />
  </button>
</template>

<script setup>
</script>

<style scoped>
.base-button {
  background: #964b00;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
