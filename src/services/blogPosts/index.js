require('dotenv').config();

const { BlogPost } = require('../../models');
const userServices = require('../user');

const create = async (blogPostObject, decodedEmail) => {
  const { id: loggedUserId } = await userServices.find.by('email')(decodedEmail);
  const newBlogPost = { ...blogPostObject, userId: loggedUserId };
  const createdBlogPost = await BlogPost.create(newBlogPost);
  return createdBlogPost;
};

module.exports = {
  create,
};
