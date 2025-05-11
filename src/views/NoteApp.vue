<template>
  <div class="note-app">
    <h2>📝 Note App</h2>
    <NoteInput @add="addNote" />
    <p v-if="statusMessage" class="status-message">{{ statusMessage }}</p>
    <NoteList :notes="store.notes" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NoteInput from '../components/NoteInput.vue'
import NoteList from '../components/NoteList.vue'
import { useNoteStore } from '../stores/store.js'

const store = useNoteStore()
const statusMessage = ref('')

onMounted(() => {
  store.fetchNotes()
})

async function addNote(noteText) {
  const response = await store.addNote(noteText)
  if (response?.message) {
    statusMessage.value = `${response.message} (Total: ${response.notesCount})`
    setTimeout(() => statusMessage.value = '', 3000) // hide after 3s
  }
}
</script>

<style scoped>
.note-app {
  width: 300px;
  margin: 40px auto;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.status-message {
  margin: 10px 0;
  color: green;
  font-weight: bold;
}
</style>
