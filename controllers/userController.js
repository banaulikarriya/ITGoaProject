const User = require("../models/User");

/* Get all users */
async function getAllUsers(req, res) {
  try {
    let users = await User.findAll({});
    return res.status(201).json({
      data: users,
      message: "Get all users!",
      status: "OK",
      code: 200
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
      status: "err",
      code: 400
    });
  }
}

/* Get a user */
async function getUserById(req, res) {
  try {
    let user = await User.findOne({
      where: { id: req.params.id },
      attributes: ["id", "username", "email", "updatedAt", "createdAt"]
    });
    return res.status(201).json({
      data: user,
      message: "Get Profile",
      status: "OK",
      code: 200
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
      status: "err",
      code: 400
    });
  }
}

module.exports = {
  getAllUsers,
  getUserById
};
