const { success } = require('../../helpers/status_codes');
const userServices = require('../../services/user');

const create = async (req, res) => {
  const token = await userServices.create(req.body);
  return res.status(success.CREATED).json({ token });
};

const getAll = async (req, res) => {
  const users = await userServices.find.all();
  return res.status(success.OK).json(users);
};

module.exports = {
  create,
  getAll,
};