// services/noteService.js
import axios from 'axios'

const API = import.meta.env.VITE_API_URL;

export async function fetchNotesAPI() {
  return axios.get(`${API}/api/notes`)
}

export async function addNoteAPI(noteText) {
  return axios.post(`${API}/api/notes`, { text: noteText })
}
