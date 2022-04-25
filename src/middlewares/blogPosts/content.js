const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  content: Joi.string().required(),
});

const contentValidator = (req, res, next) => {
  const { content } = req.body;

  const { error } = schema.validate({ content });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = contentValidator;