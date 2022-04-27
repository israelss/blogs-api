require('dotenv').config();

const { BlogPost, Category, User } = require('../../models');
const userServices = require('../user');

const create = async (blogPostObject, decodedEmail) => {
  const { id: loggedUserId } = await userServices.find.by('email')(decodedEmail);
  const newBlogPost = { ...blogPostObject, userId: loggedUserId };
  const createdBlogPost = await BlogPost.create(newBlogPost);
  return createdBlogPost;
};

const getAll = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
  ],
});

const getById = async (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
  ],
});

module.exports = {
  create,
  getAll,
  getById,
};
