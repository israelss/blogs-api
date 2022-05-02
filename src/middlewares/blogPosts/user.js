const jwt = require('jsonwebtoken');
const { clientError } = require('../../helpers/status_codes');
const userServices = require('../../services/user');

const userValidator = async (req, res, next) => {
  const { postUserId } = req;
  const { authorization: token } = req.headers;
  const { data: decodedEmail } = jwt.decode(token);
  const { id: loggedUserId } = await userServices.find.by('email')(decodedEmail);

  if (loggedUserId !== postUserId) {
    return res.status(clientError.UNAUTHORIZED).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = userValidator;
