<template>
  <div class="input-container">
    <input
      v-model="noteText"
      :class="{ 'error': showError }"
      placeholder="New Note..."
    />
    <button @click="addNote">Add</button>
  </div>
  <span v-if="showError" class="error-message">Please add a note</span>
  <Toast :message="toastMessage" />
</template>

<script setup>
import { ref } from 'vue'
import Toast from '../common/Toast.vue' 

const emit = defineEmits(['add'])

const noteText = ref('')
const showError = ref(false)
const toastMessage = ref('')

function addNote() {
  if (noteText.value.trim()) {
    emit('add', noteText.value)
    showError.value = false
    toastMessage.value = 'Note added successfully!'
    setTimeout(() => (toastMessage.value = ''), 2000)
    noteText.value = ''
  } else {
    showError.value = true
  }
}
</script>

<style scoped>
.input-container {
  display: flex;
  gap: 8px;
  max-width: 400px;
  margin-bottom: 4px;
}
input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input.error {
  border-color: red;
}
button {
  background: #964b00;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}
.error-message {
  color: red;
  font-size: 0.9em;
  margin-left: 4px;
}
</style>
