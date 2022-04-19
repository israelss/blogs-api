const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  email: Joi.string().email().required(),
});

const emailValidator = async (req, res, next) => {
  const { email } = req.body;

  const { error } = schema.validate({ email });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = emailValidator;