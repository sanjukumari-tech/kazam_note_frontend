// stores/noteStore/actions.js
import { fetchNotesAPI, addNoteAPI } from '@/utils/notesServices.js'
import { initSocket } from '@/utils/socket.js'

export const actions = {
  async fetchNotes() {
    try {
      const res = await fetchNotesAPI()
      this.notes = res.data.notes
      return { success: true, data: res.data }
    } catch (err) {
      console.error('Fetch error:', err)
      return { success: false, error: err }
    }
  },

  async addNote(noteText) {
    try {
      const res = await addNoteAPI(noteText)
      if (res.data.notes) this.notes = res.data.notes
      return { success: true, data: res.data }
    } catch (err) {
      console.error('Add error:', err)
      return { success: false, error: err }
    }
  },

setupSocketListener() {
  if (this.socketInitialized) return

  const socket = initSocket()
  console.log('🔌 Setting up noteAdded listener')

  socket.on('noteAdded', () => {
    console.log('📩 noteAdded received')
    this.fetchNotes()
  })

  this.socketInitialized = true
}


}
