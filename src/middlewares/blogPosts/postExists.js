const { clientError } = require('../../helpers/status_codes');
const blogPostsServices = require('../../services/blogPosts');

const userValidator = async (req, res, next) => {
  const { id } = req.params;
  const post = await blogPostsServices.getById(id);

  if (!post) {
      return res.status(clientError.NOT_FOUND).json({ message: 'Post does not exist' });
  }

  const { user: { id: postUserId } } = post;

  req.postUserId = postUserId;

  next();
};

module.exports = userValidator;
