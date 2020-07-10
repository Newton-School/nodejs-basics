const express = require("express");
const {
  getAllPosts,
  getPost,
  createPost,
  getPostsCount,
  getLikesCount,
  getUrls,
  getUniqueUrls,
} = require("../controllers/posts.controller");

const router = express.Router();

// www.myapp.com/api/v1/posts/all-posts
router.get("/all-posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/add-post", createPost);

router.put("/update-post/:id", createPost);

router.get("/posts-count-per-author", getPostsCount);

router.get("/likes-count-per-author", getLikesCount);

router.get("/urls-per-author", getUrls);

router.get("/unique-urls-per-author", getUniqueUrls);

module.exports = router;
