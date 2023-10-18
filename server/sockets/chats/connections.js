function joinRoom(socket, room) {
  socket.join(room);
}

function leaveRoom(socket, room) {
  socket.leave(room);
}

module.exports = {
  joinRoom,
  leaveRoom
};