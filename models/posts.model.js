const { Schema, model } = require("mongoose");

const PostsSchema = new Schema({
  title: String,
  desc: String,
  author: String,
  url: String,
  category: String,
  likes: Number,
  date: {
    type: Date,
    default: Date(),
  },
  comments: [
    {
      user: String,
      message: String,
    },
  ],
});

module.exports = model("posts", PostsSchema);
