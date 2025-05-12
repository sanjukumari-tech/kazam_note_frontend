<template>
  <div v-if="message" class="toast">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String
})
</script>

<style scoped>
.toast {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1em;
  z-index: 1000;
  animation: fadein 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
@keyframes fadein {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
