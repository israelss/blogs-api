const jwt = require('jsonwebtoken');
const { clientError } = require('../../helpers/status_codes');
const blogPostsServices = require('../../services/blogPosts');
const userServices = require('../../services/user');

const userValidator = async (req, res, next) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;
  const { data: decodedEmail } = jwt.decode(token);
  const { id: loggedUserId } = await userServices.find.by('email')(decodedEmail);
  const { user: { id: postUserId } } = await blogPostsServices.getById(id);

  if (loggedUserId !== postUserId) {
    return res.status(clientError.UNAUTHORIZED).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = userValidator;
