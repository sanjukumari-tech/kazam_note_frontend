<template>
  <div class="input-container">
    <input v-model="noteText" placeholder="New Note..." />
    <button @click="emitNote">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add'])

const noteText = ref('')

function emitNote() {
  if (noteText.value.trim()) {
    emit('add', noteText.value)
    noteText.value = ''
  }
}
</script>

<style scoped>
.input-container {
  display: flex;
  gap: 8px;
}
input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background: #964B00;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}
</style>
