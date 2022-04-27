const { clientError } = require('../../helpers/status_codes');

const checkUpdateFieldsValidator = (req, res, next) => {
  const fields = req.body;
  const invalidFields = Object
    .keys(fields)
    .some((field) => !['title', 'content'].includes(field));

  if (invalidFields) {
    return res.status(clientError.BAD_REQUEST).json({ message: 'Categories cannot be edited' });
  }

  next();
};

module.exports = checkUpdateFieldsValidator;