const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  title: Joi.string().required(),
});

const titleValidator = (req, res, next) => {
  const { title } = req.body;

  const { error } = schema.validate({ title });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = titleValidator;