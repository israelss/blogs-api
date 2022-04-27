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

  router.put(
  '/:id',
  userValidation.token,
  blogPostsValidation.user,
  blogPostsValidation.checkUpdateFields,
  blogPostsValidation.title,
  blogPostsValidation.content,
  blogPostsController.update,
);

module.exports = router;