// utils/socket.js
import { io } from 'socket.io-client'

let socket;

export const initSocket = () => {
  if (!socket) {
    socket = io('https://kazam-note-backend-hc1z.onrender.com ', {
      withCredentials: true,
    });

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)
    })

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err.message)
    })
  }
  return socket
}
