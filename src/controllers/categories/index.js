const { success } = require('../../helpers/status_codes');
const categoriesServices = require('../../services/categories');

const create = async (req, res) => {
  const createdCategory = await categoriesServices.create(req.body);
  return res.status(success.CREATED).json(createdCategory);
};

module.exports = {
  create,
};