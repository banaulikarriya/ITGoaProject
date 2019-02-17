// example from https://github.com/hisk/james-auth

const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../database');
const User = require('../models/User');

// Register a user.
async function signUp(req, res) {
  let data = req.body;
  try {
    let user_new = await User.create(data);
    return res.status(201).json({
      data: user_new,
      message: "Account created!",
      status: 'OK',
      code: 200,
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
      status: 'err',
      code: 400
    });
  }
}

// Authenticate a user.
async function authenticateUser(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(404).json({
      message: 'username and password are needed!',
      status: 'err',
      code: 400
    });
  } else {
    const username = req.body.username;
    const password = req.body.password;
    const potentialUser = {
      where: {
        username,
      },
    };
    User.findOne(potentialUser).then((user) => {
      if (!user) {
        res.status(404).json({
          message: 'Authentication failed!',
        });
      } else {
        user.comparePasswords(password, (error, isMatch) => {
          if (isMatch && !error) {
            const token = jwt.sign({
              username: user.username,
            },
            config.keys.secret, {
              expiresIn: '300m',
            },
            );
            res.json({
              status: 'OK',
              code: 200,
              token: token,
              data : user
            });
          } else {
            res.status(404).json({
              message: 'Login failed!',
              status: 'err',
              code: 400
            });
          }
        });
      }
    }).catch(() => {
      res.status(500).json({
        message: 'There was an error!',
        status: 'err',
        code: 400
      });
    });
  }
}

module.exports = {
  signUp,
  authenticateUser
};
