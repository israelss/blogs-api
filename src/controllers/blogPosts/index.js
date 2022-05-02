const jwt = require('jsonwebtoken');
const { success, clientError } = require('../../helpers/status_codes');
const blogPostsServices = require('../../services/blogPosts');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization: token } = req.headers;
  const blogPostObject = { title, content };
  const { data: decodedEmail } = jwt.decode(token);
  const newBlogPost = await blogPostsServices.create(blogPostObject, decodedEmail, categoryIds);
  const createdBlogPost = {
    id: newBlogPost.id,
    title: newBlogPost.title,
    content: newBlogPost.content,
    userId: newBlogPost.userId,
  };
  return res.status(success.CREATED).json(createdBlogPost);
};

const getAll = async (req, res) => {
  const blogPosts = await blogPostsServices.getAll();
  return res.status(success.OK).json(blogPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await blogPostsServices.getById(id);
  if (!blogPost) return res.status(clientError.NOT_FOUND).json({ message: 'Post does not exist' });
  return res.status(success.OK).json(blogPost);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const blogPost = await blogPostsServices.update({ id, title, content });
  return res.status(success.OK).json(blogPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await blogPostsServices.deletePost(id);
  return res.status(success.NO_CONTENT).end();
};

const search = async (req, res) => {
  const { q: query } = req.query;
  const posts = await blogPostsServices.search(query);
  res.status(success.OK).json(posts);
};

module.exports = {
  create,
  deletePost,
  getAll,
  getById,
  search,
  update,
};