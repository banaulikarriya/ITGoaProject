// The User model.
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const config = require('../config');
const db = require('../database');

var modelDefinition = {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contact: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    category: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tags: {
      type: Sequelize.STRING,
      allowNull: true
    },
    location:{
      type: Sequelize.STRING,
      allowNull: true                        
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    taluka: {
      type: Sequelize.STRING,
      allowNull: true
    },
    village: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image : {
      type: Sequelize.STRING,
      allowNull: true
    },
    coverPic : {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt:{
      type : Sequelize.DATE,
    },
    updatedAt: {
      type : Sequelize.DATE,
    }
};

const modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords,
  },
  hooks: {
    beforeValidate: hashPassword
  },
};

const UserModel = db.define('User', modelDefinition, modelOptions);

// Compare passwords
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

// Hash the password
function hashPassword(user) {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, 10).then(function (password) {
      user.password = password;
    });
  }
}

module.exports = UserModel;
