const jwt = require('jsonwebtoken');

const generateAuthToken = (userId) => {
    
    // Generate JWT token
    const token = jwt.sign({ userId: userId}, 'your-secret-key', { expiresIn: '1h' });

    return token;
}

module.exports = {
  generateAuthToken
};