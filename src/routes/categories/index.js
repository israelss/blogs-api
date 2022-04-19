const express = require('express');
const { userValidation, categoriesValidation } = require('../../middlewares');
const categoriesController = require('../../controllers/categories');

const router = express.Router();

router.post(
  '/',
  userValidation.token,
  categoriesValidation.name,
  categoriesController.create,
);

module.exports = router;