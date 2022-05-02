require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const find = {
  by: (field) => async (fieldValue) => User.findOne({
    where: {
      [field]: fieldValue,
    },
    attributes: {
      exclude: ['password'],
    },
  }),
  all: async () => User.findAll({
    attributes: {
      exclude: ['password'],
    },
  }),
};

const create = async (userObject) => {
  await User.create(userObject);
  const token = jwt.sign({ data: userObject.email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const deleteUser = async (token) => {
  const { data: decodedEmail } = jwt.decode(token);
  return User.destroy({
    where: { email: decodedEmail },
  });
};

module.exports = {
  create,
  deleteUser,
  find,
};
