const { success } = require('../../helpers/status_codes');
const categoriesServices = require('../../services/categories');

const create = async (req, res) => {
  const createdCategory = await categoriesServices.create(req.body);
  return res.status(success.CREATED).json(createdCategory);
};

const getAll = async (req, res) => {
  const categories = await categoriesServices.getAll();
  return res.status(success.OK).json(categories);
};

module.exports = {
  create,
  getAll,
};