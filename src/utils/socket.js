// utils/socket.js
import { io } from 'socket.io-client'

let socket;

const API = import.meta.env.VITE_API_URL;
export const initSocket = () => {
  if (!socket) {
    socket = io(API, {
      transports: ['websocket'], // Force WebSocket only
upgrade: false,             // Prevent fallback to polling

      withCredentials: true,
    });

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)
    })
    socket.on("new notes", (note) => {
  console.log("Received new note:", note);

});

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err.message)
    })
  }
  return socket
}
