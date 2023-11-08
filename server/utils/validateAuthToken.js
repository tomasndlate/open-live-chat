const jwt = require('jsonwebtoken');

const validateAuthToken = (token) => {
    try {
        const tokenDecoded = jwt.verify(token, 'your-secret-key');
        return tokenDecoded.userId;
    } catch (error) {
        return false;
    }
};

module.exports = {
  validateAuthToken
};