const Posts = require("../models/posts.model");

exports.getAllPosts = (__, res) => {
  Posts.find({}).exec((err, posts) => {
    if (err)
      return res
        .status(400)
        .json({ status: "failed", message: "Fetching posts from db failed" });

    return res.json(posts);
  });
};

exports.getPost = (req, res) => {
  Posts.findOne({ _id: req.params.id }).exec((err, post) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Fetching posts from db failed",
      });

    return res.json(post);
  });
};

exports.createPost = (req, res) => {
  const Post = new Posts();
  const { title, desc, likes, comments, author, category, url } = req.body;

  Post.title = title;
  Post.desc = desc;
  Post.likes = likes;
  Post.author = author;
  Post.comments = comments;
  Post.category = category;
  Post.url = url;

  Post.save((err, post) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Failed to create a post",
      });

    return res.json(post);
  });
};

exports.updatePost = (req, res) => {
  const { title } = req.body;
  Posts.findByIdAndUpdate({ _id: req.params.id }, { title }).exec(
    (err, post) => {
      if (err)
        return res.status(400).json({
          status: "failed",
          message: "Fetching posts from db failed",
        });

      return res.json(post);
    }
  );
};

exports.deletePost = (req, res) => {
  const { id } = req.params;

  Posts.findByIdAndDelete({ _id: id }).exec((err, post) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Deleting the post from db failed",
      });

    return res.json(post);
  });
};

exports.getPostsCount = (req, res) => {
  Posts.aggregate([
    { $match: { author: "Tim" } },
    { $group: { _id: "$author", num_of_posts: { $sum: 1 } } },
  ]).exec((err, result) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Aggregation of posts has failed",
      });

    return res.json(result);
  });
};

// Instead of $sum, you can also use $min, $max, $avg, etc
exports.getLikesCount = (req, res) => {
  Posts.aggregate([
    { $sort: { author: -1 } },
    { $group: { _id: "$author", total_likes: { $sum: "$likes" } } },
    { $limit: 2 },
  ]).exec((err, result) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Aggregation of likes has failed",
      });

    return res.json(result);
  });
};

exports.getUrls = (req, res) => {
  Posts.aggregate([
    { $group: { _id: "$author", urls: { $push: "$url" } } },
  ]).exec((err, result) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Aggregation of likes has failed",
      });

    return res.json(result);
  });
};

exports.getUniqueUrls = (req, res) => {
  Posts.aggregate([
    { $group: { _id: "$author", urls: { $addToSet: "$url" } } },
  ]).exec((err, result) => {
    if (err)
      return res.status(400).json({
        status: "failed",
        message: "Aggregation of likes has failed",
      });

    return res.json(result);
  });
};
