const express = require('express');
const { userValidation, blogPostsValidation } = require('../../middlewares');
const blogPostsController = require('../../controllers/blogPosts');

const router = express.Router();

router.get(
  '/search',
  userValidation.token,
  blogPostsController.search,
);

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
  blogPostsValidation.postExists,
  blogPostsValidation.user,
  blogPostsValidation.checkUpdateFields,
  blogPostsValidation.title,
  blogPostsValidation.content,
  blogPostsController.update,
  );

router.delete(
  '/:id',
  userValidation.token,
  blogPostsValidation.postExists,
  blogPostsValidation.user,
  blogPostsController.deletePost,
);

module.exports = router;