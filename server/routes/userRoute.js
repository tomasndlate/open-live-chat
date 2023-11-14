// routes/messageRoutes.js
const express = require('express');
const User = require('../models/User');

const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Route to get all users
router.get('/get-all-users', async (req, res) => {
  try {
    // Retrieve all users
    const allUsers = await User.find().select({ username: 1 });
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');
  }
});

// Route to get all messages
router.get('/get-self-user', authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    // Retrieve self user
    const user = await User.findById(userId).select({ username: 1 });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');
  }
});

// Route to get a message by ID
router.get('/get-other-user/:otherUserId', async (req, res) => {
  try {
    const otherUserId = req.params.otherUserId;

    // Retrieve a user by its ID
    const otherUser = await User.findById(otherUserId).select({ username: 1 });

    if (!otherUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(otherUser);
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');
  }
});

module.exports = router;