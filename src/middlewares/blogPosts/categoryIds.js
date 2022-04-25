const Joi = require('joi');
const categoryServices = require('../../services/categories');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  categoryIds: Joi.array().items(Joi.number().required()).unique().required(),
});

const categoryIdsValidator = async (req, res, next) => {
  const { categoryIds } = req.body;

  const { error } = schema.validate({ categoryIds });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  const allCategories = await categoryServices.getAll();
  const allCategoryIds = allCategories.map(({ id }) => id);
  const allCategoriesExists = categoryIds.every((id) => allCategoryIds.includes(id));
  if (!allCategoriesExists) {
    return res.status(clientError.BAD_REQUEST).json({ message: '"categoryIds" not found' });
  }

  return next();
};

module.exports = categoryIdsValidator;