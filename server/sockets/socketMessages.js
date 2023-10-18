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

      // res.status(201).json({ message: 'Message sent successfully', message: newMessage });
    } catch (error) {
      console.error(error);
      // res.status(500).json({ message: 'Internal server error' });
    }
  })
  
}

module.exports = {
  sendMessage
};