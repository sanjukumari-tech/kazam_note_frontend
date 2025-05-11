// services/noteService.js
import axios from 'axios'

export async function fetchNotesAPI() {
  return axios.get(import.meta.env.VITE_API_URL +'/api/notes')
}

export async function addNoteAPI(noteText) {
  return axios.post(import.meta.env.VITE_API_URL +'/api/notes', { text: noteText })
}
