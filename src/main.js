import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useNoteStore } from './stores/store.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// ✅ It's safe to init store here without onMounted
const store = useNoteStore()
store.fetchNotes()
store.setupSocketListener()

app.mount('#app')
