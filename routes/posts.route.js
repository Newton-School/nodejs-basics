const express = require("express");
const {
  getAllPosts,
  getPost,
  createPost,
} = require("../controllers/posts.controller");

const router = express.Router();

// www.myapp.com/api/v1/posts/all-posts
router.get("/all-posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/add-post", createPost);

module.exports = router;
