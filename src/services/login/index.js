require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) return;

  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = {
  login,
};
