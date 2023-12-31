// routes/authenticationRoutes.js
const express = require('express');
const User = require('../models/User');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

const {encryptPassword} = require('../utils/encryptPassword');
const {comparePassword}= require('../utils/comparePassword');
const {generateAuthToken} = require('../utils/generateAuthToken')

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log(`${username}, ${password}`)
        const encryptedPassword = await encryptPassword(password);

        const user = new User({ 
            username: username, 
            password: encryptedPassword });

        console.log("here")
        const savedUser = await user.save();
        const authToken = generateAuthToken(savedUser._id)
        console.log("done")
        res.status(201).json({token: authToken});
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating user');
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        let isValidPassword = await comparePassword(password, user.password)
        // User doesn't exist or password not valid
        if (!user || !(isValidPassword)) {
            res.status(401).send('Invalid username or password');
        } else {
            // User sign in
            // req.session.user = user;
            const authToken = generateAuthToken(user._id)
            res.status(200).json({token: authToken});
        }
  } catch (error) {
        res.status(500).send('Error signing in');
  }
});

router.get('/validate-token', authenticate, (req, res) => {
    res.status(200).json(true)
})

module.exports = router;