const { Schema, model } = require("mongoose");

const PostsSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please provide a title for a post"],
  },
  desc: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ["language", "api"],
      message: "Unacceptable option",
    },
    required: true,
  },
  likes: {
    type: Number,
    min: [6, "Too few likes"],
    default: 0,
  },
  phone: {
    type: Number,
    validate: {
      validator: function (value) {
        return /\d{10}/.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: true,
  },
  date: {
    type: Date,
    default: Date(),
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});

module.exports = model("posts", PostsSchema);
