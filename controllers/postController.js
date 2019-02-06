const Post = require("../models/Post");

/* Add post */
async function addPost(req, res) {
  let data = req.body;
  try {
    let new_post = await Post.create(data);
    return res.status(201).json({
      data: new_post,
      message: "Post created!",
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

/* Get all post */
async function getAllPost(req, res) {
    try {
      let posts = await Post.findAll({status : 1});
      return res.status(201).json({
        data: posts,
        message: "Get all posts!",
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
  addPost,
  getAllPost
};
