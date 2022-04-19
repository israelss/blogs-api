require('dotenv').config();
const jwt = require('jsonwebtoken');
const { clientError } = require('../../helpers/status_codes');

const tokenValidator = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(clientError.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log({ error });
    return res.status(clientError.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = tokenValidator;