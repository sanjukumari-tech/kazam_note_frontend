// import { defineStore } from 'pinia'
// import axios from 'axios'


// export const useNoteStore = defineStore('noteStore', {
//   state: () => ({
//     notes: [],
//      socketInitialized: false // to avoid duplicate listeners
//   }),
//   actions: {
//     async fetchNotes() {
//       try {
//         const res = await axios.get(import.meta.env.VITE_API_URL +'/api/notes')
//         this.notes = res.data.notes
//       } catch (err) {
//         console.error('Fetch error:', err)
//       }
//     },
//     async addNote(noteText) {
//       try {
//         const res = await axios.post(import.meta.env.VITE_API_URL +'/api/notes', { text: noteText })
      

//         this.fetchNotes() // refresh notes after adding
//       } catch (err) {
//         console.error('Add error:', err)
     
//       }
//     },
   
//   }
// })
