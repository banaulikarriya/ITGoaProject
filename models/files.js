// The Post model.
const Sequelize = require("sequelize");
const config = require("../config");
const db = require("../database");

var modelDefinition = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  filePath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
};

const FileModel = db.define("Files", modelDefinition);
module.exports = FileModel;
