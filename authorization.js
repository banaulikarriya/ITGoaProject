const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("./config");
const User = require("./models/User");

exports.authorizeUser = function(req, res, next) {
  const token = req.query.token;

  if(!token){
    return res.json({
      status: "err",
      code: 400,
      message: "Token Missing"
    });
  }
  let decoded = jwt.verify(token, config.keys.secret);

  if(!decoded){
    return res.json({
      status: "err",
      code: 400,
      message: "Token invalid"
    });
  }
  next();
  // // Fetch the user by id
  // User.findOne({ _username: decoded.username }).then(function(user) {
  //   if (user) {
  //     res.status(200).json({
  //       status: "OK",
  //       code: 200,
  //       data: user
  //     });
  //   } else {
  //     return res.json({
  //       status: "err",
  //       code: 400,
  //       message: "No User Found"
  //     });
  //   }
  // });
};
