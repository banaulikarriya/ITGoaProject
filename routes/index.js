const express = require('express');

const passport = require('passport');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');
const auth = require('../authorization');

// user routes
router.get('/profile/:id', auth.authorizeUser, userController.getUserById);
router.put('/profile/:id', auth.authorizeUser, userController.editUser);
router.get('/users',auth.authorizeUser,userController.getAllUsers);
router.post('/login', authController.authenticateUser);
router.post('/signup', authController.signUp);

//post routes
router.post('/addPost', auth.authorizeUser,postController.addPost);
router.get('/getPost', auth.authorizeUser,postController.getAllPost);


module.exports = router;
