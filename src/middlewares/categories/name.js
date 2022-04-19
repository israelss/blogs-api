const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  name: Joi.string().required(),
});

const nameValidator = (req, res, next) => {
  const { name } = req.body;

  const { error } = schema.validate({ name });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = nameValidator;