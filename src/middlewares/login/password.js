const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  password: Joi.string().required(),
});

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  const { error } = schema.validate({ password });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = passwordValidator;