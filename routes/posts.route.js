const express = require("express");
const { getAllPosts } = require("../controllers/posts.controller");

const router = express.Router();

// www.myapp.com/api/v1/posts/all-posts
router.get("/all-posts", getAllPosts);

module.exports = router;
