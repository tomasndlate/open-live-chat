// websocketServer.js
const socketIO = require('socket.io');

const { joinRoom, leaveRoom } = require('./chats/connections');
const { sendMessage } = require('./socketMessages');

const initSocketOnServer = (server) => {

  const io = socketIO(server, {
  cors: {
    origin: '*',
  }
});

  io.on('connection', (socket) => {
    console.log('A user connected');

    // disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });

    // Join the specified room
    socket.on('join-room', (room) => {
      joinRoom(socket, room);
    });
    
    // Leave the specified room
    socket.on('leave-room', (room) => {
      leaveRoom(socket, room);
    });

    // Messages actions
    sendMessage(io, socket);
    // socket.on('send-message', (data) => {
    //   sendMessage(io, data)
    // })
    
  });

  return io;
}

module.exports = {
  initSocketOnServer
}; 