const express = require('express');
const { loginValidation } = require('../../middlewares');
const loginController = require('../../controllers/login');

const router = express.Router();

router.post(
  '/',
  loginValidation.password,
  loginValidation.email,
  loginController.login,
);

module.exports = router;