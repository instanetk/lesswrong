const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 999,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 255,
  },
  url: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 999,
  },
  published: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Post = mongoose.model('Post', postSchema);

exports.Post = Post;
