"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require('./comment')
// const Asoiaf = require('./asoiaf')

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Comment.sync()
  // also sync any extra models here
  // await Asoiaf.sync()
}

init();

module.exports = {
  User, // export the model
  // also export any extra models here
  Post,
  Comment,
  // Asoiaf
};