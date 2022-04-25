const jwt = require('jsonwebtoken');
const { success } = require('../../helpers/status_codes');
const blogPostsServices = require('../../services/blogPosts');

const create = async (req, res) => {
  const { title, content } = req.body;
  const { authorization: token } = req.headers;
  const blogPostObject = { title, content };
  const { data: decodedEmail } = jwt.decode(token);
  const newBlogPost = await blogPostsServices.create(blogPostObject, decodedEmail);
  const createdBlogPost = {
    id: newBlogPost.id,
    title: newBlogPost.title,
    content: newBlogPost.content,
    userId: newBlogPost.userId,
  };
  return res.status(success.CREATED).json(createdBlogPost);
};

module.exports = {
  create,
};