<template>
  <div class="note-list">
    <h3>Notes</h3>
    <div class="notes-container">
      <div v-for="note in notes" :key="note.id" class="note-item">
        {{ note }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  notes: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.note-list {
  margin-top: 12px;
}
.notes-container {
  border: 1px solid #ddd;
  height: 150px;
  overflow-y: auto;
}
.note-item {
  padding: 6px 8px;
  border-bottom: 1px solid #eee;
}
.note-item:last-child {
  border-bottom: none;
}
</style>
