require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const find = {
  by: (field) => async (fieldValue) => User.findOne({
    where: {
      [field]: fieldValue,
    },
  }),
  all: async () => User.findAll(),
};

const create = async (userObject) => {
  await User.create(userObject);
  const token = jwt.sign({ data: userObject.email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = {
  create,
  find,
};
