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

module.exports = router;