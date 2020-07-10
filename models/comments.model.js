const { Schema, model } = require("mongoose");

const CommentsSchema = new Schema({
  user: {
    type: String,
    required: [true, "Please provide a title for a post"],
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = model("comments", CommentsSchema);
