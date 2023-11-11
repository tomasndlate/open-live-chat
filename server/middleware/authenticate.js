// const jwt = require('jsonwebtoken');
const {validateAuthToken} = require('../utils/validateAuthToken');

const authenticate = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized - No Bearer token provided' });
    }

    // Extract the token without the "Bearer " prefix
    const token = authorizationHeader.substring(7);

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

