require('dotenv').config();

const { BlogPost, Category, PostsCategories, User, Sequelize } = require('../../models');
const userServices = require('../user');

const create = async (blogPostObject, decodedEmail, categoryIds) => {
  const { id: loggedUserId } = await userServices.find.by('email')(decodedEmail);
  const newBlogPost = { ...blogPostObject, userId: loggedUserId };
  const createdBlogPost = await BlogPost.create(newBlogPost);
  await Promise.all(
    categoryIds.map(
      (categoryId) => PostsCategories.create({
        categoryId,
        postId: createdBlogPost.id,
      }),
    ),
  );
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

const update = async ({ id, title, content }) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedBlogPost = BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id'],
      },
      { model: Category, as: 'categories' },
    ],
  });
  updatedBlogPost.userId = (updatedBlogPost.user && updatedBlogPost.user.id) || 0;
  return updatedBlogPost;
};

const deletePost = async (id) => BlogPost.destroy({ where: { id } });

const search = async (query) => {
  const { or } = Sequelize.Op;

  const whereObject = query
  ? {
    [or]: [
      { title: query },
      { content: query },
    ],
  }
  : {};

  return BlogPost.findAll({
    where: whereObject,
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });
};

module.exports = {
  create,
  deletePost,
  getAll,
  getById,
  search,
  update,
};
