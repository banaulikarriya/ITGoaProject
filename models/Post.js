// The Post model.
const Sequelize = require('sequelize');

const config = require('../config');
const db = require('../database');

var modelDefinition = {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tags: {
      type: Sequelize.STRING,
      allowNull: true
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    createdAt:{
      type : Sequelize.DATE,
    },
    updatedAt: {
      type : Sequelize.DATE,
    }
};

const PostModel = db.define('Post', modelDefinition);
module.exports = PostModel;
