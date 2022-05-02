const express = require('express');
const { userValidation } = require('../../middlewares');
const userController = require('../../controllers/user');

const router = express.Router();

router.post(
  '/',
  userValidation.displayName,
  userValidation.password,
  userValidation.email,
  userController.create,
);

router.get(
  '/',
  userValidation.token,
  userController.getAll,
);

router.get(
  '/:id',
  userValidation.token,
  userController.getById,
);

router.delete(
  '/me',
  userValidation.token,
  userController.deleteUser,
);

module.exports = router;