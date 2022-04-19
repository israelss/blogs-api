const { success } = require('../../helpers/status_codes');
const userServices = require('../../services/user');

const create = async (req, res) => {
  const token = await userServices.create(req.body);
  return res.status(success.CREATED).json({ token });
};

module.exports = {
  create,
};