// websocketServer.js
const socketIO = require('socket.io');

const { sendMessage } = require('./socketMessages');

const initSocketOnServer = (server) => {

  const io = socketIO(server, {
  cors: {
    origin: '*',
  }
});

  // New connection
  io.on('connection', (socket) => {
    console.log('User connected!');
    console.log(socket.request.connection._peername)

    // Disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected!');
    });

    // Messages actions
    sendMessage(io, socket);

  });

  return io;
}

module.exports = {
  initSocketOnServer
}; 