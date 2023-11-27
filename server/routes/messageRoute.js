// routes/messageRoutes.js
const express = require('express');
const Message = require('../models/Message');

const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Route to get all messages
router.get('/get-all-messages', authenticate, async (req, res) => {
  try {
    // Retrieve all messages
    const allMessages = await Message.find().sort({ timestamp: -1 });

    res.status(200).json(allMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');
  }
});

// Route to get a message by ID
router.get('/get-message/:messageId', authenticate, async (req, res) => {
  try {
    const messageId = req.params.messageId;

    // Retrieve a message by its ID
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;



