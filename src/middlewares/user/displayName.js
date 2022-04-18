const Joi = require('joi');
const { clientError } = require('../../helpers/status_codes');

const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
});

const displayNameValidator = (req, res, next) => {
  const { displayName } = req.body;

  const { error } = schema.validate({ displayName });
  if (error) {
    return res.status(clientError.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};

module.exports = displayNameValidator;