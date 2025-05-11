// stores/noteStore/index.js
import { defineStore } from 'pinia'
import { state } from './state.js'
import { actions } from './actions.js'

export const useNoteStore = defineStore('noteStore', {
  state,
  actions
})
