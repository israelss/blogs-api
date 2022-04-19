const { success, clientError } = require('../../helpers/status_codes');
const userServices = require('../../services/user');

const create = async (req, res) => {
  const token = await userServices.create(req.body);
  return res.status(success.CREATED).json({ token });
};

const getAll = async (req, res) => {
  const users = await userServices.find.all();
  return res.status(success.OK).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.find.by('id')(id);
  if (!user) return res.status(clientError.NOT_FOUND).json({ message: 'User does not exist' });
  return res.status(success.OK).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};