const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword;
}

module.exports = {
  encryptPassword
};