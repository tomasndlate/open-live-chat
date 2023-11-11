const Message = require('../models/Message');

const sendMessage = (io, socket) => {

  socket.on('send-message', async (data) => {
    try {
      const { sender, content } = data;

      const newMessage = new Message({
        sender,
        content,
      });

      // Save the message to the database
      await newMessage.save();
      
      io.emit('new-message', newMessage);

    } catch (error) {
      console.error(error);
    }
  })
  
}

module.exports = {
  sendMessage
};