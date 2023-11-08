const bcrypt = require('bcrypt');

const comparePassword = async (password, otherPassword) => {
    
    let isPasswordEqual = await bcrypt.compare(password, otherPassword);

    return isPasswordEqual;
}

module.exports = {
  comparePassword
};