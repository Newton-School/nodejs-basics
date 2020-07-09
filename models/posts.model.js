const { Schema, model } = require("mongoose");

const PostsSchema = new Schema({
  title: String,
  desc: String,
  author: String,
  url: String,
  category: String,
  likes: Number,
  date: Date,
  comments: [Object],
});

module.exports = model("posts", PostsSchema);
