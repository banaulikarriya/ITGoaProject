const express = require('express');

const passport = require('passport');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const auth = require('../authorization');

// user routes
router.get('/profile/:id', auth.authorizeUser, userController.getUserById);
router.get('/users',auth.authorizeUser,userController.getAllUsers);
router.post('/login', authController.authenticateUser);
router.post('/signup', authController.signUp);

module.exports = router;
