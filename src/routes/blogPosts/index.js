const express = require('express');
const { userValidation, blogPostsValidation } = require('../../middlewares');
const blogPostsController = require('../../controllers/blogPosts');

const router = express.Router();

router.post(
  '/',
  userValidation.token,
  blogPostsValidation.title,
  blogPostsValidation.content,
  blogPostsValidation.categoryIds,
  blogPostsController.create,
);

router.get(
  '/',
  userValidation.token,
  blogPostsController.getAll,
);

router.get(
  '/:id',
  userValidation.token,
  blogPostsController.getById,
);

module.exports = router;