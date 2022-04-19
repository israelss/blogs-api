require('dotenv').config();

const { Category } = require('../../models');

const create = async (categoryObject) => {
  const createdCategory = await Category.create(categoryObject);
  return createdCategory;
};

const getAll = async () => Category.findAll();

module.exports = {
  create,
  getAll,
};
