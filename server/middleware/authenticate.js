// const jwt = require('jsonwebtoken');
const validateAuthToken = require('../utils/validateAuthToken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    // If valid return user id
    const userId = validateAuthToken(token);

    if (userId) {
        req.userId = userId
        next()
    } else {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

module.exports = authenticate;

